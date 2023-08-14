import { StaticImageData } from 'next/image';
import { MouseEventHandler } from 'react';

export interface ICustomButtonProps {
  title: string;
  disabled?: boolean;
  type?: 'button' | 'submit';
  containerStyles?: string;
  textStyles?: string;
  rightIcon?: StaticImageData | string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export interface ICustomFilterProps {
  title: 'fuel' | 'year';
  options: {
    title: string;
    value: string;
  }[];
}

export interface ISearchManufacturerProps {
  manufacturer: string;
  setManufacturer: React.Dispatch<React.SetStateAction<string>>;
}

export interface ICarsApiDTO {
  city_mpg: number;
  class: string;
  combination_mpg: number;
  cylinders: number;
  displacement: number;
  drive: string;
  fuel_type: string;
  highway_mpg: number;
  make: string;
  model: string;
  transmission: string;
  year: number;
}
