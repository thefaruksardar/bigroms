import axios from "axios";
import Image from "next/image";
import Link from "next/link";

const fetchPost = async (category) => {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_POST}/category/${category}`
  );
  const data = await res.data;
  return data;
};

const Page = async ({ searchParams: { page } }) => {
  const posts = await fetchPost("PSP");
  return (
    <main className="mt-[70px] mx-auto md:max-w-6xl ">
      <div className="grid grid-cols-2 gap-3 px-3 my-5 md:grid-cols-3 md:gap-6 lg:grid-cols-5">
        {posts.map((post) => (
          <Link
            className="block h-auto"
            href={`${process.env.NEXT_PUBLIC_DOMAIN}/playstation-portable/${post.permalink}`}
          >
            <div className="bg-white rounded-xl shadow-md">
              <Image
                className="rounded-t-xl"
                src={`${process.env.NEXT_PUBLIC_IMAGE}/${post.image}`}
                alt={post.title}
                title={post.title}
                width={1000}
                height={1000}
              />

              <p className="text-center p-1">{post.name}</p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
};
export default Page;
