import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
    
    <>
        <section className='bg-white h-[1411px] md:h-[900px] w-full  p-[48px] md:p-[82px] '>
          <div className='h-[1380px] md:h-[684px]  w-full flex flex-col gap-2  md:gap-20 items-center '>
            
            <div className=' h-[300px] md:h-[82px] w-[287px] md:w-[1322px] flex flex-wrap flex-row justify-between  '>
              <div className='header  '>
              <h1 className=' text-black text-[18px] font-semibold'>Subscribe to our newsletter</h1>
              <p className=' text-black text-[16px]  '>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
              <div className='h-[82px] w-[300px] md:w-[400px]  flex flex-col gap-0 md:gap-2 '>
                <div className='inputdiv flex gap-2 flex-wrap'>
               <input type="email"  placeholder='Enter your email' className='h-[48px] w-[265px] border-2 border-black rounded-[5px] px-6 py-3'/>
               <button className='h-[48px]  w-[265px] md:w-[117px] text-black  border-2 border-black rounded-[5px]  px-6 py-3'>Subscribe</button>
               </div>
               <p className='text-black text-[12px] text-center md:text-start'>By subscribing you agree to with our Privacy Policy</p>
              </div>
            </div>

            <div className='h-[811px] md:h-[225px] w-[172px] md:w-[1120px]  flex  flex-col md:flex-row  flex-wrap gap-6 md:gap-10  '>
               <div className='w-[172px] md:w-[250px] h-[40px] ' >
                <Image src={"/images/DdsgnrLibrary.png"} alt="logo" width={130} height={40} className=''  />
               </div>

               <div className=' w-[172px] md:w-[250px] h-[225px] flex-col flex items-center md:items-start  gap-4'>
                 <h1 className='text-black text-[16px] font-semibold'>Courses</h1>
                 <div className='w-[172px] md:w-[250px] h-[185px] flex  items-center md:items-start flex-col gap-4 '>
                    <p className='text-black text-[14px]'>Business</p>
                    <p className='text-black text-[14px]'>Development</p>
                    <p className='text-black text-[14px]'>Technology</p>
                    <p className='text-black text-[14px]'>Design</p>
                    <p className='text-black text-[14px]'>Programming</p>
                    </div>
               </div>

               <div className=' w-[172px] md:w-[250px] h-[225px] flex-col flex items-center md:items-start  gap-4'>
                 <h1 className='text-black text-[16px] font-semibold'>Resources</h1>
                 <div className='w-[172px] md:w-[250px] h-[185px] flex  items-center md:items-start flex-col gap-4 '>
                    <p className='text-black text-[14px]'>Career</p>
                    <p className='text-black text-[14px]'>Resume</p>
                    <p className='text-black text-[14px]'>Learning</p>
                    <p className='text-black text-[14px]'>Interview Preparation</p>
                    <p className='text-black text-[14px]'>Jobs</p>
                    </div>
               </div>
               <div className=' w-[172px] md:w-[250px] h-[225px] flex-col flex items-center md:items-start  gap-4'>
                 <h1 className='text-black text-[16px] font-semibold'>About Us</h1>
                 <div className='w-[172px] md:w-[250px] h-[185px] flex  items-center md:items-start flex-col gap-4 '>
                    <p className='text-black text-[14px]'>Contact</p>
                    <p className='text-black text-[14px]'>Help/Support</p>
                    <p className='text-black text-[14px]'>FAQ</p>
                    <p className='text-black text-[14px]'>Terms and Conditions</p>
                    <p className='text-black text-[14px]'>Partners</p>
                    </div>
               </div>
          
            </div>

            <div className= 'h-[145px] md:h-[57px]  w-[180px] md:w-[1120px]  border-t-2 flex flex-wrap flex-col items-center md:items-start pt-2 md:pt-8  border-black '>
              <div className='h-[24px] w-[180px] md:w-[1120px]  flex flex-wrap '>
                <div className='w-[175px] md:w-[564px] h-[22px] flex flex-wrap gap-[12px] md:gap-[24px]  mr-20'>
                   <p className='text-black text-[12px] w-[195px] text-center md:text-start'>2023 Ddsgnr. All right reserved.</p>
                   <p className='text-black text-[12px] text-center md:text-start'>Privacy Policy</p>
                   <p className='text-black text-[12px] text-center md:text-start'>Terms of Service</p>
                   <p className='text-black text-[12px] text-center md:text-start'>Cookies Settings</p>
                </div>
                <span className='text-black h-[32px] md: md:h-[24px] w-[132px]  md:w-[456px] text-[12px] flex  mt-[90px] md:mt-0 items-center md:items-end justify-end'>
               <Image src="/images/SocialLinks.png" alt="" width={132} height={24} />



                </span>

              </div>

            </div>

          </div>
        
        </section>
    </>
      
    
  )
}

export default Footer
