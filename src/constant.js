import logoImg from "./assets/logo/logo.png";
import whyChooseUsIcon1 from "./assets/images/ph_target-light.png";
import whyChooseUsIcon2 from "./assets/images/mage_light-bulb.png";
import whyChooseUsIcon3 from "./assets/images/tdesign_user-talk.png";
import whyChooseUsIcon4 from "./assets/images/healthicons_ui-secure-outline.png";
import whyChooseUsPng from "./assets/images/whychooseus-png.png";
import faqPng from "./assets/images/faq-character.png";
import appDevBanner from "./assets/images/app-dev-banner.jpg";
import webDevBanner from "./assets/images/web-landing-banner.jpg";
import webLandingAbout from "./assets/images/web-landing-about1.png";
import appLandingAbout from "./assets/images/app-landing-about.png";
import endlessOpportunitiesImg1 from "./assets/images/section-8-img-1.png";
import endlessOpportunitiesImg2 from "./assets/images/section-8-img-2.png";
import endlessOpportunitiesImg3 from "./assets/images/section-8-img-3.png";
import homeBannerVideo from "./assets/videos/home-banner.mp4";
import defaultBanner from "./assets/images/banner.webp";
import aboutUsBanner from "./assets/images/about-us-banner.jpg";
import aboutUsGridImg1 from "./assets/images/aboutus-png1.png";
import aboutUsGridImg2 from "./assets/images/aboutus-png2.png";
import aboutUsGridImg3 from "./assets/images/aboutus-png3.png";
import aboutUsGridImg4 from "./assets/images/aboutus-png4.png";
import aboutUsGridImg5 from "./assets/images/aboutus-png5.png";
import aboutUsPageImg from "./assets/images/about-us-pageImg.jpg";
import { ReactComponent as EcommerceIcon } from "./assets/svgs/ecommerce.svg";
import { ReactComponent as SocialMediaIcon } from "./assets/svgs/socialmedia.svg";
import { ReactComponent as LandingPageIcon } from "./assets/svgs/landingpage.svg";
import { ReactComponent as CustomWebsiteIcon } from "./assets/svgs/customwebsite.svg";
import { ReactComponent as IosIcon } from "./assets/svgs/iosdevelopment.svg";
import { ReactComponent as AndroidIcon } from "./assets/svgs/androiddevelopment.svg";
import { ReactComponent as FlutterIcon } from "./assets/svgs/flutterdevelopment.svg";
import { ReactComponent as HybridAppIcon } from "./assets/svgs/hybridappdevelopment.svg";

import { lazy } from "react";
const Home = lazy(() => import("./pages/website/Home"));
const Services = lazy(() => import("./pages/website/Services"));
const ContactUs = lazy(() => import("./pages/website/ContactUs"));
const AboutUs = lazy(() => import("./pages/website/AboutUs"));

export {
  logoImg,
  whyChooseUsPng,
  whyChooseUsIcon1,
  whyChooseUsIcon2,
  whyChooseUsIcon3,
  whyChooseUsIcon4,
  faqPng,
  appDevBanner,
  webDevBanner,
  webLandingAbout,
  appLandingAbout,
  endlessOpportunitiesImg1,
  endlessOpportunitiesImg2,
  endlessOpportunitiesImg3,
  homeBannerVideo,
  defaultBanner,
  aboutUsBanner,
  aboutUsGridImg1,
  aboutUsGridImg2,
  aboutUsGridImg3,
  aboutUsGridImg4,
  aboutUsGridImg5,
  aboutUsPageImg,
};

// company details
export const companyDetails = {
  phone: "+91-9381452155",
  address:
    "R SEENAPPA, SITE NO-26, TC PALYA CROSS, 1 VINAYAKA LAYOUT, BATTRAHALLI, 560049.",
  email: "solvionis@gmail.com",
  facebook: "https://www.facebook.com/profile.php?id=61572961121013",
  twitter: "https://x.com/solvionis",
  linkedin:
    "https://www.linkedin.com/company/solvionis-technologies/?viewAsMember=true",
  instagram: "https://www.instagram.com/solvionis/?hl=en",
  whatsapp:"https://api.whatsapp.com/send/?phone=%2B919381452155&text&type=phone_number&app_absent=0"
};

