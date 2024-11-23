import React from 'react'

const Acheivement = () => {
  return (
    <>
    <section className='h-[451px] md:h-[488px]  w-screen md:w-full  flex flex-col items-center  md:flex-wrap justify-center gap-10  bg-white'>
        <div className='purple px-4 md:px-28'>
            <h2 className='text-center text-[32px] md:text-[48px] text-black font-bold'>Our Achivements</h2>
            <p className='text-center text-[18px] text-black '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</p>
      </div>


     <div className='  grren  md:w-full  md:h-[96px] flex flex-wrap justify-center gap-10 '>
      <div className=' w-[360px] md:w-[616px] flex  justify-center gap-10 items-center red '>
        <div className=' h-[60px] md:h-[80px]  w-[142px] md:w-[296px] '><h3 className='text-[40px] font-bold text-black'>+200</h3> <p className='text-[18px] text-black pl-4 '>Courses</p> </div>
        <div className=' h-[60px] md:h-[80px]  w-[112px] md:w-[230px]'><h3 className='text-[40px] font-bold text-black'>50K</h3> <p className='text-[18px] text-black  '>Mentors</p> </div>
      </div>
      <div className=' w-[360px] md:w-[616px] flex  justify-center gap-10 items-center red '>
        <div className=' h-[60px] md:h-[80px] w-[142px] md:w-[296px]'><h3 className='text-[40px] font-bold text-black'>370K</h3> <p className='text-[18px] text-black pl-4 '>Students</p> </div>
        <div className=' h-[60px] md:h-[80px] w-[112px]  md:w-[230px]'><h3 className='text-[40px] font-bold text-black'>100+</h3> <p className='text-[18px] text-black  '>Recognition</p> </div>
      </div>


     </div>




    </section>
      
    </>
  )
}

export default Acheivement
