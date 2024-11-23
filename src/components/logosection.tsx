import React from 'react'
import Image from 'next/image'

const Logosection = () => {
  return (
    <>
    <section className= ' h-[248px] md:h-[236px] w-full pt-6 md:pt-0 flex items-center justify-center md:justify-start bg-[#F7F7F7] flex-wrap '>
      <h5 className="font-bold  font-roboto h-[68px] w-[320px] text-[#000000] ml-2 text-center md:text-start text-[18px] md:text-[24px] " >Trusted by 2000+ companies worldwide.</h5>
      <div className=' flex items-center justify-center'>
      <div className='  grid grid-cols-2  w-[300px] md:w-[1000px]   md:grid-cols-6 gap-2 items-center justify-center'> 
   
         <Image src="/images/Logo1.png" alt=""  width={880} height={56}/>
         <Image src="/images/Logo2.png" alt=""  width={880} height={56}/>
         <Image src="/images/Logo3.png" alt=""  width={880} height={56}/>
         <Image src="/images/Logo4.png" alt=""  width={880} height={56}/>
         <Image src="/images/Logo5.png" alt=""  width={880} height={56}/>
         <Image src="/images/Logo6.png" alt=""  width={880} height={56}/>
        
      </div>
      </div>
    </section>
      
    </>
  )
}

export default Logosection
