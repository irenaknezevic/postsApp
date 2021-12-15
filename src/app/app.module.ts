import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './modules/shared/components/header/header.component';
import { PostsComponent } from './modules/posts/posts.component';
import { PostComponent } from './modules/post/post.component';
import { PostsListComponent } from './modules/posts/posts-list/posts-list.component';
import { HttpClientModule } from '@angular/common/http';
import { PostService } from './modules/core/services/post.service';
import { PostListItemComponent } from './modules/posts/posts-list/post-list-item/post-list-item.component';
import { CommentComponent } from './modules/shared/components/comment/comment.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PostsComponent,
    PostComponent,
    PostsListComponent,
    PostListItemComponent,
    CommentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ PostService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
