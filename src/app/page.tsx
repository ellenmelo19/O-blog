import { PostFeatured } from '../components/PostFeatured';
import { PostsList } from '../components/PostsList';
import { SpinLoader } from '../components/SpinLoader';
import { Suspense } from 'react';
import { ServerComponent } from '@/src/components/ServerComponent';
import { ClientComponent } from '@/src/components/ClientComponent';

export default async function HomePage() {
  return (
    <>

      <ClientComponent>
        <ServerComponent />
      </ClientComponent>

      <Suspense fallback={<SpinLoader className='min-h-20 mb-16' />}>
        <PostFeatured />
        <PostsList />
      </Suspense>
    </>
  );
}