import React from "react";
import section5Img1 from "../../assets/images/section-5-img-1.png";
import section5Img2 from "../../assets/images/section-5-img-2.png";
import section5Img3 from "../../assets/images/section-5-img-3.png";
import section5Img4 from "../../assets/images/section-5-img-4.png";
import section5Img5 from "../../assets/images/section-5-img-5.png";
import section5Img6 from "../../assets/images/section-5-img-6.png";
import section5Img7 from "../../assets/images/section-5-img-7.png";
import Contact from "../../componets/landingPages/Contact";
import {
  appDevBanner,
  appLandingAbout,
  webDevBanner,
  webLandingAbout,
} from "../../constant";
import { Link as ScrollLink } from "react-scroll";
import WhyChooseUs from "../../componets/common/WhyChooseUs";
import EndlessOpportunitiesSection from "../../componets/common/EndlessOpportunitiesSection";
import LandingServices from "../../componets/landingPages/LandingServices";
import UnlockEfficiency from "../../componets/common/UnlockEfficiency";
import Portfolio from "../../componets/common/Portfolio";
import ContactForm from "../../componets/common/ContactForm";
import BrandLogos from "../../componets/common/BrandLogos";
import Testimonials from "../../componets/common/Testimonials";

export const LandingPage = ({ page }) => {
  const isWebDevelopment = Boolean(page === "web-development");
  return (
    <>
      <div id="banner" className="h-screen relative">
        <img
          src={isWebDevelopment ? webDevBanner : appDevBanner}
          className="w-full h-full object-cover object-right absolute"
          alt=""
        />
        <div className="bg-gradient-to-r from-black/70 to-primary/60 absolute w-full h-full"></div>
        <div
          data-aos="fade-up"
          className="pt-[3rem] wrapper flex items-center h-full"
        >
          <div className="relative text-white z-10 px-6 justify-center h-full flex flex-col items-center gap-5 text-center md:max-w-[60rem] mx-auto">
            <div className="rounded-text-box border-white/70 font-medium">
              {isWebDevelopment ? "Web Development" : "App Development"}
            </div>
            <h1 className="heading-1">
              {isWebDevelopment
                ? "Creating Impactful Digital Experiences That Propel Growth"
                : "Developing Cutting-Edge Mobile Apps to Connect the World"}
            </h1>
            <p className="text-white/90 desc">
              {isWebDevelopment
                ? "Professional web development solutions designed to meet your business objectives."
                : "We bring your ideas to life with innovative mobile app solutions that drive business growth from start to finish."}
            </p>
            <ScrollLink
              to="contact"
              smooth
              offset={-90}
              className="primary-btn mt-2"
            >
              Get Started
            </ScrollLink>
          </div>
        </div>
      </div>

      <ContactForm />

      <section className="bg-primary/10 py-[5rem]">
        <div id="about" className="wrapper">
          <div
            data-aos="fade-up"
            className="gradient-rounded-text-box mx-auto lg:mx-0"
          >
            {isWebDevelopment ? "Web Development" : "App Development"}
          </div>
          <div className="flex flex-col-reverse items-center lg:grid grid-cols-2 gap-10 mt-7">
            <div
              data-aos="fade-right"
              className="flex h-full flex-col gap-7 text-center lg:text-start"
            >
              <div className="flex flex-col gap-7">
                <h2 className="heading-2">
                  {isWebDevelopment
                    ? "Transforming Your Vision into Dynamic Web Solutions"
                    : "Designing Smooth and Engaging Mobile App Experiences for the Modern Era"}
                </h2>
                <p className="desc">
                  {isWebDevelopment
                    ? "At Solvionis, we focus on creating powerful, high-performance websites and digital platforms that drive business success online. Whether it's custom web development or responsive design, our solutions are user-centric and visually captivating. Let's bring your vision to life."
                    : "At Solvionis, we excel in crafting intuitive, performance-driven mobile applications tailored to the distinct needs of businesses. Our skilled team merges technical know-how with innovative design to build apps that foster user engagement and business growth."}
                </p>
              </div>
              <div className="flex justify-center lg:justify-start gap-5 mt-4">
                <ScrollLink
                  to="contact"
                  smooth
                  offset={-90}
                  className="primary-btn"
                >
                  Contact Us
                </ScrollLink>
                <ScrollLink
                  to="services"
                  smooth
                  offset={-80}
                  className="secondary-btn"
                >
                  Our Services
                </ScrollLink>
              </div>
            </div>
            <div data-aos="fade-left" className="h-full">
              <img
                src={isWebDevelopment ? webLandingAbout : appLandingAbout}
                className="object-contain max-h-[30rem]"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>

      <LandingServices page={page} />
      <WhyChooseUs />
      <Portfolio page={page} />

      <section className="py-[5rem] bg-background">
        <div className="wrapper text-center flex flex-col gap-3">
          <div
            data-aos="fade-up"
            className="gradient-rounded-text-box mx-auto mb-4"
          >
            Our Solutions
          </div>
          <h1
            data-aos="fade-up"
            className="heading-1 bg-gradient-to-r md:min-h-[5rem] from-primary to-secondary bg-clip-text text-transparent"
          >
            Design & Revolution
          </h1>
          <p data-aos="fade-up" className="desc max-w-[50rem] mx-auto">
            At Solvionis, we understand that in today’s fast-paced digital
            world, both your website and mobile app are more than just
            tools—they are central to your brand’s identity and vital to
            engaging your audience. Whether it's a website or an app, they serve
            as the first point of contact for potential customers and play a
            critical role in business success. In a time when every interaction
            counts, having fast, responsive, and well-designed digital platforms
            is crucial. That's why our development services go beyond the
            basics, offering not just a website or app, but an integrated
            digital experience that drives user engagement, boosts conversions,
            and accelerates business growth.
          </p>
        </div>
      </section>

      <section className="bg-gradient-to-r from-secondary/80 to-primary/80 md:from-secondary/30 md:to-primary/30 overflow-hidden h-[70vh] relative flex items-center">
        <div className="wrapper">
          <div className="flex justify-center md:justify-normal gap-5">
            <div className="absolute -z-10 md:z-10 md:relative flex gap-5">
              <div
                data-aos="fade-up"
                id="to-top"
                className="flex flex-col -translate-y-[20%]"
              >
                <img
                  src={section5Img1}
                  className="h-[10rem] object-contain"
                  alt={"section5Img1"}
                />
                <img
                  src={section5Img2}
                  className="h-[10rem] object-contain"
                  alt={"section5Img1"}
                />
                <img
                  src={section5Img3}
                  className="h-[10rem] object-contain"
                  alt={"section5Img1"}
                />
              </div>
              <div
                data-aos="fade-up"
                id="to-bottom"
                className="flex flex-col translate-y-[20%]"
              >
                <img
                  src={section5Img4}
                  className="h-[10rem] object-contain"
                  alt={"section5Img1"}
                />
                <img
                  src={section5Img5}
                  className="h-[10rem] object-contain"
                  alt={"section5Img1"}
                />
                <img
                  src={section5Img6}
                  className="h-[10rem] object-contain"
                  alt={"section5Img1"}
                />
              </div>
            </div>
            <div
              data-aos="fade-left"
              className="flex z-10 flex-col gap-5 justify-center ml-10"
            >
              <h2 className="text-5xl md:text-6xl lg:text-8xl font-bold font-raleway">
                Design
              </h2>
              <div className="flex items-center gap-2">
                <img
                  src={section5Img7}
                  className="sm:flex hidden h-[3rem] lg:h-[5rem] object-contain"
                  alt=""
                />
                <h2 className="text-5xl md:text-6xl lg:text-8xl font-bold font-raleway">
                  & Recreate
                </h2>
              </div>
              <p className="desc">
                Leverage your existing marketing platforms and sync the data
                seamlessly
              </p>
            </div>
          </div>
        </div>
      </section>

      <UnlockEfficiency />
      <EndlessOpportunitiesSection />
      <Testimonials />
      <BrandLogos />
      <Contact />
    </>
  );
};
