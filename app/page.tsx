import BestSeller from "@/components/landing/BestSeller";
import BottomFooter from "@/components/landing/BottomFooter";
import Footer from "@/components/landing/Footer";
import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import MovingBanner from "@/components/landing/MovingBanner";
import OurReviews from "@/components/landing/OurReviews";
import WhyChooseUs from "@/components/landing/WhyChooseUs";
import Image from "next/image";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <div className="relative overflow-hidden">
        <Image
          className="absolute -top-[85px] left-0 z-[-1] min-w-[1920px] select-none object-cover opacity-[0.05] hue-rotate-[200deg]"
          alt="sage background cheats valorant"
          src="/sagebackground.webp"
          width={1980}
          height={1080}
        />
        <Header />
        <Hero />
      </div>
      {/* <MovingBanner /> */}
      <div className="relative">
        <Image
          className="absolute left-0 top-0 z-[-1] h-full select-none object-cover opacity-[0.04] hue-rotate-[100deg]"
          alt="sage background cheats valorant"
          src="/8zhsq7ps8ip51.webp"
          width={1980}
          height={1080}
        />
        <BestSeller />
        <WhyChooseUs />
        <OurReviews />
        <Footer />
      </div>
      <BottomFooter />
    </div>
  );
}

export const dynamic = "force-dynamic";
