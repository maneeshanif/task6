import React from 'react'
import Image from 'next/image'

const Header = () => {
  return (
    < >
        <div className='h-[54px] w-full hidden md:block bg-[#F7F7F7]'>
            
                < div className='h-[54px] border-b border-black w-full flex items-center justify-between px-16'>
                <div className='flex  gap-4'>
                <p className='text-black'>Phone Number: 956 742 455 678</p>
                <span className='text-black'>|</span>
                <p className='text-black'>Phone Number: 956 742 455 678</p>
                </div>
                <Image src="/images/SocialLinks.png" alt="logo" width={130} height={40} className=''  ></Image>
                </div>
            

        </div>
                <div className='h-[20px] hidden md:block w-full bg-white'></div>
      
    </>
  )
}

export default Header
