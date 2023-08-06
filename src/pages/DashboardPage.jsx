import React, { useEffect, useState } from 'react';
import CreateProductInput from '../components/CreateProductInput';
import { useSelector } from 'react-redux';

const DashboardPage = () => {
  const { isCreateEventButtonCloseOnClick = false } = useSelector(
    (states) => states
  );
  // const [isCreateEventButtonCloseOnClick, setIsCreateEventButtonCloseOnClick] =
  //   useState(false);

  // const toogleCreateEventButtonClose = () =>
  //   setIsCreateEventButtonCloseOnClick(!isCreateEventButtonCloseOnClick);

  return (
    <>
      {/* <div className={isCreateEventButtonCloseOnClick ? 'hidden' : 'block'}>
        <CreateProductInput />
      </div> */}
      <div className='dashboard-container'>
        <div className='dashboard-jumbotron'>
          <img
            src='https://comika.id/wp-content/uploads/2020/01/web-banner-coupon-kemerdekaan-1.png'
            alt='jumbotron'
          />
        </div>
        <div className='dashboard-content'>
          <div className='dashboard-content_title'>
            <p className='dashboard-content_title_text'>New Release</p>
            <div className='dashboard-content_title_line'></div>
          </div>
          <div className='dashboard-content_cards'>
            {[1, 2, 3, 4, 5, 6].map(() => (
              <div className='dashboard-content_cards_card'>
                <div className='dashboard-content_cards_card_image'>
                  <img
                    src='https://comika.id/wp-content/uploads/2023/07/stand-up-fest-the-series-cover-300x300.png'
                    alt=''
                  />
                </div>
                <div className='truncate dashboard-content_cards_card_price'>
                  Rp 100.000,00
                </div>
                <div className='truncate dashboard-content_cards_card_location'>
                  Bekasi, Jawa Barat, Indonesia
                </div>
                <div className='truncate dashboard-content_cards_card_title'>
                  Stand-Fest"The Series
                </div>
                <button className='truncate dashboard-content_cards_card_buttonDetail'>
                  LIHAT DETAIL
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardPage;
