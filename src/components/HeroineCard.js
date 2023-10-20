

import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import {  useInView } from "react-intersection-observer";

const cardVariant = (delay) => {
  return {
    hidden: {
      opacity: 0,
      y: 100,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay : delay
      }
    }
  }
}

const Card = (props) => {
  const { title, image, id } = props.data;
  const navigate = useNavigate();
  const control = useAnimation();
  const [ref,inView] = useInView();
  useEffect(() => {
      if(inView){
        control.start('visible')
      }else{

      }

  },[control,inView])
  return (
    <motion.div
      className="p-2"
      variants={cardVariant(Number(`0.${id}`))}
      initial="hidden"
      animate={control}
    >
      <div
        key={id}
        className="bg-white hover:scale-110 duration-300 p-3 py-5 shadow-2xl rounded-xl"
        ref={ref}
  
      >
        <img
          src={image}
          alt="Service1"
          className="bg-yellow-300 w-10 h-10 p-2 rounded-full"
        />
        <h4 className="font-bold mt-5 mb-1">{title}</h4>
        <p className="font-bold text-[13px] text-gray-700 mt-1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
          Lorem ipsum dolor, sit amet consectetur adipisicing.
        </p>
        <button
    
          onClick={()=>{navigate(`/service/${id}`)}}
          className="my-3  mb-5 px-2 py-1 rounded-lg shadow-2xl text-sm font-bold bg-yellow-300 text-gray-800"
        >
          More
        </button>
      </div>
    </motion.div>
  );
};

export default Card;
