"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useRecoilState } from "recoil";
import { modalState, modalStateType } from "@/global/modal-states";
import { useState } from "react";
import {
  CheckCircle,
  CheckCircle2,
  CreditCard,
  CreditCardIcon,
  GemIcon,
  Loader,
  PackageCheck,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Checkbox } from "../ui/checkbox";
import { LINKS } from "@/constant/config";
import { CashappIcon, CryptoIcon, PaypalIcon } from "@/assests/svgs";

export function PurchaseModal() {
  const { push } = useRouter();

  const [currentModal, setcurrentModal] = useRecoilState(modalState);

  // console.log("[MODAL] PurchaseModal", currentModal.modalData);

  const handleClose = () => {
    setcurrentModal({ modalName: null } as modalStateType);
  };

  //  Plan type according to play type we will generate the inoivce for user
  const modalData = currentModal?.modalData;

  return (
    <Dialog open={currentModal.modalName === "PurchaseModal"}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader className="flex flex-row items-center gap-4">
          <div className="flex h-[44px] min-h-[44px] w-[44px] items-center justify-center rounded-full border">
            <PackageCheck size={20} />
          </div>
          <div className="flex flex-col gap-2">
            <DialogTitle>{`Checkout`}</DialogTitle>
            <DialogDescription className="text-xs">{`Select Your Payment Method.`}</DialogDescription>
          </div>
        </DialogHeader>
        {/*<============= ModalBody =============>*/}
        <div className="flex w-full flex-col gap-4 px-4 pb-4">
          <Button
            data-sellix-product={modalData?.variantID}
            className="flex w-full flex-row items-center gap-2"
            variant={"brand"}
          >
            <CryptoIcon className="h-[16px] w-[16px]" />
            <div>Pay with Crypto</div>
          </Button>
          <Button
            data-sellix-product={modalData?.variantID}
            data-sellix-gateway="PAYPAL"
            className="flex w-full flex-row items-center gap-2"
            variant={"brand"}
          >
            <PaypalIcon className="h-[16px] w-[16px]" />
            <div>Pay with Paypal</div>
          </Button>
          <Link href={LINKS?.DISCORD}>
            <Button
              className="flex w-full flex-row items-center gap-2"
              variant={"brand"}
            >
              <CashappIcon className="h-[16px] w-[16px]" />
              <div>Pay with Cashapp</div>
            </Button>
          </Link>
          <Link href={`https://unbannedgg.sellhub.cx/`}>
            <Button
              className="flex w-full flex-row items-center gap-2"
              variant={"brand"}
            >
              <CreditCardIcon className="h-[16px] w-[16px]" />
              <div>Pay with Card</div>
            </Button>
          </Link>
        </div>
      </DialogContent>
    </Dialog>
  );
}
