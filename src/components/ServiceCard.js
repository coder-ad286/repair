import { useState } from "react";


import { IoMdClose } from "react-icons/io";
import { AnimatePresence, motion } from "framer-motion";

const ServiceCard = (props) => {
  console.log(props);

  const { title, image } = props.data.card;
  const [open, setOpen] = useState(false);
  return (
    <div className=" ">
      <div  className="bg-white p-2 rounded-lg relative">
        <div>
          <div className="bg-cover overflow-hidden rounded-lg">
            <img
              src={image}
              alt=""
              className="rounded-lg duration-300 hover:scale-110 hover:cursor-pointer shadow-xl "
            />
          </div>
          <h4 className="font-bold scale-105 hover:scale-100 duration-300 hover:cursor-pointer text-center mt-5 mb-1">
            {title}
          </h4>
          <p className="font-bold scale-105 hover:scale-100 duration-300 text-center text-[13px] text-gray-700 mt-1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            Lorem ipsum dolor, sit amet.
          </p>
          <div className="flex justify-center">
            <button
              className="mt-3 hover:scale-105 duration-300 border hover:bg-yellow-400 mb-1 px-2 py-1 rounded-lg shadow-2xl text-sm font-bold bg-yellow-300 text-gray-800"
              onClick={() => {
                setOpen(!open);
              }}
            >
              More
            </button>
          </div>
        </div>
        <AnimatePresence>
          {open && (
            <motion.div className="bg-black absolute px-1  text-white top-0 w-full h-full left-0 rounded-lg bg-opacity-90"
              initial={{
                 y:100,
                 opacity:0
              }}
              animate={{
                y:0,
                opacity:1,
                transition:{
                   type:'spring',
                   duration:0.7
                }
              }}
              exit={{
                 y:100,
                 opacity:0,
                 transition:{
                  type:'spring',
                  duration:0.7
               }
              }}
            >
              <div className="w-full  flex justify-end pr-2 pt-2">
                <button
                  className="hover:bg-red-400  rounded-full"
                  onClick={() => {
                    setOpen(!open);
                  }}
                >
                  <IoMdClose size={20} />
                </button>
              </div>
              <div>
                <h1 className="font-bold  mt-8 scale-105 hover:scale-100 duration-300 hover:cursor-pointer text-center">
                  {title}
                </h1>
                <p className="text-center w-3/4 sm:w-[80%] mx-auto text-[8px] xs:text-[14px] sm:text-[12px] text-gray-400 mt-5">
                  Lorem, ipsum dolor Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Quo consequatur soluta, inventore voluptas
                  debitis labore quibusdam maxime rerum, qui ab animi quisquam
                  perspiciatis fuga facere! Officiis ullam vitae eligendi
                  perspiciatis? sit amet consectetur adipisicing elit.
                  Consequatur et voluptatem quam libero? Perferendis in minima.
                  
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ServiceCard;
