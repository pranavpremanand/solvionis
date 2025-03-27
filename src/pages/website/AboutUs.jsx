import React from "react";
import {
  aboutUsBanner,
  aboutUsGridImg1,
  aboutUsGridImg2,
  aboutUsGridImg3,
  aboutUsGridImg4,
  aboutUsGridImg5,
  aboutUsPageImg,
} from "../../constant";
import UnlockEfficiency from "../../componets/common/UnlockEfficiency";
import aboutUsImg from "../../assets/images/landing-aboutus.png";
import Testimonials from "../../componets/common/Testimonials";

const AboutUs = () => {
  return (
    <>
      <div
        data-aos="fade-down"
        className="h-[40vh] sm:h-[55vh] md:h-[70vh] relative"
      >
        <img
          src={aboutUsBanner}
          className="object-cover object-[100%_0%] h-full w-full"
          alt=""
        />
      </div>
      <div className="pt-[5rem] text-center">
        <div className="wrapper flex flex-col items-center gap-5 mb-[5rem]">
          <div data-aos="fade-up" className="gradient-rounded-text-box">
            About Us
          </div>
          <div className="flex flex-col-reverse items-center lg:grid grid-cols-2 gap-10 mt-7">
            <div data-aos="fade-right" className="flex h-full flex-col gap-7">
              <div className="flex flex-col gap-7 text-center lg:text-start">
                <h2 className="heading-2">
                  Driving Success with Dependable Excellence
                </h2>
                <p className="desc">
                  Welcome to SOLVIONIS, where we’re dedicated to helping
                  businesses thrive in the digital age. We offer a wide range of
                  technology solutions designed to foster growth, streamline
                  operations, and improve customer interactions. Our team is
                  committed to delivering top-quality results, ensuring that
                  each project we undertake is tailored to meet your unique
                  needs and objectives.
                  <br />
                  Since our inception, we’ve focused on one thing: innovation.
                  Over the years, we’ve established ourselves as a trusted
                  partner for businesses across industries, delivering expertise
                  in web development, mobile app development, cloud computing,
                  cybersecurity, artificial intelligence, game development, and
                  cloud migration services. We believe in building lasting
                  relationships with our clients, grounded in trust,
                  collaboration, and a shared commitment to success.
                </p>
              </div>
            </div>
            <div data-aos="fade-left" className="h-full">
              <img
                src={aboutUsImg}
                className="object-contain max-h-[30rem]"
                alt=""
              />
            </div>
          </div>
          {/* <div className="mt-[3rem] grid md:grid-cols-2 gap-5">
            <div
              data-aos="fade-right"
              className="h-full flex items-center overflow-hidden rounded-lg"
            >
              <img
                src={aboutUsPageImg}
                className="scale-125 max-h-[26rem] w-full object-cover"
                alt="about us"
              />
            </div>
            <div data-aos="fade-left" className="h-full">
              <h2 className="heading-2 text-start mb-3">Our Story</h2>
              <p className="desc text-start">
                What started as a small team of passionate tech professionals
                has grown into a dynamic company known for its expertise and
                reliability. From the very beginning, we’ve focused on helping
                businesses leverage technology to stay competitive and meet the
                evolving needs of their customers. As we’ve grown, so has our
                commitment to innovation and providing solutions that truly make
                a difference. We take pride in the fact that our solutions are
                not just technically sound—they’re purpose- driven. Each project
                we work on is guided by an understanding of your business, your
                goals, and the challenges you face. Whether you're looking to
                build a new digital presence, secure your infrastructure, or
                take your operations to the cloud, we have the experience and
                insight to help you succeed.
              </p>
            </div>
          </div> */}
          <h2 data-aos="fade-up" className="heading-2 mt-[4rem]">
            Magic Behind Our IT Solutions
          </h2>
          <p data-aos="fade-up" className="desc max-w-[50rem]">
            We begin by conducting a comprehensive needs assessment to
            understand your specific requirements, challenges, and goals.
          </p>
          <div className="pt-[3rem]">
            <div className="flex flex-col gap-5">
              <div className="flex flex-col-reverse sm:grid text-start grid-cols-2 gap-5 max-w-5xl mx-auto">
                <div
                  data-aos="fade-right"
                  className="rounded-xl p-5 bg-gradient-to-r from-primary/60 to-primary/80"
                >
                  <h6 className="font-bold text-lg font-raleway">
                    Innovation at Heart
                  </h6>
                  <p className="desc mt-2">
                    At Solvionis, innovation is our driving force. We constantly
                    explore emerging technologies and trends to create
                    future-ready solutions that push the boundaries of what’s
                    possible. We aim to deliver solutions that not only solve
                    today’s challenges but anticipate the needs of tomorrow.
                  </p>
                </div>
                <div data-aos="fade-left" className="h-full flex items-center">
                  <img
                    src={aboutUsGridImg1}
                    alt="Innovation at Heart"
                    className="h-full max-h-[15rem] my-auto object-contain mx-auto"
                  />
                </div>
              </div>
              <div className="flex flex-col sm:grid text-start grid-cols-2 gap-5 max-w-5xl mx-auto">
                <div data-aos="fade-right" className="h-full flex items-center">
                  <img
                    src={aboutUsGridImg2}
                    alt="Client-Centric Approach"
                    className="h-full max-h-[15rem] my-auto object-contain mx-auto"
                  />
                </div>
                <div
                  data-aos="fade-left"
                  className="rounded-xl p-5 bg-gradient-to-r from-secondary/60 to-secondary/80"
                >
                  <h6 className="font-bold text-lg font-raleway">
                    Client-Centric Approach
                  </h6>
                  <p className="desc mt-2">
                    We understand that every business is unique, and so are its
                    challenges and goals. We take a highly personalized
                    approach, tailoring each project to align perfectly with
                    your specific needs. From startups to enterprises, we work
                    closely with our clients, building long-term partnerships
                    grounded in trust, transparency, and mutual success.
                  </p>
                </div>
              </div>
              <div className="flex flex-col-reverse sm:grid text-start grid-cols-2 gap-10 sm:gap-5 max-w-5xl mx-auto">
                <div
                  data-aos="fade-right"
                  className="rounded-xl p-5 bg-gradient-to-r from-primary/60 to-primary/80"
                >
                  <h6 className="font-bold text-lg font-raleway">
                    Commitment to Excellence
                  </h6>
                  <p className="desc mt-2">
                    Quality and reliability are at the core of everything we do.
                    We pride ourselves on delivering world-class digital
                    products that are robust, scalable, and secure. Every
                    project undergoes rigorous quality assurance, ensuring that
                    we exceed expectations and industry standards at every turn.
                  </p>
                </div>
                <div data-aos="fade-left" className="h-full flex items-center">
                  <img
                    src={aboutUsGridImg3}
                    alt="Commitment to Excellence"
                    className="h-full max-h-[15rem] my-auto object-contain mx-auto"
                  />
                </div>
              </div>
              <div className="flex flex-col sm:grid text-start grid-cols-2 gap-5 max-w-5xl mx-auto">
                <div data-aos="fade-right" className="h-full flex items-center">
                  <img
                    src={aboutUsGridImg4}
                    alt="Innovation with Purpose"
                    className="h-full max-h-[15rem] my-auto object-contain mx-auto"
                  />
                </div>
                <div
                  data-aos="fade-left"
                  className="rounded-xl p-5 bg-gradient-to-r from-secondary/60 to-secondary/80"
                >
                  <h6 className="font-bold text-lg font-raleway">
                    Innovation with Purpose
                  </h6>
                  <p className="desc mt-2">
                    Technology without purpose is meaningless. At VKM Techno
                    Solutions, we believe in leveraging technology to create
                    meaningful impact—whether it’s streamlining processes,
                    enhancing customer experiences, or driving growth. Our
                    solutions are designed to transform businesses, help them
                    scale, and lead in their industries.
                  </p>
                </div>
              </div>
              <div className="flex flex-col-reverse sm:grid text-start grid-cols-2 gap-5 max-w-5xl mx-auto">
                <div
                  data-aos="fade-right"
                  className="rounded-xl p-5 bg-gradient-to-r from-primary/60 to-primary/80"
                >
                  <h6 className="font-bold text-lg font-raleway">
                    End to End Solutions
                  </h6>
                  <p className="desc mt-2">
                    We offer a complete suite of services, providing holistic
                    support from concept to deployment and beyond. Our goal is
                    to be your trusted partner throughout your entire digital
                    journey—whether it’s building your online presence,
                    automating your operations, or creating immersive
                    experiences for your customers.
                  </p>
                </div>
                <div data-aos="fade-left" className="h-full flex items-center">
                  <img
                    src={aboutUsGridImg5}
                    alt="End to End Solutions"
                    className="h-full max-h-[15rem] my-auto object-contain mx-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="wrapper mt-[5rem]">
          <h2 data-aos='fade-up' className="heading-2">Why Choose Solvionis?</h2>
          <ul className="mt-[2rem] flex flex-col gap-3 list-disc list-outside text-start">
          {whyChooseUsContent.map((item) => (
            <li data-aos='fade-up' key={item.id} className="text-primary">
            <span className="font-raleway font-bold">{item.title}:</span>{" "}
            <span className="desc ml-1">{item.desc}</span>
            </li>
            ))}
            </ul>
        </div> */}
      </div>
      <UnlockEfficiency />
      {/* <OurServices length={3} /> */}
      <Testimonials />
    </>
  );
};

export default AboutUs;
