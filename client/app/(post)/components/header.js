"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { MdClose, MdSearch } from "react-icons/md";

const Header = () => {
  const [isNav, setisNav] = useState(false);
  const [isSearch, setIsSearch] = useState(false);
  const [showOverlay, setShowOverlay] = useState(true);
  const [query, setQuery] = useState("");
  return (
    <div className="bg-white border-b shadow fixed h-auto w-full top-0 left-0 header z-30">
      {!isSearch ? (
        <div className=" mx-auto lg:max-w-6xl">
          <nav className={`bg-white border-gray-200  `}>
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-3 py-2 md:py-3">
              <Link href="/" className="flex items-center">
                <div className="bg-white px-3 md:max-w-lg mx-auto lg:max-w-4xl">
                  <Image
                    src="/bigroms.svg"
                    alt="bigroms Logo"
                    width={180}
                    height={100}
                  />
                </div>
              </Link>
              <div className="flex items-center">
                <button
                  className="text-2xl md:hidden"
                  onClick={(e) => (setIsSearch(!isSearch), setisNav(false))}
                >
                  <MdSearch />
                </button>

                <button
                  data-collapse-toggle="navbar-default"
                  type="button"
                  className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
                  aria-controls="navbar-default"
                  aria-expanded="false"
                  onClick={(e) => setisNav(!isNav)}
                >
                  {/* <span className="sr-only">Open main menu</span> */}
                  <svg
                    className="w-6 h-6"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </button>
              </div>
              <div
                className={`${isNav ? "" : "hidden"} w-full md:block md:w-auto`}
              >
                <nav>
                  <ul className="font-medium flex items-center flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white ">
                    <li>
                      <a
                        href="#"
                        className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 "
                        aria-current="page"
                      >
                        Home
                      </a>
                    </li>
                    <li>
                      <Link
                        href="/playstation-portable"
                        className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 "
                      >
                        Playstation Portable
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            {isNav && (
              <div
                onClick={(e) => {
                  setisNav(!isNav);
                }}
                className="fixed w-screen h-screen bg-gray-500 opacity-50"
              />
            )}
          </nav>
        </div>
      ) : (
        <div className="bg-white fixed h-auto w-full top-0 shadow">
          <div className="py-2 max-w-[58rem] mx-auto ">
            <div className="flex items-center border mx-3 px-3 py-1 rounded-3xl">
              <input
                onSubmit={(e) => console.log("hello")}
                className="w-full focus:outline-none"
                type="text"
                placeholder="PPSSPP Games"
                autofocus="on"
                onChange={(e) => setQuery(e.target.value)}
              />

              <Link
                onClick={(e) => {
                  setShowOverlay(false), setIsSearch(!isSearch);
                }}
                href={`/search?q=${query}`}
                className="bg-blue-500 text-white px-3 py-1 rounded-3xl"
              >
                <MdSearch className="text-2xl" />
              </Link>
            </div>
          </div>

          {showOverlay && (
            <div
              className="fixed h-screen w-screen bg-gray-100 opacity-50"
              onClick={(e) => setIsSearch(!isSearch)}
            />
          )}
        </div>
      )}
    </div>
  );
};
export default Header;
