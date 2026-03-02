'use server';

import { logColor } from '@/src/utils/log-color';

export async function uploadImageAction() {
  logColor('Olá da action uploadImageAction');

  return {
    user: 'SENHA DO USUARIO',
  };
}