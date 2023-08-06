import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Input,
  Center,
} from "@chakra-ui/react";

const DetailsProduct = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
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
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <ModalOverlay />
        <ModalContent className="mx-[300px] my-[110px] rounded-xl bg-white">
          <ModalHeader className="font-sans mx-auto font-bold py-2">
            Payment Event
          </ModalHeader>
          <ModalCloseButton className="py-4 text-red-500" />
          <ModalBody className="">
            <Center flexDir="column" gap={"15px"}>
              <img className="" src="" alt="isi dengan gambar"></img>
              <Input
                className="bg-slate-300 font-sans rounded-md px-3 max-w-[300px]"
                placeholder="Event Name"
                required
                type="url"
              ></Input>
              <Input
                className="bg-slate-300 font-sans rounded-md px-3 max-w-[300px]"
                id="name"
                placeholder="Location"
                required
              ></Input>
              <Input
                className="bg-slate-300 font-sans rounded-md px-3 max-w-[300px]"
                placeholder="Price"
                required
              ></Input>
            </Center>
          </ModalBody>

          <ModalFooter className="mx-auto py-6 gap-5">
            <Button
              type="submit"
              className="bg-blue-600 px-2 rounded-md py-1 font-sans text-white"
            >
              Submit
            </Button>

            <Button
              type="button"
              className="bg-red-600 font-sans px-2 py-1 rounded-md text-white"
            >
              Delete
            </Button>
          </ModalFooter>
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

export { DetailsProduct };
