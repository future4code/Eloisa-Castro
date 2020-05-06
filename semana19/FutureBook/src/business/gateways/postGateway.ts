import { Post, PostType } from "../entities/post";

export interface PostGateway {
  createPost(post: Post): Promise<void>,
  getAllPosts(userId: string, limit: number, offset: number): Promise<Post[]>,
  getPostsByType(userId: string, type: PostType, limit: number, offset: number): Promise<Post[]>
}