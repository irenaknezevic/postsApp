import { Pipe, PipeTransform } from "@angular/core";
import { Post } from "../models/domain-models/post";

@Pipe({ name: 'postFilter' })
export class FilterPipe implements PipeTransform {
    transform( posts: Post[], searchText: string ): any[] {
        if ( !posts ) {
          return [];
        }
        
        if ( !searchText || searchText == '' ) {
          return posts;
        }

        searchText = searchText.toString().toLocaleLowerCase();
    
        return posts.filter( post => {          
          return post._user?.name.toString().toLocaleLowerCase().includes(searchText);
        } );
    }
}