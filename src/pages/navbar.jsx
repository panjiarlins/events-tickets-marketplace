import React from "react";
import { useNavigate } from "react-router";

const Navbar = () => {
  const nav = useNavigate();

  return (
    <div className="w-[100%] h-[70px] flex items-center justify-between px-5 text-white font-extrabold space-y-2">
      <div className="cursor-pointer flex items-center">
        <img
          onClick={() => nav("/dashboard")}
          className="object-cover h-12 w-23"
          src="https://comika.id/wp-content/uploads/2021/02/cropped-Logo_Comika-1.png"
          alt=""
        />

        <div className="grid grid-cols-4 gap-4 px-4 text-center cursor-pointer">
          <div>Event</div>
          <div>Create Event</div>
          <div>Edit Event</div>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <input
          className="rounded-lg px-4 py-2 font-extrabold text-black"
          type="text"
          placeholder="Search"
        />
        <button
          onClick={() => nav("/login")}
          className="py-2 px-4 bg-[#00ABF0] rounded-md text-white"
        >
          Login
        </button>
        <button
          onClick={() => nav("/register")}
          className="py-2 px-4 bg-[#00ABF0] rounded-md text-white"
        >
          Register
        </button>
      </div>
    </div>
  );
};

export { Navbar };
