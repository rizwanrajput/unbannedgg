import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";

const ShowAllProductStatus = async () => {
  // Fetching all groups from the sellix api
  const SellixGroupData = await fetch(
    `https://dev.sellix.io/v1/groups?timestamp=${Date.now()}`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.SELLIX_API_KEY}`,
      },
    },
  ).then((res) => res.json());

  // Getting the minimum price of each group and adding a price field to the group object
  SellixGroupData?.data?.groups.forEach((group: any) => {
    group?.products_bound?.forEach((card: any) => {
      let minPrice = Number(group?.products_bound?.[0]?.price_display);
      group?.products_bound?.forEach((product: any) => {
        if (Number(product?.price_display) < minPrice) {
          minPrice = Number(product?.price_display);
        }
      });
      group.price = minPrice.toString();
    });
  });

  // Fetching all products from the sellix api
  const SellixProductsData = await fetch(
    `https://dev.sellix.io/v1/products?timestamp=${Date.now()}`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.SELLIX_API_KEY}`,
      },
    },
  ).then((res) => res.json());

  // Getting all products which are in groups only
  const SellixGroupProducts: any = [];

  // Mapping all products from the groups
  SellixGroupData?.data?.groups.map((products: any) => {
    return SellixGroupProducts.push(...products?.products_bound);
  });

  // Getting all products which are not in groups to show them separately
  const RemaingProducts = SellixProductsData?.data?.products.filter(
    (product: any) =>
      !SellixGroupProducts.map((p: any) => p?.uniqid).includes(product?.uniqid),
  );

  return (
    <div className="px-4">
      <div className="middle">
        <div className="mt-14 flex flex-col items-center justify-center">
          <div className="bg-gradient-to-b from-[#979696] to-white bg-clip-text text-4xl font-bold text-transparent">{`Status`}</div>
          <div className="text-brandGray ">{`View our products’s status`}</div>
        </div>
        {/* All Products */}
        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {SellixGroupData?.data?.groups.map((group: any, index: number) => {
            return (
              !group?.unlisted && (
                <div
                  key={index}
                  id={`${group?.unlisted}`}
                  className={cn(
                    "relative flex w-full select-none flex-col overflow-hidden rounded-xl border border-brandBorder bg-brandBackground",
                  )}
                >
                  {/* Top Text Field of card */}
                  <div className="overflow-hidden rounded-tl-xl rounded-tr-xl p-5 pt-8">
                    <div className="relative">
                      <div className="absolute h-full w-full bg-brand opacity-10 blur-3xl"></div>
                      <div className="ForniteFont relative z-10 flex min-h-[120px] flex-col items-center justify-center text-center text-5xl tracking-wide text-brand">
                        {group?.title}
                      </div>
                    </div>
                  </div>
                  {/* Bottom Information Field */}
                  <div className="flex flex-col gap-3 bg-white/5 p-3">
                    <div className="flex flex-col gap-2">
                      <div className="flex flex-row items-center justify-between">
                        <div className="text-sm text-white/50">{`Status:`}</div>
                        <div
                          className={cn(
                            "text-sm font-black",
                            group?.products_bound?.[0]?.custom_fields?.[0]
                              ?.default === "False"
                              ? "text-green-400"
                              : "text-brand",
                          )}
                        >
                          {group?.products_bound?.[0]?.custom_fields?.[0]
                            ?.default === "False"
                            ? "Undetected"
                            : "Detected"}
                        </div>
                      </div>
                      <div className="flex flex-row items-center justify-between">
                        <div className="text-sm text-white/50">{`USB Required:`}</div>
                        <div
                          className={cn(
                            "text-sm font-black",
                            group?.products_bound?.[0]?.custom_fields?.[1]
                              ?.default === "False"
                              ? "text-brand"
                              : "text-green-400",
                          )}
                        >
                          {group?.products_bound?.[0]?.custom_fields?.[1]
                            ?.default === "False"
                            ? "Not Required"
                            : "Required"}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            );
          })}
          {/* Remaining Products */}
          {RemaingProducts.map((product: any, index: number) => {
            return (
              !product?.unlisted && (
                <div
                  key={index}
                  className="relative flex w-full select-none flex-col overflow-hidden rounded-xl border border-brandBorder bg-brandBackground"
                >
                  {/* Top Text Field of card */}
                  <div className="overflow-hidden rounded-tl-xl rounded-tr-xl p-5 pt-8">
                    <div className="relative">
                      <div className="absolute h-full w-full bg-brand opacity-10 blur-3xl"></div>
                      <div className="ForniteFont relative z-10 flex min-h-[120px] flex-col items-center justify-center text-center text-5xl tracking-wide text-brand">
                        {product?.title}
                      </div>
                    </div>
                  </div>
                  {/* Bottom Information Field */}
                  <div className="flex flex-col gap-3 bg-white/5 p-3">
                    <div className="flex flex-col gap-2">
                      <div className="flex flex-row items-center justify-between">
                        <div className="text-sm text-white/50">{`Status:`}</div>
                        <div
                          className={cn(
                            "text-sm font-black",
                            product?.custom_fields?.[0]?.default === "False"
                              ? "text-green-400"
                              : "text-brand",
                          )}
                        >
                          {product?.custom_fields?.[0]?.default === "False"
                            ? "Undetected"
                            : "Detected"}
                        </div>
                      </div>
                      <div className="flex flex-row items-center justify-between">
                        <div className="text-sm text-white/50">{`USB Required:`}</div>
                        <div
                          className={cn(
                            "text-sm font-black",
                            product?.custom_fields?.[1]?.default === "False"
                              ? "text-brand"
                              : "text-green-400",
                          )}
                        >
                          {product?.custom_fields?.[1]?.default === "False"
                            ? "Not Required"
                            : "Required"}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ShowAllProductStatus;
