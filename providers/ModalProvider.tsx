"use client";
import { PurchaseModal } from "@/components/modals/PurchaseModal";
import { modalState } from "@/global/modal-states";
import React, { useState, useEffect } from "react";
import { useRecoilState } from "recoil";

export const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [currentModal, setcurrentModal] = useRecoilState(modalState);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  // console.log("[MODAL] ModalProvider", currentModal);

  switch (currentModal?.modalName) {
    case "PurchaseModal":
      return <PurchaseModal />;
    default:
      return null;
  }
};
