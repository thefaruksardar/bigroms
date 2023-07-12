import axios from "axios";
import Link from "next/link";
import { MdAdd, MdDelete, MdDeleteOutline } from "react-icons/md";
import Options from "./options";

const fetchPost = async () => {
  const res = await axios.get(process.env.NEXT_PUBLIC_POST);
  const data = await res.data;
  return data;
};

const Posts = async () => {
  let data = await fetchPost();

  return (
    <div className="max-w-[95%] mx-auto">
      <div className="px-6 py-3">
        <div className="shadow-md flex justify-center items-center rounded-xl border hover:shadow-lg">
          <Link
            href="/add"
            className="text-xl py-2 font-semibold flex items-center text-blue-500 px-3"
          >
            <MdAdd />
            Add Post
          </Link>
        </div>
      </div>
      <div className="bg-red">
        <div>
          {data.map((post) => (
            <div className="flex justify-between items-center py-3 rounded-lg px-4 cursor-pointer hover:bg-gray-100">
              <Link
                href={`playstation-portable/${post.name
                  .replace(/\s+/g, "-")
                  .replace(/-+/g, "-")
                  .replace(/[^\w-]/g, "")
                  .toLowerCase()}`}
                className="hover:underline"
              >
                <span>{post.title}</span>
              </Link>
              <Options post={post} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Posts;
