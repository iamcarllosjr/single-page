"use client";
import React from "react";

import { motion } from "framer-motion";

const DescriptionText = () => {
  return (
    <motion.div
      initial={{ y: 30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        delay: 0.6,
        ease: "easeIn",
        duration: 0.7,
      }}
      className="mt-20 flex flex-col items-center justify-center gap-3"
    >
      <h1 className="text-3xl font-bold sm:text-5xl">
        Design solutions made easy
      </h1>
      <p className="flex text-center">
        With over ten years of experience in spanvarious design disciplines, im
        your one-stop shop for your design <br />
        needs
      </p>
    </motion.div>
  );
};

export default DescriptionText;
