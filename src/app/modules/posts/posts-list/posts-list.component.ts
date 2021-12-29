import { Component, OnInit } from '@angular/core';
import { Post } from '../../core/models/domain-models/post';
import { PostService } from '../../core/services/post.service';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss']
})
export class PostsListComponent implements OnInit {
  public posts: Post[] = [];
  public filterText: string = ''; 
  
  constructor(
    private postSvc: PostService
  ) { }

  ngOnInit(): void {
    this.posts = this.postSvc.getPosts();

    this.postSvc.searchText.subscribe( value => {
      this.filterText = value;
    } )
  }

}
