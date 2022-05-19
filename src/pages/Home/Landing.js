import React from "react";
import heroImg from "../../assets/images/bucketgirl 1.png";

const Landing = () => {
  return (
    <div class="hero min-h-screen bg-accent mt-7">
      <div class="hero-content flex-col lg:flex-row-reverse">
        <img src={heroImg} class="md:max-w-lg" alt="" />
        <div>
          <small className="">Best Quality</small>
          <h1 class="text-5xl font-bold ">Professional Cleaning Service</h1>
          <p class="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button class="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Landing;
