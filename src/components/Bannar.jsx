import React from 'react';

const Banner = () => {
  return (
    <div
      className="relative bg-cover bg-center text-white text-center py-36"
      style={{
        backgroundImage: "url('https://i.ibb.co.com/xfBqcXZ/top-view-wooden-desk-with-black-friday-sticker-notepad.jpg')", // Replace with your image URL
      }} 
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10">
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
          Product Management Made Easy
        </h1>
        <p className="mt-4 text-xl md:text-2xl">Manage your products efficiently with ease</p>
        <button className="mt-6 px-6 py-3 bg-[#feb47b] text-[#333] rounded-lg hover:bg-[#ff7e5f] transition">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Banner;
