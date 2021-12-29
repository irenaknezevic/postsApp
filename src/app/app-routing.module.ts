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
    resolve: [ PostsResolverService ]
  },
  {
    path: 'post',
    redirectTo: '/posts',
    pathMatch: 'full'
  },
  {
    path: 'post/:id',
    component: PostComponent
  },
  {
    path: '**',
    component: PostsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
