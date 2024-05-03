import React from "react";

const MovingBannerTexts = [
  "UNBANNED.GG",
  "BEST CHEAT PROVIDER",
  "SHOP NOW",
  "UNBANNED.GG",
  "BEST CHEAT PROVIDER",
  "SHOP NOW",
];

const MovingBanner = () => {
  return (
    <div className="">
      <div className="relative left-[-10px] top-[-20px] w-[110%] select-none">
        <div className="article-coursel group  flex min-w-max flex-row gap-3 bg-brand py-2">
          <div className="coursel-track flex w-full flex-row">
            {MovingBannerTexts.map((text, index) => (
              <div
                key={index}
                className="bg-gradient-to-r from-brandBackground to-brandBackground bg-clip-text text-4xl font-black text-transparent duration-200 group-hover:from-white group-hover:to-white"
              >
                {`${text} ✨`}
              </div>
            ))}
          </div>
          <div className="coursel-track flex w-full flex-row">
            {MovingBannerTexts.map((text, index) => (
              <div
                key={index}
                className="bg-gradient-to-r from-brandBackground to-brandBackground bg-clip-text text-4xl font-black text-transparent duration-200 group-hover:from-white group-hover:to-white"
              >
                {`${text} ✨`}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovingBanner;
