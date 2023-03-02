import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";

import profile from "../assets/profile.jpg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(true);
  

  useEffect(() => {
    const handleResize = () => {
      setIsOpen(window.innerWidth >= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scrollToSection = (divId) => {
    const section = document.getElementById(divId);
    section.scrollIntoView({ behavior: "smooth" });
    
  };

 
  
  return (
    <>
      <div className="w-1/4 ">
        <button onClick={() => setIsOpen(!isOpen)} className="toggle-button ">
          <ion-icon name="list-outline"></ion-icon>
        </button>

        <div className={` sidebar ${isOpen ? "block" : "hidden"} block`}>
          <div className="flex items-center p-0  ">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="ml-auto p-1 text-white hover:bg-gray-700 "
            >
              {isOpen ? (
                <ion-icon name="close-outline" className=""></ion-icon>
              ) : (
                <ion-icon name="list-outline"></ion-icon>
              )}
            </button>
          </div>
          <div className=" justify-center ">
            <img
              className="justify-center rounded-full object-cover w-40 h-40vh m-5 "
              src={profile}
              alt="profile-picture"
            />
          </div>
          <div className="mx-7">
            <h4 className="text-s uppercase ">
              Stanley Githinji Maina <br></br>
              <span className="text-cyan-300 mb-2 text-xs flex justify-center">
                {" "}
                A SOFTWARE DEVELOPER
              </span>
            </h4>
          </div>

          <div>
            <ul className=" px-16 justify-center text-sm py-5 space-y-2 m-auto  ">
              <li>
                <Link
                  className="cursor-pointer hover:text-cyan-600"
                  to="#"
                  onClick={() => scrollToSection("home")}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className="cursor-pointer hover:text-cyan-600"
                  to="#"
                  onClick={() => scrollToSection("about")}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  className="cursor-pointer hover:text-cyan-600"
                  to="#"
                  onClick={() => scrollToSection("skills")}
                >
                  Skills
                </Link>
              </li>

              <li>
                <Link
                  className="cursor-pointer hover:text-cyan-600"
                  to="#"
                  onClick={() => scrollToSection("contact")}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
