import { postRepository } from "@/src/repositories/post";
import { cache } from 'react';

export const findAllPublicPosts = cache(
  async () => await postRepository.findAllPublic(),
);