import React, { useState } from "react";
import Headphone1 from "../../assets/headphone.png";
import Headphone2 from "../../assets/headphone2.png";
import Headphone3 from "../../assets/headphone3.png";
import { FaWhatsapp } from "react-icons/fa";

const Hero = () => {
  const HeadPhoneData = [
    {
      id: 1,
      image: Headphone1,
      title: "Headphones Wireless",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptate.",
      price: "$100",
      modal: "Modal Brown",
      bgColor: "#8b5958",
    },
    {
      id: 2,
      image: Headphone2,
      title: "Headphones Wireless 2",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptate.",
      price: "$100",
      modal: "Lime Green",
      bgColor: "#638153",
    },
    {
      id: 3,
      image: Headphone3,
      title: "Headphones Wireless 3",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptate.",
      price: "$100",
      modal: "Ocean Blue",
      bgColor: "#5d818c",
    },
  ];
  const [activeIndex, setActiveIndex] = useState(HeadPhoneData[0]);

  return (
    <section id="home" className="bg-brandDark text-white font-varela">
      <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[700px]">
        {/* ___________headphone Info___________ */}
        <div className="flex flex-col justify-center py-14 md:py-0 xl:max-w-[500px]">
          <div className="space-y-4 text-center md:text-left">
            <h1 className="text-3xl lg:text-6xl font-bold font-varela">
              {activeIndex.title}
            </h1>
            <p className="text-sm leading-loose text-white/80">
              {activeIndex.desc}
            </p>
            <button
              style={{ backgroundColor: activeIndex.bgColor }}
              className="px-4 py-2 inline-block font-normal rounded-sm"
            >
              Buy and Listen
            </button>
          </div>

          {/* ___________headphone list separator_________ */}
          <div className="flex items-center justify-center md:justify-start gap-4 !mt-24 mb-10">
            <div className="w-20 h-[1px] bg-white"></div>
            <div className="uppercase text-sm">Top Headphones for you</div>
            <div className="w-20 h-[1px] bg-white"></div>
          </div>
          {/* ___________headphone switcher_________ */}
          <div className="grid grid-cols-3 gap-10">
            {HeadPhoneData.map((item) => (
              <div key={item.id} onClick={() => setActiveIndex(item)} className="grid grid-cols-2 place-items-center cursor-pointer">
                <div className="">
                  <img src={item.image} alt="" className="w-[200px]" />
                </div>
                <div className="space-y-2">
                  <p className="text-base font-bold">{item.price}</p>
                  <p className="text-xs font-normal text-nowrap">{item.modal}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* ___________headphone image________ */}
        <div className="flex flex-col items-center justify-end">
          <img src={activeIndex.image} className="w-[300px] md:w-[400px] xl:w-[550px]" alt="" />
        </div>
      </div>

      {/* ___________whatsapp icon_________ */}
      <div className="text-3xl text-white fixed bottom-10 right-10 hover:rotate-[360deg] duration-500 z-[99999]">
        <a href="">
          <FaWhatsapp />
        </a>
      </div>
    </section>
  );
};

export default Hero;