// website routes
export const routes = [
  {
    name: "Home",
    path: "/",
    component: <Home />,
  },
  {
    name: "Services",
    path: "/services",
    component: <Services />,
  },
  {
    name: "About Us",
    path: "/about-us",
    component: <AboutUs />,
  },
  {
    name: "Contact Us",
    path: "/contact-us",
    component: <ContactUs />,
  },
];

export const faqs = [
  {
    id: 1,
    question: "What is Web Development?",
    answer:
      "Web development refers to the process of creating websites and web applications. It includes tasks such as web design, web development, web programming, and database management.",
  },
  {
    id: 2,
    question: "What is Web Development?",
    answer:
      "Web development refers to the process of creating websites and web applications. It includes tasks such as web design, web development, web programming, and database management.",
  },
  {
    id: 3,
    question: "What is Web Development?",
    answer:
      "Web development refers to the process of creating websites and web applications. It includes tasks such as web design, web development, web programming, and database management.",
  },
  {
    id: 4,
    question: "What is Web Development?",
    answer:
      "Web development refers to the process of creating websites and web applications. It includes tasks such as web design, web development, web programming, and database management.",
  },
  {
    id: 5,
    question: "What is Web Development?",
    answer:
      "Web development refers to the process of creating websites and web applications. It includes tasks such as web design, web development, web programming, and database management.",
  },
];

// web development services
export const webDevelopmentServices = [
  {
    id: 1,
    title: "E-commerce Websites",
    icon: EcommerceIcon,
    description:
      "Empowering your online business with bespoke e-commerce solutions. We create platforms that enhance customer interaction, streamline processes, and boost revenue growth.",
  },
  {
    id: 2,
    title: "Social Media Websites",
    icon: SocialMediaIcon,
    description:
      "Develop custom social media platforms that captivate your audience, foster engagement, and build brand loyalty seamlessly.",
  },
  {
    id: 3,
    title: "Landing Pages",
    icon: LandingPageIcon,
    description:
      "Designing high-conversion landing pages that grab attention and inspire action. Custom designs that effectively communicate your brand's message and optimize conversions.",
  },
  {
    id: 4,
    title: "Custom Websites",
    icon: CustomWebsiteIcon,
    description:
      "Creating fully customized websites tailored to your unique business objectives. Our approach combines creativity and functionality to provide an exceptional online presence.",
  },
];

export const appDevelopmentServices = [
  {
    id: 1,
    title: "iOS App Development",
    icon: IosIcon,
    description:
      "Our team of expert developers specializes in Swift and Objective-C to build powerful, efficient iOS apps. We focus on performance, speed, and a responsive user experience.",
  },
  {
    id: 2,
    title: "Android App Development",
    icon: AndroidIcon,
    description:
      "We design and develop custom Android apps that are perfectly aligned with your business needs. Skilled in Java and Kotlin, we deliver robust and high-performance apps.",
  },
  {
    id: 3,
    title: "Flutter App Development",
    icon: FlutterIcon,
    description:
      "With Flutter, we build cross-platform apps for both iOS and Android using a single codebase. We tackle challenges with the platform’s web architecture using innovative solutions.",
  },
  {
    id: 4,
    title: "Hybrid App Development",
    icon: HybridAppIcon,
    description:
      "We create hybrid mobile apps that combine the best of both worlds. Feature-rich and responsive, our apps work seamlessly across both iOS and Android devices.",
  },
];

