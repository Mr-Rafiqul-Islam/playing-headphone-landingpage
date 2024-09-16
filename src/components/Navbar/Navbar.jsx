import React from "react";
import { FaBars } from "react-icons/fa";
import { SlEarphones } from "react-icons/sl";
import { UpdateFollower } from "react-mouse-follower";

const Navbar = () => {
  const Navbar = [
    {
      id: 1,
      name: "Home",
      link: "#home",
    },
    {
      id: 2,
      name: "Services",
      link: "#services",
    },
    {
      id: 3,
      name: "Shop",
      link: "#shop",
    },
    {
      id: 4,
      name: "Blogs",
      link: "#blogs",
    },
    {
      id: 5,
      name: "Contact",
      link: "#contact",
    },
  ];
  return (
    <header className="bg-brandDark py-8">
      <div className="container">
        <nav className="flex justify-between items-center uppercase text-white font-varela">
          {/* __________logo_________ */}
          <div>
            <a href="/" className="text-xl font-bold">
              Choice /{" "}
              <span className="text-white/70 font-extralight">headphone</span>
            </a>
          </div>
          {/* _________menu__________ */}
          <div className="hidden md:block">
            
              <ul className="flex items-center gap-x-4">
                {Navbar.map((item) => (
                  <li key={item.id}>
                    <UpdateFollower
                    mouseOptions={{
                      backgroundColor: "white",
                      zIndex: 999,
                      mixBlendMode: "difference",
                      scale: 5,
                      followSpeed: 1.5,
                    }}
                  >
                    <a
                      href={item.link}
                      className="py-2 px-3 inline-block text-sm"
                    >
                      {item.name}
                    </a>
                  </UpdateFollower>
                  </li>
                ))}
                <div className="text-xl ps-14">
                  <UpdateFollower
                    mouseOptions={{
                      backgroundColor: "white",
                      zIndex: 999,
                      mixBlendMode: "difference",
                      scale: 5,
                      followSpeed: 1.5,
                    }}
                  >
                    <SlEarphones />
                  </UpdateFollower>
                </div>
              </ul>
            
          </div>
          {/* __________icons___________  */}
          <div className="block md:hidden">
            <FaBars className="text-xl" />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
