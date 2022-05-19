import React from "react";
import heroImg from "../../assets/images/bucketgirl 1.png";

const Landing = () => {
  return (
    <>
      <div className="hero h-screen lg:h-[60vh] bg-accent mt-16">
        <div className="hero-content flex-col lg:flex-row">
          <div className="lg:w-1/2">
            <small
              data-aos="fade-right"
              data-aos-delay="500"
              data-aos-duration="1300"
            >
              Best Quality
            </small>
            <h1
              data-aos="fade-right"
              data-aos-delay="400"
              data-aos-duration="900"
              className="md:text-4xl text-3xl font-bold "
            >
              Professional Cleaning Service
            </h1>
            <p
              data-aos="fade-right"
              data-aos-delay="600"
              data-aos-duration="800"
              className="py-6 max-w-xl"
            >
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button
              data-aos="zoom-in"
              data-aos-delay="1200"
              className="btn btn-primary "
            >
              Get Started
            </button>
          </div>
          <div
            data-aos="fade-left"
            data-aos-delay="700"
            data-aos-duration="1200"
            className="h-[60vh] shrink-0"
          >
            <img src={heroImg} className="hero-img md:h-[60vh]" alt="" />
          </div>
        </div>
      </div>
      <div className="w-5/6 shadow-lg px-11 py-6  bg-base-200 z-100 relative rounded-lg md:mt-[-15px] mt-[-10px] mx-auto ">
        <h1 className="text-primary">Get Free Estimate</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 justify-items-center">
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs m-3"
          />
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs m-3"
          />
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs m-3"
          />
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs m-3"
          />
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs m-3"
          />
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs m-3"
          />
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs m-3"
          />
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs m-3"
          />
        </div>
        <button className="btn btn-primary mt-3">REQUEST A QOUTE</button>
      </div>
    </>
  );
};

export default Landing;
