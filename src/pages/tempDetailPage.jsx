import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { asyncReceiveProducts } from '../states/products/action';
import api from '../utils/api';
import { asyncCreateUserTransaction } from '../states/userTransactions/action';
import QRCode from 'react-qr-code';
import { asyncPreloadProcess } from '../states/isPreload/action';

const DetailPage = () => {
  const { authUser = null, products = [] } = useSelector((states) => states);
  const { productId } = useParams();
  const dispatch = useDispatch();
  const [productDetail, setProductDetail] = useState(null);
  const [tempVoucherCode, setTempVoucherCode] = useState('');
  const [voucherCode, setVoucherCode] = useState('');
  const [capacity, setCapacity] = useState('');
  const [productTotal, setProductTotal] = useState(1);
  const [promotionPoint, setPromotionPoint] = useState('');
  const [usedPromotionPoint, setUsedPromotionPoint] = useState(0);
  const [usedReferralPoint, setUsedReferralPoint] = useState(
    authUser && productDetail
      ? Math.min(
          authUser.referralPoint,
          productDetail.price * productTotal - usedPromotionPoint
        )
      : 0
  );
  const [currentTransaction, setCurrentTransaction] = useState(null);

  useEffect(() => {
    dispatch(asyncReceiveProducts());
  }, [dispatch]);

  useEffect(() => {
    setProductDetail(products?.find((product) => product.id === productId));
  }, [products, productId]);

  useEffect(() => {
    setUsedReferralPoint(
      authUser && productDetail
        ? Math.min(
            authUser.referralPoint,
            productDetail.price * productTotal - usedPromotionPoint
          )
        : null
    );
  }, [authUser, productDetail, productTotal, usedPromotionPoint]);

  if (!productDetail) {
    return null;
  }

  return (
    <>
      <div className='bg-[#1C212E]'>
        <div className='container mx-auto px-4 py-8'>
          <h1 className='text-white text-3xl font-bold mb-4'>
            {productDetail.title}
          </h1>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
            <div className='bg-white p-4 shadow-md rounded-lg'>
              <img
                src={productDetail.imageUrl}
                className='w-full mb-4 object-cover'
                alt=''
              />
              <h1 className='text-xl font-[800]'>Rp {productDetail.price}</h1>
              <h2 className='text-black font-bold'>
                {productDetail.city}, {productDetail.province},{' '}
                {productDetail.country}
              </h2>
              <h2 className='text-black font-bold'>{productDetail.startAt}</h2>

              <button className='bg-[#00ABF0] text-white cursor-pointer py-1 px-4 font-extrabold  border-transparent rounded-md'>
                Buy
              </button>
            </div>
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

      {/*/////  TEMPAT TRANSAKSI SEMENTARA /////*/}
      {currentTransaction && (
        <div className='max-w-[50%] mx-auto p-[5%] bg-white'>
          <QRCode
            size={256}
            style={{ height: 'auto', maxWidth: '100%', width: '100%' }}
            value={currentTransaction.paymentLink}
            viewBox={`0 0 256 256`}
          />
          <Link to={currentTransaction.paymentLink} className='bg-cyan-500'>
            {currentTransaction.paymentLink}
          </Link>
        </div>
      )}
      {(() => {
        if (authUser && authUser.id === productDetail.userId) {
          return (
            <div className='text-black bg-cyan-200'>
              <div>Buat Voucher</div>
              <input
                value={tempVoucherCode}
                onChange={({ target }) => setTempVoucherCode(target.value)}
                type='text'
                placeholder='Buat voucher code'
              />
              <input
                value={promotionPoint}
                onChange={({ target }) => setPromotionPoint(target.value)}
                type='number'
                placeholder={`promotion point (max. Rp ${productDetail.price})`}
              />
              <input
                value={capacity}
                onChange={({ target }) => setCapacity(target.value)}
                type='number'
                placeholder='Capacity'
              />
              <button
                onClick={() =>
                  api
                    .createVoucherCode({
                      productId,
                      voucherCode: tempVoucherCode,
                      capacity,
                      promotionPoint,
                    })
                    .then(({ error, message }) => {
                      if (error) {
                        console.log(message);
                        alert(message);
                        return;
                      }
                      setTempVoucherCode('');
                      setPromotionPoint('');
                      setCapacity('');
                      console.log('Voucher berhasil dibuat!');
                    })
                }
              >
                Submit
              </button>
            </div>
          );
        } else if (authUser) {
          return (
            <>
              <div className='text-black bg-cyan-200'>
                <div>Beli Tiket</div>
                <div>
                  <input
                    value={tempVoucherCode}
                    onChange={({ target }) => setTempVoucherCode(target.value)}
                    type='text'
                    placeholder='Voucher code'
                  />
                  <button
                    onClick={() => {
                      api
                        .getVoucherCode({
                          productId,
                          voucherCode: tempVoucherCode,
                        })
                        .then(({ data, error, message }) => {
                          if (error) {
                            console.log(message);
                            alert(message);
                            setUsedPromotionPoint(0);
                            return;
                          }
                          setUsedPromotionPoint(data.promotionPoint);
                          setVoucherCode(tempVoucherCode);
                        });
                    }}
                  >
                    Cek Voucher
                  </button>
                </div>
                <div>{`Rp${usedReferralPoint} will be used from your referralPoint`}</div>
                <input
                  value={productTotal}
                  onChange={({ target }) =>
                    setProductTotal(Number(target.value))
                  }
                  type='number'
                  placeholder='Jumlah tiket'
                  min={1}
                  max={10}
                />
                <div>
                  <div>Receipt:</div>
                  <div>
                    price: {productDetail.price} x {productTotal}
                  </div>
                  <div>
                    usedPromotionPoint: {`[${voucherCode}] `}
                    {usedPromotionPoint}
                  </div>
                  <div>usedReferralPoint: {usedReferralPoint}</div>
                  <div>
                    Total:
                    {productDetail.price * productTotal -
                      usedPromotionPoint -
                      usedReferralPoint}
                  </div>
                </div>
                <button
                  onClick={() => {
                    dispatch(
                      asyncCreateUserTransaction({
                        userId: authUser.id,
                        productId,
                        price: productDetail.price,
                        priceTotal:
                          productDetail.price * productTotal -
                          usedPromotionPoint -
                          usedReferralPoint,
                        productTotal,
                        usedPromotionPoint,
                        usedReferralPoint,
                        referralPoint: authUser.referralPoint,
                        voucherCode,
                      })
                    ).then(({ data }) => {
                      setTempVoucherCode('');
                      setVoucherCode('');
                      setProductTotal(1);
                      setCurrentTransaction(data);

                      dispatch(asyncPreloadProcess());
                    });
                  }}
                >
                  Submit
                </button>
              </div>
            </>
          );
        }
      })()}
    </>
  );
};

export { DetailPage };
