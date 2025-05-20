import { useState } from "react";
import Input from "../Input";
import Typography from "../Typography";
import styles from "./LeadForm.module.css";
import { RoofSizeEnum } from "@/types/roof";
import Select from "../Select";
import calculateSavings from "@/utils/calculateSavings";

const LeadForm = () => {
  const [currentBill, setCurrentBill] = useState(0);
  const [roofSize, setRoofSize] = useState<RoofSizeEnum>(RoofSizeEnum.SMALL);

  return (
    <>
      <form className={styles.calculator}>
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
      </form>

      <form className={styles.lead}>
        <div className={styles["lead-header"]}>
          <Typography variant="h2">Get a free quote</Typography>

          <Typography variant="body1">
            With complete contact details, we can calculate how much you can
            save even before we call.
          </Typography>
        </div>

        <Input label="First name" />
        <Input label="Last name" />
        <Input label="Email" />
        <Input label="Phonenumber" />
        <Input className={styles.address} label="Address" />
        <Input label="Postal code" />
        <Input label="City" />
      </form>
    </>
  );
};

export default LeadForm;
