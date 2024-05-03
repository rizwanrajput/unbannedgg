"use client";

import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { StarIcon } from "lucide-react";
import moment from "moment";

const SellixProductReviews = ({ reviews }: any) => {
  const [isClient, setIsClient] = React.useState(false);

  React.useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  if (reviews.length == 0) return null;

  return (
    <Carousel className="w-2/3">
      <CarouselContent>
        {reviews?.map((item: any, index: number) => (
          <CarouselItem key={index}>
            <div className="flex h-full flex-col gap-2 rounded-lg border border-brandBorder p-4">
              <div className="flex flex-row items-center justify-between">
                <div className="text-sm text-brandGray">
                  {moment.unix(item?.created_at).format("LL")}
                </div>
                <div className="rounded-md bg-green-400/15 px-2 py-1 text-xs font-semibold text-green-400 ">{`Verified Purchase`}</div>
              </div>
              <div className="flex flex-row gap-1">
                {Array(item?.score)
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
              <div>{item?.message}</div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default SellixProductReviews;
