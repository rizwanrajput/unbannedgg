import Header from "@/components/landing/Header";
import Link from "next/link";
import React from "react";
import ProductContentSide from "./ProductContentSide";
import SellixProductReviews from "@/components/product/SellixProductReviews";

const Page = async ({ params }: { params: { ProductID: string } }) => {
  // Fetching all groups from the sellix api
  const SellixProductData = await fetch(
    `https://dev.sellix.io/v1/products/${params?.ProductID}?timestamp=${Date.now()}`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.SELLIX_API_KEY}`,
      },
    },
  ).then((res) => res.json());

  return (
    <div className="relative pb-10">
      <Header />
      {/* bread crump */}
      <div className="px-4">
        <div className="middle">
          <div className="text-sm text-brandGray">
            {`Unbanned.gg / product / `}
            <span className="text-brand">{params?.ProductID}</span>
          </div>
          {/* content */}
          <div className="mt-10 flex flex-col gap-10 md:flex-row">
            <div className="md:w-1/2">
              <div className="sticky left-0 top-10 w-full">
                <img
                  className="w-full rounded-xl border border-brandBorder"
                  src={
                    SellixProductData?.data?.product?.image_attachment
                      ?.cloudflare_image_id
                      ? `https://imagedelivery.net/95QNzrEeP7RU5l5WdbyrKw/${SellixProductData?.data?.product?.image_attachment?.cloudflare_image_id}/shopitem`
                      : "https://imagedelivery.net/95QNzrEeP7RU5l5WdbyrKw/03448fcf-7ac9-4cfd-6403-3e5efc534700/shopitem"
                  }
                  alt="product image"
                />
                <div className="mt-10 flex items-center justify-center">
                  <SellixProductReviews
                    reviews={SellixProductData?.data?.product?.feedback?.list}
                  />
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <ProductContentSide Data={SellixProductData?.data?.product} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;

export const dynamic = "force-dynamic";
