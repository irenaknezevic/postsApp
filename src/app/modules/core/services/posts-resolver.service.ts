import { Injectable } from "@angular/core";
import { PostDTO } from "../models/data-transfer-object/postDTO";
import { DataStorageService } from "./data-storage.service";
import { PostService } from "./post.service";

@Injectable({
    providedIn: 'root',
})
export class PostsResolverService {
    public posts = new Array<PostDTO>();
    constructor(
        private dataStorageSvc: DataStorageService,
        private postSvc: PostService
    ) {}

    public resolve() {
        const posts = this.postSvc.getPosts();
        if( posts.length > 0 ) {
            return posts;
        } else {
            return this.dataStorageSvc.fetchPosts();
        }
    }
}