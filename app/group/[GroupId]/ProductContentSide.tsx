"use client";

import FormattedText from "@/components/product/FormatMDX";
import { Button } from "@/components/ui/button";
import { modalState } from "@/global/modal-states";
import { cn } from "@/lib/utils";
import React, { useState } from "react";
import { useRecoilState } from "recoil";

const ProductContentSide = ({ Data }: any) => {
  const [currentModal, setcurrentModal] = useRecoilState(modalState);
  const [VariantID, setVariantID] = useState(Data?.products_bound?.[0]?.uniqid);
  const [VariantName, setVariantName] = useState(
    Data?.products_bound?.[0]?.title,
  );
  const [VariantPrice, setVariantPrice] = useState(
    Data?.products_bound?.[0]?.price_display,
  );
  const [VariantStock, setVariantStock] = useState(
    Data?.products_bound?.[0]?.stock,
  );

  const handleOpenModal = () => {
    setcurrentModal({
      modalName: "PurchaseModal",
      modalData: {
        variantID: VariantID,
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
          <div className="text-3xl font-bold text-white">{VariantName}</div>
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
        <div className="text-brand">{VariantStock}</div>
      </div>
      {/* options */}
      <div className="text-brandGray">{`Variants :`}</div>
      <div className="flex flex-row flex-wrap gap-3">
        {Data?.products_bound?.map((item: any, index: number) => (
          <Button
            key={index}
            // variant={VariantID === item.uniqid ? "brand" : "outline"}
            variant={"outline"}
            className={cn("w-fit", VariantID === item.uniqid && "border-brand")}
            onClick={() => {
              setVariantID(item.uniqid);
              setVariantName(item.title);
              setVariantPrice(item.price_display);
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
          type="submit"
          onClick={handleOpenModal}
          variant={"brand"}
          className={cn("w-full")}
        >
          {`Purchase`}
        </Button>
      </div>
      {/* product description */}
      <div className="text-brandGray">{`Description :`}</div>
      <div className="rounded-xl border border-brandBorder p-4">
        <FormattedText text={Data?.products_bound?.[0]?.description} />
      </div>
    </div>
  );
};

export default ProductContentSide;
