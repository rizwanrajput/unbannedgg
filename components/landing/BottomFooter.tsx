import Link from "next/link";
import React from "react";

const BottomFooter = () => {
  return (
    <div className="middle flex flex-row items-center justify-between px-4 pb-4 pt-4 xl:px-0">
      <div className="mx-auto text-sm text-brandGray">
        &copy; Unbanned.gg 2024
      </div>
      {/* <Link href="https://legions.dev" target="_blank">
        <div className="flex cursor-pointer flex-col rounded-md px-2 py-2">
          <div className="relative z-10 text-[11px] font-semibold leading-[14px]">
            Website By
          </div>
          <div className="relative font-bold leading-[16px] text-brand">
            <div className="absolute left-0 top-0 h-full w-full bg-brand opacity-70 blur-lg" />
            <div className="relative z-10">{`Legions.dev`}</div>
          </div>
        </div>
      </Link> */}
    </div>
  );
};

export default BottomFooter;
