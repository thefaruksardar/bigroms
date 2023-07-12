import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import Pagination from "./pagination";

const fetchPost = async (page) => {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_POST}/pagination?page=${page ? page - 1 : 0}`
  );
  const data = await res.data;
  return data;
};

const fetchAllPost = async () => {
  const res = await axios.get(`${process.env.NEXT_PUBLIC_POST}`);
  const data = await res.data;
  return data;
};

const Posts = async ({ page }) => {
  const allPosts = await fetchAllPost();
  const posts = await fetchPost(page);

  return (
    <main>
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
      <Pagination length={allPosts.length} page={page ? page : 1} />
    </main>
  );
};
export default Posts;
