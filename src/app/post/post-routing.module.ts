import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostComponent } from './post.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostEditorComponent } from './post-editor/post-editor.component';
import { PostDetailComponent } from './post-detail/post-detail.component';

const routes: Routes = [
  {
    path: '',
    component: PostComponent,
    children: [
      {
        path: '',
        component: PostListComponent,
      },
      {
        path: 'create',
        component: PostEditorComponent,
        data: {
          isEditing: false,
        }
      },
      {
        path: ':id',
        component: PostDetailComponent,
      },
      {
        path: ':id/edit',
        component: PostEditorComponent,
        data: {
          isEditing: true,
        }
      },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostRoutingModule { }
