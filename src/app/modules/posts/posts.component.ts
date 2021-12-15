import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  public postsTitle = 'Posts';

  constructor() { }

  ngOnInit(): void {
  }

  public search( event: Event ) {
    console.log('event: ', event.target);

  }

}
