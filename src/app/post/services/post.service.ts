import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pagination } from '../../shared/dtos/pagination';
import { Post } from '../dtos/Post';
import { Observable } from 'rxjs';
import { Category } from '../dtos/Category';
import { User } from '../../auth/services/user';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(
    private http: HttpClient,
  ) { }

  getPosts(page: number = 1) : Observable<Pagination<Post>> {
    return this.http.get<Pagination<Post>>('/posts', {params: {page}});
  }

  getPost(id: number): Observable<Post> {
    return this.http.get<Post>(`/posts/${id}`);
  }

  createPost(content: Pick<Post, 'title' | 'description' | 'category_id'>): Observable<Post> {
    return this.http.post<Post>('/posts', content);
  }

  updatePost(id: number, content: Partial<Pick<Post, 'title' | 'description' | 'category_id'>>) {
    return this.http.put<Post>(`/posts/${id}`, content);
  }

  deletePost(id: number) : Observable<Post> {
    return this.http.delete<Post>(`/posts/${id}`);
  }

}
