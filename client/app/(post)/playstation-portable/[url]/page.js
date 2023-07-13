import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { MdCloudDownload, MdGames } from "react-icons/md";
import Breadcrumbs from "../../components/breadcrumbs";
import Share from "../../components/share";
import Aside from "../../components/aside";
import AdBanner from "../../components/adsense";

const fetchPost = async (url) => {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_POST}/permalink/${url}`
  );
  const data = await res.data;
  return data;
};

const Page = async ({ params: { url } }) => {
  let posts = await fetchPost(url);
  let post = posts[0];

  const crumbs = [
    { title: "Home", permalink: "/" },
    { title: "PSP", permalink: "/playstation-portable" },
    {
      title: `${post.name.substring(0, 30)}...`,
      permalink: `${post.permalink}`,
    },
  ];

  return (
    <div className="mt-[70px] mx-auto md:max-w-6xl">
      <AdBanner />
      <div className=" md:flex">
        <div className="md:w-[65%] md:mx-2">
          <Breadcrumbs crumbs={crumbs} />
          <article>
            <div className="bg-white my-5 mx-2 px-5 py-3 rounded-3xl shadow">
              <h1 className="text-gray-600 text-xl mb-5 md:hidden">
                {post.title}
              </h1>
              <div className="md:flex md:justify-between md:gap-10">
                <Image
                  className=" rounded-3xl w-[10rem] mx-auto"
                  src={`${process.env.NEXT_PUBLIC_IMAGE}/${post.image}`}
                  alt={post.title}
                  title={post.title}
                  width={500}
                  height={500}
                />
                <div className="flex flex-col justify-center items-center gap-1 my-6 md:flex md:justify-between md:my-0">
                  <div className="hidden md:block">
                    <h1 className="text-gray-600 text-xl mb-5">{post.title}</h1>
                    <div className="flex justify-around ">
                      <span className="text-center">
                        <p className="!m-0 !text-gray-900">{post.size}</p>
                        <p className="!m-0 ">Size</p>
                      </span>
                      <span className="text-center">
                        <p className="!m-0 !text-gray-900">{post.rom}</p>
                        <p className="!m-0 ">ROM</p>
                      </span>
                      <span className="text-center">
                        <p className="!m-0 !text-gray-900">{post.language}</p>
                        <p className="!m-0 ">Language</p>
                      </span>
                      <span className="text-center">
                        <p className="!m-0 !text-gray-900">{post.rating}</p>
                        <p className="!m-0 ">Rating</p>
                      </span>
                    </div>
                  </div>
                  <div className="w-full md:flex md:flex-col md:gap-1">
                    <Link
                      href={`/playstation-portable/${post.permalink}/download`}
                      className="bg-blue-500 text-xl w-full text-white py-2 rounded-3xl flex justify-center items-center gap-2 my-1 hover:bg-blue-600"
                    >
                      <MdCloudDownload className="text-2xl" /> Download
                    </Link>
                    <Link
                      href={
                        "https://files.bigmod.io/s/42w3TPcgGK4R3aH/download"
                      }
                      className="bg-white border-2 border-blue-500 text-xl w-full text-blue-500 py-2 rounded-3xl flex justify-center items-center gap-2 my-1 hover:border-blue-600 hover:text-blue-600"
                    >
                      <MdGames className="text-2xl" /> Emulator
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white my-5 mx-2 px-5 py-3 rounded-3xl shadow md:hidden">
              <table className="w-full">
                <tbody>
                  <tr>
                    <td>Size</td>
                    <td className="text-right py-1 ">{post.size}</td>
                  </tr>
                  <tr>
                    <td>ROM</td>
                    <td className="text-right py-1 ">
                      <Link
                        href={`${process.env.NEXT_PUBLIC_DOMAIN}/post/category/${post.category}`}
                      >
                        {post.rom}
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td>Language</td>
                    <td className="text-right py-1 ">{post.language}</td>
                  </tr>
                  <tr>
                    <td>Category</td>
                    <td className="text-right py-1 ">{post.category}</td>
                  </tr>
                  <tr>
                    <td>Rating</td>
                    <td className="text-right py-1 ">{post.rating}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="bg-white my-5 mx-2 px-5 py-3 rounded-3xl shadow">
              <p>
                Do you want to Download Latest version of {post.name} Compressed
                PSP ROM in {post.language} for free
              </p>
              <p>
                The PlayStation Portable (PSP) was a revolutionary handheld
                gaming console that captivated gamers with its portability and
                impressive library of games.
              </p>
              <p>
                While the original PSP is no longer in production, the magic of
                its game collection can still be experienced through PSP
                emulators.
              </p>
              <p>
                By using PSP emulator App, gamers can relive the golden era of
                handheld gaming and immerse themselves in a vast array of PPSSPP
                ROM games.
              </p>
              <p>
                In this article, you going to know the downloading and
                installation process of {post.name} PPSSPP Game ROM.
              </p>
              <p>
                Before downloading the PPSSPP game rom you must have the PSP
                Emulator App installed on your device.
              </p>
              <h2>What is PSP Emulator?</h2>
              <p>
                A PSP emulator is a software program that replicates the PSP's
                hardware and software environment, allowing gamers to play PSP
                games on various platforms such as Windows, macOS, Android, and
                iOS.
              </p>
              <p>
                By emulating the PSP's architecture, these emulators enable
                users to run PSP ROMs (Read-Only Memory) and enjoy the games
                without needing the original console.
              </p>
              <p>
                Once you have the emulator installed on your device you can play
                any PPSSPP Games you want by downloading the ROM file from this
                site.
              </p>
              <p>
                Our site offers a diverse range of genres, captivating
                storylines, and impressive PPSSPP Game that have stood the test
                of time.
              </p>
              <h2>How to Download PPSSPP Games?</h2>
              <p>
                You can download all kinds of PPSSPP Games ROMs from this site
                for free and in compressed form.
              </p>
              <p>Follow the steps to download the PPSSPP game.</p>
              <ol className="list-decimal pl-4 text-gray-600 pb-4">
                <li>Click on the Download button.</li>
                <li>On next page wait while the link is generating.</li>
                <li>Once the Link is generated click on it.</li>
                <li>The game ROM starts downloading on your device.</li>
              </ol>
              <h2>How to Play PSP Games on Android?</h2>
              <p>
                If you downloaded the {post.name} name rom from this game then
                you can follow the steps below to run the game.
              </p>
              <ol className="list-decimal pl-4 text-gray-600 pb-4">
                <li>
                  Choose and download a PSP emulator suitable for your platform
                  (e.g., PPSSPP).
                </li>
                <li>Install the emulator on your device.</li>
                <li>Obtain PSP ROMs from reputable sources.</li>
                <li>Launch the emulator.</li>
                <li>
                  Configure the emulator settings for optimal performance.
                </li>
                <li>Load the PSP ROM file within the emulator.</li>
                <li>Start playing the game using your preferred controls.</li>
              </ol>
              <p>
                I hope this post helps you to download the {post.name} PPSSPP
                Game ROM in compressed form, ensure your have a {post.rom}{" "}
                Emulator installed on your device to run the game smoothly and
                withour any problem.
              </p>
              <p>
                Please do not forget to share this post with your friends so
                that they can also download all these {post.rom} games for free.
              </p>
            </div>
          </article>
          <Share post={post} />
        </div>
        <Aside />
      </div>
    </div>
  );
};
export default Page;
