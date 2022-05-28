import { Component } from '@angular/core';
import { PostService } from '../services/post.service';
import { Pagination } from '../../shared/dtos/pagination';
import { Post } from '../dtos/Post';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent {

  listPostPagination : Pagination<Post> | null;

  constructor(
    private postService: PostService,
  ) {
    this.listPostPagination = null;
    this.getPage(1);
  }

  getPage(page: number) {
    this.postService.getPosts(page).subscribe(res => {
      this.listPostPagination = res;
    });
  }

}
