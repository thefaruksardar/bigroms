import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-slate-200 mt-5 p-5 border-t-4 border-[#3d3d3d]">
      <div className="flex flex-col gap-3 max-w-3xl mx-auto">
        <div className="flex flex-col justify-between border-gray-200 border-t py-3 lg:flex-row lg:gap-0">
          <div>
            <p className="">
              Access the most up-to-date and popular emulator ROMs for various
              platforms, including PSP, Gameboy Advance, Nintendo DS, and more.
              Download them now to enjoy a wide range of gaming options.
            </p>
          </div>
        </div>

        <div className="text-center">
          <ul className="flex text-left gap-5 flex-col md:flex-row md:justify-center">
            <li>
              <Link href="/terms-and-conditions">Teams and Condition</Link>
            </li>
            <li>
              <Link href="/privacy-policy">Privacy Policy</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="py-5">
          <p className="text-center">
            {`Copyright © ${new Date().getFullYear()} iFramegenerator.net, All rights reserved.`}
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
