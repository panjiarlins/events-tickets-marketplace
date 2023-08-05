import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";


const Login = () => {
  const nav = useNavigate();
  const [user, setUser] = useState({
    password: "",
    email: "",
  });

  const InputHandler = (key, value) => {
    setUser({ ...user, [key]: value });
  };

  useEffect(() => {
    nav("/login");
  }, []);

  // const login = async () => {
  //     const auth = await api.get("/users", {
  //       params: {
  //         email: user.email,
  //         password: user.password,
  //       },
  //     });

  return (
    <div className="bg-[#131722]">
      <div className="w-1/3 mx-auto">
        <div className=" text-center mx-auto grid grid-cols-2 justify-center">
          <div
            onClick={() => nav("/register")}
            className="cursor-pointer py-4 font-bold w-[100%] mx-auto text-slate-400 border border-transparent border-b-slate-400"
          >
            Register
          </div>
          <div className="cursor-pointer py-4 font-extrabold w-[100%] mx-auto text-[#00ABF0] border border-transparent border-b-[#00ABF0]">
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
            Password <span className="text-red-500">*</span>
          </label>
          <input
            className="text-black font-extrabold px-2 rounded-[4px]"
            type="password"
            name="password"
          />
          <label className="font-extrabold text-[#00ABF0]">
            Forgot Password
          </label>
          <div className="text-white font-extrabold">
            <input type="checkbox" /> I want to stay logged in
          </div>

          <button
            className="my-2 bg-[#00ABF0] font-semibold rounded-[4px] py-1 cursor-pointer text-white"
            type="submit"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export { Login };
