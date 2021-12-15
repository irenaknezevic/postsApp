import { CommentDTO } from "../data-transfer-object/commentDTO";

export class Comment {
    constructor(
        public postId?: number,
        public id?: number,
        public name?: string,
        public email?: string,
        public body?: string
    ) {}

    static adapt( data: CommentDTO): Comment {
        return new Comment(
            data.postId,
            data.id,
            data.name,
            data.email,
            data.body
        )
    }
}