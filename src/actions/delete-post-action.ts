'use server';

import { drizzleDb } from '@/src/db/drizzle';
import { postsTable } from '@/src/db/drizzle/schemas';
import { postRepository } from '@/src/repositories/post';
import { asyncDelay } from '@/src/utils/async-delay';
import { logColor } from '@/src/utils/log-color';
import { eq } from 'drizzle-orm';
import { revalidateTag } from 'next/cache';

export async function deletePostAction(id: string) {
  // TODO: checar login do usuário

  // TODO: remover linhas abaixo
  await asyncDelay(2000);
  logColor('' + id);

  if (!id || typeof id !== 'string') {
    return {
      error: 'Dados inválidos',
    };
  }

  const post = await postRepository.findById(id).catch(() => undefined);

  if (!post) {
    return {
      error: 'Post não existe',
    };
  }

  // TODO: mover este método para o repositório
  await drizzleDb.delete(postsTable).where(eq(postsTable.id, id));

  // TODO: revalidateTag ou revalidatePath
  revalidateTag('posts');
  revalidateTag(`post-${post.slug}`);

  return {
    error: '',
  };
}