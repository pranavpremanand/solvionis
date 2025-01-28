import React from "react";
import { Link } from "react-router-dom";

const UnlockEfficiency = () => {
  return (
    <section className="py-[5rem] bg-primary/10">
      <div
        data-aos="fade-up"
        className="wrapper flex flex-col items-center gap-5 text-center"
      >
        <div className="gradient-rounded-text-box">Unlock Efficiency</div>
        <h2 className="heading-2">
          Ignite Innovation through Our IT Solutions
        </h2>
        <p className="desc max-w-[40rem] text-center">
          Enabling businesses to thrive and excel in the dynamic and competitive
          digital world.
        </p>
        <Link to="/contact-us" className="primary-btn mt-3">
          Contact Us
        </Link>
      </div>
    </section>
  );
};

export default UnlockEfficiency;
