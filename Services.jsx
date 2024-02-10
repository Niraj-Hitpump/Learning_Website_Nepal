import React from "react";
// import ani from "./assets/ani2.gif"
import Service from "./Components/Service";
import Box from "./Components/Box";
import BgTexture from  "./assets/cover.jpg"

const bgImage={
     backgroundImage:`url(${BgTexture})`,
     backgroundColor:"#270c03",
     backgroundPosition:"center",
     backgroundRepeat:"no-repeat",
     backgroundSize:"cover",
     height:"100%",
     width:"100%",
     '@media (min-width: 768px)': { // Media query for devices with a minimum height of 768px
          backgroundSize: "140%", // Adjust the size according to your preference
     },
     
};

const Services = () => {
     return(
          <>
          <div  style={bgImage}  className="md:p-4" data-aos="slide-left">
               <div className="md:py-20">
                    <h1 data-aos="flip-right" className="font-bold text-[30px] md:text-[60px] text-[#4cc3d8]  font-cursive p-2 ">Learn With Us</h1>
                    <h1 data-aos="fade-left" className="font-bold text-[30px] md:text-[60px] text-[#4cc3d8] font-cursive p-2">Grow With Us</h1>
                    <button data-aos="zoom-in" className="font-bold text-white bg-[#c38484] p-2 md:p-4 rounded-xl m-4 md:m-8 px-3 md:px-4">Demo video</button>
               </div>
               {/* <div>
                    <img src={ani} className="w-[500px]"/>
               </div> */}
          </div>

          <Box/>
          <Service/>
          </>
     )
     
};

export default Services;
