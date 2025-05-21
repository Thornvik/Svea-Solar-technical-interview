import { useContext, useState } from "react";
import Input from "../Input";
import Typography from "../Typography";
import styles from "./LeadForm.module.css";
import { RoofSizeEnum } from "@/types/roof";
import Select from "../Select";
import calculateSavings from "@/utils/calculateSavings";
import { LeadContext } from "@/providers/LeadProvider";
import Button from "../Button/Index";
import { LeadFieldEnum } from "@/types/lead";
import { useSubmitLead } from "@/hooks/LeadHookts";

const LeadForm = () => {
  const [currentBill, setCurrentBill] = useState(0);
  const [roofSize, setRoofSize] = useState<RoofSizeEnum>(RoofSizeEnum.SMALL);
  const { lead, leadErrors, updateLead } = useContext(LeadContext);
  const { loading, submitLead } = useSubmitLead();

  return (
    <div className={styles.root}>
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
          <Typography variant="h3">Estimated Savings </Typography>

          <Typography variant="body1">
            {calculateSavings(currentBill, roofSize)}
          </Typography>
        </div>
      </div>

      <form
        className={styles.lead}
        action={() => submitLead(lead, calculateSavings(currentBill, roofSize))}
      >
        <div className={styles["lead-header"]}>
          <Typography variant="h2">Get a free quote</Typography>

          <Typography variant="body1">
            With complete contact details, we can calculate how much you can
            save even before we call.
          </Typography>
        </div>

        <Input
          label="First name *"
          required
          onChange={({ target }) =>
            updateLead(LeadFieldEnum.FIRST_NAME, target.value)
          }
        />
        <Input
          label="Last name *"
          required
          onChange={({ target }) =>
            updateLead(LeadFieldEnum.LAST_NAME, target.value)
          }
        />
        <Input
          label="Email *"
          required
          onChange={({ target }) =>
            updateLead(LeadFieldEnum.EMAIL, target.value)
          }
          status={leadErrors.get(LeadFieldEnum.EMAIL) ? "error" : undefined}
          supportingText={
            leadErrors.get(LeadFieldEnum.EMAIL)
              ? "Please enter a valid email, e.g. example@email.com"
              : undefined
          }
        />
        <Input
          label="Phonenumber *"
          required
          onChange={({ target }) =>
            updateLead(LeadFieldEnum.PHONE, target.value)
          }
          status={leadErrors.get(LeadFieldEnum.PHONE) ? "error" : undefined}
          supportingText={
            leadErrors.get(LeadFieldEnum.PHONE)
              ? "Please enter a valid phone number, e.g. 073 242 55 77"
              : undefined
          }
        />
        <Input
          className={styles.address}
          label="Address *"
          required
          onChange={({ target }) =>
            updateLead(LeadFieldEnum.ADDRESS, target.value)
          }
        />
        <Input
          label="Postal code *"
          required
          onChange={({ target }) =>
            updateLead(LeadFieldEnum.POSTAL_CODE, target.value)
          }
          status={
            leadErrors.get(LeadFieldEnum.POSTAL_CODE) ? "error" : undefined
          }
          supportingText={
            leadErrors.get(LeadFieldEnum.POSTAL_CODE)
              ? "Please enter a valid postal code, e.g. 19176"
              : undefined
          }
        />
        <Input
          label="City *"
          required
          onChange={({ target }) =>
            updateLead(LeadFieldEnum.CITY, target.value)
          }
        />

        <Button
          disabled={loading}
          type="submit"
          className={styles.submit}
          label="Submit"
        />
      </form>
    </div>
  );
};

export default LeadForm;
