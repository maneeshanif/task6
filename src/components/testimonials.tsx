import React from 'react'
import Image from 'next/image'
  
type Card = {
  img:string,
  title:string,
  paragraph:string
}

const Cards:Card[] = [
  {
    img:"/images/team/3.png" ,
    title:"James Nduku",
    paragraph:"Software Developer"
  },  
  {
    img:"/images/team/1.png" ,
    title:"Erick Kipkemboi",
    paragraph:"Scrum Master"
  },  
  {
    img:"/images/team/6.png" ,
    title:"Stephen Kerubo",
    paragraph:"UI/UX Designer"
  },
  
]

const Testimonials = () => {
  return (
    <>
    <section className='h-[1449px] md:h-[830.90px] w-full flex flex-col gap-[80px]  px-[18px] md:px-[64px] py-[60px] bg-[#F7F7F7] overflow-x-hidden md:py-[116px]  '>
    <div className='h-[109px] w-[360px] md:w-[600px] pl-0 md:pl-20   '>
     <h2 className=' text-black text-center md:text-start text-[28px] md:text-[48px] font-bold'> Customer testimonials</h2>
     <p className=' text-black text-center md:text-start text-[18px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
    </div>
    <div className='h-[420px] w-full flex flex-wrap gap-12 px-[30px] md:px-[90px]  '>
    

    {Cards.map((card,index)=><div key={index} className='h-[321.89px] w-[362.67px]  border-2 border-black p-8 gap-6 flex flex-col '>
           <div className='h-[19px] w-[116px]'>
            <Image src="/images/team/Stars.png" alt="heropage" width={100} height={19} className='h-[19px] w-[116px]' />
           </div>
           <p className='text-black'>&quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.&quot;</p>
           <div className=' h-[56px] w-[200px]  flex '>
          <div className='h-[56px] w-[56px]  '>
            <Image src={card.img} alt="heropage" width={56} height={56} className='rounded-full'  />
          </div>
          <div className='w-[150px] h-[48px] pl-1'><h4 className='text-[16px]  text-black font-semibold'>{card.title}</h4> <h6 className='text-[14px] text-black '>{card.paragraph}</h6></div>
           </div>
     </div>)}



    </div>

    </section>
      
    </>
  )
}

export default Testimonials
