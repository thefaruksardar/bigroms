"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { MdCloudDownload, MdGames } from "react-icons/md";

const Download = ({ post }) => {
  const [active, setActive] = useState(false);
  setTimeout(() => {
    setActive(true);
  }, 4000);
  return (
    <div>
      {active ? (
        <div className="flex flex-col justify-center items-center gap-1 my-6">
          <Link
            href={`${post.file}`}
            className="bg-blue-500 py-2 text-xl w-full text-white  rounded-3xl flex justify-center items-center gap-2 hover:bg-blue-600"
          >
            <MdCloudDownload className="text-2xl" /> Download ({post.size})
          </Link>
          <Link
            href={"/"}
            className="bg-white border-2 border-blue-500 text-xl w-full text-blue-500 py-2 rounded-3xl flex justify-center items-center gap-2 hover:bg-blue-100"
          >
            <MdGames className="text-2xl" /> Emulator
          </Link>
        </div>
      ) : (
        <div>
          <div className="w-full h-4 mb-4 bg-gray-200 rounded-full my-6 ">
            <motion.div
              className="h-4 bg-blue-500 rounded-full dark:bg-blue-500"
              style={{ width: "45%" }}
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 4, ease: "easeInOut" }}
            ></motion.div>
          </div>
        </div>
      )}
    </div>
  );
};
export default Download;
