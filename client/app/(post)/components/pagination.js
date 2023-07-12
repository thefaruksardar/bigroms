"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  MdArrowBack,
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
} from "react-icons/md";

const Pagination = ({ length, page }) => {
  const [postLength, setPostLength] = useState(length);
  const [perPage, setPerPage] = useState(20);
  const [totalPage, setTotalPage] = useState(Math.ceil(postLength / perPage));

  const [paginationNumbers, setPaginationNumber] = useState([]);

  //   for (let i = page - 3; i <= page + 3; i++) {
  //     if (i < 1) continue;
  //     if (i > totalPage) break;
  //     return i;
  //   }

  const generatePaginationNumbers = (page, totalPage) => {
    const paginationArray = [];

    for (let i = +page - 2; i <= +page + 2; i++) {
      if (i < 1) continue;
      if (i > totalPage) break;
      paginationArray.push(i);
    }

    return paginationArray;
  };

  // Call the generatePaginationNumbers function whenever the page or totalPage values change
  useEffect(() => {
    const generatedNumbers = generatePaginationNumbers(page, totalPage);
    setPaginationNumber(generatedNumbers);
  }, [page, totalPage]);

  return (
    <div className="text-center">
      <div className="flex items justify-center gap-2">
        {+page - 1 >= 1 && (
          <Link
            href={`http://localhost:3000/?page=${+page - 1}`}
            className="text-2xl text-blue-500 bg-white
            } inline-block gap-1 p-1 rounded-lg border"
          >
            <MdKeyboardArrowLeft />
          </Link>
        )}
        {paginationNumbers.map((number) => (
          <Link
            className={`${
              page == number
                ? "bg-blue-500 text-white"
                : "text-blue-500 bg-white"
            } inline-block py-1 px-3 rounded-lg border hover:border-blue-500`}
            href={`http://localhost:3000/?page=${number}`}
          >
            {number}
          </Link>
        ))}
        {+page + 1 <= totalPage && (
          <Link
            href={`http://localhost:3000/?page=${+page + 1}`}
            className="text-2xl text-blue-500 bg-white
            } inline-block gap-1 p-1 rounded-lg border"
          >
            <MdKeyboardArrowRight />
          </Link>
        )}
      </div>
    </div>
  );
};
export default Pagination;
