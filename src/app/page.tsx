import { clsx } from 'clsx';
import { SpinLoader } from '../components/SpinLoader';

export default async function HomePage() {
  console.log('HomePage');

  return (
    <div className='flex'>
      <SpinLoader containerClasses={clsx('min-h-[500px]')} />
    </div>
  );
}