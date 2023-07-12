"use client";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { FiCopy, FiCheck } from "react-icons/fi";
import { IoShareOutline, IoClose } from "react-icons/io5";

import {
  WhatsappShareButton,
  WhatsappIcon,
  TelegramShareButton,
  TelegramIcon,
  FacebookShareButton,
  FacebookIcon,
  TumblrShareButton,
  TumblrIcon,
  RedditShareButton,
  RedditIcon,
} from "next-share";

const Share = ({ post }) => {
  const [toogle, setToogle] = useState(false);
  const [overlay, setOverlay] = useState(false);
  const [copyToggle, setCopyToogle] = useState(true);

  const copybtn = () => {
    setCopyToogle(!copyToggle);

    setTimeout(() => {
      setCopyToogle(!copyToggle);
    }, 3000);
  };

  return (
    <div>
      {overlay && (
        <div
          className="fixed top-0 right-0 w-screen h-screen bg-gray-500 opacity-20"
          onClick={() => {
            setToogle(!toogle);
            setOverlay(!overlay);
          }}
        />
      )}

      <div className="fixed bottom-10 right-7 ">
        <div
          onClick={(e) => {
            setToogle(!toogle);
            setOverlay(!overlay);
          }}
          className="select-none float-right rounded-full text-2xl cursor-pointer p-2 shadow-lg border bg-[#FF6550] text-white !-z-0 hover:shadow-xl "
        >
          {toogle ? <IoClose /> : <IoShareOutline />}
        </div>
        {toogle && (
          <div className="sharebtn text-lg absolute bottom-[130%] right-[1px] flex justify-between items-center gap-1  py-2 px-1 ">
            <div className="flex flex-col justify-center gap-2 items-center">
              <button
                className={`text-xl p-2 rounded-full border border-gray-400 bg-white ${
                  copyToggle ? "text-[#3d3d3d]" : "text-green border"
                } `}
                onClick={() => {
                  navigator.clipboard.writeText(
                    `${process.env.NEXT_PUBLIC_SITE}/${post.permalink}`
                  );
                  copybtn();
                }}
                width={40}
              >
                {copyToggle ? <FiCopy /> : <FiCheck />}
              </button>
              <WhatsappShareButton
                url={`${process.env.NEXT_PUBLIC_SITE}/${post.permalink}`}
                title={post.title}
                separator=":: "
              >
                <WhatsappIcon size={35} round />
              </WhatsappShareButton>

              <TelegramShareButton
                url={`${process.env.NEXT_PUBLIC_SITE}/${post.permalink}`}
                title={post.title}
              >
                <TelegramIcon size={35} round />
              </TelegramShareButton>

              <FacebookShareButton
                url={`${process.env.NEXT_PUBLIC_SITE}/${post.permalink}`}
                title={post.title}
                hashtag={"#singleapk.com"}
              >
                <FacebookIcon size={35} round />
              </FacebookShareButton>
              <RedditShareButton
                url={`${process.env.NEXT_PUBLIC_SITE}/${post.permalink}`}
                title={post.title}
              >
                <RedditIcon size={35} round />
              </RedditShareButton>
              <TumblrShareButton
                url={`${process.env.NEXT_PUBLIC_SITE}/${post.permalink}`}
                title={post.title}
              >
                <TumblrIcon size={35} round />
              </TumblrShareButton>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default Share;
