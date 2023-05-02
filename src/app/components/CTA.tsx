"use client"; // this is a client component

import Image from "next/image";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Swal from "sweetalert2";
const CTA = () => {
  const handlesubmit = () => {
    Swal.fire({
      toast: true,
      icon: "success",
      text: "We Will contact You Soon !",
      position: "top-end",
      timer: 2000,
      showConfirmButton: false,
    });
  };
  return (
    <>
      <section id="cta">
        <h1 className="text-center font-bold text-4xl">
          Contact Us{" "}
          <hr className="w-6 h-1 mx-auto my-2 bg-teal-500 border-0 rounded"></hr>
        </h1>
        <div className="flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2  py-16 sm:py-32 md:flex-row md:space-x-4 md:text-left">
          <div className="md:mt-2 md:w-1/2">
            <Image
              src="/contactus.gif"
              alt=""
              width={400}
              height={500}
              className="rounded-full shadow-2xl"
            />
          </div>
          <div className="md:mt-2 md:w-3/5">
            <form className="w-full max-w-lg">
              <div className="flex flex-wrap -mx-3 ">
                <div className="w-full px-3">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="name"
                  >
                    Name
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    id="name"
                    type="text"
                    placeholder="John Doe"
                  />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    id="email"
                    type="email"
                    placeholder="johndoe@example.com"
                  />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="message"
                  >
                    Message
                  </label>
                  <textarea
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    id="message"
                    placeholder="Enter your message here"
                  ></textarea>
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-2">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <button
                    className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="button"
                    onClick={handlesubmit}
                  >
                    Send
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default CTA;
