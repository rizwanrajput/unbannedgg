import Header from "@/components/landing/Header";
import ShowAllProductStatus from "@/components/product/ShowAllProductStatus";
import Image from "next/image";
import React from "react";

const Page = async () => {
  return (
    <div className="h-fit overflow-hidden pb-10">
      <Image
        className="fixed left-0 z-[-1] h-full select-none object-cover opacity-[0.05] hue-rotate-[200deg]"
        alt="sage background cheats valorant"
        src="/sagebackground.webp"
        width={1980}
        height={1080}
      />
      <Header />
      <ShowAllProductStatus />
    </div>
  );
};

export default Page;

export const dynamic = "force-dynamic";
