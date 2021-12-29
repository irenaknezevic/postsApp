import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from '../core/models/domain-models/post';
import { PostService } from '../core/services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  public post: Post | undefined;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private postSvc: PostService
  ) { }

  ngOnInit() {
    const postId = +this._route.snapshot.params['id'];
    this.post = this.postSvc.getPostById( postId );
    
    if( !this.post ) {
      this._router.navigate( ['/posts'] );
    }
  }

  public showComments() {
    if( this.post ) {
      if( this.post?._collapsedComments ) {
        this.post._collapsedComments = false; 
      } else {
        this.post._collapsedComments = true; 
      }
    }    
  }

}
