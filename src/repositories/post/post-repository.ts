import { PostModel } from "@/src/models/post/post-model";

export interface PostRepository {
    findAll(): Promise<PostModel[]>; 
    findById(id: string): Promise<PostModel>;
}