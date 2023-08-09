import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { asyncReceiveProducts } from '../states/products/action';
import ProductsList from '../components/ProductsList';

const DashboardPage = ({ keyword }) => {
  const products = useSelector((states) => states.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncReceiveProducts());
  }, [dispatch]);

  return (
    <>
      <div className='dashboard-container'>
        <div className='dashboard-jumbotron'>
          <img
            src='https://comika.id/wp-content/uploads/2020/01/web-banner-coupon-kemerdekaan-1.png'
            alt='jumbotron'
          />
        </div>
        <div className='dashboard-content'>
          <div className='dashboard-content_title'>
            <p className='dashboard-content_title_text'>List Events</p>
            <div className='dashboard-content_title_line'></div>
          </div>
          <ProductsList
            products={
              keyword && keyword.trim()
                ? products.filter((product) =>
                    product.city
                      .trim()
                      .toLowerCase()
                      .includes(keyword.trim().toLowerCase())
                  )
                : products
            }
          />
        </div>
      </div>
    </>
  );
};

export default DashboardPage;
