import React from 'react'
import Image from 'next/image'

const HeroSection = () => {
  return (
    <>
    <section className='h-[930px] md:h-[800px] w-full lg:flex flex-wrap bg-white  '>
    <div className='h-[380px]  md:h-[360px] w-[428px] md:w-[640px] flex flex-col gap-8 pl-[24px] md:pl-32  md:my-40  justify-center  '>
        <h1 className='font-bold text-black font-roboto  w-[360px] md:w-[500px]  text-[40px] md:text-[56px]'>Learn new skills online with ease</h1>
        <p className='font-roboto text-black  w-[360px] md:w-[500px] text-[18px]' >Discover a wide range of courses covering a variety of subjects,taught by experts instructors.</p>
        <div className='flex  gap-4   justify-start'>
        <button className='w-[178px] text-white hover:bg-white hover:text-black hover:border-2 hover:border-black flex justify-center items-center h-[48px]  bg-[#000000] rounded-md'>Start learning now</button>
        <button className='w-[178px] text-white  hover:bg-white hover:text-black hover:border-2 hover:border-black flex justify-center items-center h-[48px] bg-[#000000] rounded-md'>Start learning now</button>
        </div>
    </div>

    <div className='  w-[410px]  h-[780px] md:w-[640px] md:h-[900px] pb-6  md:right-24 absolute  '>
        <Image src={"/images/hero.png"} alt="heropage" width={640} height={900} className=''  />
    </div>


    </section>
      
    </>
  )
}

export default HeroSection



// import React from "react";

// const HeroSection = () => {
//   return (
//     <section className="flex flex-col lg:flex-row items-center justify-between px-6 lg:px-20 py-16 bg-white">
//       {/* Text Section */}
//       <div className="max-w-lg text-center lg:text-left">
//         <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
//           Learn new skills <br />
//           <span className="text-blue-600">online</span> with ease:
//         </h1>
//         <p className="text-gray-600 mt-4">
//           Discover a wide range of courses covering a variety of subjects, taught by expert instructors.
//         </p>
//         {/* Buttons */}
//         <div className="mt-6 flex justify-center lg:justify-start gap-4">
//           <button className="bg-black text-white py-3 px-6 rounded-lg hover:bg-gray-800">
//             Start learning now
//           </button>
//           <button className="bg-transparent border border-black text-black py-3 px-6 rounded-lg hover:bg-gray-100">
//             Explore Courses
//           </button>
//         </div>
//       </div>

//       {/* Image Section */}
//       <div className="mt-10 lg:mt-0">
//       <Image src={"/images/hero.png"} alt="heropage" width={640} height={900}  />
//       </div>
//     </section>
//   );
// };

// export default HeroSection;

