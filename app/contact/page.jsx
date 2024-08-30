"use client";
import React, { useState } from "react";
import emailjs from "emailjs-com";
import { motion, useAnimation } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+91) 9044964243",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "rajkaushal18092003@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "Alpha1, Greater Noida, UttarPradesh",
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const controls = useAnimation();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSelectChange = (value) => {
    setFormData({
      ...formData,
      service: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    const validationErrors = {};
    if (!formData.firstname) validationErrors.firstname = true;
    if (!formData.lastname) validationErrors.lastname = true;
    if (!formData.email) validationErrors.email = true;
    if (!formData.phone) validationErrors.phone = true;
    if (!formData.service) validationErrors.service = true;
    if (!formData.message) validationErrors.message = true;

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({}); // Clear previous errors

    emailjs
      .send(
        "service_8ra3bp4",
        "template_1ocvcgt",
        formData,
        "kO838tVy0loC8iaiy"
      )
      .then(async (response) => {
        toast.success("Message sent successfully!");
        setIsSubmitted(true);

        // Animate the form out
        await controls.start({
          opacity: 0,
          transition: { duration: 0.5 },
        });

        // Reset form and show success message
        setFormData({
          firstname: "",
          lastname: "",
          email: "",
          phone: "",
          service: "",
          message: "",
        });

        // Animate the form back in
        await controls.start({
          opacity: 1,
          transition: { duration: 0.5 },
        });

        setIsSubmitted(false);
      })
      .catch((error) => {
        console.error("Error:", error);
        toast.error("Failed to send message.");
      });
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2.4, duration: 0.4, ease: "easeIn" }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* form */}
          <motion.div
            className="xl:w-[54%] order-2 xl:order-none"
            animate={controls}
          >
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
            >
              <h3 className="text-4xl text-accent">Let's work together</h3>

              {/* input */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  type="text"
                  name="firstname"
                  placeholder="First Name"
                  value={formData.firstname}
                  onChange={handleChange}
                  className={`${
                    errors.firstname ? "border-red-500" : ""
                  }`}
                />
                <Input
                  type="text"
                  name="lastname"
                  placeholder="Last Name"
                  value={formData.lastname}
                  onChange={handleChange}
                  className={`${
                    errors.lastname ? "border-red-500" : ""
                  }`}
                />
                <Input
                  type="email"
                  name="email"
                  placeholder="Email address"
                  value={formData.email}
                  onChange={handleChange}
                  className={`${
                    errors.email ? "border-red-500" : ""
                  }`}
                />
                <Input
                  type="text"
                  name="phone"
                  placeholder="Phone number"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`${
                    errors.phone ? "border-red-500" : ""
                  }`}
                />
              </div>

              {/* select */}
              <Select
                value={formData.service}
                onValueChange={handleSelectChange}
                className={`${
                  errors.service ? "border-red-500" : ""
                }`}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a Service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value="Web Development">Web Development</SelectItem>
                    <SelectItem value="Machine Learning">Machine Learning</SelectItem>
                    <SelectItem value="DSA">DSA</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>

              {/* textarea */}
              <Textarea
                className={`h-[200px] ${
                  errors.message ? "border-red-500" : ""
                }`}
                name="message"
                placeholder="Type your message here."
                value={formData.message}
                onChange={handleChange}
              />

              {/* btn */}
              <Button type="submit" size="md" className="max-w-40">
                Send message
              </Button>
            </form>
          </motion.div>

          {/* info */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => (
                <li key={index} className="flex items-center gap-6">
                  <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                    <div className="text-[28px]">{item.icon}</div>
                  </div>
                  <div className="flex-1">
                    <p className="text-white/60">{item.title}</p>
                    <h3 className="text-xl">{item.description}</h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Toast container */}
      <ToastContainer />
    </motion.section>
  );
};

export default Contact;
