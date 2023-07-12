"use client";
import axios from "axios";
import { MdAdd, MdDelete, MdDeleteOutline, MdEdit } from "react-icons/md";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Options = ({ post }) => {
  const router = useRouter();

  const handleDeletePost = (post) => {
    if (confirm("Delete this Post")) {
      const res = axios.delete(`${process.env.NEXT_PUBLIC_POST}/${post._id}`);

      router.refresh;
    }
  };
  return (
    <div>
      <div className="flex justify-between items-center gap-3 w-[15%]">
        <span className="bg-gray-900 px-4 rounded-lg text-white">
          {post.rom}
        </span>
        <span
          className={`px-4 rounded-lg text-white ${
            post.isdraft ? "bg-yellow-500" : "bg-green-500"
          }`}
        >
          {post.isdraft ? "Draft" : "Publish"}
        </span>
        <Link
          href={`http://localhost:3000/update/${post.permalink}`}
          className="text-xl bg-gray-900 p-1 rounded-full text-white"
          target="_blank"
          onClick={(e) => localStorage.clear()}
        >
          <MdEdit />
        </Link>
        <span
          className="text-xl bg-gray-900 p-1 rounded-full text-white"
          onClick={(e) => handleDeletePost(post)}
        >
          <MdDeleteOutline />
        </span>
      </div>
    </div>
  );
};
export default Options;
