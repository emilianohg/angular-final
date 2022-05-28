import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostRoutingModule } from './post-routing.module';
import { PostComponent } from './post.component';
import { SharedModule } from '../shared/shared.module';
import { PostListComponent } from './post-list/post-list.component';
import { PostEditorComponent } from './post-editor/post-editor.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PostComponent,
    PostListComponent,
    PostEditorComponent,
    PostDetailComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    PostRoutingModule,
    ReactiveFormsModule
  ]
})
export class PostModule { }
