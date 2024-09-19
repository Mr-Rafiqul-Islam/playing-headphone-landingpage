import React from "react";
import Headphone4 from "../../assets/headphone4.png";
import { motion } from "framer-motion";
import { UpdateFollower } from "react-mouse-follower";
import { fadeUp } from "../Services/Services";

const Banner = () => {
  return (
    <section id="shop" className="">
      <div className="container py-14 grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 gap-12">
        {/* ________Banner Img_________ */}
        <div>
          <motion.img
            initial={{ opacity: 0, x: -100 ,rotate:-180}}
            whileInView={{ opacity: 1, x: 0 ,rotate:0}}
            transition={{ duration: 0.8,delay: 0.2, ease: "easeInOut" }}
            src={Headphone4}
            className="w-[300px] md:w-[400px] "
            alt=""
          />
        </div>

        {/* ________Banner Text Info_________ */}
        <div className="flex flex-col justify-center">
          <div className="space-y-4 text-center md:text-left lg:max-w-[450px]">
            <motion.h1 variants={fadeUp(0.7)}
            initial="hidden" whileInView="show" className="text-3xl lg:text-4xl font-semibold font-poppins capitalize">
              the latest headphones with the latest technology
            </motion.h1>
            <motion.p variants={fadeUp(0.9)}
            initial="hidden" whileInView="show" className="text-sm text-black/80">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum
              dolorem modi itaque ex, sit odio tenetur laboriosam aut, saepe
              delectus iusto quos nam cum sed. Esse quae provident modi? Ab.
            </motion.p>
            <UpdateFollower
            mouseOptions={{
              backgroundColor: "white",
              zIndex: 9999,
              followSpeed: 0.5,
              scale: 5,
              mixBlendMode: "difference",
              
            }}>  
            <motion.button variants={fadeUp(1.1)}
            initial="hidden" whileInView="show"  className="border-2 border-[#e33343] text-[#e33343] px-6 py-2 rounded-md hover:bg-[#e33343] hover:text-white duration-500 transition-all">
              Shop Now
            </motion.button>
            </UpdateFollower>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
