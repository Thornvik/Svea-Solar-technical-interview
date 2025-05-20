"use client";

import Input from "@/components/Input";
import styles from "./page.module.css";
import Typography from "@/components/Typography";
import Select from "@/components/Select";
import { useState } from "react";
import { RoofSizeEnum } from "@/types/roof";
import calculateSavings from "@/utils/calculateSavings";

export default function Home() {
  const [currentBill, setCurrentBill] = useState(0);
  const [roofSize, setRoofSize] = useState<RoofSizeEnum>(RoofSizeEnum.SMALL);

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Typography variant="h1">Solar Calculator</Typography>

        <div className={styles.calculator}>
          <Input
            onChange={({ target }) => setCurrentBill(parseInt(target.value))}
            placeholder="2000"
            type="number"
            label="Current electricity bill"
            hintText="Cost of your latest electricity bill in SEK"
          />

          <Select
            onChange={({ target }) => setRoofSize(target.value as RoofSizeEnum)}
            hintText="Estimation of your roof size"
            label="Roof size"
          >
            <option value={RoofSizeEnum.SMALL}>Small</option>
            <option value={RoofSizeEnum.MEDIUM}>Medium</option>
            <option value={RoofSizeEnum.LARGE}>Large</option>
          </Select>

          <div className={styles["savings-estimate"]}>
            <Typography variant="h3">
              {currentBill === 0
                ? "Update current bill to show estimated monthly savings"
                : `Estimated monthly Savings: ${calculateSavings(
                    currentBill,
                    roofSize
                  )} SEK`}
            </Typography>
          </div>
        </div>
      </main>
    </div>
  );
}
