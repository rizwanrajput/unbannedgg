import React from "react";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { DiscordIcon, TelegramIcon, TwitterIcon } from "@/assests/svgs";
import { Button } from "../ui/button";
import { LINKS } from "@/constant/config";

export const LandingPageLinks = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Status",
    link: "/status",
  },
  {
    name: "Features",
    link: "/#features",
  },

  {
    name: "Reviews",
    link: "/#reviews",
  },
];

const Footer = () => {
  return (
    <div className="mt-20 flex flex-col">
      {/* Upper Footer */}
      <div className="middle flex flex-row justify-between px-4 pb-4 xl:px-0">
        <div className="flex flex-col gap-5">
          {/* <Logo className="" /> */}
          <div className="max-w-[550px] text-sm text-brandGray">
            {`At unbanned.gg we thrive to ensure a safe gaming experiance for all, with our state of the ark serial changer we can ensure user saftey masking every serial possible.`}
          </div>
          <div className="text-sm text-brand">
            {`UNBANNED.GG is not affiliated or endorsed by Fornite in any way`}
          </div>
          <div className="mt-3 flex flex-row items-center gap-2">
            <Link href={LINKS?.DISCORD} target="_blank">
              <Button
                variant={"outline"}
                className="flex flex-row items-center gap-2 border-[#262626]"
              >
                <DiscordIcon className="h-[18px] w-[18px]" />
              </Button>
            </Link>
            <Link href={LINKS?.TWITTER} target="_blank">
              <Button
                variant={"outline"}
                className="flex flex-row items-center gap-2 border-[#262626]"
              >
                <TwitterIcon className="h-[18px] w-[18px]" />
              </Button>
            </Link>
            <Link href={LINKS?.TELEGRAM} target="_blank">
              <Button
                variant={"outline"}
                className="flex flex-row items-center gap-2 border-[#262626]"
              >
                <TelegramIcon className="h-[18px] w-[18px]" />
              </Button>
            </Link>
          </div>
          <div className="flex flex-row flex-wrap items-center justify-between gap-2 text-sm sm:hidden">
            {LandingPageLinks?.map((link, index) => (
              <Link href={link?.link} key={index}>
                <div className="flex cursor-pointer flex-row items-center gap-1 duration-200 hover:text-white">
                  <span>{link?.name}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <div className="hidden h-full w-[100px] flex-col gap-2 sm:flex">
          <div className="ml-1 font-semibold">Links</div>
          <div className="flex flex-col gap-2 text-sm text-brandGray">
            {LandingPageLinks?.map((link, index) => (
              <Link href={link?.link} key={index}>
                <div className="flex cursor-pointer flex-row items-center gap-1 duration-200 hover:text-white">
                  <ChevronRight className="w-4" />
                  <span>{link?.name}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      {/* Divider */}
      <div className="border-t border-[#1b1e20]"></div>
    </div>
  );
};

export default Footer;
