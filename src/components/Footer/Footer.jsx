import React from "react";
import {
  FaFacebook,
  FaGoogle,
  FaInstagram,
  FaPhone,
  FaTelegram,
} from "react-icons/fa";
import { FaMapLocation } from "react-icons/fa6";
import Cards from "../../assets/credit-cards.webp";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-primary pt-12 pb-8 text-white">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* company details section  */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <h1 className="text-3xl font-bold font-varela uppercase">Choice</h1>
            <p className="text-sm font-varela max-w-[300px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia,
              voluptate. lorem ipsum dolor sit amet consectetur adipisicing
              elit. Mollitia, voluptate.
            </p>
            <div>
              <p className="flex items-center gap-2">
                <FaPhone />
                +1 (123) 456-7890
              </p>
              <p className="flex items-center gap-2">
                <FaMapLocation />
                123 Main St, Anytown USA 12345
              </p>
            </div>
          </motion.div>
          {/* Quick Link section  */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-6"
          >
            <h1 className="text-3xl font-bold font-varela uppercase">
              Quick Link
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <ul className="space-y-2">
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#">About</a>
                  </li>
                  <li>
                    <a href="#">Contact Us</a>
                  </li>
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
                </ul>
              </div>
              <div>
                <ul className="space-y-2">
                  <li>
                    <a href="#">Services</a>
                  </li>
                  <li>
                    <a href="#">Shop</a>
                  </li>
                  <li>
                    <a href="#">Blogs</a>
                  </li>
                  <li>
                    <a href="#">FAQ</a>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
          {/* Social Link section  */}
          <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
           className="space-y-6">
            <h1 className="text-3xl font-bold font-varela uppercase">
              Follow Us
            </h1>
            <div className="flex items-center gap-3">
              <FaFacebook className="text-3xl hover:scale-105 duration-300 cursor-pointer" />
              <FaInstagram className="text-3xl hover:scale-105 duration-300 cursor-pointer" />
              <FaTelegram className="text-3xl hover:scale-105 duration-300 cursor-pointer" />
              <FaGoogle className="text-3xl hover:scale-105 duration-300 cursor-pointer" />
            </div>
            <div className="space-y-2">
              <p>Payment Methods</p>
              <img src={Cards} alt="" className="w-[80%]" />
            </div>
          </motion.div>
        </div>
        {/* ____Copyright section___  */}
        <p className="text-center mt-8 pt-8 border-t-2 ">
          Copyright &copy; 2024. All Rights Reserved || Choice{" "}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
