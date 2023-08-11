import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import {
  asyncDeleteProduct,
  asyncReceiveProducts,
} from '../states/products/action';
import CreateVoucherProductInput from '../components/CreateVoucherProductInput';
import BuyProductInput from '../components/BuyProductInput';
import RatingAndReviewPage from './ratingreview';
import { IconContext } from 'react-icons';
import { MdDelete } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

const DetailPage = () => {
  const authUser = useSelector((states) => states.authUser);
  const products = useSelector((states) => states.products);
  const { productId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [productDetail, setProductDetail] = useState(null);
  const [isModalCreateVoucherProductOpen, setIsModalCreateVoucherProductOpen] =
    useState(false);
  const [isModalBuyOpen, setIsModalBuyOpen] = useState(false);

  useEffect(() => {
    dispatch(asyncReceiveProducts());
  }, [dispatch]);

  useEffect(() => {
    setProductDetail(products?.find((product) => product.id === productId));
  }, [products, productId]);

  if (!productDetail) {
    return null;
  }

  return (
    <>
      <div className='bg-[#1C212E] container mx-auto px-4 py-8'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
          <div className='bg-black p-4 shadow-md rounded-lg'>
            <img
              src={productDetail.imageUrl}
              className='w-full mb-4 object-cover'
              alt={productDetail.title}
            />
          </div>
          <div className=' p-4 shadow-md rounded-lg mx-auto'>
            <h1 className='text-white text-2xl font-sans mb-4'>
              {productDetail.title}
            </h1>
            <h2 className='text-orange-500 text-2xl font-sans font-bold'>
              {productDetail.price
                ? `Rp ${productDetail.price.toLocaleString('id-ID')}`
                : 'FREE'}
            </h2>
            {(() => {
              if (authUser && authUser.id === productDetail.userId) {
                return (
                  <div className='flex justify-center items-center gap-4'>
                    <button
                      onClick={() =>
                        setIsModalCreateVoucherProductOpen(
                          !isModalCreateVoucherProductOpen
                        )
                      }
                      className=' mt-4 ml-4 bg-[#00ABF0] text-white font-sans cursor-pointer py-1 px-4 font-bold  border-transparent rounded-md'
                    >
                      Create Voucher
                    </button>
                    <IconContext.Provider value={{ size: '20%', color: 'red' }}>
                      <MdDelete
                        onClick={() => {
                          dispatch(asyncDeleteProduct(productId));
                          navigate('/dashboard');
                        }}
                        className='cursor-pointer'
                      />
                    </IconContext.Provider>
                  </div>
                );
              } else if (
                authUser &&
                productDetail.currentCapacity < productDetail.capacity
              ) {
                return (
                  <button
                    onClick={() => setIsModalBuyOpen(!isModalBuyOpen)}
                    className=' mt-4 bg-[#00ABF0] text-white font-sans cursor-pointer py-1 px-4 font-bold  border-transparent rounded-md'
                  >
                    Buy
                  </button>
                );
              }
            })()}
          </div>
        </div>

        <div className='bg-[#131722]'>
          <div className='text-[#00BAEF] font-extrabold container mx-auto px-4 py-8'>
            Description
          </div>
          <hr />
          <p className='py-4 px-4 text-[#939CB0] font-extrabold'>
            {productDetail.description}
          </p>
        </div>
      </div>
      <RatingAndReviewPage />
      {(() => {
        if (authUser && authUser.id === productDetail.userId) {
          return (
            <CreateVoucherProductInput
              productDetail={productDetail}
              isModalCreateVoucherProductOpen={isModalCreateVoucherProductOpen}
              toggleIsModalCreateVoucherProductOpen={() =>
                setIsModalCreateVoucherProductOpen(
                  !isModalCreateVoucherProductOpen
                )
              }
            />
          );
        } else if (
          authUser &&
          productDetail.currentCapacity < productDetail.capacity
        ) {
          return (
            <BuyProductInput
              productDetail={productDetail}
              isModalBuyOpen={isModalBuyOpen}
              toggleIsModalBuyOpen={() => setIsModalBuyOpen(!isModalBuyOpen)}
            />
          );
        }
      })()}
    </>
  );
};

export default DetailPage;
