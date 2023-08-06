import React, { useState } from "react";
import { useNavigate } from "react-router";
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

const Navbar = () => {
  const nav = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="w-[100%] h-[70px] flex items-center justify-between px-5 text-white font-extrabold space-y-2">
      <div className="cursor-pointer flex items-center">
        <img
          onClick={() => nav("/dashboard")}
          className="object-cover h-12 w-23"
          src="https://comika.id/wp-content/uploads/2021/02/cropped-Logo_Comika-1.png"
          alt=""
        />

        <div className="font-sans font-bold grid grid-cols-4 gap-4 px-4 text-center cursor-pointer">
          <div>Event</div>
          <div onClick={handleOpenModal}>Create Event</div>
          <div>Edit Event</div>
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <ModalOverlay />
        <ModalContent className="backdrop-blur-sm mx-[300px] my-[110px] rounded-xl bg-white">
          <ModalCloseButton className="bg-red-600 absolute right-0 m-4 p-2 rounded-md text-white" />
          <ModalHeader className="font-sans mx-auto font-bold py-5">
            Add/Edit Event
          </ModalHeader>
          <ModalBody className="">
            <Center flexDir="column" gap={"15px"}>
              <img
                className="w-[200px] h-[200px]"
                src="https://comika.id/wp-content/uploads/2023/07/stand-up-fest-the-series-cover-300x300.png"
                alt="isi dengan gambar"
              ></img>
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

      <div className="flex items-center gap-3">
        <input
          className="rounded-lg px-4 py-2 font-sans font-bold text-black"
          type="text"
          placeholder="Search"
        />
        <button
          onClick={() => nav("/login")}
          className="py-2 px-4 bg-[#00ABF0] rounded-md font-sans font-bold text-white"
        >
          Login
        </button>
        <button
          onClick={() => nav("/register")}
          className="py-2 px-4 bg-[#00ABF0] rounded-md font-sans font-bold text-white"
        >
          Register
        </button>
      </div>
    </div>
  );
};

export { Navbar };
