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
import { SearchComponent } from './modules/shared/components/search/search.component';
import { FilterPipe } from './modules/core/pipes/filter.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PostsComponent,
    PostComponent,
    PostsListComponent,
    PostListItemComponent,
    CommentComponent,
    SearchComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ PostService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
