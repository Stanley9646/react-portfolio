import React from "react";

function skills() {
  return (
    <div id="skills"
    className="w-full sm:w-1/2 h-screen md:w-2/3 lg:w-1/2 mx-auto pt-16 flex-1 items-end  max-w-[800px]  p-18  my-10    flex-col">
      <div className="flex-1 ml-auto ">
      <div className="m-auto flex-1 flex-col justify-center pb-6 sm:p-2 ">
      <h1 className="text-2xl m-auto font-bold p-4">My skills</h1>
      <p className="text-s m-auto py-0  ">
        Below are my ranging in the expertise of the web development:
      </p>
      </div>

      <div className="skills sm:w-1/2 ">
      <div className='progress'>
        <h3 className="p-4 ml-16">HTML AND CSS</h3>
        
        <div className="progress-bar sm:w-1/2 ">
          <div className="lang ">
            <span className="percent">100%</span>
          </div>
        </div>
        <h3 className="p-4 ml-16">TAILWIND AND BOOTSTRAP</h3>
        <div className="progress-bar">
          <div className="lang2">
            <span className="percent">95%</span>
          </div>
        </div>
        <h3 className="p-4 ml-16">NodeJS AND EXPRESSJS</h3>
        <div className="progress-bar">
          <div className="lang3">
            <span className="percent">55%</span>
          </div>
        </div>
        <h3 className="p-4 ml-16">ReactJS and Javascript</h3>
        <div className="progress-bar">
          <div className="lang4">
            <span className="percent">65%</span>
          </div>
        </div>
        <h3 className="p-4 ml-16">MONGODB</h3>
        <div className="progress-bar">
          <div className="lang5">
            <span className="percent">75%</span>
          </div>
        </div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default skills;
