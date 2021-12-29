import { Component, Input, OnInit } from '@angular/core';
import { Post } from 'src/app/modules/core/models/domain-models/post';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {
  @Input()
  post!: Post;

  constructor() { }

  ngOnInit(): void { }

  public showComments() {
    if( this.post._collapsedComments ) {
      this.post._collapsedComments = false; 
    } else {
      this.post._collapsedComments = true; 
    }
  }

}
