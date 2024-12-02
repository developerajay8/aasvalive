import React from "react";


export default function page() {
 

  return (
    <>
    {/* <div className='text-[#ffffff] mb-[50px] pb-[80px] max-w-full mx-auto  bg-[#000000] font-handel flex-col justify-center items-center ' >

             <h1 className="font-bold lg:text-[40px] text-[32px] pt-[70px] text-white uppercase  font-handel text-center" >
             Your Ultimate Tech  <br />  Companion
           </h1>
           <p className="pt-[20px] lg:text-[18px] text-[18px] uppercase font-handel text-center" >
           Effortlessly build blogs, API docs, and product guides with Hashnode, <br /> plus  get the flexibility of a headless CMS and more.
           </p>
           <div className='flex justify-center items-center text-center pt-[40px] gap-5'>
           <a href="" className="cta-btn">Explore Now</a>
           <a href="" className="cta-btns">Explore Now</a>
           </div>
           
    </div> */}

{/* <div className="flex items-center justify-center text-center h-[100vh] background-img2">
    <header className="  text-white   px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Innovate Your Future with Cutting-Edge Technology
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Empowering businesses with scalable, secure, and efficient solutions.
        </p>
        <div className="space-x-4">
          <a
            href="#features"
            className="bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-700 transition"
          >
            Get Started
          </a>
          <a
            href="#about"
            className="border border-white py-2 px-6 rounded hover:bg-white hover:text-blue-600 transition"
          >
            Learn More
          </a>
        </div>
      </header>
      </div> */}


<div className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/Hero video 2.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Content Overlay */}
      <div className="relative z-10 flex items-center justify-center top-[200px] h-full bg-opacity-50 text-white">
        <div className="text-center hidden">
        <h1 className="text-4xl md:text-5xl font-bold mb-4" data-aos="slide-down">
          Innovate Your Future with Cutting-Edge Technology
        </h1>
        <div className=""  data-aos="slide-up">
        <p className="text-lg md:text-xl mb-6">
          Empowering businesses with scalable, secure, and efficient solutions.
        </p>
          <div className="space-x-4">
          <a
            href="#features"
            className="bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-700 transition"
          >
            Get Started
          </a>
          <a
            href="#about"
            className="border border-white py-2 px-6 rounded hover:bg-white hover:text-blue-600 transition"
          >
            Learn More
          </a>
        </div>
        </div>
        </div>
      </div>
    </div>
      </>
  );
}
