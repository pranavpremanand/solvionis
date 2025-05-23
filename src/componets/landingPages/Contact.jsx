import React, { useContext } from "react";
import { SpinnerContext } from "../SpinnerContext";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { companyDetails } from "../../constant";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const { setSpinner } = useContext(SpinnerContext);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    mode: "all",
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      phone: "",
      message: "",
    },
  });

  // handle form submit click
  const handleFormSubmit = async (values) => {
    setSpinner(true);

    var emailBody = "Name: " + values.name + "\n\n";
    emailBody += "Email: " + values.email + "\n\n";
    emailBody += "Phone Number: " + values.phone + "\n\n";
    emailBody += "Message:\n" + values.message;

    // Construct the request payload
    var payload = {
      to: companyDetails.email,
      subject: values.subject,
      body: emailBody,
      name: "Solvionis",
    };

    await fetch("https://send-mail-redirect-boostmysites.vercel.app/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((response) => response.json())
      .then((res) => {
        if (res.error) {
          toast.error(res.error);
        } else {
          toast.success("Email sent successfully");
          reset();
          navigate("/thankyou");
        }
      })
      .catch((error) => {
        toast.error(error.message);
      })
      .finally(() => setSpinner(false));
  };

  return (
    <section
      id="contact"
      className="py-[5rem] bg-gradient-to-r from-secondary/20 to-primary/20"
    >
      <div className="wrapper">
        <div className="h-full grid md:grid-cols-2 gap-10 py-10">
          <div data-aos="fade-right" className="flex flex-col gap-4">
            <h2 className="heading-2">Get In Touch With Us!</h2>
            <p className="desc">
              Reach out to us today to discover how computer vision technology
              can transform and elevate your business operations. Our team is
              ready to help you understand the full potential of computer
              vision, from enhancing efficiency to providing valuable insights
              that drive growth. Schedule a personalized consultation with our
              experts and take the first step towards leveraging cutting-edge
              technology for your business success.
            </p>
          </div>
          <form
            data-aos="fade-left"
            onSubmit={handleSubmit(handleFormSubmit)}
            className="flex flex-col gap-4 md:px-[1rem]"
          >
            <div className="">
              <input
                className="w-full placeholder:text-black/70 bg-transparent outline-none border rounded-sm font-light border-primary px-2 py-3"
                type="text"
                placeholder="Full Name"
                {...register("name", {
                  required: "Full name is required",
                  validate: (val) => {
                    if (val.trim() !== "") {
                      return true;
                    } else {
                      return "Full name is required";
                    }
                  },
                })}
              />
              <small className="text-red-600">{errors.name?.message}</small>
            </div>
            <div className="">
              <input
                className="w-full placeholder:text-black/70 bg-transparent outline-none border rounded-sm font-light border-primary px-2 py-3"
                type="email"
                placeholder="Email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                    message: "Entered email is invalid",
                  },
                })}
              />
              <small className="text-red-600">{errors.email?.message}</small>
            </div>
            <div className="">
              <input
                type="tel"
                className="w-full placeholder:text-black/70 bg-transparent outline-none border rounded-sm font-light border-primary px-2 py-3"
                placeholder="Phone Number"
                inputMode="numeric"
                {...register("phone", {
                  required: "Phone number is required",
                  pattern: {
                    value: /^[0-9]{10}$/,
                    message: "Invalid phone number",
                  },
                })}
              />
              <small className="text-red-600">{errors.phone?.message}</small>
            </div>
            <div className="">
              <input
                className="w-full placeholder:text-black/70 bg-transparent outline-none border rounded-sm font-light border-primary px-2 py-3"
                type="text"
                placeholder="Subject"
                {...register("subject", {
                  required: "Subject is required",
                  validate: (val) => {
                    if (val.trim() !== "") {
                      return true;
                    } else {
                      return "Subject is required";
                    }
                  },
                })}
              />
              <small className="text-red-600">{errors.subject?.message}</small>
            </div>
            <div className="">
              <textarea
                className="w-full placeholder:text-black/70 bg-transparent outline-none border rounded-sm font-light border-primary px-2 py-3"
                rows="4"
                placeholder="Message"
                {...register("message", {
                  required: "Message is required",
                  validate: (val) => {
                    if (val.trim() !== "") {
                      return true;
                    } else {
                      return "Message is required";
                    }
                  },
                })}
              />
              <small className="text-red-600">{errors.message?.message}</small>
            </div>
            <button
              disabled={isSubmitting}
              className="primary-btn"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
