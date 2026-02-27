import { revalidateExampleAction } from '@/src/actions/revalidate-example';
import { formatHourCached } from '@/src/utils/format-datetime';

export default async function ExemploDynamicPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const hour = await formatHourCached();

  return (
    <main className='min-h-150 text-4xl font-bold'>
      <div>
        Hora: {hour} | (ID: {id})
      </div>

      <form className='py-16' action={revalidateExampleAction}>
        <input type='hidden' name='path' defaultValue={`/exemplo/${id}`} />

        <button
          className='bg-amber-500 text-white p-2 rounded hover:bg-amber-600 transition cursor-pointer'
          type='submit'
        >
          REVALIDATE
        </button>
      </form>
    </main>
  );
}