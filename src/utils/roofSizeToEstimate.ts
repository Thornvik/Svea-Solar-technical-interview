import { RoofSizeEnum } from "@/types/roof";

const roofSizeToEstimate = (roofSize: RoofSizeEnum) => {
  switch (roofSize) {
    case RoofSizeEnum.SMALL:
      return 4;
    case RoofSizeEnum.MEDIUM:
      return 3;
    case RoofSizeEnum.LARGE:
      return 2;
    default:
      return 1;
  }
};

export default roofSizeToEstimate;
