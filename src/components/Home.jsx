import React, { useEffect, useState } from "react";
import jsPDF from "jspdf";

const Home = () => {
  const [sentence1, setSentence1] = useState("A Back end developer");
  const [sentence2, setSentence2] = useState("A Full stack developer");
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    let interval = setInterval(() => {
      setCurrentIndex((currentIndex) => currentIndex + 1);
    }, 200);
    return () => clearInterval(interval);
  }, []);

  const [saving, setSaving] = useState(false);

  const saveResume = () => {
    setSaving(true);
    let doc = new jsPDF("portrait", "px", "a4", false);
    doc.addImage(
      "https://i.ibb.co/W3BLDmk/STANLEY-GITHINJI-MAINA-RESUME.png",
      "png",
      0,
      0,
      417,
      653
    );
    doc.save("StanleyGithinji.pdf");
    setSaving(false);
  };

  return (
    <div
      id="home"
      className=" w-full h-screen md:w-2/3 lg:w-1/2 pt-16 mx-auto flex items-end   max-w-[800px]  p-18  my-14   flex-col"
    >
      <div className="justify-center">
        <h1 className=" text-slate-600 text-3xl sm:text-3xl font-bold ">
          Hi I'm Stanley
        </h1>
        <h2 className="text-3xl sm:text-3xl font-bold  ">
          {sentence1.slice(0, currentIndex)}
        </h2>
        <h2 className="text-3xl sm:text-3xl font-bold  ">
          {sentence2.slice(0, currentIndex)}
        </h2>

        <p className="pt-4 max-w-[780px]">
          Aiming at building websites in digital experiences <br />
          Check out my portfolio and CV below
        </p>
      </div>

      <div
        className=" flex fixed-col top-[3
  5%] left-0 m-2 "
      >
        <ul className="p-1">
          <li className="w-[160px] h-[45px] flex justify-between items-center ml-[-150px] hover:ml-[-10px] duration-200 ">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://www.linkedin.com/in/stanley-githinji-a28649211/"
            >
              Linked In <ion-icon name="logo-linkedin"></ion-icon>
            </a>
          </li>
          <li className="w-[160px] h-[45px] flex justify-between items-center ml-[-150px] hover:ml-[-10px] duration-300 ">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://github.com/Stanley9646"
            >
              Github <ion-icon name="logo-github"></ion-icon>
            </a>
          </li>
          <li className="w-[160px] h-[45px] flex justify-between items-center ml-[-150px] hover:ml-[-10px] duration-300 ">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://twitter.com/StanleyMaina123?t=tNAotLNptSfl_5EJBe1MDg&s=08"
            >
              Twitter <ion-icon name="logo-twitter"></ion-icon>
            </a>
          </li>
          <li className="w-[160px] h-[45px] flex justify-between items-center ml-[-150px] hover:ml-[-10px] duration-300  ">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://mail.google.com/mail/u/0/#inbox"
            >
              Email <ion-icon name="mail-outline"></ion-icon>
            </a>
          </li>
        </ul>
      </div>

      <div>
        <button
          className=" m-6  py-2 px-4 active: bg-black rounded-full hover:bg-emerald-900 hover:scale-110 duration-300 bg-center "
          onClick={saveResume}
        >
          Download CV
        </button>
        <a href="https://github.com/Stanley9646">
          <button
            className=" m-6  py-2 px-4 active: bg-black rounded-full hover:bg-emerald-900 hover:scale-110 duration-300 bg-center "
            
          >
            Projects
          </button>
        </a>
      </div>
    </div>
  );
};

export default Home;
