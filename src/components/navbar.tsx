"use client"
import Image from "next/image";
import { useState } from "react";
import { LuAlignJustify } from "react-icons/lu";
import {  RxCross1} from "react-icons/rx";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
   
  return (
    <>
    <nav className="h-[72px] w-full flex justify-between items-center px-8 md:px-[64px] py-4 lg:py-6 bg-[#F7F7F7] border-b border-black">
      <div className="h-[44px] w-[1452px] flex justify-between items-center   ">
        <div>
           <Image src="/images/DdsgnrLibrary.png" alt="logo" width={130} height={41} />
        </div>
        <div className="h-[44px] w-[1150px]   md:flex  hidden justify-between items-center rounded-md bg-white">
          <ul className="md:h-[44px]  md:w-[910px] flex gap-2 justify-between items-center px-4 " >
            <li className="text-black text-[16px]">Home</li>
            <li className="text-black text-[16px]">Courses</li>
            <li className="text-black text-[16px]">Services</li>
            <li className="text-black text-[16px]">Acheivement</li>
            <li className="text-black text-[16px]">About Us</li> 
            <li className="text-black text-[16px]">Testimonial</li>

          </ul>
          <div className="h-[40px] w-[200px] flex gap-2 ">
            <button className="text-black h-[42px] w-[90px] bg-white rounded-md border-2 border-black px-[10px] py-2 text-[16px]">login</button>
            <button className=" h-[42px] w-[90px] bg-black text-white rounded-md border-2 border-black px-[10px] py-2 text-[16px]">Sign Up</button>
          </div>
        </div>
          <div className="md:hidden flex text-black ">
          <button onClick={toggleMenu}>
          {isOpen ?<RxCross1 size={24} />:<LuAlignJustify size={24} />  }
          </button>
          </div>
      </div>

      {isOpen &&(
        <div className="absolute top-24 right-12 rounded-md w-[80%] pb-10 border-t-2  border-b  border-black  bg-[#F7F7F7] ">
          <ul className="flex flex-col gap-2 px-4 py-2">
          <li className="text-black text-[16px] underline">Home</li>
            <li className="text-black text-[16px]">Courses</li>
            <li className="text-black text-[16px]">Services</li>
            <li className="text-black text-[16px]">Acheivement</li>
            <li className="text-black text-[16px]">About Us</li> 
            <li className="text-black text-[16px]">Testimonial</li>
          </ul>
          <div className=" flex flex-col items-center gap-2 ">
            <button className="text-black h-[42px]  w-[80%] bg-white rounded-md border-2 border-black px-[10px] py-2 text-[16px]">login</button>
            <button className=" h-[42px] w-[80%] bg-black text-white rounded-md border-2 border-black px-[10px] py-2 text-[16px]">Sign Up</button>
          </div>
        </div>
      )}
    

    </nav>
    
    </>
  
  );
}



{/* <nav className="flex justify-between items-center py-4 lg:py-6">
<Link href="/" className="text-3xl font-bold">
  Hooks React
</Link>
<ul className="hidden lg:flex space-x-8">
  <li>
    <Link href="/about">About</Link>
  </li>
  <li>
    <Link href="/contact">Contact</Link>
  </li>
</ul>

<button
  className="lg:hidden flex items-center px-3 py-2 border rounded text-black border-teal-400 hover:text-white hover:border-white"
  // onClick={dabgiya}
>
  <svg
    className="fill-current h-3 w-3"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>Menu</title>
    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0V15z" />
  </svg>
</button>
</nav> */}