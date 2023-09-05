import { useEffect, useState } from 'react';
import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  Input,
} from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import api from '../utils/api';
import { asyncCreateUserTransaction } from '../states/userTransactions/action';
import { asyncPreloadProcess } from '../states/isPreload/action';
import QRCodeTransaction from './QRCodeTransaction';
import { asyncReceiveProducts } from '../states/products/action';

function BuyProductInput({
  productDetail,
  isModalBuyOpen,
  toggleIsModalBuyOpen,
}) {
  const authUser = useSelector((states) => states.authUser);
  const dispatch = useDispatch();
  const [tempVoucherCode, setTempVoucherCode] = useState('');
  const [voucherCode, setVoucherCode] = useState('');
  const [productTotal, setProductTotal] = useState(1);
  const [usedPromotionPoint, setUsedPromotionPoint] = useState(0);
  const [usedReferralPoint, setUsedReferralPoint] = useState(0);
  const [currentTransaction, setCurrentTransaction] = useState(null);

  useEffect(() => {
    setUsedReferralPoint(
      authUser && productDetail
        ? Math.min(
            authUser.referralPoint,
            productDetail.price * productTotal - usedPromotionPoint,
          )
        : 0,
    );
  }, [authUser, productDetail, productTotal, usedPromotionPoint]);

  useEffect(() => {
    if (!isModalBuyOpen) {
      dispatch(asyncReceiveProducts);
      setCurrentTransaction(null);
    }
  }, [dispatch, isModalBuyOpen]);

  const onCheckVoucherCodeHandler = () => {
    api
      .getVoucherCodeForTransaction({
        productId: productDetail.id,
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
  };

  const onSubmitBuyProductHandler = () => {
    dispatch(
      asyncCreateUserTransaction({
        userId: authUser.id,
        productId: productDetail.id,
        productTotal,
        usedPromotionPoint,
        usedReferralPoint,
        referralPoint: authUser.referralPoint,
        voucherCode,
      }),
    ).then(({ data }) => {
      setCurrentTransaction(data);
      dispatch(asyncPreloadProcess());
      // dispatch(asyncReceiveProducts());
      setTempVoucherCode('');
      setProductTotal(1);
      //   toggleIsModalBuyOpen();
    });
  };

  return (
    <Modal isOpen={isModalBuyOpen} onClose={toggleIsModalBuyOpen}>
      <ModalContent className="mx-auto my-[110px] rounded-xl flex max-w-[600px]">
        <ModalCloseButton className="absolute font-extrabold top-4 right-4 text-red-600" />
        {(() => {
          if (currentTransaction) {
            if (currentTransaction.price === 0) {
              return <div>Pembayaran berhasil</div>;
            }
            return (
              <ModalBody>
                <QRCodeTransaction currentTransaction={currentTransaction} />
              </ModalBody>
            );
          }
          return (
            <ModalBody className="flex-1 p-4">
              <h2 className="text-black font-bold text-2xl text-center mt-6">
                Order Details
              </h2>
              <hr />
              <div className="flex flex-col items-start gap-4">
                <div className="flex flex-col items-start">
                  <Input
                    className="text-black font-sans rounded-md px-3 mt-6 max-w-[300px]"
                    placeholder="Enter voucher code"
                    required
                    type="text"
                    value={tempVoucherCode}
                    onChange={({ target }) => setTempVoucherCode(target.value)}
                  />
                  <button
                    type="submit"
                    className="text-black"
                    onClick={onCheckVoucherCodeHandler}
                  >
                    Cek Voucher
                  </button>
                </div>
                <div className="flex flex-col items-start">
                  <label className="text-black font-bold">Order ticket</label>
                  <input
                    type="range"
                    className="w-full"
                    min="1"
                    max={`${
                      productDetail.capacity - productDetail.currentCapacity
                    }`}
                    step="1"
                    value={productTotal}
                    onChange={({ target }) =>
                      setProductTotal(Number(target.value))
                    }
                  />
                  <p className="text-black">{productTotal}</p>
                </div>
              </div>
            </ModalBody>
          );
        })()}

        {!currentTransaction && (
          <div className="bg-blue-600 text-white px-4 py-2">
            <h2 className="text-2xl font-bold text-center">Invoice</h2>
            <div className="font-sans">
              <p>Discount from voucher code: -{usedPromotionPoint}</p>
              <p>Discount from referral point: -{usedReferralPoint}</p>
              <p className="mb-6">
                Price:
                {productDetail.price} x {productTotal}
              </p>
              <p>
                Total:{' '}
                {productDetail.price * productTotal -
                  usedPromotionPoint -
                  usedReferralPoint}
              </p>
            </div>
          </div>
        )}

        {!currentTransaction && (
          <div className="flex bg-blue-600 justify-end p-4 gap-2">
            <div className="flex  justify-center p-4 gap-2">
              <Button
                className="bg-blue-500 text-white px-4 py-2 font-sans font-semibold rounded-md"
                onClick={onSubmitBuyProductHandler}
              >
                Submit
              </Button>
              <Button
                className="bg-red-600 text-white px-4 py-2 font-sans font-semibold rounded-md"
                onClick={toggleIsModalBuyOpen}
              >
                Cancel
              </Button>
            </div>
          </div>
        )}
      </ModalContent>
    </Modal>
  );
}

export default BuyProductInput;
