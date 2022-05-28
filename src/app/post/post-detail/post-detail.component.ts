import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from '../dtos/Post';
import { PostService } from '../services/post.service';
import { AuthService } from '../../auth/services/auth.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {

  post: Post | null;

  constructor(
    private route: ActivatedRoute,
    private postService: PostService,
    private authService: AuthService,
  ) {
    this.post = null;

    const id = this.route.snapshot.params.id;
    this.postService.getPost(id).subscribe(res => {
      this.post = res;
    });
  }

  ngOnInit(): void {
  }

  get isMyPost() : boolean {

    if(
      !this.authService.isUserLoggedIn()
      || !this.post
    ) {
      return false;
    }

    const user = this.authService.getUser()!;

    return this.post.user.id === user.id;
  }

}
