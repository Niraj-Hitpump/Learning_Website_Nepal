import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { BsMessenger } from "react-icons/bs";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import img1 from "./assets/niraj.jpg";
import img2 from "./assets/contact4.jpg";

const Contact = () => {
     return(
     <>
     <div className="flex justify-between">
          <div className="md:ml-20 bg-slate-50" data-aos="slide-right">
               <h1 className="font-bold text-4xl p-6 font-cursive">Feel Free To Contact!</h1>
                    <img src={img1} alt="Niraj" className="md:w-[300px] h-[320px] rounded-full ml-12 hover:scale-75 duration-300 "/>
               <div className="flex gap-8 text-4xl p-10">
                    <a href="https://www.facebook.com/profile.php?id=100024146465201&mibextid=rS40aB7S9Ucbxw6v">
                         <FaFacebookSquare className="hover:scale-125"/>
                    </a>
                    <a href="">
                         <BsMessenger className="hover:scale-125" />
                    </a>
                    <a href="">
                         <FaSquareXTwitter className="hover:scale-125"/>
                    </a>
                    <a href="">
                         <FaInstagramSquare className="hover:scale-125"/>
                    </a>
                    <a href="https://www.linkedin.com/in/niraj-kumar-prajapati-78474a264?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app ">
                         <FaLinkedin className="hover:scale-125"/>
                    </a>
               </div>
          </div>
          <div  className="w-[80%] hidden md:block" data-aos="slide-left">
               <img src={img2} alt="contact" />
          </div>
     </div>
     </>
)};

export default Contact;
