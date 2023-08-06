import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { IconContext } from 'react-icons';
import { RxHamburgerMenu } from 'react-icons/rx';
import { FaUserCircle } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { isCreateEventButtonCloseOnClickActionCreator } from '../states/isCreateEventButtonCloseOnClick/action';

const Navbar = (onClickButtonClose) => {
  const { isCreateEventButtonCloseOnClick = false } = useSelector(
    (states) => states
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isHumbergerMenuOnClick, setIsHumbergerMenuOnClick] = useState(false);

  return (
    <div className='navbar-container w-[100%] px-[5%]'>
      <div className='navbar-logo p-[3vw] md:p-[0.2rem]'>
        <img
          onClick={() => navigate('/dashboard')}
          className='w-full h-full'
          src='https://comika.id/wp-content/uploads/2021/02/cropped-Logo_Comika-1.png'
          alt=''
        />
      </div>
      <IconContext.Provider value={{ color: '#24BAEF', size: '50%' }}>
        <FaUserCircle
          className='cursor-pointer'
          onClick={() => navigate('/login')}
        />
      </IconContext.Provider>
      <IconContext.Provider value={{ color: '#86878B', size: '7vw' }}>
        <RxHamburgerMenu
          className='cursor-pointer md:hidden'
          onClick={() => setIsHumbergerMenuOnClick(!isHumbergerMenuOnClick)}
        />
      </IconContext.Provider>
      <div
        className={
          'navbar-submenu' +
          (isHumbergerMenuOnClick ? ' grid gap-[1vw]' : ' hidden md:grid')
        }
      >
        {isHumbergerMenuOnClick}
        <button className='text-left md:text-center text-[3.5vw] md:text-[0.8em] px-[5vw] md:px-[1rem] py-[1.5vw] md:py-[0.5rem]'>
          Semua Event
        </button>
        <button
          onClick={() =>
            dispatch(
              isCreateEventButtonCloseOnClickActionCreator(
                !isCreateEventButtonCloseOnClick
              )
            )
          }
          className='text-left md:text-center text-[3.5vw] md:text-[0.8em] px-[5vw] md:px-[1rem] py-[1.5vw] md:py-[0.5rem]'
        >
          Buat Event
        </button>
        <input
          className='rounded-full font-bold text-black text-[3.5vw] md:text-[0.8em] mx-[5vw] md:mx-0 px-[5vw] md:px-[1rem] py-[1.5vw] md:py-[0.5rem] md:flex-1'
          type='text'
          placeholder='Search'
        />
      </div>
    </div>
  );
};

export { Navbar };
