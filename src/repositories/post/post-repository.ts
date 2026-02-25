import { PostModel } from "@/src/models/post/post-model";

export interface PostRepository {
    findById(id: string): Promise<PostModel>;
    findAllPublic(): Promise<PostModel[]>;
    findBySlug(slug: string): Promise<PostModel>;
}