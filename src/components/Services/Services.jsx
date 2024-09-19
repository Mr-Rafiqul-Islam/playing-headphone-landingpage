import React from "react";
import Icon1 from "../../assets/icons/obj1.png";
import Icon2 from "../../assets/icons/obj2.png";
import Icon3 from "../../assets/icons/obj1.png";
import { UpdateFollower } from "react-mouse-follower";

const ServiceData = [
  {
    id: 1,
    icon: Icon1,
    title: "Security",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptate.",
    link: "#",
    delay: 0.5,
  },
  {
    id: 2,
    icon: Icon2,
    title: "Guarantee",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptate.",
    link: "#",
    delay: 0.8,
  },
  {
    id: 3,
    icon: Icon3,
    title: "Affordability",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptate.",
    link: "#",
    delay: 1.1,
  },
];
const Services = () => {
  return (
    <section id="services" className="bg-gray-100 font-poppins py-8">
      <div className="container py-14">
        <h1 className="text-3xl font-bold text-center pb-10">Services</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {ServiceData.map((item) => (
          <UpdateFollower
          key={item.id}
            mouseOptions={{
              backgroundColor: "white",
              zIndex: 999,
              followSpeed: 0.5,
              scale: 5,
              rotate: 720,
              mixBlendMode: "darken",
              backgroundElement: (
                <div>
                  <img src={item.icon} alt="" />
                </div>
              ),
            }}
          >
            <div className="flex flex-col items-center justify-center p-5 max-w-[300px] mx-auto shadow-lg rounded-xl bg-white" key={item.id}>
              <img src={item.icon} alt="" className="w-[100px] mb-4" />
              <div className="text-center space-y-2">
                <h1 className="text-2xl font-bold">{item.title}</h1>
                <p className="text-center text-sm text-black/75">{item.desc}</p>
              </div>
            </div>
          </UpdateFollower>
        ))}
      </div>
      </div>
    </section>
  );
};

export default Services;
