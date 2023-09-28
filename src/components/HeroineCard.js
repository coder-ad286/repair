import React from "react";
import { useNavigate } from "react-router-dom";



const Card = (props) => {
  const { title, image, id } = props.data;
  const navigate = useNavigate();
  
  const clickHandler = () => {
    navigate(`/service/${id}`)
  }
  return (
    <div className="p-2">
      <div  key={id} className="bg-white hover:scale-110 duration-300 p-3 py-5 shadow-2xl rounded-xl">
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
          onClick={clickHandler}
          className="my-3  mb-5 px-2 py-1 rounded-lg shadow-2xl text-sm font-bold bg-yellow-300 text-gray-800"
        >
          More
        </button>
      </div>
    </div>
  );
};

export default Card;
