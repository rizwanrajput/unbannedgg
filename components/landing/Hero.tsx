"use client";

import React from "react";
import { Button } from "../ui/button";
import {
  BarChart2Icon,
  ExternalLinkIcon,
  HeartIcon,
  ShoppingBagIcon,
  TrendingUpIcon,
} from "lucide-react";
import Image from "next/image";
import { DiscordIcon, TelegramIcon } from "@/assests/svgs";
import Link from "next/link";
import { LINKS } from "@/constant/config";
import RevealAnimation from "../framer/RevealAnimation";
import {
  motion,
  useAnimate,
  animate,
  useAnimation,
  useInView,
} from "framer-motion";

const Carousel_images = [
  "/valorant_icon.png",
  "/apex_icon.png",
  "/fornite_icon.png",
  "/epic_games_icon.png",
];

const Hero = () => {
  return (
    <div className="relative overflow-hidden border-b-4 border-brand px-4 pb-20">
      <div className="middle flex flex-col items-center justify-between md:flex-row">
        <div className="w-fit space-y-6 py-[140px] text-center sm:text-start">
          <RevealAnimation>
            <div className="mx-auto w-fit select-none rounded-md bg-gradient-to-r from-brand/50 to-transparent p-[1px] text-xs drop-shadow-lg sm:mx-0">
              <div className="rounded-md bg-brandBackground px-3 py-1.5 font-semibold">
                {`Unbanned.gg - Shop #1 in the Cheat Market`}
              </div>
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <div className="bg-gradient-to-b from-[#979696] to-white bg-clip-text text-5xl font-semibold leading-[1.1] text-transparent lg:text-7xl">
              ENCHANCE YOUR
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.5}>
            <div className="red-text-shadow text-5xl font-black leading-[1.1] text-brand lg:text-7xl">
              GAMING EXPERIENCE
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.8}>
            <div className="text-sm text-brandGray sm:text-base">
              {`We provide the opportunity to purchase only the best products. By choosing us, you choose quality!`}
            </div>
          </RevealAnimation>
          <div className="flex flex-row items-center justify-center gap-6 sm:justify-start">
            <RevealAnimation delay={1}>
              <Link href="/products">
                <Button
                  variant={"brand"}
                  className="flex flex-row items-center gap-2"
                >
                  <ShoppingBagIcon size={18} strokeWidth={2.5} />
                  <span>Products</span>
                </Button>
              </Link>
            </RevealAnimation>
            <RevealAnimation delay={1.2}>
              <Link href="/status" target="_blank">
                <Button
                  variant={"outline"}
                  className="flex flex-row items-center gap-2"
                >
                  <BarChart2Icon size={16} strokeWidth={2.5} />
                  <span>Status</span>
                </Button>
              </Link>
            </RevealAnimation>
          </div>
        </div>
        {/* image */}
        <div className="relative hidden select-none sm:flex">
          {/* Having a problem box */}
          <Link href={LINKS?.DISCORD} target="_blank">
            <motion.div
              className="group absolute left-[-120px] top-4 z-10 w-fit cursor-pointer rounded-md border border-[#1b1e20] bg-brandBackground/80 p-4 pr-8 drop-shadow-2xl"
              animate="visible"
              initial="hidden"
              transition={{
                duration: 0.5,
                delay: 1,
              }}
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: -50 },
              }}
            >
              <div className="font-bold">{`Having a problem?`}</div>
              <div className="flex flex-row items-center gap-2 text-brandGray duration-200 group-hover:text-brand/80">
                <div className="text-sm">We are here to help you</div>
                <ExternalLinkIcon size={16} strokeWidth={2.5} />
              </div>
            </motion.div>
          </Link>
          {/* Discord link and telegram link box */}
          <motion.div
            animate="visible"
            initial="hidden"
            transition={{
              duration: 0.5,
              delay: 1.2,
            }}
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: 50 },
            }}
            className="absolute bottom-[-50px] left-[-50px] z-10 flex w-fit flex-col gap-4 rounded-md border border-[#1b1e20] bg-brandBackground/80 p-4"
          >
            <Link href={LINKS?.DISCORD} target="_blank">
              <DiscordIcon className="h-[35px] w-[35px] cursor-pointer text-brandGray duration-200 hover:text-white" />
            </Link>
            <Link href={LINKS?.TELEGRAM} target="_blank">
              <TelegramIcon className="h-[35px] w-[35px] cursor-pointer text-brandGray duration-200 hover:text-white" />
            </Link>
          </motion.div>
          {/* why Us box */}
          <motion.div
            animate="visible"
            initial="hidden"
            transition={{
              duration: 0.5,
              delay: 1.4,
            }}
            variants={{
              visible: { opacity: 1, x: 0 },
              hidden: { opacity: 0, x: 50 },
            }}
            className="absolute bottom-14 right-[-140px] z-20 w-fit rounded-md border border-[#1b1e20] bg-brandBackground p-4"
          >
            <div className="font-bold">{`Why Us?`}</div>
            <div className="flex flex-row items-center gap-2 text-brandGray duration-200">
              <div className="text-sm">Active Updates and Protection</div>
            </div>
            <div className="mt-2 flex w-fit flex-row items-center gap-2 rounded-md bg-green-400/20 px-2 py-1 text-xs text-green-400">
              <TrendingUpIcon size={16} strokeWidth={2.5} />
              <div>{`+ 200%`}</div>
            </div>
            <div className="mt-2 flex w-full flex-row items-end justify-between">
              <div className="group flex flex-col items-center gap-1 text-xs text-brandGray">
                <div className="duration-200 group-hover:text-white">40</div>
                <div className="h-[40px] w-[20px] rounded-md bg-brandGray/20 duration-200 group-hover:bg-white"></div>
              </div>
              <div className="group flex flex-col items-center gap-1 text-xs text-brandGray">
                <div className="duration-200 group-hover:text-white">80</div>
                <div className="h-[80px] w-[20px] rounded-md bg-brandGray/20 duration-200 group-hover:bg-white"></div>
              </div>
              <div className="group flex flex-col items-center gap-1 text-xs text-brandGray">
                <div className="duration-200 group-hover:text-white">20</div>
                <div className="h-[50px] w-[20px] rounded-md bg-brandGray/20 duration-200 group-hover:bg-white"></div>
              </div>
              <div className="group flex flex-col items-center gap-1 text-xs text-brandGray">
                <div className="duration-200 group-hover:text-white">25</div>
                <div className="h-[25px] w-[20px] rounded-md bg-brandGray/20 duration-200 group-hover:bg-white"></div>
              </div>
              <div className="flex flex-col items-center gap-1 text-xs text-green-400">
                <div>200</div>
                <div className="h-[140px] w-[20px] rounded-md bg-green-400"></div>
              </div>
            </div>
          </motion.div>
          <div className="flex h-[400px] w-[400px] flex-col items-center rounded-xl border border-[#1b1e20] bg-brandBackground p-4">
            <Image
              className="red-logo-shadow w-[100px] min-w-[100px] flex-1 object-contain"
              src="/logo.png"
              alt="logo"
              width={450}
              height={300}
            />
            <div className="flex w-full flex-col gap-2">
              <div className="flex flex-row items-center gap-1.5">
                <HeartIcon size={16} strokeWidth={2.5} fill="white" />
                <div>
                  <span className="font-bold">Popular</span> Products
                </div>
              </div>
              {/* corusle */}
              <div className="relative w-full overflow-hidden py-4">
                <div className="absolute left-0 top-0 z-10 h-full w-full bg-gradient-to-r from-brandBackground/80 via-transparent to-brandBackground/80"></div>
                <div className="article-coursel">
                  <div className="coursel-track">
                    <div className="coursel-ul">
                      {Carousel_images.map((image, index) => (
                        <div key={index} className="coursel-li">
                          <Image
                            className="w-30 h-6 rounded-md object-contain"
                            src={image}
                            alt="game icon"
                            width={100}
                            height={100}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="coursel-track">
                    <div className="coursel-ul">
                      {Carousel_images.map((image, index) => (
                        <div key={index} className="coursel-li">
                          <Image
                            className="w-30 h-6 rounded-md object-contain"
                            src={image}
                            alt="game icon"
                            width={100}
                            height={100}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Link href="/status" className="w-full">
              <div className="flex w-full cursor-pointer flex-row items-center justify-center gap-2 rounded-md bg-brandGray/15 py-3 duration-200 hover:bg-brandGray/30">
                <span className="text-sm">View Status</span>
                <BarChart2Icon size={16} strokeWidth={2.5} />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
