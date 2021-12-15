import { PostDTO } from "../data-transfer-object/postDTO";
import { UserDTO } from "../data-transfer-object/userDTO";
import { Comment } from "./comment";
import { User } from "./user";

export class Post {
    constructor(
        public userId: number,
        public id: number,
        public title: string,
        public body: string,

        public _collapse?: boolean,
        public _user?: User,
        public _comments?: Comment[]
    ) { }

    static adapt( data: PostDTO ): Post {
        return new Post(
            data.userId,
            data.id,
            data.title,
            data.body
        )
    }
}