// all services
export const allServices = [
  {
    id: 1,
    title: "Web Development",
    desc: "Crafting modern, responsive, and scalable websites that deliver outstanding user experiences. From front-end to back-end, our web solutions are tailored to meet your business needs.",
    detailContent:
      "At Solvionis, we specialize in delivering high-performance websites and digital platforms that help businesses thrive online. From custom web development to responsive design, we build solutions that are both user-friendly and visually stunning. Let's turn your vision into a reality.",
      landingPageLink:'/web-development'
  },
  {
    id: 2,
    title: "Mobile App Development",
    desc: "Creating high-performance mobile applications for iOS and Android that engage users and drive business growth. Our apps are designed with a focus on usability, speed, and seamless functionality.",
    detailContent:
      "At Solvionis, we specialize in creating intuitive, high-performing mobile applications tailored to meet the unique needs of businesses across industries. Our expert team combines technical expertise with creative design to develop apps that drive engagement and growth.",
      landingPageLink:'/app-development'
  },
  {
    id: 3,
    title: "Cloud Computing Services",
    desc: "Providing scalable and reliable cloud computing solutions to modernize your infrastructure and enhance business agility.",
    detailContent:
      "At Solvionis, we empower businesses with cloud computing solutions designed to optimize performance, enhance collaboration, and reduce costs. Our services include cloud infrastructure setup, cloud-native application development, and seamless integrations to support your digital transformation journey.",
  },
  {
    id: 4,
    title: "Game Development",
    desc: "At Solvionis, we specialize in game development, creating immersive and enjoyable gaming experiences.",
    detailContent:
      "At Solvionis, we don’t just build games—we create worlds. Our team of passionate developers, artists, and storytellers brings your ideas to life with captivating gameplay, stunning visuals, and unforgettable narratives. Whether it’s an action-packed adventure or a mind-bending puzzle, our games are designed to transport players into new realms and keep them engaged.",
  },
  {
    id: 5,
    title: "Cybersecurity Services",
    desc: "Protecting your business with robust cybersecurity strategies to safeguard your data, systems, and networks.",
    detailContent:
      "Solvionis provides cutting-edge cybersecurity services to protect businesses from digital threats. From threat detection and response to vulnerability assessments and data encryption, our comprehensive solutions ensure your operations stay secure and resilient in the face of evolving cyber risks.",
  },
  {
    id: 6,
    title: "Artificial Intelligence (AI)",
    desc: "Leveraging AI to drive innovation, streamline processes, and deliver personalized solutions tailored to your business needs.",
    detailContent:
      "Solvionis specializes in helping businesses harness the power of artificial intelligence to solve real-world challenges. From predictive analytics and automation to AI-driven applications, our solutions are designed to optimize performance and unlock new opportunities.",
  },
  {
    id: 7,
    title: "Cloud Migration Services",
    desc: "Seamlessly transitioning your business operations to the cloud for improved scalability, flexibility, and cost efficiency.",
    detailContent:
      "At Solvionis, we ensure a smooth and secure transition to the cloud, minimizing downtime and maximizing the benefits of cloud technology. Our cloud migration services are tailored to your unique needs, whether you're moving applications, data, or entire infrastructures to a cloud environment.",
  },
];

// about us page why choose content
export const whyChooseUsContent = [
  {
    title: "Customized Solutions for Every Business",
    desc: "We believe in a tailored approach because every business is unique. We take time to understand your goals and create custom digital solutions that align perfectly with your vision.",
  },
  {
    title: "Cutting-Edge Technology",
    desc: "Our team is equipped with the latest tools and technologies to bring your project to life, ensuring that you stay ahead in the ever-changing digital space.",
  },
  {
    title: "Security and Reliability",
    desc: "At Solvionis, we take security seriously. Our solutions are built with stringent security protocols to safeguard your business data and protect it from cyber threats.",
  },
  {
    title: "Long-Term Partnerships",
    desc: "We’re not just a service provider; we’re your strategic partner. From conceptualization to deployment and ongoing support, we’re with you every step of the way, ensuring your success in the digital landscape.",
  },
  {
    title: "Agility and Innovation",
    desc: "As technology evolves, so do we. We continuously adapt to the latest trends and innovations to deliver products that not only meet your current needs but are scalable for the future.",
  },
];

// portfolio images (web development)
export const webPortfolio = [
  {
    id: 1,
    img: require("./assets/images/web_projects/1.webp"),
    title: "FE-Finance",
  },
  {
    id: 2,
    img: require("./assets/images/web_projects/2.webp"),
    title: "Ocxee",
  },
  {
    id: 3,
    img: require("./assets/images/web_projects/3.webp"),
    title: "Leaderbridge",
  },
  {
    id: 4,
    img: require("./assets/images/web_projects/4.webp"),
    title: "Gigzio",
  },
  {
    id: 5,
    img: require("./assets/images/web_projects/5.webp"),
    title: "FE Group",
  },
  {
    id: 6,
    img: require("./assets/images/web_projects/6.webp"),
    title: "V Talkz",
  },
];

// portfolio images (app development)
export const appPortfolio = [
  {
    id: 1,
    img: require("./assets/images/app_projects/1.webp"),
    title: "PartEx",
  },
  {
    id: 2,
    img: require("./assets/images/app_projects/2.webp"),
    title: "Find A Driver",
  },
  {
    id: 3,
    img: require("./assets/images/app_projects/3.webp"),
    title: "Artisan Express",
  },
  {
    id: 4,
    img: require("./assets/images/app_projects/4.webp"),
    title: "House of Deliverance",
  },
];
