//IMAGE
import hero from "../assets/images/Hero.png";


import { useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { BsFillPatchCheckFill } from 'react-icons/bs'
const Hero = () => {
  useEffect(() => {

  })
  return (
    <main className="bg-yellow-300 pb-20 sm:pb-0 z-20 overflow-x-hidden">
      <section className="container  pt-5 px-5 mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 ">
            <div className="p-5 sm:p-2   flex ">
              <div className="my-auto  flex justify-end flex-col">
                <h1 className="font-bold scale-110 xxs:text-2xl xs:text-3xl md:scale-100 md:text-5xl lg:text-5xl xl:text-7xl lg:w-3/4  ">
                  Realiable,Trusted and Professional Services
                </h1>
                <div className="grid grid-cols-1 xs:grid-cols-2 gap-4 mt-5 ">
                  <div className=" flex items-center px-3">
                    <BsFillPatchCheckFill />
                    <p className="font-bold ml-1">Office</p>
                  </div>
                  <div className=" flex items-center px-3">
                    <BsFillPatchCheckFill />
                    <p className="font-bold ml-1">Kitchen</p>
                  </div>
                  <div className=" flex items-center px-3">
                    <BsFillPatchCheckFill />
                    <p className="font-bold ml-1">Living Room</p>
                  </div>
                  <div className=" flex items-center px-3">
                    <BsFillPatchCheckFill />
                    <p className="font-bold ml-1">Basement</p>
                  </div>
                </div>
                <div className=" mt-5">
                  <button className=" font-bold uppercase bg-black text-white px-3 sm:px-10 py-1 rounded">
                    <ScrollLink
                      spy={true}
                      smooth={true}
                      offset={-50}
                      duration={1500}
                      to="contact"
                    >
                      Conatct Us
                    </ScrollLink>
                  </button>
                </div>
              </div>
            </div>
            <div className="p-5 sm:p-2   flex">
              <img
                src={hero}
                alt="HeroImage"
                className=" my-5 sm:my-auto scale-150 sm:scale-100"
              />
            </div>
        </div>
      </section>
    </main>
  );
};

export default Hero;
