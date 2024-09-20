import React from "react";
import Blogs1 from "../../assets/blogs/blog1.jpg";
import Blogs2 from "../../assets/blogs/blog2.jpg";
import Blogs3 from "../../assets/blogs/blog3.jpg";
import Blogs4 from "../../assets/blogs/blog4.jpg";
import { UpdateFollower } from "react-mouse-follower";
import { motion } from "framer-motion";
import { fadeUp } from "../Services/Services";

const BlogsData = [
  {
    id: 1,
    title:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptate.",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptate. Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptate.",
    image: Blogs1,
    link: "#",
  },
  {
    id: 2,
    title:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptate.",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptate. Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptate.",
    image: Blogs2,
    link: "#",
  },
  {
    id: 3,
    title:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptate.",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptate. Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptate.",
    image: Blogs3,
    link: "#",
  },
  {
    id: 4,
    title:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptate.",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptate. Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptate.",
    image: Blogs4,
    link: "#",
  },
];

const Blogs = () => {
  return (
    <section id="blogs" className="bg-gray-50">
      <div className="container py-14">
        <h1 className="text-3xl font-bold text-center font-poppins pb-8">
          Blogs
        </h1>
        <motion.div
          variants={fadeUp(0.4)}
          initial="hidden"
          whileInView="show"
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6"
        >
          {BlogsData.map((item) => (
            <div key={item.id}>
              <UpdateFollower
                mouseOptions={{
                  backgroundColor: "black",
                  zIndex: 9999,
                  followSpeed: 1.5,
                  scale: 5,
                  text: "Read",
                  textFontSize: "3px",
                }}
              >
                <div className="flex flex-col items-center justify-center gap-6 p-5 max-w-[300px] mx-auto shadow-lg rounded-md bg-white hover:-translate-y-2 duration-300">
                  <img src={item.image} alt="" />
                  <div className="space-y-2">
                    <h1 className="text-xl font-bold line-clamp-2 ">
                      {item.title}
                    </h1>
                    <p className="line-clamp-2 ">{item.desc}</p>
                  </div>
                </div>
              </UpdateFollower>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Blogs;
