"use client";
import { motion } from "framer-motion";
import { Circle } from "lucide-react";

const Navigation = () => {
  return (
    <>
      <motion.nav
        initial={{ y: -18, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          delay: 0.5,
          ease: "easeIn",
          duration: 0.6,
        }}
        className="flex items-center justify-between"
      >
        <div>
          <div className="flex h-10 w-10 items-center justify-center bg-black text-white">
            <Circle size={22} />
          </div>
        </div>
        <div>
          <button className="rounded-full bg-black p-4 px-7 py-2 text-white transition-all duration-300 hover:scale-105">
            Free Consultation
          </button>
        </div>
      </motion.nav>
    </>
  );
};

export default Navigation;
