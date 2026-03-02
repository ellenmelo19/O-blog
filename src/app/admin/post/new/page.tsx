import { ManagePostForm } from "@/src/components/ManagePostForm";

export const dynamic = 'force-dynamic';

export default async function AdminPostNewPage() {
  return (
    <>
      <h1>Criar post</h1>
      <ManagePostForm />
    </>
  );
}