import React, { useState } from "react";
import { RiMenu3Fill } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="bg-white shadow-2xl  sm:px-5 sticky top-0 z-20 w-full">
      <nav className="container py-2 font-bold flex justify-between items-center mx-auto">
        <h1 className="text-gray-400 text-xl">LOGO</h1>
        <ul className="hidden sm:flex">
          <motion.li className="mx-5">
            <Link to={"/"}>Home</Link>
          </motion.li>
          <motion.li className="mx-5 cursor-pointer">
            <ScrollLink
              spy={true}
              smooth={true}
              offset={-50}
              duration={1500}
              to="services"
            >
              Services
            </ScrollLink>
          </motion.li>
          <motion.li className="mx-5">
            <ScrollLink
              spy={true}
              smooth={true}
              offset={-50}
              duration={1500}
              to="about"
            >
              <Link to={"/about"}>About</Link>
            </ScrollLink>
          </motion.li>
          <motion.li className="mx-5 cursor-pointer">
            <ScrollLink
              spy={true}
              smooth={true}
              offset={-50}
              duration={1500}
              to="contact"
            >
              Contact
            </ScrollLink>
          </motion.li>
        </ul>
        <button
          className="sm:hidden"
          onClick={() => {
            setOpen(!open);
          }}
        >
          {!open && <RiMenu3Fill size={25} />}
          {open && <IoMdClose size={25} />}
        </button>
      </nav>

      <nav className="w-full   mx-auto sm:hidden">
        <AnimatePresence>
          {open && (
            <motion.ul
              className="bg-white shadow-b-2xl font-bold flex flex-col justify-center "
              initial={{
                height: 0,
                opacity: 0,
              }}
              animate={{
                height: "auto",
                opacity: 1,
                transition: {
                  duration: 0.5,
                },
              }}
              exit={{
                height: 0,
                opacity: 0,
                transition: {
                  duration: 0.5,
                },
              }}
            >
              <li
                onClick={() => {
                  setOpen(!open);
                }}
                className="my-3 mx-auto hover:bg-black hover:text-white rounded px-5 text-center"
              >
                <Link to={"/"}>Home</Link>
              </li>
              <li
                onClick={() => {
                  setOpen(!open);
                }}
                className="my-3 mx-auto hover:bg-black hover:text-white rounded px-5 text-center"
              >
                <ScrollLink
                  spy={true}
                  smooth={true}
                  offset={-230}
                  duration={1500}
                  to="services"
                  onClick={() => {
                    setOpen(!open);
                  }}
                >
                  Services
                </ScrollLink>
              </li>
              <li
                onClick={() => {
                  setOpen(!open);
                }}
                className="my-3 mx-auto hover:bg-black hover:text-white rounded px-5 text-center"
              >
                <Link to={"/about"}>About</Link>
              </li>
              <li
                
                className="my-3 mx-auto hover:bg-black hover:text-white rounded px-5 text-center"
              >
                <ScrollLink
                  spy={true}
                  smooth={true}
                  offset={-230}
                  duration={1500}
                  to="contact"
                  onClick={() => {
                    setOpen(!open);
                  }}
                >
                  Contact
                </ScrollLink>
              </li>
            </motion.ul>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Header;
