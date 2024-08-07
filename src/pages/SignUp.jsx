import React, { useState } from "react";
import image from "../assets/es1.jpg";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";

import { Link, useNavigate } from "react-router-dom";
import OAuth from "../components/OAuth";
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { db } from "../firebase";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
export default function SignUp() {
  const [formData, setFormData] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate()
  const {email, username, password} =formData;
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async(e)=>{
    e.preventDefault()
     try {
      const auth = getAuth()
      const userCredential = await createUserWithEmailAndPassword(auth, email, password)
       updateProfile(auth.currentUser,{
         displayName: username
       })
       const user = userCredential.user
        const formDataCopy ={...formData}
          delete formDataCopy.password
          formDataCopy.timestamp = serverTimestamp()
           await setDoc(doc(db, "users", user.uid),formDataCopy)
           navigate("/")
        } catch (error) {
       console.log(error);
     }
  }
  return (
    <section>
      <h1 className=" text-center text-3xl font-bold mt-8">Sign Up</h1>
      <div className=" flex justify-between flex-wrap items-center px-6 py-12 max-w-6xl mx-auto">
        <div className=" md:w-[67%] lg:w-[50%] mb-11 md:mb-6">
          <img src={image} alt="image" className=" w-full rounded-2xl" />
        </div>
        <div className="w-full md:w-[67%] lg:w-[40%]">
          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <input
              type="text"
              className=" w-full focus:outline-none border  p-3 rounded-lg text-xl text-gray-700 bg-white"
              placeholder="Username"
              id="username"
              onChange={handleChange}
            />
            <input
              type="email"
              className=" w-full focus:outline-none border  p-3 rounded-lg text-xl text-gray-700 bg-white"
              placeholder="Email"
              id="email"
              onChange={handleChange}
            />
            <div className=" relative">
              <input
                type={showPassword ? "text" : "password"}
                className=" w-full focus:outline-none border  p-3 rounded-lg text-xl text-gray-700 bg-white"
                placeholder="Password"
                id="password"
                onChange={handleChange}
              />
              {showPassword ? (
                <AiFillEyeInvisible
                  className=" absolute right-3 top-4 cursor-pointer text-xl"
                  onClick={() => setShowPassword(false)}
                />
              ) : (
                <AiFillEye
                  className=" absolute right-3 top-4 cursor-pointer text-xl"
                  onClick={() => setShowPassword(true)}
                />
              )}
            </div>
            <div className="flex justify-between whitespace-nowrap text-sm sm:text-lg mt-3 mb-5">
              <p>
                Have an account?
                <Link to={"/sign-in"}>
                  <span className="text-blue-500 hover:underline  transition duration-200 ease-in-out hover:opacity-80 ml-1">
                    Sign In
                  </span>
                </Link>
              </p>
              <Link to={"/forgot-password"}>
                <p className="text-blue-500 hover:underline  transition duration-200 ease-in-out hover:opacity-80">
                  Forgot password?
                </p>
              </Link>
            </div>
            <button
              type="submit"
              className=" w-full bg-blue-600 uppercase shadow-md active:bg-blue-800 text-white p-3 rounded-lg hover:bg-blue-900 transition duration-200 ease-in-out text-sm font-medium"
            >
              Sign Up
            </button>
            <div
              className="flex items-center my-4 before:border-t  before:flex-1    before:bg-gray-300

             after:border-t  after:flex-1   after:bg-gray-300
          "
            >
              <p className="text-center font-semibold mx-4">OR</p>
            </div>
            <OAuth />
          </form>
        </div>
      </div>
    </section>
  );
}
