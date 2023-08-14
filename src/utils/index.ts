import { ICarsApiDTO } from '@/types';

interface IFetchCarsArgs {
  manufacturer?: string;
  year?: string;
  fuel?: string;
  limit?: string;
  model?: string;
}

export const fetchCars = async ({
  manufacturer = '',
  year = '',
  fuel = 'gas',
  limit = '10',
  model = '',
}: IFetchCarsArgs) => {
  const headers = {
    'X-RapidAPI-Key': '870cf5d71emsh49d86e0c9edb0bap10500fjsn4a92a73f6ee2',
    'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com',
  };

  try {
    const response = await fetch(
      `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=${model}&year=${year}&limit=${limit}&make=${manufacturer}&fuel_type=${fuel}`,
      { headers: headers }
    );
    const result = (await response.json()) as Promise<
      ICarsApiDTO[] | { error: any }
    >;
    return result;
  } catch (error) {
    console.error(error);
  }
};

export const generateCarImageUrl = ({
  car,
  angle,
}: {
  car: ICarsApiDTO;
  angle?: string;
}) => {
  const url = new URL('https://cdn.imagin.studio/getimage');

  const { make, year, model } = car;

  url.searchParams.append('customer', 'hrjavascript-mastery');
  url.searchParams.append('make', make);
  url.searchParams.append('modelFamily', model.split(' ')[0]);
  url.searchParams.append('zoomType', 'fullscreen');
  url.searchParams.append('modelYear', year.toString());
  url.searchParams.append('angle', `${angle}`);

  return `${url}`;
};

export const calculateCarRent = ({
  city_mpg,
  year,
}: {
  city_mpg: number;
  year: number;
}) => {
  const basePricePerDay = 50;
  const mileageFactor = 0.1;
  const ageFactor = 0.05;

  const mileageRate = city_mpg * mileageFactor;
  const ageRate = (new Date().getFullYear() - year) * ageFactor;

  const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

  return rentalRatePerDay.toFixed(0);
};

export const updateSearchParams = ({
  value,
  type,
}: {
  type: string;
  value: string;
}) => {
  const searchParams = new URLSearchParams(window.location.search);

  if (value) {
    searchParams.set(type, value);
  } else {
    searchParams.delete(type);
  }

  const newPathName = `${window.location.pathname}?${searchParams.toString()}`;

  return newPathName;
};
