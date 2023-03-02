import React from "react";
import profile from "../assets/profile.jpg";

function about() {
  return (
    <div  id="about"
    className="w-full h-screen md:w-2/3 lg:w-1/2 mx-auto flex justify-center pt-16 max-w-[800px]  p-18  my-10    flex-col">
      <div className="flex-1   ">
        <h1 className="text-2xl pt-3">About Me</h1>
        <div>
          <h2 className="text-3xl justify-center align-center text-gray-400">
            Who am 1?
          </h2>
          <div className="flex flex-col md:flex-row  ">
            <img
              className="justify-center rounded-full float-left object-cover w-40 h-45vh m-5 "
              src={profile}
              alt="profile-picture"
            />
            </div>
            
          <div>
            <p className="">
              I am Stanley Githinji Maina A software engineer currently a
              student in Muranga University Of technology.
              <br />
              I am a well founded software developer in web development
              interacting with vanilla javascript, NodeJS and ReactJS. <br />
              Also an active participant in the GDSC community where we
              collaborate actively in our projects and improving our skills.
              <br /> Passion in building my websites and eager to learn and try
              new things in my journey.
              <br />
              Delivery of systems in an up-to-date technology is my major key
              goal in my projects.
              <br/>
        Aspiring cloud practitioner
            </p>
          </div>
        </div>

        <div>
          <a href="https://mail.google.com/mail/u/0/#inbox">
          <button
            className=" m-6  py-2 px-4 active: bg-black rounded-full hover:bg-emerald-900 hover:scale-110 duration-300 bg-center "
            onClick
          >
            Contact Me
            
          </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default about;
