"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaPaperPlane } from "react-icons/fa";
import toast from "react-hot-toast";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ContactPage = () => {
  return (
    <div className="h-full w-full flex items-center justify-center -mt-10">
      <motion.section
        id="contact"
        className="w-[min(100%,38rem)] text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-medium capitalize mb-8 text-center">
          Contact us
        </h2>

        <p className="text-gray-700 -mt-6 dark:text-white/80">
          Please contact me directly at
          <a className="underline mx-1" href={`mailto:athoang252@gmail.com`}>
            fakeemail@gmail.com
          </a>
          or through this form.
        </p>
        <form
          className="mt-10 dark:text-black relative flex flex-col gap-y-4 justify-center items-center"
          action={async (formData) => {
            toast.success("Email sent successfully.");
          }}
        >
          <div className="absolute -top-8 -left-1 w-80 h-64 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-80 animate-blob" />
          <div className="absolute -top-8 -right-1 w-80 h-64 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-80 animate-blob" />
          <div className="absolute -bottom-20 left-30 w-80 h-64 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-80 animate-blob" />

          <div className="h-[50px] w-[40rem] rounded-md flex flex-row items-center justify-start px-4 gap-x-4 bg-white z-10">
            <div className="bg-purple-200 flex justify-center items-center py-1 px-3 h-1/2 rounded-lg">
              <p className="text-purple-500 text-sm font-semibold">Name</p>
            </div>

            <Input
              name="name"
              type="text"
              required
              maxLength={100}
              className="h-1/2 focus-visible:ring-purple-500 bg-slate-200 border-none"
            />
          </div>

          <div className="h-[50px] w-[40rem] rounded-md flex flex-row items-center justify-start px-4 gap-x-4 bg-white z-10">
            <div className="bg-pink-200 flex justify-center items-center py-1 px-3 h-1/2 rounded-lg">
              <p className="text-pink-500 text-sm font-semibold">Email</p>
            </div>

            <Input
              type="email"
              name="senderEmail"
              required
              maxLength={100}
              className="h-1/2 focus-visible:ring-pink-500 bg-slate-200 border-none"
            />
          </div>

          <div className="h-[200px] w-[40rem] rounded-md flex flex-row items-start justify-start p-4 gap-x-4 bg-white z-10">
            <div className="bg-blue-200 flex justify-center items-center py-1 px-3 h-[25px] rounded-lg">
              <p className="text-blue-500 text-sm font-semibold">Message</p>
            </div>

            <Textarea
              name="message"
              required
              maxLength={1000}
              className="h-full focus-visible:ring-blue-500 bg-slate-200 border-none"
            />
          </div>

          <button
            type="submit"
            name="message"
            className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 disabled:scale-100 disabled:bg-opacity-65 dark:bg-white dark:bg-opacity-10 z-10"
          >
            Submit{" "}
            <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
          </button>
        </form>
      </motion.section>
    </div>
  );
};

export default ContactPage;
