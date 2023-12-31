'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import CustomButton from './CustomButton';
import { updateSearchParams } from '@/utils';

interface IProps {
  pageNumber: number;
  isNext: boolean;
}

const ShowMore = ({ pageNumber, isNext }: IProps) => {
  const router = useRouter();

  const handleNavigation = () => {
    const newLimit = (pageNumber + 1) * 10;
    const newPathName = updateSearchParams({
      type: 'limit',
      value: newLimit.toString(),
    });
    router.push(newPathName);
  };

  return (
    <div className="w-full flex-center gap-5 mt-10">
      {!isNext && (
        <CustomButton
          title="Show More"
          type="button"
          containerStyles=" bg-primary-blue rounded-full text-white"
          onClick={handleNavigation}
        />
      )}
    </div>
  );
};

export default ShowMore;
