import React from "react";
//IMAGES
import img1 from "../assets/images/img8.jpg";
import img2 from "../assets/images/img7.jpg";
import img3 from "../assets/images/img5.jpg";
//CAROUSEL
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";



const OurWorks = () => {
  return (
    <main className="bg-yellow-300  z-20">
      <section className="container  pt-2 pb-10   px-5 mx-auto">
        <div className="mt-1 flex justify-center">
          <h1 className="text-center text-3xl font-semibold">Our Works</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-5">
          <div>
            <Swiper
              pagination={{ dynamicBullets: true }}
              loop={true}
              autoplay={true}
              modules={[Pagination]}
              className="mySwiper w-full h-full rounded-xl "
              
            >
              <SwiperSlide className="text-center rounded-xl object-cover shadow-2xl  flex justify-center  items-center">
                <img
                  src={img1}
                  alt=""
                  className="block mx-auto w-full rounded-xl h-[100px]  xs:h-[200px] sm:h-[300px] object-cover"
                />
              </SwiperSlide>
              <SwiperSlide className="text-center rounded-xl object-cover shadow-2xl  flex justify-center  items-center">
                <img
                  src={img2}
                  alt=""
                  className="block mx-auto w-full rounded-xl h-[100px]  xs:h-[200px] sm:h-[300px] object-cover"
                />
              </SwiperSlide>
              <SwiperSlide className="text-center rounded-xl object-cover shadow-2xl  flex justify-center  items-center">
                <img
                  src={img3}
                  alt=""
                  className="block mx-auto w-full rounded-xl  h-[100px]  xs:h-[200px] sm:h-[300px] object-cover"
                />
              </SwiperSlide>
            </Swiper>
          </div>
          <div className=" hidden md:block">
            <p className="font-bold text-sm text-gray-900">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci
              doloribus necessitatibus ipsa eaque. Impedit rerum aperiam vitae
              numquam praesentium. Mollitia sequi modi quos quisquam qui
              laudantium expedita ipsum, ratione maxime. Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Ad, fugiat quia ipsa recusandae
              tenetur, explicabo distinctio rem vitae sapiente quod saepe soluta
              tempore optio amet Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, culpa minus nemo fuga omnis explicabo aliquid. Quam mollitia, ut suscipit distinctio dolor nobis sunt necessitatibus expedita ducimus doloremque cumque odit! Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus ullam repudiandae enim facere in  voluptatibus ea deserunt? Animi, magnam.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default OurWorks;
