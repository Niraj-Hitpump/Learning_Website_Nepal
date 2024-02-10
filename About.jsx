import React from "react";
// import Texture from "./assets/mix.jpg"
import lady from "./assets/oneeeeeeee.png"
import onee from "./assets/golden.jpg"
import Teachers from "./Components/Teachers"

// const AImage={
//      backgroundImage:`url(${Texture})`,
//      backgroundColor:"#270c03",
//      backgroundPosition:"center",
//      backgroundRepeat:"no-repeat",
//      backgroundSize:"cover",
//      height:"100%",
//      width:"100%",

// };

const About = () => {
     return <div className="bg-[#edecec]">
          <div  className="flex justify-between md:justify-around">
               <div className="">
                    <h1 data-aos="fade-down" className="font-bold text-4xl md:text-7xl text-[#ec9b3d] p-2 md:mt-4 ">Ranked No.1</h1>
                    <h1 data-aos="fade-up" className="font-bold text-xl md:text-3xl text-[#ec9b3d] p-2 ">Nepal Examination Board in 2023</h1>
                    <img data-aos="slide-left" src={onee} alt="" className="w-[300px] spin p-8 rounded-full hidden md:block" />
               </div>
               <div className="p-4 md:p-10 w-[300px] md:w-[600px]" data-aos="slide-right">
                    <img src={lady} alt="" />
               </div>
          </div>
          <div>
               <Teachers/>
          </div>
          
     </div>;

};

export default About;
