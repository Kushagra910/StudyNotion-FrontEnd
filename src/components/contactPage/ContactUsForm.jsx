import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { apiConnector } from "../../services/apiConnector";
import { contactusEndpoint } from "../../services/apis";
import CountryCode from "../../data/countrycode.json";
import "../../App.css";
import toast from "react-hot-toast";

const ContactUsForm = () => {
  const [loading, setLoading] = useState();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm();

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({
        email: "",
        firstName: "",
        lastName: "",
        message: "",
        phoneNo: "",
      });
    }
  }, [reset, isSubmitSuccessful]);

  const submitContactForm = async (data) => {
    console.log("Logging Data", data);
    try {
      setLoading(true);
      const response = await apiConnector(
        "POST",
        contactusEndpoint.CONTACT_US_API,
        data
      );
      console.log("Logging Response", response);
      toast.success("Done");
      setLoading(false);
    } catch (err) {
      toast.error("Something went wrong");
      console.log("Error", err.message);
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(submitContactForm)}>
      <div className="flex flex-col gap-7">
        <div className="flex flex-col md:flex-row gap-5">
          {/* First Name */}
          <div className="flex flex-col gap-2  md:w-[48%] ">
            <label htmlFor="firstName" className="label-style">
              First Name
            </label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              className="form-style"
              placeholder="Enter First Name"
              {...register("firstName", { required: true })}
            />
            {errors.firstName && (
              <span className=" text-xs text-yellow-100">
                Please Enter Your name
              </span>
            )}
          </div>
          {/* Last Name */}
          <div className="flex flex-col gap-2 md:w-[48%]">
            <label htmlFor="firstName" className="label-style">
              Last Name
            </label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              className="form-style"
              placeholder="Enter Last Name"
              {...register("lastName")}
            />
          </div>
        </div>
        {/* email */}
        <div className="flex flex-col  ">
          <label htmlFor="email" className="label-style">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            placeholder="Enter email Addrress"
            className="form-style"
            {...register("email", { required: true })}
          />
          {errors.email && (
            <span className="text-[12px] text-yellow-100">
              Please enter your email address
            </span>
          )}
        </div>

        {/* phone no */}
        <div className="flex flex-col  gap-2">
          <label htmlFor="phonenumber" className="label-style">
            Phone Number
          </label>
          <div className="flex gap-5 ">
            <div className="flex w-[81px] flex-col gap-2">
              {/* dropdown */}
              <select
                name="dropdown"
                id="dropdown"
                className="form-style"
                {...register("countrycode", { required: true })}
              >
                {CountryCode.map((element, index) => {
                  return (
                    <option key={index} value={element.code}>
                      {element.code}-{element.country}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="flex flex-col w-[calc(100%-90px)] gap-2">
              <input
                type="number"
                name="phonenumber"
                id="phonenumber"
                placeholder="1234567890"
                className="form-style w-[90%]) "
                {...register("phoneNo", {
                  required: {
                    value: true,
                    message: "Please Enter Phone Number",
                  },
                  maxLength: { value: 10, message: "Invalid Phone Number" },
                  minLength: { value: 8, message: "Invalid Phone Number" },
                })}
              />
              {errors.phoneNo && (
                <span className="-mt-1 text-[12px] text-yellow-100">
                  {errors.phoneNo.message}
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Message */}
        <div className="flex flex-col">
          <label htmlFor="message" className="label-style">
            Message
          </label>
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="7"
            className="form-style"
            placeholder="Enter Your Message Here"
            {...register("message", { required: true })}
          />
          {errors.message && (
            <span className="text-xs text-yellow-100">
              Please enter your message
            </span>
          )}
        </div>

        {/* button */}
        <button
          type="submit"
          disabled={loading}
          className={` bg-yellow-50 text-center text-sm font-bold text-black px-6 py-3 rounded-md shadow-[2px_2px_0px_0px_rgba(255,255,255,0.18)]
          disabled:bg-richblack-500 sm:text-lg
        ${
          !loading &&
          "transition-all duration-200 hover:scale-95 hover:shadow-none"
        }`}
        >
          Send Message
        </button>
      </div>
    </form>
  );
};

export default ContactUsForm;
