import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PostService } from '../services/post.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from '../dtos/Category';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-post-editor',
  templateUrl: './post-editor.component.html',
  styleUrls: ['./post-editor.component.css']
})
export class PostEditorComponent {

  form: FormGroup;
  isEditing = false;
  categories: Category[];
  submitted = false;

  constructor(
    private fb: FormBuilder,
    private postService: PostService,
    private categoryService: CategoryService,
    private route: ActivatedRoute,
    private router: Router,
  ) {

    this.categories = [];
    this.isEditing = this.route.snapshot.data.isEditing;


    this.categoryService.getCategories().subscribe(categories => {
      this.categories = categories;
    });

    this.form = this.fb.group({
      title: [null, [Validators.required]],
      description: [null, [Validators.required]],
      category_id: [null, [Validators.required]],
    });

    if (this.isEditing) {

      const id = this.route.snapshot.params.id;

      this.postService.getPost(id).subscribe(post => {
        this.form = this.fb.group({
          title: [post.title, [Validators.required]],
          description: [post.description, [Validators.required]],
          category_id: [post.category_id, [Validators.required]],
        });
      });

      return;
    }


  }

  save() {
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }

    const content = this.form.value;

    if (this.isEditing) {
      const id = this.route.snapshot.params.id;
      this.postService.updatePost(id, content).subscribe(post => {
        console.log(post);
        this.router.navigate(['posts', post.id])
      });
    } else {
      this.postService.createPost(content).subscribe(post => {
        console.log(post);
        this.router.navigate(['posts', post.id])
      });
    }

  }

}
