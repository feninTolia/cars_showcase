'use client';
import { ICarsApiDTO } from '@/types';
import { calculateCarRent, generateCarImageUrl } from '@/utils';
import Image from 'next/image';
import React, { useState } from 'react';
import CustomButton from './CustomButton';
import CarDetails from './CarDetails';

interface IProps {
  car: ICarsApiDTO;
}

const CarCard = ({ car }: IProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const { city_mpg, year, make, model, transmission, drive } = car;
  const carRent = calculateCarRent({ city_mpg, year });
  const mpgToLkmConverted = (235.21 / city_mpg).toFixed(1);

  return (
    <div className=" car-card group">
      <div className=" car-card__content">
        <h2 className="car-card__content-title ">
          {make} {model}
        </h2>
      </div>

      <p className=" flex mt-6 text-[32px] font-extrabold">
        <span className=" self-start text-[14px] font-semibold">$</span>
        {carRent}
        <span className=" self-end text-[14px] font-medium">/day</span>
      </p>

      <div className=" relative w-full h-40 my-3 object-contain">
        <Image
          src={generateCarImageUrl({ car })}
          alt={`${make} ${model}`}
          priority
          fill
          className=" object-contain"
        />
      </div>

      <div className=" relative flex w-full mt-2">
        <div className="flex  group-hover:invisible w-full justify-between text-gray-900">
          <div className="flex flex-col justify-center items-center gap-2">
            <Image
              src="/steering-wheel.svg"
              alt="steering wheel "
              width={20}
              height={20}
            />
            <p className="text-[14px]">
              {transmission === 'a' ? 'Automatic' : 'Manual'}
            </p>
          </div>

          <div className="flex flex-col justify-center items-center gap-2">
            <Image src="/tire.svg" alt="tire" width={20} height={20} />
            <p className="text-[14px]">{drive?.toUpperCase()}</p>
          </div>

          <div className="flex flex-col justify-center items-center gap-2">
            <Image
              src="/gas.svg"
              alt="steering wheel "
              width={20}
              height={20}
            />
            <p className="text-[14px]">{mpgToLkmConverted} L</p>
          </div>
        </div>

        <div className="car-card__btn-container ">
          <CustomButton
            onClick={() => setIsOpen(true)}
            title="View More"
            containerStyles="w-full py-[16px] rounded-full bg-primary-blue"
            textStyles=" text-white text-[14px] leading-[17px] font-bold"
            rightIcon="/right-arrow.svg"
          />
        </div>
      </div>

      <CarDetails
        isOpen={isOpen}
        closeModal={() => setIsOpen(false)}
        car={car}
      />
    </div>
  );
};

export default CarCard;
