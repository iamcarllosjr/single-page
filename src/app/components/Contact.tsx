import React from "react";

const Contact = () => {
  return (
    <div className="flex pt-20">
      <div className="flex w-full flex-col items-center justify-center gap-5 rounded-md bg-black px-10 py-8 md:flex-row">
        <div className="flex flex-col items-center gap-3 text-white md:items-start">
          <h1 className="text-2xl font-semibold">Book a call with me</h1>
          <p className="text-center text-sm md:text-start">
            Id love to have a chat to see how i can help you. The best first
            step is forus to discuss your project during a free consultatio. The
            we can move forward ffrom there.
          </p>
        </div>
        <div className="flex items-center justify-center">
          <button className="w-48 rounded-full bg-red-400 p-4 px-7 py-2 text-white transition-all duration-300 hover:scale-105">
            Free Consultation
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
