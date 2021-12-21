import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { PostDTO } from "../models/data-transfer-object/postDTO";
import { Post } from "../models/domain-models/post";

@Injectable()
export class PostService {
    private posts: Post[] = [];

    constructor() {}

    public setPosts( posts: Post[] ) {
        this.posts = posts;
    }

    public getPosts() {
        return this.posts.slice();
    }
    
    public getPostById( postId: number ) {
        let post = this.posts.find( post => post.id === postId )
        return post;
    }
}