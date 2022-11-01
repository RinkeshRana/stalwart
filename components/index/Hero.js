import React from "react";

function Hero() {
  return (
    <div className="">
      <div className="flex justify-center items-center h-[600px] md:h-[700px]">
        <div className="text-4xl md:text-6xl lg:text-8xl text-center text-white font-gordita">
          <div>Building website</div>

          <div>
            <span className="text-rose-500">products</span>
            <span className="text-5xl">,</span>
            <span className="text-yellow-400"> brands</span> &
          </div>
          <div>experience</div>
          <div className="text-base mt-8 text-white px-3">
            <div>
              <div className="bg-purple-500 opacity-20 absolute blur-3xl  w-12 md:w-56  h-56 rotate-45 transition-colors overflow-hidden" />
              If you were about to build your website… would you spend hours
              customizing it rather than
            </div>
            <div>
              create a stunning site instantly? Affirm will have you up and
              running in no time.
            </div>
          </div>
          <button className="md:ml-6 text-lg tracking-wider border-2 border-white text-white px-2 py-1 md:px-7 md:py-3 rounded-full  duration-700 hover:bg-yellow-400 hover:text-black font-semibold ">
            GET IN TOUCH &gt;
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;