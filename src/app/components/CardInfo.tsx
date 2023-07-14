"use client";
import Link from "next/link";

import { motion } from "framer-motion";

const CardInfo = () => {
  return (
    <motion.div
      initial={{ y: 30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        delay: 0.7,
        ease: "easeInOut",
        duration: 0.8,
      }}
      className="grid grid-cols-2 gap-4 pt-14 text-sm font-normal tracking-wider text-white md:grid-cols-5 md:grid-rows-2 lg:text-base xl:text-lg"
    >
      <Link
        href="/"
        className="col-span-2 col-start-1 row-start-1 flex h-40 items-end rounded-md bg-blue-700 transition-all duration-300 hover:scale-105 md:row-span-2 md:row-start-1 md:h-full"
      >
        <p className="mb-2 ml-4">Graphic Design</p>
      </Link>
      <Link
        href="/"
        className="col-start-1 row-start-2 flex h-28 items-end rounded-md bg-amber-700 transition-all duration-300 hover:scale-105 md:col-start-3 md:row-start-1"
      >
        <p className="mb-2 ml-4">UI/UX</p>
      </Link>
      <Link
        href="/"
        className="col-start-2 row-start-2 flex h-28 items-end rounded-md bg-pink-500 transition-all duration-300 hover:scale-105 md:col-start-4 md:row-start-1"
      >
        <p className="mb-2 ml-4">Apps</p>
      </Link>
      <Link
        href="/"
        className="col-span-2 col-start-1 row-start-3 flex h-28 items-end rounded-md bg-orange-700 transition-all duration-300 hover:scale-105 md:col-start-3 md:row-start-2"
      >
        <p className="mb-2 ml-4">Illustrations</p>
      </Link>
      <Link
        href="/"
        className="col-span-2 col-start-1 row-start-4 flex h-28 items-end rounded-md bg-green-300 transition-all duration-300 hover:scale-105 md:col-start-5 md:row-start-1"
      >
        <p className="mb-2 ml-4">Photography</p>
      </Link>
      <Link
        href="/"
        className="col-span-2 col-start-1 row-start-5 flex h-28 items-end rounded-md bg-purple-900 transition-all duration-300 hover:scale-105 md:col-start-5 md:row-start-2"
      >
        <p className="mb-2 ml-4">Motion Graphics</p>
      </Link>
    </motion.div>
  );
};

export default CardInfo;
