'use server';

import { makePartialPublicPost, PublicPost } from '@/src/dto/post/dto';
import { PostCreateSchema } from '@/src/lib/post/validations';
import { PostModel } from '@/src/models/post/post-model';
import { getZodErrorMessages } from '@/src/utils/get-zod-error-messages';

type CreatePostActionState = {
  formState: PublicPost;
  errors: string[];
};

export async function createPostAction(
  prevState: CreatePostActionState,
  formData: FormData,
): Promise<CreatePostActionState> {
  // TODO: verificar se o usuário tá logado

  if (!(formData instanceof FormData)) {
    return {
      formState: prevState.formState,
      errors: ['Dados inválidos'],
    };
  }

  const formDataToObj = Object.fromEntries(formData.entries());
  const zodParsedObj = PostCreateSchema.safeParse(formDataToObj);

  if (!zodParsedObj.success) {
    const errors = getZodErrorMessages(zodParsedObj.error.format());
    return {
      errors,
      formState: makePartialPublicPost(formDataToObj),
    };
  }

  const validPostData = zodParsedObj.data;
  const newPost: PostModel = {
    ...validPostData,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    id: Date.now().toString(),
    slug: Math.random().toString(36),
  };

  return {
    formState: newPost,
    errors: [],
  };
}