// import "./css/login.css";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const nav = useNavigate();
  return (
    <div className="bg-[#131722]">
      <div className="w-1/3 mx-auto">
        <div className=" text-center mx-auto grid grid-cols-2 justify-center">
          <div className="cursor-pointer py-4 font-extrabold w-[100%] mx-auto text-[#00ABF0] border border-transparent border-b-[#00ABF0]">
            Register
          </div>
          <div
            onClick={() => nav("/login")}
            className="cursor-pointer py-4 font-bold w-[100%] mx-auto text-slate-400 border border-transparent border-b-slate-400"
          >
            Login
          </div>
        </div>
        <div className="mt-4 grid gap-[6px] grid-cols-1">
          <label htmlFor="1" className="text-white font-semibold">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            className="text-black font-extrabold px-2 rounded-[4px]"
            id="1"
            type="email"
            name="email"
          />

          <label className="text-white font-semibold">
            Fullname <span className="text-red-500">*</span>
          </label>
          <input
            className="text-black font-extrabold px-2 rounded-[4px]"
            type="text"
            name="fullname"
          />

          <label className="text-white font-semibold">
            Password <span className="text-red-500">*</span>
          </label>
          <input
            className="text-black font-extrabold px-2 rounded-[4px]"
            type="password"
            name="password"
          />

          <label className="text-white font-semibold">
            Confirm Password <span className="text-red-500">*</span>
          </label>
          <input
            className="text-black font-extrabold px-2 rounded-[4px]"
            type="password"
            name="password"
          />

          <label className="text-white font-semibold">
            Referral Code <span className="text-red-500">*</span>
          </label>
          <input
            className="text-black font-extrabold px-2 rounded-[4px]"
            type="text"
            name="referral"
          />
          <button
            className="my-2 bg-[#00ABF0] font-semibold rounded-[4px] py-1 cursor-pointer text-white"
            type="submit"
          >
            Register
          </button>
          <div className="font-semibold text-white text-center">
            Dengan membuat atau mendaftar akun, Anda menyetujui isi Persyaratan
            dan Ketentuan & Kebijakan Privasi kami.
          </div>
        </div>
      </div>
    </div>
  );
};

export { Register };