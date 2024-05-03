import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";

const ShowAllProducts = async () => {
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
          <div className="bg-gradient-to-b from-[#979696] to-white bg-clip-text text-4xl font-bold text-transparent">{`Our Products`}</div>
          <div className="text-brandGray ">{`View our undetectedable products`}</div>
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
                    <div className="flex flex-row gap-2 font-bold">
                      <div
                        className={cn(
                          "rounded-md px-2 py-1 text-xs",
                          group?.products_bound?.[0]?.custom_fields?.[0]
                            ?.default === "False"
                            ? "bg-green-400/10 text-green-400"
                            : "bg-brand/10 text-brand",
                        )}
                      >
                        {group?.products_bound?.[0]?.custom_fields?.[0]
                          ?.default === "False"
                          ? "Undetected"
                          : "Detected"}
                      </div>
                      <div
                        className={cn(
                          "rounded-md px-2 py-1 text-xs",
                          group?.products_bound?.[0]?.custom_fields?.[1]
                            ?.default === "False"
                            ? "bg-brand/10 text-brand"
                            : "bg-green-400/10 text-green-400",
                        )}
                      >
                        {group?.products_bound?.[0]?.custom_fields?.[1]
                          ?.default === "False"
                          ? "USB Not Required"
                          : "USB Required"}
                      </div>
                    </div>
                    <div className="flex flex-row items-end justify-between">
                      {/* Starting Price */}
                      <div className="flex flex-col gap-1">
                        <div className="text-xs text-brandGray">{`Starting At:`}</div>
                        <div className="flex flex-row items-end gap-1">
                          <div className="text-lg font-black text-brand">{`£`}</div>
                          <div className="text-2xl font-black text-brand">
                            {group?.price}
                          </div>
                        </div>
                      </div>
                      {/* Purchase Button */}
                      <Link href={`/group/${group?.uniqid}`}>
                        <Button variant={"brand"}>Purchase</Button>
                      </Link>
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
                    <div className="flex flex-row gap-2 font-bold">
                      <div
                        className={cn(
                          "rounded-md px-2 py-1 text-xs",
                          product?.custom_fields?.[0]?.default === "False"
                            ? "bg-green-400/10 text-green-400"
                            : "bg-brand/10 text-brand",
                        )}
                      >
                        {product?.custom_fields?.[0]?.default === "False"
                          ? "Undetected"
                          : "Detected"}
                      </div>
                      <div
                        className={cn(
                          "rounded-md px-2 py-1 text-xs",
                          product?.custom_fields?.[1]?.default === "False"
                            ? "bg-brand/10 text-brand"
                            : "bg-green-400/10 text-green-400",
                        )}
                      >
                        {product?.custom_fields?.[1]?.default === "False"
                          ? "USB Not Required"
                          : "USB Required"}
                      </div>
                    </div>
                    <div className="flex flex-row items-end justify-between">
                      {/* Starting Price */}
                      <div className="flex flex-col gap-1">
                        <div className="text-xs text-brandGray">{`Starting At:`}</div>
                        <div className="flex flex-row items-end gap-1">
                          <div className="text-lg font-black text-brand">{`£`}</div>
                          <div className="text-2xl font-black text-brand">
                            {product?.price_display}
                          </div>
                        </div>
                      </div>
                      {/* Purchase Button */}
                      <Link href={`/product/${product?.uniqid}`}>
                        <Button variant={"brand"}>Purchase</Button>
                      </Link>
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

export default ShowAllProducts;
