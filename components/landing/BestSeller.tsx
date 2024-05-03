import { CheckIcon } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import RevealAnimation from "../framer/RevealAnimation";

const BestSellerCards = [
  {
    id: "6599bfe255c03",
    title1: "FN",
    title2: "PUBLIC",
    isPopular: false,
    price: "0.00",
    features: [
      "Cheapest on the Market",
      "Fully Undetected on BattlEye",
      "Windows 10 Supported",
      "All Weapons Prediction",
      "Tournament Ready",
      "Good Support Team",
    ],
  },
  {
    id: "6599bf898b7b3",
    title1: "PERM",
    title2: "SPOOFER",
    isPopular: true,
    price: "0.00",
    features: [
      "S.M.A.R.T Serial Spoofing",
      "TPM BYPASS",
      "Windows 10 & 11 Supported",
      "Modifies Serials at a Kernel Level",
      "1 Click Spoof",
      "USB Required",
      "All Motherboards Supported",
    ],
  },
  {
    id: "65fef715be4b5",
    title1: "TEMP",
    title2: "SPOOFER",
    isPopular: false,
    price: "0.00",
    features: [
      "S.M.A.R.T Serial Spoofing",
      "TPM BYPASS",
      "Windows 10 & 11 Supported",
      "Modifies Serials at a Kernel Level",
      "1 Click Spoof",
      "USB Required",
    ],
  },
];

const BestSeller = async () => {
  const SellixGroupData = await fetch(
    `https://dev.sellix.io/v1/groups?timestamp=${Date.now()}`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.SELLIX_API_KEY}`,
      },
    },
  ).then((res) => res.json());

  SellixGroupData?.data?.groups.forEach((group: any) => {
    BestSellerCards.forEach((card: any) => {
      if (card?.id === group?.uniqid) {
        let minPrice = Number(group?.products_bound?.[0]?.price_display);
        group?.products_bound?.forEach((product: any) => {
          if (Number(product?.price_display) < minPrice) {
            minPrice = Number(product?.price_display);
          }
        });
        card.price = minPrice.toString();
      }
    });
  });

  return (
    <div className="px-4 pt-14">
      <div className="middle">
        <div className="flex flex-col items-center justify-center">
          <RevealAnimation screenReveal>
            <div className="bg-gradient-to-b from-[#979696] to-white bg-clip-text text-4xl font-bold text-transparent">{`Best Seller`}</div>
          </RevealAnimation>
          <RevealAnimation screenReveal delay={0.2}>
            <div className="text-brandGray">{`Our most purchased products.`}</div>
          </RevealAnimation>
        </div>
        {/* cards */}
        <div className="flex flex-col items-center justify-center">
          <div className="mt-6 grid w-full grid-flow-row grid-cols-1 gap-6 sm:w-fit sm:grid-cols-2 md:grid-cols-3">
            {BestSellerCards?.map((card, index) => (
              <RevealAnimation
                className={cn(
                  index + 1 == 2 &&
                    "sm:order-3 sm:col-span-2 md:order-2 md:col-span-1",
                  index + 1 == 3 && "sm:order-2 md:order-3",
                  card?.isPopular
                    ? "border-brand bg-background shadow-2xl shadow-brand/10"
                    : "border-brandBorder bg-[#1b1e20]",
                  "relative flex h-fit flex-col items-center gap-3 rounded-xl border p-4 pt-6 lg:w-[320px] xl:w-[350px]",
                )}
                key={index}
                screenReveal
                delay={index * 0.3}
              >
                {card?.isPopular && (
                  <div className="absolute -top-3 rounded-md bg-brand px-5 py-1 text-xs font-bold text-white">
                    Popular
                  </div>
                )}
                {/* Top Title */}
                <div className="flex flex-row items-center gap-2 text-3xl font-bold">
                  <div>{card?.title1}</div>
                  <div className="font-black text-brand">{card?.title2}</div>
                </div>
                {/* Pricing Starts At */}
                <div className="flex flex-col items-center">
                  <div className="text-brandGray">Starting At</div>
                  <div className="flex flex-row items-end gap-1">
                    <div className="text-xl font-black text-brand">{`£`}</div>
                    <div className="text-3xl font-black text-brand">
                      {card?.price}
                    </div>
                  </div>
                </div>
                {/* Feature Divider */}
                <div className="flex w-full flex-row items-center gap-2">
                  <div className="h-[1px] w-full bg-brandGray/25" />
                  <div className="text-xs text-brandGray">FEATURES</div>
                  <div className="h-[1px] w-full bg-brandGray/25" />
                </div>
                {/* Features */}
                <div className="flex flex-col gap-2.5">
                  {card?.features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex flex-row items-center gap-2.5"
                    >
                      <CheckIcon size={16} className="text-brand" />
                      <div className="text-sm">{feature}</div>
                    </div>
                  ))}
                </div>
                {/* Purchase Button */}
                <div className="mt-5 w-full">
                  <Link href={`/group/${card?.id}`}>
                    <Button variant={"brand"} className="w-full">
                      Purchase
                    </Button>
                  </Link>
                </div>
              </RevealAnimation>
            ))}
          </div>
          <Link href={"/products"} className="mt-5">
            <Button variant={"outline"} className="">
              View All Products
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BestSeller;
