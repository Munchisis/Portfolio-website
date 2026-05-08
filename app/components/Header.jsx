import React from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";
import { motion } from "motion/react";

const Header = () => {
  return (
    <div className="w-11/12 max-w-3xl text-center mx-auto min-h-screen flex flex-col items-center justify-center gap-6">
      {/* Avatar */}
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
      >
        <Image
          src={assets.profile_img}
          alt="Chigozie Emuchay"
          className="rounded-full w-28 sm:w-32"
        />
      </motion.div>

      {/* Name */}
      <motion.h3
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-xl md:text-2xl font-Ovo flex items-center gap-2"
      >
        Hi, I’m Chigozie
        <Image src={assets.hand_icon} alt="wave" className="w-5" />
      </motion.h3>

      {/* Role */}
      <p className="text-sm text-gray-500 dark:text-gray-400">
        Full Stack Engineer · React · Node.js · Scalable Systems
      </p>

      {/* Main Headline */}
      <motion.h1
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="text-3xl sm:text-5xl font-semibold leading-tight"
      >
        I build{" "}
        <span className="text-[#FF6363] dark:text-[#f1c1f1]">
          production-ready
        </span>{" "}
        web applications that are fast, scalable, and reliable
      </motion.h1>

      {/* Supporting line */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="max-w-xl text-gray-600 dark:text-gray-400 text-sm sm:text-base"
      >
        4+ years experience building full-stack applications across the MERN &
        PERN stack — from intuitive frontends to secure backend systems and
        cloud deployment.
      </motion.p>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          href="#projects"
          className="px-8 py-3 rounded-full bg-black text-white flex items-center gap-2 hover:scale-105 transition dark:bg-white dark:text-black"
        >
          View Projects
          <Image src={assets.right_arrow_white} alt="" className="w-4" />
        </motion.a>

        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          href="#contact"
          className="px-8 py-3 rounded-full border border-gray-400 flex items-center gap-2 hover:scale-105 transition"
        >
          Contact Me
        </motion.a>

        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          href="/Emuchay_Chigozie_Fullstack_CV.pdf"
          download
          className="px-8 py-3 rounded-full border border-gray-400 flex items-center gap-2 hover:scale-105 transition"
        >
          Resume
          <Image src={assets.download_icon} alt="" className="w-4" />
        </motion.a>
      </div>
    </div>
  );
};

export default Header;
