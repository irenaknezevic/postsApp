import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/modules/core/services/post.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  public searchText = '';

  constructor(
    private postSvc: PostService
  ) { }

  ngOnInit(): void {
  }

  public onSearchChange(event: any) {
    this.postSvc.searchText.next( event.value );
  }
}
