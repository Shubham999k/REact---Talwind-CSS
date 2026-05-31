import React from "react";

const App = () => {
  return (
    <div>
      <nav className="bg-[#c2410c] h-16 flex justify-between items-center px-5 py-1 lg:px-12 position-sticky">
        <img className=" h-14" src="craveing logo.png" />
        <div className="flex gap-4 text-end items-center justify-content-center">
          <a
            className="text-white px-3 py-1 rounded hover:outline-1 border-white"
            href=""
          >
            Login
          </a>
          <a
            className="text-[#c2410c] bg-amber-50 px-3 py-1 rounded hover:outline-1 hover:border-white hover:bg-transparent hover:text-white "
            href=""
          >
            Register
          </a>
        </div>
      </nav>
      <div className="w-full h-[90vh] relative">
        <img src="foodTable.webp" className="object-cover h-full w-full " />
      </div>
      {/* card */}
      <div className="absolute top-[26%] left-[6.3%]  bg-white px-[2%] py-[1%] lg:w-112.5 rounded-[10px]">
        <h1 className="text-3xl font-bold text-[#c2410c] text-center">
          Welcome Back
        </h1>
        <p className="my-2 text-center">Login to your Cravings account</p>
        <div className="grid gap-2 my-5">
          <label htmlFor="" className="font-bold text-gray-500">
            Email
          </label>
          <input
            className="px-3 py-1.5 border border-[#E7D9C9] rounded w-full focus:outline-[#c2410c]"
            type="text"
            placeholder="Enter your email"
          />
        </div>
        <div className="grid gap-2 my-5">
          <label htmlFor="" className="font-bold text-gray-500">
            Password
          </label>
          <div className="relative ">
            <input
              className="px-3 py-1.5 border border-[#E7D9C9] rounded w-full focus:outline-[#c2410c] "
              type="text"
              placeholder="Enter your password"
            />
            <i class="bi bi-eye-fill absolute right-2 top-1.5"></i>
          </div>
        </div>
        <div className="flex justify-between ">
          <div>
            <input className="accent-[#c2410c]" type="checkbox" name="" id="" />
            <label className="text-gray-500 ms-2">Remember me</label>
          </div>
          <a className="text-[#c2410c]" href="">
            Forgot Password?
          </a>
        </div>
        <button
          href="#"
          className="bg-[#c2410c] text-white font-bold my-4 py-3 rounded w-full hover:bg-[#bc3b07]"
        >
          Login 
        </button>
        <div className="flex items-center justify-center gap-1">
          <hr className="text-zinc-400 w-25" />
          <span className="text-zinc-500 ">Don't have an account</span>
          <hr className="text-zinc-400 w-25" />
        </div>
        <a
          className="text-[#c2410c] flex justify-center m-4 hover:underline"
          href=""
        >
          Create an account
        </a>
      </div>
    </div>
  );
};

export default App;


