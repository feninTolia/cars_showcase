'use client';
import CustomButton from '@/components/CustomButton';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const router = useRouter();
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className=" pt-32 flexCenter flex-col my-8 gap-4">
      <h2 className="font-medium text-2xl p-4">Something went wrong!</h2>
      <CustomButton
        title="Try again"
        onClick={reset}
        textStyles=" text-primary-blue"
      />

      <CustomButton
        title="Go Home"
        onClick={() => {
          router.replace('/');
        }}
        textStyles=" text-primary-blue"
      />
    </div>
  );
}
