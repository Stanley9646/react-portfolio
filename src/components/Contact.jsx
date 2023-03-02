import React from "react";

function Contact() {
  return (
    <div id="contact"
    className="w-full h-screen md:w-2/3 lg:w-1/2 pt-16 mx-auto flex items-end   max-w-[800px]  p-18  my-10    flex-col">
      <form className="flex flex-col max-w-[500px] w-full">
        <div className="pb-8">
          <p className="py-2 text-4xl inline border-b-4 border-blue-500">
            Let's get in touch
          </p>
          <p className="text-gray-300 py-4">
            Submit the form below or get me at stanleygithinji@gmail.com{" "}
          </p>
        </div>
        <input
          className="py-2 m-2 bg-slate-300 outline-none "
          type="text"
          placeholder="First Name"
          name="name"
        />
        <input
          className="py-2 m-2 bg-slate-300 outline-none "
          type="text"
          placeholder="Second Name"
          name=" name"
        />
        <input
          className="py-2 m-2 bg-slate-300 outline-none "
          type="text"
          placeholder="Email"
          name="email"
        />
        <textarea
          className="py-2 text-gray-900 bg-slate-300 outline-none m-2"
          type="text"
          rows="5"
          placeholder="Message..."
          name="message"
        ></textarea>
        <a href="https://mail.google.com/mail/u/0/#inbox">
        <button
          type="submit"
          className="px-4 py-3 border-3 mx-auto justify-center text-white hover:bg-blue-700 hover:border-slate-600"
        >
          Lets collaborate
        </button>
        </a>
      </form>
    </div>
  );
}

export default Contact;
