import React, { useState } from 'react';
import { IconContext } from 'react-icons';
import { IoCloseCircle } from 'react-icons/io5';
import { useDispatch, useSelector } from 'react-redux';
import { isCreateProductButtonCloseOnClickActionCreator } from '../states/isCreateProductButtonCloseOnClick/action';

const CreateProductInput = () => {
  const { isCreateProductButtonCloseOnClick = true } = useSelector(
    (states) => states
  );
  const dispatch = useDispatch();

  const createProductData = {
    title: 'Title',
    imageUrl: 'Image URL',
    country: 'Country',
    province: 'Province',
    city: 'City',
    address: 'Address',
    price: 'Price',
    capacity: 'Capacity',
    startAt: 'Start at',
    description: 'Description',
  };

  const [createProductInput, setCreateProductInput] = useState({
    title: '',
    imageUrl: '',
    country: '',
    province: '',
    city: '',
    address: '',
    price: '',
    capacity: '',
    startAt: '',
    description: '',
  });

  const createProductInputHandler = (key, value) => {
    setCreateProductInput({ ...createProductInput, [key]: value });
  };

  return (
    <div
      className={
        'fixed z-50 top-0 left-0 w-full h-full backdrop-blur-sm grid justify-center content-center' +
        (isCreateProductButtonCloseOnClick ? ' hidden' : ' block')
      }
    >
      <div className='relative w-[80vw] md:w-[60vw] max-h-[90vh] p-[5vw] bg-slate-200/90 rounded-lg overflow-auto grid grid-cols-1 gap-[0.5vw]'>
        <IconContext.Provider value={{ color: 'grey', size: '8%' }}>
          <IoCloseCircle
            onClick={() =>
              dispatch(isCreateProductButtonCloseOnClickActionCreator())
            }
            className='absolute top-[0.5%] right-[0.5%] cursor-pointer'
          />
        </IconContext.Provider>
        <p className='text-slate-800 text-center font-bold text-[5vw] md:text-[2em] pb-[4vw] md:pb-[2rem]'>
          Buat Event
        </p>
        {Object.entries(createProductData).map(([key, value]) => {
          if (key === 'startAt') {
            return (
              <div className='flex'>
                <div className='bg-white text-slate-700 font-medium rounded-l-full py-[0.5vw] md:py-[0.5rem] px-[4vw] md:px-[2rem] text-[2.5vw] md:text-[1em]'>
                  {value} :
                </div>
                <input
                  value={createProductInput[key]}
                  onChange={({ target }) =>
                    createProductInputHandler(key, target.value)
                  }
                  type='datetime-local'
                  // min='2018-06-07T00:00'
                  // max='2018-06-14T00:00'
                  className='flex-1 text-slate-700 font-medium rounded-r-full py-[0.5vw] md:py-[0.5rem] px-[4vw] md:px-[2rem] text-[2.5vw] md:text-[1em]'
                />
              </div>
            );
          } else if (key === 'description') {
            return (
              <textarea
                value={createProductInput[key]}
                onChange={({ target }) =>
                  createProductInputHandler(key, target.value)
                }
                placeholder={value}
                className='h-[10rem] text-slate-700 font-medium rounded-xl py-[0.5vw] md:py-[0.5rem] px-[4vw] md:px-[2rem] text-[2.5vw] md:text-[1em]'
              />
            );
          } else if (key === 'capacity') {
            return (
              <input
                value={createProductInput[key]}
                onChange={({ target }) =>
                  createProductInputHandler(key, target.value)
                }
                placeholder={value}
                type='number'
                min='0'
                max='100000'
                className='text-slate-700 font-medium rounded-full py-[0.5vw] md:py-[0.5rem] px-[4vw] md:px-[2rem] text-[2.5vw] md:text-[1em]'
              />
            );
          }

          return (
            <input
              value={createProductInput[key]}
              onChange={({ target }) =>
                createProductInputHandler(key, target.value)
              }
              placeholder={value}
              type='text'
              className='text-slate-700 font-medium rounded-full py-[0.5vw] md:py-[0.5rem] px-[4vw] md:px-[2rem] text-[2.5vw] md:text-[1em]'
            />
          );
        })}
        <button className='text-white bg-[#24BAEF] font-medium rounded-full mt-[4vw] md:mt-[2rem] py-[0.5vw] md:py-[0.5rem] px-[4vw] md:px-[2rem] text-[2.5vw] md:text-[1em]'>
          Submit
        </button>
      </div>
    </div>
  );
};

export default CreateProductInput;
