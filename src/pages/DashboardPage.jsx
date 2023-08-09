import React, { useEffect } from 'react';
import CreateProductInput from '../components/CreateProductInput';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { asyncReceiveProducts } from '../states/products/action';

const DashboardPage = () => {
  const { products = [] } = useSelector((states) => states);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncReceiveProducts());
  }, [dispatch]);

  return (
    <>
      <CreateProductInput />
      <div className='dashboard-container'>
        <div className='dashboard-jumbotron'>
          <img
            src='https://comika.id/wp-content/uploads/2020/01/web-banner-coupon-kemerdekaan-1.png'
            alt='jumbotron'
          />
        </div>
        <div className='dashboard-content'>
          <div className='dashboard-content_title'>
            <p className='dashboard-content_title_text'>All Events</p>
            <div className='dashboard-content_title_line'></div>
          </div>
          <div className='dashboard-content_cards'>
            {products?.map((product) => (
              <div key={product.id} className='dashboard-content_cards_card'>
                <div className='dashboard-content_cards_card_image'>
                  <img src={product.imageUrl} alt={product.title} />
                </div>
                <div className='truncate dashboard-content_cards_card_price'>
                  Rp {product.price}
                </div>
                <div className='truncate dashboard-content_cards_card_location'>
                  {product.city}, {product.province}, {product.country}
                </div>
                <div className='truncate dashboard-content_cards_card_title'>
                  {product.title}
                </div>
                <Link
                  to={`/products/${product.id}`}
                  className='truncate dashboard-content_cards_card_buttonDetail'
                >
                  LIHAT DETAIL
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardPage;
