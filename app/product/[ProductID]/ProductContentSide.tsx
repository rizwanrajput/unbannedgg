"use client";

import FormattedText from "@/components/product/FormatMDX";
import { Button } from "@/components/ui/button";
import { modalState } from "@/global/modal-states";
import { cn } from "@/lib/utils";
import React, { useState } from "react";
import { useRecoilState } from "recoil";

const ProductContentSide = ({ Data }: any) => {
  const [currentModal, setcurrentModal] = useRecoilState(modalState);
  const [VariantName, setVariantName] = useState(
    Data?.price_variants?.[0]?.title,
  );
  const [VariantPrice, setVariantPrice] = useState(
    Data?.price_variants?.[0]?.price || Data?.price_display,
  );
  const [VariantStock, setVariantStock] = useState(
    Data?.price_variants?.[0]?.stock,
  );

  const handleOpenModal = () => {
    setcurrentModal({
      modalName: "PurchaseModal",
      modalData: {
        variantID: Data?.uniqid,
      },
    });
  };

  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-2">
          <div className="text-sm uppercase tracking-widest text-brand">
            {Data?.title}
          </div>
          <div className="text-3xl font-bold text-white">{Data?.title}</div>
        </div>
        <div className="flex flex-col items-end">
          <span className="text-sm text-brandGray">{`Starting At :`}</span>
          <div className="flex flex-col items-end">
            <div className="flex flex-row items-end gap-1">
              <div className="text-xl font-black text-brand">{`£`}</div>
              <div className="text-3xl font-black text-brand">
                {VariantPrice}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Stock */}
      <div className="flex flex-row items-center gap-2">
        <div className="text-brandGray">{`Stock :`}</div>
        <div className="text-brand">
          {VariantStock >= 0 ? VariantStock : "Unlimited"}
        </div>
      </div>
      {/* options */}
      <div className="text-brandGray">{`Variants :`}</div>
      <div className="flex flex-row flex-wrap gap-3">
        {Data?.price_variants?.map((item: any, index: number) => (
          <Button
            key={index}
            // variant={VariantID === item.uniqid ? "brand" : "outline"}
            variant={"outline"}
            className={cn("w-fit", VariantName === item.title && "bg-brand")}
            onClick={() => {
              setVariantName(item.title);
              setVariantPrice(item.price);
              setVariantStock(item.stock);
            }}
          >
            {item?.title?.replace(`${Data?.title} | `, "")}
          </Button>
        ))}
      </div>
      {/* Purchase */}
      <div className="mt-2 flex flex-row flex-wrap gap-4">
        <Button
          onClick={handleOpenModal}
          type="submit"
          variant={"brand"}
          className={cn("w-full")}
        >
          {`Purchase`}
        </Button>
      </div>
      {/* product description */}
      <div className="text-brandGray">{`Description :`}</div>
      <div className="rounded-xl border border-brandBorder p-4">
        <FormattedText text={Data?.description} />
      </div>
    </div>
  );
};

export default ProductContentSide;
