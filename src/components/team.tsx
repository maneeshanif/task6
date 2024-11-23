import React from 'react'
import Image from 'next/image'
type Team = {
  img:string,
  title:string,
  paragraph:string
  
}
const Teams:Team[] = [{

  img:"/images/team/1.png",
  title:"James Nduku",
  paragraph:"Marketing Coordinator"},
  {
    img:"/images/team/2.png",
    title:"Joseph Munyambu",
    paragraph:"Nursing Assistant",
  },
  {
    img:"/images/team/3.png",
    title:"Joseph Ngumbau",
    paragraph:"Medical Assistant",
  },
  {
    img:"/images/team/4.png",
    title:"Erick Kipkemboi",
    paragraph:"Web Designer",
  },
  {
    img:"/images/team/5.png",
    title:"Stephen Kerubo",
    paragraph:"President of Sales",
  },
  {
    img:"/images/team/6.png",
    title:"John Leboo",
    paragraph:"Dog Trainer",
  },


]

const Team = () => {
  return (
    <>
    <section className=' h-[1800px] md:h-[895px] w-full flex flex-col flex-wrap items-center gap-[80px]  px-[24px] md:px-[64px] py-[48px] md:py-[90px]  bg-[#F7F7F7]'>
    <div className='h-[190px] md:h-[109px] w-[360px] md:w-[768px]   '>
     <h2 className='text-center text-black text-[48px] font-bold'> Our team </h2>
    <p className='text-center text-black text-[18px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
    </div>
    <div className='h-[1288px] md:h-[482px]  pr-2 md:pl-14 w-full flex flex-wrap gap-x-[26px] gap-y-[40px]  content-center '>



     {Teams.map((team,index)=><div key={index} className='h-[209px] border-[1px] hover:shadow-xl rounded-lg w-[400px] flex flex-col gap-2 items-center '>
        <div className='h-20 w-20 '>
          <Image src={team.img} alt="" width={80} height={80} />
        </div>
        <h4 className='font-semibold text-xl text-center text-black '>{team.title}</h4>
        <h6 className='text-center text-lg text-black '>{team.paragraph}</h6>
        <div className='h-6 w-[100px] '>
          <Image src="/images/team/Socialicons.png" alt="" width={100} height={24} />
        </div>
      </div>)}


  
    </div>
    </section>
      
    </>
  )
}

export default Team
