import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsResolverService } from './modules/core/services/posts-resolver.service';
import { PostComponent } from './modules/post/post.component';
import { PostsComponent } from './modules/posts/posts.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/posts',
    pathMatch: 'full'
  },
  {
    path: 'posts',
    component: PostsComponent,
    resolve: [ PostsResolverService ],
    children: [
      {
        path: 'post/{id}',
        component: PostComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
