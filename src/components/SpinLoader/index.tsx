import clsx from "clsx";

type SpinLoaderProps = {
    containerClasses: string;
};

export function SpinLoader({ containerClasses = '' }: SpinLoaderProps) {
    const classes = clsx(
        'flex',
        'justify-center',
        'items-center',
        containerClasses
    );

  return (
    <div className={classes}>
        <div className={clsx(
            'animate-spin',
            'rounded-full',
            'h-10',
            'w-10',
            'border-b-2',
            'border-blue-500'
        )}></div>
    </div>
  );
}