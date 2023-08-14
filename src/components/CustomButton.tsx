'use client';
import { ICustomButtonProps } from '@/types';
import Image from 'next/image';
import React from 'react';

const CustomButton = ({
  title,
  disabled = false,
  containerStyles,
  textStyles,
  rightIcon,
  type = 'button',
  onClick,
}: ICustomButtonProps) => {
  return (
    <button
      disabled={disabled}
      type={type}
      className={`custom-btn ${containerStyles}`}
      onClick={onClick}
    >
      <span className={`flex-1 ${textStyles}`}>{title}</span>
      {rightIcon && (
        <div className=" relative w-6 h-6">
          <Image
            src={rightIcon}
            alt="right icon"
            fill
            className=" object-contain"
          />
        </div>
      )}
    </button>
  );
};

export default CustomButton;
