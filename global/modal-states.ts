import { atom } from "recoil";

export type modalNameTypes = null | "PurchaseModal";

export interface modalStateType {
  modalName: modalNameTypes;
  modalData?: {} | any;
}

export const modalState = atom({
  key: "modalState",
  default: { modalName: null, modalData: {} } as modalStateType,
});
