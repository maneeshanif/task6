import React from 'react'
import Image from 'next/image'

type Categories ={ id: number; title: string; subtitle: string; img: string }

const Categories:Categories[] = [
   {
      id:1,
      title:"Design & Development",
      subtitle:"50+ Courses Available",
      img: "/images/categories/1.png",
   },
   {
      id:2,
      title:"Marketing",
      subtitle:"50+ Courses Available",
      img: "/images/categories/2.png",
   },
   {
      id:3,
      title:"Development",
      subtitle:"50+ Courses Available",
      img: "/images/categories/3.png",
   },
   {
      id:4,
      title:"Communication",
      subtitle:"50+ Courses Available",
      img: "/images/categories/4.png",
   },
   {
      id:5,
      title:"Digital Marketing",
      subtitle:"50+ Courses Available",
      img: "/images/categories/5.png",
   },
   {
      id:6,
      title:"Self Development",
      subtitle:"50+ Courses Available",
      img: "/images/categories/6.png",
   },
   {
      id:7,
      title:"Business",
      subtitle:"50+ Courses Available",
      img: "/images/categories/7.png",
   },
   {
      id:8,
      title:"Finance",
      subtitle:"50+ Courses Available",
      img: "/images/categories/8.png",
   },
   {
      id:9,
      title:"Consulting",
      subtitle:"50+ Courses Available",
      img: "/images/categories/9.png",
   },
] 

const Category = () => {
  return (
    <>
    <section className=' h-[2100px] md:h-[1049px] w-full  flex-col gap-[96px] bg-white  flex items-center py-36 '>
     <div className=' h-[162px] md:h-[109px] md:w-[768px] w-[385px]'>
      <h2 className=' text-[32px] md:text-5xl font-bold text-black '>Explore Courses By Category</h2> <br />
      <p className='text-black text-[18px]'>Discover a wide range of courses covering a variety of subjects, taught by expert instructors.</p>
     </div>
     <div className='h-[1500px] md:h-[636px]  flex gap-10 px-4 md:px-20  flex-wrap w-full  '>

      {Categories.map((category) => (
        <div key={category.id} className='h-[132px] flex gap-5  p-3 md:p-4 w-[385px] md:w-[410.67px] bg-[#F7F7F7]'>
        <div className='h-[100px] w-[100px]  '>
           <Image src={category.img} alt="heropage" width={100} height={100} className=''  />
          </div>
        <div className='h-[57px] text-black mt-4 w-[246.67px] '>
           <h4 className='text-[20px] font-semibold'>{category.title}</h4>
           <p className='text-[18px]'>{category.subtitle}</p>
        </div>
       </div>
      ))}


     </div>

     <button className='text-[16px] text-black py-[17px] px-[32px] mr-4 border-[2px] border-black hover:bg-black hover:text-white rounded-md '>View All Courses</button>

    </section>
      
    </>
  )
}

export default Category
