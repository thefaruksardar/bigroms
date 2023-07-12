"use client";
import Image from "next/image";
import Link from "next/link";
import { MdKeyboardArrowLeft, MdOutlineGames, MdLogout } from "react-icons/md";
import { signOut, useSession } from "next-auth/react";

const Notadmin = () => {
  const { data: session } = useSession();

  return (
    <div className="h-screen w-screen flex justify-center items-center flex-col bg-gray-100">
      <div className="">
        <Link
          href="/"
          className="flex justify-center grow items-center text-gray-600 rounded-3xl text-center w-full py-2"
        >
          <MdKeyboardArrowLeft className="text-2xl" /> Home
        </Link>
      </div>
      <div className="flex flex-col justify-start items-center px-10 py-20 rounded-3xl shadow bg-white">
        <Image
          className="h-28 w-28 rounded-full border border-gray-700"
          src={session?.user?.image}
          width={400}
          height={400}
        />
        <p>{session?.user?.name}</p>
        <p className="text-3xl">Coming Soon...</p>
        <div className="flex items-center grow gap-2">
          <button
            onClick={(e) => signOut()}
            className="flex justify-center grow items-center border border-blue-500 text-blue-500 rounded-3xl text-center w-full px-2"
          >
            <MdLogout className="text-lg" /> Logout
          </button>
          <Link
            href="/"
            className="flex justify-center gap-1 items-center border whitespace-nowrap border-blue-500 text-blue-500 rounded-3xl text-center w-full px-2"
          >
            <MdOutlineGames className="text-lg" /> PSP ROMs
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Notadmin;
