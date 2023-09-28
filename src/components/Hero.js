//IMAGE
import hero from "../assets/images/Hero.png";

import { BsFillPatchCheckFill } from "react-icons/bs";

const Hero = () => {
 
  return (
    <main className="bg-yellow-300  z-20">
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
                  contact us
                </button>
              </div>
            </div>
          </div>
          <div  className="p-5 sm:p-2   flex">
            <img
              src={hero}
              alt="HeroImage"
              className=" my-auto scale-125 sm:scale-100"
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Hero;
