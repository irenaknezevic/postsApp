import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostDTO } from '../../core/models/data-transfer-object/postDTO';
import { Post } from '../../core/models/domain-models/post';
import { PostService } from '../../core/services/post.service';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss']
})
export class PostsListComponent implements OnInit {
  public posts: Post[] = [];

  constructor(
    private postSvc: PostService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.posts = this.postSvc.getPosts();
    console.log('this.posts: ', this.posts);
  }

}
