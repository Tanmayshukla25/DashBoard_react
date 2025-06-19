import React, { useState } from "react";
import bgImage from "./assets/Image.webp";
import { Link, useNavigate } from "react-router-dom";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./Component/Firebase";
import { ToastContainer, toast } from "react-toastify";
import { BsFillEyeSlashFill } from "react-icons/bs";
import { FaEye } from "react-icons/fa";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);

  const navigate = useNavigate();
  async function HandleLoginPage(e) {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast.success("Login successfully!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "colored",
      });
      setTimeout(() => navigate("/app"), 2000);
    } catch (error) {
      toast.error(`Error: ${error.message}`, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "colored",
      });
    }
  }
  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <ToastContainer />
      <div
        className="w-96 p-10 rounded-2xl border border-white/30 shadow-xl text-white"
        style={{
          background: "rgba(255, 255, 255, 0.1)",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(30px)",
        }}
      >
        <h2 className="text-3xl font-bold mb-6 text-center">Login</h2>
        <form className="space-y-10" onSubmit={HandleLoginPage}>
          <div className="relative">
            <FaEnvelope className="absolute left-0 top-3 text-white/70 ml-1" />
            <input
              type="email"
              id="reg-email"
              placeholder=" "
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="peer pl-8 w-full bg-transparent py-1 border-b border-white/70 focus:outline-none placeholder-transparent text-white"
            />

            <label
              htmlFor="reg-email"
              className={`absolute left-8 transition-all
                ${
                  email
                    ? "top-[-1rem] text-sm text-blue-950"
                    : "top-2 text-base text-white/70"
                }
                peer-focus:top-[-1rem] peer-focus:text-sm peer-focus:text-blue-950`}
            >
              Email Address
            </label>
          </div>

          <div className="relative">
            <FaLock className="absolute left-2 top-3 text-white/70" />
            <input
              type={show ? "text" : "password"}
              id="reg-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="peer pl-8 pr-10 w-full bg-transparent py-1 border-b border-white/70 focus:outline-none text-white"
            />
            <div
              className="absolute right-2 top-2 text-white cursor-pointer"
              onClick={() => setShow(!show)}
            >
              {show ? <FaEye /> : <BsFillEyeSlashFill />}
            </div>
            <label
              htmlFor="reg-password"
              className={`absolute left-8 transition-all duration-200 ${
                password
                  ? "top-[-1rem] text-sm text-blue-950"
                  : "top-2 text-base text-white/70"
              } peer-focus:top-[-1rem] peer-focus:text-sm peer-focus:text-blue-950`}
            >
              Password
            </label>
          </div>

          <div className="flex justify-between items-center text-sm">
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="" />
              <span>Remember Me</span>
            </label>
            <a href="#" className="hover:underline">
              Forget Password
            </a>
          </div>

          <button
            type="submit"
            className="w-full bg-white text-cyan-950 hover:bg-cyan-950 font-bold py-2 rounded-full hover:text-white transition"
          >
            Log in
          </button>

          <p className="text-center text-sm mt-2">
            Don’t have an account?{" "}
            <Link
              to="/register"
              className="font-semibold underline text-cyan-500"
            >
              Register
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
