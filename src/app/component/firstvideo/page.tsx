import React from "react";


export default function page() {


  return (
    <>




      <div className="relative sm:h-screen h-[500px] w-full overflow-hidden">
        <video
          className="absolute inset-0 sm:w-full max-w-[full] sm:h-full h-[500px] object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/Hero video 2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

       
      </div>



    </>
  );
}
