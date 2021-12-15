import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, tap } from "rxjs";
import { CommentDTO } from "../models/data-transfer-object/commentDTO";
import { PostDTO } from "../models/data-transfer-object/postDTO";
import { UserDTO } from "../models/data-transfer-object/userDTO";
import { Comment } from "../models/domain-models/comment";
import { Post } from "../models/domain-models/post";
import { User } from "../models/domain-models/user";
import { PostService } from "./post.service";

@Injectable({
    providedIn: 'root',
})
export class DataStorageService {
    private baseURL = 'https://jsonplaceholder.typicode.com';
    private postsArray = new Array<Post>(); 

    constructor(
        private http: HttpClient,
        private postSvc: PostService
    ) {}

    public fetchPosts() {
        return this.http.get<Array<PostDTO>>( `${this.baseURL}/posts` ).pipe( 
            map( ( posts ) => {
            return posts.map( ( post ) => {
                return post;
            } )
        }  ), 
        tap( ( posts: Array<PostDTO> ) => {
            posts.forEach( post => {
                let adaptPost = Post.adapt( post );

                this.setPostComments( adaptPost );
                this.setPostUser( adaptPost );

                adaptPost._collapse = true;

                this.postsArray.push( adaptPost );
            });
            this.postSvc.setPosts( this.postsArray );
        } ) );
    }

    public fetchPost( postId: number ) {
        return this.http.get<PostDTO>( `${this.baseURL}/posts/${postId}` );
    }

    public fetchUsers( userId: number) {
        return this.http.get<UserDTO>(  `${this.baseURL}/users/${userId}` );
    }

    public fetchComments( postId: number ) {
        return this.http.get<Array<CommentDTO>>( `${this.baseURL}/posts/${postId}/comments` );
    }

    private setPostComments( post: Post ) {
        this.fetchComments( post.id ).subscribe( ( comments ) => {
            let postComments = new Array<Comment>();
            comments.forEach( comment => {
                postComments.push( Comment.adapt( comment ) );
            })
            post._comments = postComments.map( comment => {
                return comment;
            } ) 
        } )
    }

    private setPostUser( post: Post ) {
        this.fetchUsers( post.userId ).subscribe( user => {
            post._user = User.adapt( user );
        } )
    }
}       