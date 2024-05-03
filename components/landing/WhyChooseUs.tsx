import Image from "next/image";
import React from "react";
import RevealAnimation from "../framer/RevealAnimation";

const FeatureList = [
  {
    title: "#1 Leading",
    description: "We are the leading provider of cheats.",
    image: "/valorant_omen.png",
  },
  {
    title: "Fast updates",
    description:
      "We have experience in creating cheats, we work quickly and qualitatively.",
    image: "/apex_mota-min.png",
  },
  {
    title: "Quality",
    description: "We provide the best quality of products to our customers.",
    image: "/fornite_pumpkin.png",
  },
  {
    title: "+17,800 Customers",
    description: "We have more than 17,800 satisfied customers.",
    image: "/fornite_midus.png",
  },
];

const WhyChooseUs = () => {
  return (
    <div id="features" className="mt-14 px-4">
      <div className="middle pb-20">
        <div className="flex flex-col items-center justify-center">
          <RevealAnimation screenReveal>
            <div className="bg-gradient-to-b from-[#979696] to-white bg-clip-text text-4xl font-bold text-transparent">{`Why Us?`}</div>
          </RevealAnimation>
          <RevealAnimation screenReveal delay={0.2}>
            <div className="text-brandGray">
              Our qualities that distinguish us from other products
            </div>
          </RevealAnimation>
        </div>
        {/* feature boxes */}
        <div className="mt-20 grid grid-flow-row gap-16 sm:grid-cols-2 lg:grid-cols-4">
          {FeatureList.map((feature, index) => (
            <RevealAnimation key={index} screenReveal delay={index * 0.2}>
              <div
                key={index}
                className="relative flex w-full flex-col gap-2 rounded-xl border border-brandBorder p-4"
              >
                <Image
                  draggable={false}
                  alt="valorant reyna"
                  className="absolute -bottom-2 right-[-70px] h-[120%] w-fit object-contain"
                  src={feature?.image}
                  width={587}
                  height={900}
                ></Image>
                <div className="text-4xl font-bold text-brandGray/30">{`0${index + 1}`}</div>
                <div className="text-2xl font-bold text-white">
                  {feature?.title}
                </div>
                <div className="min-h-[40px] w-11/12 text-sm text-brandGray">
                  {feature?.description}
                </div>
              </div>
            </RevealAnimation>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
