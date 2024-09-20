import React from "react";
import { UpdateFollower } from "react-mouse-follower";

const BannerText = () => {
  return (
    <section className="py-12 text-center font-varela">
      <div className="container">
        <div className="bg-gradient-to-t from-primary to-primary/70 text-white rounded-3xl p-8 hover:scale-105 transition-all duration-500 hover:shadow-2xl">
          <UpdateFollower
            mouseOptions={{
              backgroundColor: "balck",
              zIndex: 9999,
              followSpeed: 0.5,
              scale: 10,
              mixBlendMode: "screen",
            }}
          >
            <p className="text-4xl font-bold max-w-[700px] mx-auto leading-normal">
              Headphones With Good Quality And Affordable Price
            </p>
          </UpdateFollower>
        </div>
      </div>
    </section>
  );
};

export default BannerText;
