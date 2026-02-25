import { Metadata } from 'next';
import { Suspense } from 'react';
import { SinglePost } from '@/src/components/SinglePost';
import { SpinLoader } from '@/src/components/SpinLoader';
import {
  findAllPublicPostsCached,
  findPostBySlugCached,
} from '@/src/lib/post/queries';

type PostSlugPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: PostSlugPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await findPostBySlugCached(slug);

  return {
    title: post.title,
    description: post.excerpt,
  };
}

export async function generateStaticParams() {
  const posts = await findAllPublicPostsCached();
  const params = posts.map(post => {
    return {
      slug: post.slug,
    };
  });

  console.log(params);

  return params;
}

export default async function PostSlugPage({ params }: PostSlugPageProps) {
  const { slug } = await params;

  return (
    <Suspense fallback={<SpinLoader className='min-h-20 mb-16' />}>
      <SinglePost slug={slug} />
    </Suspense>
  );
}