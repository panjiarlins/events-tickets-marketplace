import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  Input,
} from "@chakra-ui/react";

const DetailsEvent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [voucher, setVoucher] = useState(false);

  const handleSubmit = () => {
    console.log("Submitted with ticket count:", ticketCount);
    console.log("Voucher code:");

    handleCloseModal();
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleOpenVoucher = () => {
    setVoucher(true);
  };

  const handleCloseVoucher = () => {
    setVoucher(false);
  };

  const [ticketCount, setTicketCount] = useState(1);

  const handleTicketChange = (event) => {
    setTicketCount(event.target.value);
  };

  return (
    <div className="bg-[#1C212E] container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-black p-4 shadow-md rounded-lg">
          <img
            src="https://comika.id/wp-content/uploads/2023/07/stand-up-fest-the-series-cover-300x300.png"
            className="w-full mb-4 object-cover"
            alt=""
          />
        </div>
        <div className=" p-4 shadow-md rounded-lg mx-auto">
          <h1 className="text-white text-2xl font-sans mb-4">
            Stand Up Fest - The Series
          </h1>
          <h2 className="text-orange-500 text-2xl font-sans font-bold">
            Rp 100.000,00
          </h2>
          <button
            onClick={handleOpenModal}
            className=" mt-4 bg-[#00ABF0] text-white font-sans cursor-pointer py-1 px-4 font-bold  border-transparent rounded-md"
          >
            Buy
          </button>
          <button
            onClick={handleOpenVoucher}
            className=" mt-4 ml-4 bg-[#00ABF0] text-white font-sans cursor-pointer py-1 px-4 font-bold  border-transparent rounded-md"
          >
            Create Voucher
          </button>
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <ModalContent className="mx-auto my-[110px] rounded-xl backdrop-blur-md bg-white flex max-w-[600px]">
          <ModalCloseButton className="absolute font-extrabold top-4 right-4 text-red-600" />
          <ModalBody className="flex-1 p-4">
            <h2 className="font-bold text-2xl text-black text-center mt-6">
              Order Details
            </h2>
            <hr />
            <div className="flex flex-col items-start gap-4">
              <div className="flex flex-col items-start">
                <Input
                  className="bg-slate-300 font-sans text-black rounded-md px-3 mt-6 max-w-[300px]"
                  placeholder="Enter voucher code"
                  required
                  type="text"
                />
              </div>
              <div className="flex flex-col items-start">
                <label className="text-black font-bold">Order ticket</label>
                <input
                  type="range"
                  className="w-full"
                  min="1"
                  max="10"
                  step="1"
                  id="ticketRange"
                  value={ticketCount}
                  onChange={handleTicketChange}
                />
                <p className="text-black">{ticketCount}</p>
              </div>
            </div>
          </ModalBody>

          <div className="bg-blue-600 text-white px-4 py-2">
            <h2 className="text-2xl font-bold text-center">Invoice</h2>
            <div className="font-sans">
              <p>Date:</p>
              <p>Discount from voucher code:</p>
              <p>Discount from referral code:</p>
              <p className="mb-6">Price:</p>
              <p>Total:</p>
            </div>
          </div>
          <div className="flex bg-blue-600 justify-end p-4 gap-2">
            <div className="flex  justify-center p-4 gap-2">
              <Button
                className="bg-blue-500 text-white px-4 py-2 font-sans font-semibold rounded-md"
                onClick={handleSubmit}
              >
                Submit
              </Button>
              <Button
                className="bg-red-600 text-white px-4 py-2 font-sans font-semibold rounded-md"
                onClick={handleCloseModal}
              >
                Cancel
              </Button>
            </div>
          </div>
        </ModalContent>
      </Modal>

      {/* Voucher Code  */}

      <Modal isOpen={voucher} onClose={handleCloseVoucher}>
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
                />
                <Input
                  className="bg-slate-300 text-black font-sans rounded-md px-3 mt-6 max-w-[300px]"
                  placeholder="Discount"
                  required
                  type="number"
                />
                <Input
                  className="bg-slate-300 text-black font-sans rounded-md px-3 mt-6 max-w-[300px]"
                  placeholder="Limit voucher"
                  required
                  type="number"
                />
              </div>
            </div>
          </ModalBody>

          <div className="flex justify-center p-4 gap-2">
            <Button
              className="bg-blue-600 text-white px-4 py-2 font-sans font-semibold rounded-md"
              onClick={handleSubmit}
            >
              Submit
            </Button>
            <Button
              className="bg-red-600 text-white px-4 py-2 font-sans font-semibold rounded-md"
              onClick={handleCloseModal}
            >
              Close
            </Button>
          </div>
        </ModalContent>
      </Modal>

      <div className="bg-[#131722]">
        <div className="text-[#00BAEF] font-extrabold container mx-auto px-4 py-8">
          Description
        </div>
        <hr />
        <p className="py-4 px-4 text-[#939CB0] font-extrabold">
          Stand Up Fest "The Series" persembahan Indonesia Media yang
          menampilkan Komika ternama Popon Kerok, Ate, Yono Bakrie, Soleh
          Solihun dan Mongol Stres di Gedung Menara Kuningan Jakarta. Hadir
          dengan versi video digital yang menyampaikan keresahan dari setiap
          Komikanya. Mulai dari Popon Kerok yang memperkenalkan dirinya sebagai
          bapak rumah tangga namun kesehariannya menjadi makmum. Popon cerita
          soal peran menjadi seorang ayah, pola parenting, ibadah, kiat-kiat
          lomba 17 Agustus-an ditanamkannya sejak dini. Lalu, Ate julid dengan
          orang yang war tiket Coldplay hingga me-riffing menteri PUPR Basuki
          Hadimuljono. Dilanjut dengan Yono Bakrie yang merasa mirip Lee Min Ho.
          Soleh Solihun yang nyenggol Mongol Stres tentang memuja setan hingga
          di akhir sesi Mongol Stres menjawab semua keresahan tentang gereja dan
          satanis yang melekat pada dirinya. Tonton video digitalnya sekarang
          original dan eksklusif di Comika.id.
        </p>
      </div>
    </div>
  );
};

export { DetailsEvent };
