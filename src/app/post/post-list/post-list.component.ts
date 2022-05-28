import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { Pagination } from '../../shared/dtos/pagination';
import { Post } from '../dtos/Post';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  listPostPagination : Pagination<Post> | null;

  constructor(
    private postService: PostService,
  ) {
    this.listPostPagination = null;

    this.postService.getPosts().subscribe(res => {
      this.listPostPagination = res;
    });

  }

  ngOnInit(): void {
  }

  create(): void {

  }

}
