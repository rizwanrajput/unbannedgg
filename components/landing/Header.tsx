import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { LINKS } from "@/constant/config";

const HeaderData = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "Products",
    link: "/products",
  },
  {
    title: "Status",
    link: "/status",
  },
  {
    title: "Reviews",
    link: "/#reviews",
  },
];

const Header = () => {
  return (
    <div className="px-4">
      <div className="middle">
        <div className="flex h-[80px] flex-row items-center justify-between">
          <Link href={"/"}>
            <Image
              className="w-[80px] min-w-[80px]"
              src="/logo.png"
              alt="logo"
              width={450}
              height={300}
            />
          </Link>
          <div className="flex flex-row items-center gap-2">
            <div className="hidden flex-row items-center gap-2 sm:flex">
              {HeaderData.map((item, index) => (
                <Link key={index} href={item.link}>
                  <Button key={index} variant={"ghost"}>
                    {item.title}
                  </Button>
                </Link>
              ))}
            </div>
            <Link href={LINKS?.DISCORD}>
              <Button variant={"brand"}>Discord</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
