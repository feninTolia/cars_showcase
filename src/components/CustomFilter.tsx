'use client';
import { ICustomFilterProps } from '@/types';
import React, { Fragment, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Listbox, Transition } from '@headlessui/react';
import Image from 'next/image';
import { updateSearchParams } from '@/utils';

const CustomFilter = ({ title, options }: ICustomFilterProps) => {
  const [selected, setSelected] = useState(options[0]);
  const router = useRouter();

  const handleUpdateParams = ({
    type,
    value,
  }: {
    type: string;
    value: string;
  }) => {
    const newPathName = updateSearchParams({ value, type });
    router.push(newPathName);
  };

  return (
    <div className=" w-fit">
      <Listbox
        onChange={(e) => {
          setSelected(e);
          handleUpdateParams({
            type: title,
            value: e.value.toLocaleLowerCase(),
          });
        }}
        value={selected}
      >
        <div className="relative w-fit z-10">
          <Listbox.Button className=" custom-filter__btn ">
            <span className="block truncate">{selected.title}</span>
            <Image
              src="/chevron-up-down.svg"
              width={20}
              height={20}
              className=" ml-4 object-contain"
              alt="chevron up down"
            />
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            enter="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            enterFrom="opacity-0 "
            enterTo="opacity-100 "
          >
            <Listbox.Options className="custom-filter__options ">
              {options.map((item) => (
                <Listbox.Option
                  key={item.title}
                  value={item}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 px-4 ${
                      active ? 'bg-primary-blue text-white' : 'text-gray-900'
                    }`
                  }
                >
                  {({ selected, active }) => (
                    <span
                      className={`block truncate ${
                        selected ? 'font-medium' : 'font-normal'
                      }`}
                    >
                      {item.title}
                    </span>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
};

export default CustomFilter;
