"use client";
import { useState } from "react";
import { MdAdd, MdRemove } from "react-icons/md";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  const faqData = [
    {
      question: "How to Download PPSSPP Games?",
      answer: {
        __html: `<p>
          You can download all kinds of PPSSPP Games ROMs from this site for
          free and in compressed form.
        </p>
        <p>Follow the steps to download the PPSSPP game.</p>

        <ol className="list-decimal pl-4 text-gray-600 pb-4">
          <li>Click on the Download button.</li>
          <li>On next page wait while the link is generating.</li>
          <li>Once the Link is generated click on it.</li>
          <li>The game ROM starts downloading on your device.</li>
        </ol>`,
      },
    },

    {
      question: "How to Play PSP Games on Android?",
      answer: {
        __html: `<p>
          If you downloaded the {post.name} name ROM from this page then you can
          follow the steps below to run the game.
        </p>
        <ol className="list-decimal pl-4 text-gray-600 pb-4">
          <li>
            Choose and download a PSP emulator suitable for your platform (e.g.,
            PPSSPP).
          </li>
          <li>Install the emulator on your device.</li>
          <li>Obtain PSP ROMs from reputable sources.</li>
          <li>Launch the emulator.</li>
          <li>Configure the emulator settings for optimal performance.</li>
          <li>Load the PSP ROM file within the emulator.</li>
          <li>Start playing the game using your preferred controls.</li>
        </ol>`,
      },
    },
    {
      question: "How to use Cheats in PPSSPP Games?",
      answer: {
        __html: ` <p>
          To apply cheat codes in {post.name} Game follw the steps mentioned in
          this video
        </p>
        <iframe
          src="https://www.youtube.com/embed/XG-W1t20AUc"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
          className="w-full mb-3"
        ></iframe>`,
      },
    },
    {
      question: "Which Device can run PSP ROMs?",
      answer: {
        __html: `<p>
          You can run PSP ROMs on any device that has a PSP emulator app
          installed.
        </p>
        <p>
          If you're using Android, Windows, Mac, or Linux, I highly recommend
          installing the free version of PPSSPP Emulator to play all the PSP
          game ROMs.
        </p>
        <p>
          Please use the provided download button to download the PPSSPP
          Emulator onto your device.
        </p>`,
      },
    },
    {
      question: ` Is Downloading Games from ${process.env.NEXT_PUBLIC_SITE} Safe?`,
      answer: {
        __html: `<p>
          We carefully check all the game ROM files before giving them to users
          to make sure there are no problems with the features.
        </p>
        <p>
          Still facing Problem?
          <Link href="/contact" className="text-blue-500">
            Contact us
          </Link>
        </p>`,
      },
    },
  ];

  return (
    <div>
      {faqData.map((faq, index) => (
        <div
          onClick={() => handleClick(index)}
          key={index}
          className="bg-gray-100 py-2 px-3 rounded-3xl my-2 cursor-pointer"
        >
          <div className="flex justify-between items-center">
            <h3 className="text-lg m-0 ">{faq.question}</h3>
            {activeIndex === index ? (
              <span>{<MdRemove />}</span>
            ) : (
              <span>{<MdAdd />}</span>
            )}
          </div>

          {activeIndex === index && (
            <p dangerouslySetInnerHTML={faq.answer}></p>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQ;
