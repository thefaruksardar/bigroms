import axios from "axios";

const fetchPost = async (page) => {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_POST}/pagination?page=${page}`
  );
  const data = await res.data;
  return data;
};

const Page = async () => {
  const posts = await fetchPost();

  return (
    <div className="mt-[65px]">
      {'<?xml version="1.0" encoding="UTF-8"?>'}
      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        {posts.map((post) => (
          <urlset xmlns={`http://www.bigroms.com/${post.permalink}`}>
            <url>
              <loc>={`http://www.bigroms.com/${post.permalink}`}</loc>
              <lastmod>2022-06-04</lastmod>
            </url>
          </urlset>
        ))}
      </urlset>
    </div>
  );
};
export default Page;
