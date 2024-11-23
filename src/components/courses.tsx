import React from 'react'
import Image from 'next/image'

type Courses ={
  id:number,
  img:string,
  title:string,
  heading:string,
  paragraph:string,
  
  }

  const CoursesData: Courses[] = [
    {
      id:1,
      img:"/images/courses/1.png",
      title:"Design",
      heading:"UX/UI Design 201",
      paragraph:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    },
    {
      id:2,
      img:"/images/courses/2.png",
      title:"Programmimg",
      heading:"Introduction to Python",
      paragraph:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    },
    {
      id:3,
      img:"/images/courses/3.png",
      title:"Business",
      heading:"Data Analysis for Beginners",
      paragraph:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    },
    {
      id:4,
      img:"/images/courses/4.png",
      title:"Art",
      heading:"Art Specialization",
      paragraph:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    },
    {
      id:5,
      img:"/images/courses/5.png",
      title:"Law",
      heading:"Rule of Law",
      paragraph:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    },
    {
      id:6,
      img:"/images/courses/6.png",
      title:"Tech",
      heading:"Introduction to webflow",
      paragraph:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    },
  
  ]


const Courses = () => {
  return (
    <>
    <section className='h-[3802px] md:h-[1742px] w-full  flex items-center bg-white flex-col py-[96px] gap-8 '>
        <div className='h-[118px] w-[336px] md:w-[768px] my-[10px] '>
     <h1 className='text-center text-black text-[56px] font-bold'> Courses</h1>
    <p className='text-center text-black text-[18px]'>Your Ultimate Guide to learning</p>
        </div>
        <div className='w-[336px] h-[40px] flex items-center justify-center gap-8 '>
            <span className='text-[16px] text-black border-b-2 border-black '>Popular</span>
            <span className='text-[16px] text-black'>Recommended</span>
            <span className='text-[16px] text-black'>Best  Price</span>
        </div>

        <div className=' h-[3300px] md:h-[1200px] w-full flex-wrap gap-8 md:gap-10  px-[11.9px]  md:px-20 align-center flex'>
        {/* justify-center  px-3  md:px-20 */}
        {CoursesData.map((course) => (
          <div key={course.id} className='h-[500px] md:h-[534px] w-[360px] md:w-[416px] bg-[#F7F7F7]'>
            <div className='h-[300px] w-[360px] md:w-[416px]'>
              <Image src={course.img} alt="image" width={416} height={300} className='h-[300px] w-[360px] md:w-[416px] ' />
            </div>
            <div className='h-[220px] w-[416px] flex flex-col gap-2 px-[14px] md:px-[16px] py-[24px] '>
                <p className='text-black  text-[14px] font-semibold'>{course.title}</p>
                <h5 className= ' text-black text-[24px] font-bold'>{course.heading}</h5>
                <p className=' text-black text-[14px] md:text-[16px] '>{course.paragraph}</p>
                <button className='h-[40px] w-[117px] text-black  border-2 border-black rounded-md inline '>Enroll Now</button>
                {/* <button >$400</button> */}
                {/* <p>$400</p> */}
            </div>
          </div>
        ))}
         </div>
        <button className='text-[16px] py-[17px] px-[32px] mr-4 border-[2px] border-black  rounded-md '>View All Courses</button>



    </section>
      
    </>
  )
}

export default Courses
