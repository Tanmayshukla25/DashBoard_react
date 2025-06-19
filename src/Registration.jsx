import React, { useState } from "react";
import bgImage from "./assets/Image.webp";
import { FaUser, FaEnvelope, FaLock, FaEye } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./Component/Firebase";
import { ToastContainer, toast } from "react-toastify";
import { BsFillEyeSlashFill } from "react-icons/bs";

const RegisterPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast.error("Passwords do not match", {
        position: "top-right",
        autoClose: 4000,
        theme: "colored",
      });
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      toast.success("Registered successfully!", {
        position: "top-right",
        autoClose: 3000,
        theme: "colored",
      });
      setTimeout(() => navigate("/"), 2000);
    } catch (error) {
      toast.error(`Error: ${error.message}`, {
        position: "top-right",
        autoClose: 4000,
        theme: "colored",
      });
    }
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <ToastContainer />
      <div
        className="w-[450px] p-10 rounded-2xl border border-white/30 shadow-xl text-white"
        style={{
          background: "rgba(255, 255, 255, 0.1)",
          backdropFilter: "blur(10px)",
        }}
      >
        <h2 className="text-3xl font-bold mb-6 text-center">Register</h2>
        <form className="space-y-10" onSubmit={handleRegister}>

          {/* Name Field */}
          <div className="relative">
            <FaUser className="absolute left-2 top-3 text-white/70" />
            <input
              type="text"
              id="name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="peer pl-8 py-1 w-full bg-transparent rounded border-b border-white/70 focus:outline-none text-white"
            />
            <label
              htmlFor="name"
              className={`absolute left-8 transition-all duration-200 z-10 ${
                name ? "top-[-1rem] text-sm text-blue-950" : "top-2 text-base text-white/70"
              } peer-focus:top-[-1rem] peer-focus:text-sm peer-focus:text-blue-950`}
            >
              Full Name
            </label>
          </div>

          {/* Email Field */}
          <div className="relative">
            <FaEnvelope className="absolute left-2 top-3 text-white/70" />
            <input
              type="email"
              id="reg-email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="peer pl-8 py-1 w-full bg-transparent border-b border-white/70 focus:outline-none text-white"
            />
            <label
              htmlFor="reg-email"
              className={`absolute left-8 transition-all duration-200 z-10 ${
                email ? "top-[-1rem] text-sm text-blue-950" : "top-2 text-base text-white/70"
              } peer-focus:top-[-1rem] peer-focus:text-sm peer-focus:text-blue-950`}
            >
              Email Address
            </label>
          </div>

          {/* Password Field */}
          <div className="relative">
            <FaLock className="absolute left-2 top-3 text-white/70" />
            <input
              type={showPassword ? "text" : "password"}
              id="reg-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="peer pl-8 pr-8 w-full bg-transparent py-1 border-b border-white/70 focus:outline-none text-white"
            />
            <div
              className="absolute right-2 top-2.5 text-white cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEye /> : <BsFillEyeSlashFill />}
            </div>
            <label
              htmlFor="reg-password"
              className={`absolute left-8 transition-all duration-200 z-10 ${
                password ? "top-[-1rem] text-sm text-blue-950" : "top-2 text-base text-white/70"
              } peer-focus:top-[-1rem] peer-focus:text-sm peer-focus:text-blue-950`}
            >
              Password
            </label>
          </div>

          {/* Confirm Password Field */}
          <div className="relative">
            <FaLock className="absolute left-2 top-3 text-white/70" />
            <input
              type={showConfirmPassword ? "text" : "password"}
              id="confirm-password"
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="peer pl-8 pr-8 py-1 w-full bg-transparent border-b border-white/70 focus:outline-none text-white"
            />
            <div
              className="absolute right-2 top-2.5 text-white cursor-pointer"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? <FaEye /> : <BsFillEyeSlashFill />}
            </div>
            <label
              htmlFor="confirm-password"
              className={`absolute left-8 transition-all duration-200 z-10 ${
                confirmPassword ? "top-[-1rem] text-sm text-blue-950" : "top-2 text-base text-white/70"
              } peer-focus:top-[-1rem] peer-focus:text-sm peer-focus:text-blue-950`}
            >
              Confirm Password
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-white text-cyan-950 py-1 hover:bg-cyan-950 font-bold rounded-full hover:text-white transition"
          >
            Register
          </button>

          {/* Redirect to Login */}
          <p className="text-center text-sm mt-2">
            Already have an account?{" "}
            <Link to="/" className="font-semibold underline text-cyan-500">
              Sign In
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
