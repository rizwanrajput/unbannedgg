import { BadgeCheckIcon, Star, StarIcon } from "lucide-react";
import Image from "next/image";
import React from "react";
import RevealAnimation from "../framer/RevealAnimation";

const ReviewList = [
  {
    starCount: 5,
    review:
      "Very good spoofer, quick and very easy to setup, i highly recommend using this spoofer! 10/10",
  },
  {
    starCount: 4,
    review: "I used the Perm Swoofer+FN Pub it’s really good can recommend!",
  },
  {
    starCount: 5,
    review:
      "10/10 best seller ever quick and easy 10/10 on the product will buy more in the future def recommend buying",
  },
  {
    starCount: 5,
    review:
      "After trying MANY swoofers, this one Is easily the best, easy to setup, 100% works and perfect for the price",
  },
  {
    starCount: 4,
    review: "amazing service, and very friendly and quick",
  },
  {
    starCount: 5,
    review:
      "Honestly W spoofer, worked perfectly fine and no issues. I recommend this alot",
  },
  {
    starCount: 5,
    review:
      "Amazing support, owner is a great guy and overall genuinely cares about making sure customers get the're moneys worth.",
  },
  {
    starCount: 4,
    review:
      "One of the best public cheats out there, especially after the update.. Didnt got banned or any sht.. super fast delivery",
  },
];

const OurReviews = () => {
  return (
    <div id="reviews" className="px-4">
      <div className="middle">
        <div className="flex flex-col items-center justify-center">
          <RevealAnimation screenReveal>
            <div className="bg-gradient-to-b from-[#979696] to-white bg-clip-text text-4xl font-bold text-transparent">{`Our Reviews`}</div>
          </RevealAnimation>
          <RevealAnimation screenReveal delay={0.2}>
            <div className="text-brandGray">{`Customer’s honest reviews`}</div>
          </RevealAnimation>
        </div>
        {/* Reviews */}
        <div className="mt-10 grid grid-flow-row gap-4 sm:grid-cols-2 sm:gap-10 lg:grid-cols-4 lg:gap-16">
          {ReviewList?.map((review, index) => (
            <RevealAnimation key={index} screenReveal delay={index * 0.2}>
              <div
                key={index}
                className="relative flex w-full flex-col gap-2 rounded-xl border border-brandBorder bg-brandBackground p-5"
              >
                {/* verfied badge */}
                <div className="absolute right-[-1px] top-4 flex select-none items-center gap-2 rounded-bl-md rounded-tl-md bg-brand px-3 py-1.5 pr-6 text-xs font-bold text-white sm:right-[-14px] sm:rounded-tr-md">
                  <BadgeCheckIcon size={16} />
                  <span>Verified</span>
                </div>
                {/* verfied badge triangle */}
                <div className="parallogram2 absolute right-[2px] top-[44px] z-[-1] hidden h-[30px] w-[100px] bg-brand/40 sm:flex"></div>
                <div className="flex flex-row gap-1">
                  {Array(review.starCount)
                    .fill(0)
                    .map((_, index) => (
                      <StarIcon
                        key={index}
                        size={16}
                        fill="red"
                        className="text-brand"
                      />
                    ))}
                </div>
                <div className="mt-2 min-h-[60px] text-sm text-[#979696]">
                  {review?.review}
                </div>
              </div>
            </RevealAnimation>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurReviews;
