"use client";

import { Switch as AriaSwitch } from "react-aria-components";

const Switch = ({ children, isSelected, ...props }) => {
  return (
    <AriaSwitch
      {...props}
      className={`group cursor-pointer inline-flex touch-none items-center gap-1 justify-between py-3 px-2 rounded-xl  hover:border  ${
        isSelected
          ? "border border-blue-500 bg-blue-50 hover:border-blue-500"
          : "border border-transparent bg-slate-100 hover:border-slate-400"
      }`}
      style={{ WebkitTapHighlightColor: "transparent" }}
    >
      <span>{children}</span>
      <span className="group-data-[selected]:bg-blue-500 group-data-[focus-visible]:ring-2 h-6 w-9 cursor-pointer rounded-full border-2 border-transparent bg-zinc-600 ring-offset-2 ring-offset-zinc-900 transition duration-200">
        <span className="group-data-[selected]:ml-3 group-data-[selected]:group-data-[pressed]:ml-2 group-data-[pressed]:w-6 block h-5 w-5 origin-right rounded-full bg-white shadow transition-all duration-200" />
      </span>
    </AriaSwitch>
  );
};

export default Switch;
