import { useState } from 'react';
import { IconContext } from 'react-icons';
import { RxHamburgerMenu } from 'react-icons/rx';
import { FaUserCircle, FaPowerOff } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { isCreateProductButtonCloseOnClickActionCreator } from '../states/isCreateProductButtonCloseOnClick/action';
import { asyncUnsetAuthUser } from '../states/authUser/action';
import CreateProductInput from './CreateProductInput';

function Navbar({ keyword, onSearch }) {
  const authUser = useSelector((states) => states.authUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { pathname: currentPath } = useLocation();
  const [isHumbergerMenuOnClick, setIsHumbergerMenuOnClick] = useState(false);
  // const [isCreateProductButtonOnClick, setIsCreateProductButtonOnClick] = useState(true)

  return (
    <>
      <CreateProductInput />
      <div className="navbar-container w-[100%] px-[5%]">
        <div
          onClick={() => navigate('/dashboard')}
          className="navbar-logo cursor-pointer p-[3vw] md:p-[0.2rem]"
        >
          <img
            className="w-full h-full"
            src="https://comika.id/wp-content/uploads/2021/02/cropped-Logo_Comika-1.png"
            alt="logo"
          />
        </div>
        <IconContext.Provider value={{ color: '#24BAEF', size: '50%' }}>
          {authUser ? (
            <FaPowerOff
              className="cursor-pointer"
              onClick={() => {
                dispatch(asyncUnsetAuthUser());
              }}
            />
          ) : (
            <FaUserCircle
              onClick={() => navigate('/login')}
              className="cursor-pointer"
            />
          )}
        </IconContext.Provider>
        <IconContext.Provider value={{ color: '#86878B', size: '7vw' }}>
          <RxHamburgerMenu
            className="cursor-pointer md:hidden"
            onClick={() => setIsHumbergerMenuOnClick(!isHumbergerMenuOnClick)}
          />
        </IconContext.Provider>
        <div
          className={
            `navbar-submenu${
              isHumbergerMenuOnClick ? ' grid gap-[1vw]' : ' hidden md:grid'}`
          }
        >
          {isHumbergerMenuOnClick}
          <Link
            to="/dashboard"
            className="text-left md:text-center text-[3.5vw] md:text-[0.8em] px-[5vw] md:px-[1rem] py-[1.5vw] md:py-[0.5rem]"
          >
            Semua Event
          </Link>
          <button
            type="submit"
            onClick={() => navigate('/me')}
            className={
              `text-left md:text-center text-[3.5vw] md:text-[0.8em] px-[5vw] md:px-[1rem] py-[1.5vw] md:py-[0.5rem]${
                authUser ? ' block' : ' hidden'}`
            }
          >
            My Activity
          </button>
          <button
            type="submit"
            onClick={() => dispatch(isCreateProductButtonCloseOnClickActionCreator())}
            className={
              `text-left md:text-center text-[3.5vw] md:text-[0.8em] px-[5vw] md:px-[1rem] py-[1.5vw] md:py-[0.5rem]${
                authUser ? ' block' : ' hidden'}`
            }
          >
            Buat Event
          </button>
          {currentPath === '/dashboard' && (
            <input
              value={keyword}
              onChange={onSearch}
              className="rounded-full font-bold text-black text-[3.5vw] md:text-[0.8em] mx-[5vw] md:mx-0 px-[5vw] md:px-[1rem] py-[1.5vw] md:py-[0.5rem] md:flex-1"
              type="text"
              placeholder="Search city ...."
            />
          )}
        </div>
      </div>
    </>
  );
}

export { Navbar };
