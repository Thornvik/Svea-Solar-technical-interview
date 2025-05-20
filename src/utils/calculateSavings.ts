import { RoofSizeEnum } from "@/types/roof";
import roofSizeToEstimate from "./roofSizeToEstimate";

const calculateSavings = (currentBill: number, roofSize: RoofSizeEnum) => {
  if (!currentBill || currentBill === 0) return 0;

  return currentBill / roofSizeToEstimate(roofSize);
};

export default calculateSavings;
