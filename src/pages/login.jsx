import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncPreloadProcess } from "../states/isPreload/action";
import { asyncSetAuthUser } from "../states/authUser/action";

const Login = () => {
  const { authUser = null } = useSelector((states) => states);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncPreloadProcess());
  }, [dispatch]);

  useEffect(() => {
    if (authUser !== null) {
      nav("/login");
    }
  }, [authUser]);

  const nav = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="bg-[#131722]">
      <div className="w-1/3 mx-auto">
        <div className=" text-center mx-auto grid grid-cols-2 justify-center">
          <div
            onClick={() => nav("/register")}
            className="cursor-pointer py-4 font-sans w-[100%] mx-auto text-slate-400 border border-transparent border-b-slate-400"
          >
            Register
          </div>
          <div className="cursor-pointer py-4 font-sans font-bold w-[100%] mx-auto text-[#00ABF0] border border-transparent border-b-[#00ABF0]">
            Login
          </div>
        </div>
        <div className="mt-4 grid gap-[6px] grid-cols-1">
          <label htmlFor="1" className="text-white font-sans">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            value={email}
            onChange={({ target }) => setEmail(target.value)}
            className="text-black font-sans px-2 rounded-[4px]"
            id="1"
            type="email"
            name="email"
          />

          <label className="text-white font-sans">
            Password <span className="text-red-500">*</span>
          </label>
          <input
            value={password}
            onChange={({ target }) => setPassword(target.value)}
            className="text-black font-sans px-2 rounded-[4px]"
            type="password"
            name="password"
          />
          <button
            onClick={() => dispatch(asyncSetAuthUser({ email, password }))}
            className="my-2 bg-[#00ABF0] font-sans font-bold rounded-[4px] py-1 cursor-pointer text-white"
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
