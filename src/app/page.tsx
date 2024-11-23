// "use client";

import HeroSection from "@/components/heroSection";
import Logosection from "@/components/logosection";
import Category from "@/components/category";
import  Acheivement from "@/components/acheivement";
import Courses from "@/components/courses";
import Team from "@/components/team";
import Testimonials from "@/components/testimonials";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Navbar from "@/components/navbar";


export default function Home() {
 
  return (
   <>
   <Header />
 <Navbar />
 <HeroSection />
  <Logosection />
  <Category />
  < Acheivement /> 
<Courses />
<Team />
 <Testimonials />
 <Footer />  
   </>
  );
}
