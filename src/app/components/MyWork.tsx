import Link from "next/link";

import { ChevronsLeft, ChevronsRight } from "lucide-react";

const MyWork = () => {
  return (
    <>
      <div className="flex items-center justify-center pt-20">
        <h1 className="text-3xl font-semibold">My Work</h1>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-4 pt-6">
        <Link
          href="/"
          className="h-56 w-72 rounded-md bg-red-800 transition-all duration-300 hover:scale-105"
        ></Link>
        <Link
          href="/"
          className="h-56 w-72 rounded-md bg-red-800 transition-all duration-300 hover:scale-105"
        ></Link>
        <Link
          href="/"
          className="h-56 w-72 rounded-md bg-red-800 transition-all duration-300 hover:scale-105"
        ></Link>
      </div>
      <div className="hidden items-center justify-center gap-4 pt-2 text-white sm:flex">
        <button className="flex h-12 w-12 items-center justify-center rounded-full bg-black p-2 duration-300 hover:scale-105">
          <ChevronsLeft size={22} />
        </button>
        <button className="flex h-12 w-12 items-center justify-center rounded-full bg-black p-2 duration-300 hover:scale-105">
          <ChevronsRight size={22} />
        </button>
      </div>
    </>
  );
};

export default MyWork;
