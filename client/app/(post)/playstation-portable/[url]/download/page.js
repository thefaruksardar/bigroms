import Breadcrumbs from "@/app/(post)/components/breadcrumbs";
import Download from "@/app/(post)/components/download";
import FAQ from "@/app/(post)/components/faq";
import Share from "@/app/(post)/components/share";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";

const fetchPost = async (url) => {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_POST}/permalink/${url}`
  );
  const data = await res.data;
  return data;
};

const Page = async ({ params }) => {
  const posts = await fetchPost(params.url);
  const post = posts[0];

  const crumbs = [
    { title: "Home", permalink: "/" },
    { title: "PSP", permalink: "/playstation-portable" },
    {
      title: `${post.name.substring(0, 15)}...`,
      permalink: `/playstation-portable/${post.permalink}`,
    },
    {
      title: "Download",
      permalink: `/playstation-portable/${post.permalink}/download`,
    },
  ];

  return (
    <div className="mt-[65px] mx-auto md:max-w-3xl">
      <Breadcrumbs crumbs={crumbs} />
      <div className="bg-white my-5 mx-2 px-5 py-3 rounded-3xl shadow">
        <div>
          <h1 className="text-gray-600 text-lg mb-5 font-normal">
            Download <strong className="font-semibold">{post.name}</strong> PSP
            ROM (Compressed)
          </h1>
          <Image
            className=" rounded-3xl w-[10rem] mx-auto"
            src={`${process.env.NEXT_PUBLIC_IMAGE}/${post.image}`}
            alt={post.title}
            title={post.title}
            width={500}
            height={500}
          />
        </div>

        <Download post={post} />
      </div>
      <div className="bg-white my-5 mx-2 px-5 py-3 rounded-3xl shadow">
        <h2>Frequently Asked Questions</h2>

        <FAQ />
      </div>
      <Share post={post} />
    </div>
  );
};
export default Page;
