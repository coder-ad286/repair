//FOOTER ICONS
import whatsapp from "../assets/whatsapp.png";
import mobile from "../assets/tele.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer id="contact" className="bg-black  z-20">
      <section className="container  pt-2 pb-10 text-white  px-5 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <div className=" p-5 ">
            <div>
              <h4 className="font-bold text-3xl  text-center">Email Us</h4>
              <p className="text-center text-sm font-bold text-gray-500 mt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
                ipsa ipsam est nemo.
              </p>
              <form action="#" className=" mt-2 flex flex-col justify-center">
                <input
                  type="text"
                  placeholder="Enter Email Address"
                  className="w-3/4 mx-auto rounded focus:outline-none text-black px-1"
                />
                <button className="mt-6 p-1 px-1.5 bg-yellow-300 text-black font-bold w-1/4 mx-auto rounded">
                  Join
                </button>
              </form>
            </div>
          </div>
          <div className="p-5 ">
            <div>
              <img src={whatsapp} alt="" className="w-24 mx-auto" />
              <h4 className="font-bold text-2xl mt-2  text-center">
                Whatsapp Message
              </h4>
              <p className="text-center text-sm font-bold text-gray-500 mt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
                ipsa ipsam est nemo.
              </p>
              <div className="flex justify-center">
                <Link to="https://api.whatsapp.com/send/?phone=%2B916383570296&text=Hi+%22RepairService%22+%2C+I+Need+Your+Services+Today&type=phone_number&app_absent=0" className="mt-3.5   bg-yellow-300 text-black font-bold p-1  rounded">
                  Message Us
                </Link>
              </div>
            </div>
          </div>
          <div className="p-5 ">
            <div>
              <img src={mobile} alt="" className="w-12 mx-auto" />
              <h4 className="font-bold text-2xl mt-2  text-center">
                Telephone Support
              </h4>
              <p className="text-center text-sm font-bold text-gray-500 mt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
                ipsa ipsam est nemo.
              </p>
              <div className="flex justify-center">
                <a href="tel:+916383570296" className="mt-3.5   bg-yellow-300 text-black font-bold p-1  rounded">
                  Call US
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
