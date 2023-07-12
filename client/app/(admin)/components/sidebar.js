"use client";
import {
  MdOutlineArticle,
  MdOutlineImage,
  MdOutlineSettings,
} from "react-icons/md";
import Link from "next/link";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";

const Sidebar = ({ children }) => {
  let { data: session } = useSession();

  return (
    <div className="flex">
      <div className="min-h-screen fixed top-0 left-0 bg-blue-400 px-4 flex flex-col justify-between">
        <div>
          <div className="text-xl font-semibold text-white pt-5">Dashboard</div>
          <ul className="flex flex-col gap-2 mt-3 ml-3">
            <li className="px-3 py-1 rounded-md text-white hover:bg-white hover:text-gray-700">
              <Link href="/" className="flex items-center gap-1">
                <MdOutlineArticle />
                Posts
              </Link>
            </li>
            <li className="px-3 py-1 rounded-md text-white hover:bg-white hover:text-gray-700">
              <Link href="/" className="flex items-center gap-1">
                <MdOutlineImage />
                Images
              </Link>
            </li>
            <li className="px-3 py-1 rounded-md text-white hover:bg-white hover:text-gray-700">
              <Link href="/" className="flex items-center gap-1">
                <MdOutlineSettings />
                Settings
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="!text-white !mb-2">{session?.user?.name}</p>
          <button onClick={(e) => signOut()}>Signout</button>
        </div>
      </div>
      <div className="grow ml-36">{children}</div>
    </div>
  );
};
export default Sidebar;
