import React from "react";
import { Link } from "react-router-dom";
import { companyDetails } from "../../constant";
import { BsWhatsapp } from "react-icons/bs";

const WhatsappButton = () => {
  return (
    <Link
      className="hover:scale-105 border-2 border-green-500 fixed bottom-5 right-5 z-30 bg-white hover:bg-green-500 rounded-full p-3 group transition duration-300"
      to={companyDetails.whatsapp}
      target="_blank"
    >
      <BsWhatsapp
        size={30}
        className="fill-green-500 group-hover:fill-white transition duration-300"
      />
    </Link>
  );
};

export default WhatsappButton;
