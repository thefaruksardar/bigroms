import { FiMail, FiTwitter } from "react-icons/fi";
const Page = () => {
  return (
    <div className="mt-[65px] px-3 py-5 md:max-w-lg mx-auto lg:max-w-4xl">
      <div className="postContent bg-white page max-w-lg rounded-2xl shadow px-3 py-3 md:max-w-lg mx-auto lg:max-w-4xl">
        <h2 className="text-2xl font-bold tracking-tight my-2 sm:text-3xl">
          Get in touch 👋
        </h2>
        <p className="mt-3">
          If you wish to request any ROMs, kindly get in touch with us by using
          the provided email address below.
        </p>
        <div className="mt-8 flex flex-col gap-1">
          <a
            className="flex items-center gap-3 text-[#3d3d3d]"
            href="mailto:theppssppgames@gmail.com"
          >
            <FiMail />
            <span>theppssppgames@gmail.com</span>
          </a>
          {/* <a
            className="flex items-center gap-3 text-[#3d3d3d]"
            href="https://twitter.com/thefaruksardar"
            target="_blank"
          >
            <FiTwitter />
            <span>@thefaruksardar</span>
          </a> */}
        </div>
      </div>
    </div>
  );
};
export default Page;
