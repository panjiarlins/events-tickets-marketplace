import { useState } from 'react';
import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  Input,
} from '@chakra-ui/react';
import api from '../utils/api';

function CreateVoucherProductInput({
  productDetail,
  isModalCreateVoucherProductOpen,
  toggleIsModalCreateVoucherProductOpen,
}) {
  const [voucherCode, setVoucherCode] = useState('');
  const [capacity, setCapacity] = useState('');
  const [promotionPoint, setPromotionPoint] = useState('');

  const onSubmitCreateVoucherProductHandler = () => {
    api
      .createVoucherCode({
        productId: productDetail.id,
        voucherCode,
        capacity,
        promotionPoint,
      })
      .then(({ error, message }) => {
        if (error) {
          console.log(message);
          alert(message);
        }
        setVoucherCode('');
        setPromotionPoint('');
        setCapacity('');
        toggleIsModalCreateVoucherProductOpen();
      });
  };

  return (
    <Modal
      isOpen={isModalCreateVoucherProductOpen}
      onClose={toggleIsModalCreateVoucherProductOpen}
    >
      <ModalContent className="mx-auto my-[110px] rounded-xl bg-white flex max-w-[600px]">
        <ModalCloseButton className="absolute font-extrabold top-4 right-4 text-red-600" />

        <ModalBody className="p-4">
          <h2 className="font-bold text-2xl text-black text-center mt-6">
            Create Voucher Code
          </h2>
          <hr />
          <div className="flex flex-col items-start gap-4">
            <div className="flex flex-col items-start">
              <Input
                className="bg-slate-300 text-black font-sans rounded-md px-3 mt-6 max-w-[300px]"
                placeholder="Voucher code"
                required
                type="text"
                value={voucherCode}
                onChange={({ target }) => setVoucherCode(target.value)}
              />
              <Input
                className="bg-slate-300 text-black font-sans rounded-md px-3 mt-6 max-w-[300px]"
                placeholder="Discount"
                required
                type="number"
                value={promotionPoint}
                onChange={({ target }) => setPromotionPoint(target.value)}
              />
              <Input
                className="bg-slate-300 text-black font-sans rounded-md px-3 mt-6 max-w-[300px]"
                placeholder="Limit voucher"
                required
                type="number"
                value={capacity}
                onChange={({ target }) => setCapacity(target.value)}
              />
            </div>
          </div>
        </ModalBody>

        <div className="flex justify-center p-4 gap-2">
          <Button
            className="bg-blue-600 text-white px-4 py-2 font-sans font-semibold rounded-md"
            onClick={onSubmitCreateVoucherProductHandler}
          >
            Submit
          </Button>
          <Button
            className="bg-red-600 text-white px-4 py-2 font-sans font-semibold rounded-md"
            onClick={toggleIsModalCreateVoucherProductOpen}
          >
            Close
          </Button>
        </div>
      </ModalContent>
    </Modal>
  );
}

export default CreateVoucherProductInput;
