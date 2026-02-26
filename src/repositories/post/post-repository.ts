import { PostModel } from "@/src/models/post/post-model";

export interface PostRepository {
    findById(id: string): Promise<PostModel>;
    findAllPublic(): Promise<PostModel[]>;
    findAll(): Promise<PostModel[]>;
    findBySlugPublic(slug: string): Promise<PostModel>;
}