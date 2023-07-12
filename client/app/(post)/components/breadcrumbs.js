import Link from "next/link";
import { MdKeyboardArrowRight } from "react-icons/md";

const Breadcrumbs = ({ crumbs }) => {
  return (
    <nav className=" px-5 pt-3">
      <ul className="flex items-center gap-1 text-sm">
        {crumbs.map((crumb, index) => (
          <li key={crumb.title} className="flex items-center">
            {index > 0 && <span>/</span>} {/* Separator between crumbs */}
            <Link href={crumb.permalink} className=" px-1">
              {crumb.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Breadcrumbs;
