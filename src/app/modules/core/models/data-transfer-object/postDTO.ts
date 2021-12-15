import { CommentDTO } from "./commentDTO";
import { UserDTO } from "./userDTO";

export interface PostDTO {
    userId: number,
    id: number,
    title: string,
    body: string
}