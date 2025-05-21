import isValidEmail from "@/utils/isValidEmail";
import isValidPhoneNumber from "@/utils/isValidPhoneNumber";
import isValidPostalCode from "@/utils/isValidPostalCode";
import { createContext, ReactNode, useState } from "react";

interface Lead {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  postalCode: string;
  city: string;
}

export enum LeadFieldEnum {
  FIRST_NAME = "firstName",
  LAST_NAME = "lastName",
  EMAIL = "email",
  PHONE = "phone",
  ADDRESS = "address",
  POSTAL_CODE = "postalCode",
  CITY = "city",
}

interface LeadContextValue {
  lead: Lead;
  updateLead: (field: LeadFieldEnum, value: string) => void;
  leadErrors: Map<LeadFieldEnum, boolean>;
}

export const LeadContext = createContext({} as LeadContextValue);

interface LeadProviderProps {
  children: ReactNode;
}

const LeadProvider = (props: LeadProviderProps) => {
  const { children } = props;
  const [lead, setLead] = useState<Lead>({} as Lead);
  const [leadErrors, setLeadErrors] = useState<Map<LeadFieldEnum, boolean>>(
    new Map()
  );

  const updateLead = (field: LeadFieldEnum, value: string) => {
    const updatedLeadValue = { ...lead, [field]: value };
    const newErrorMap = new Map(leadErrors.entries());

    if (field === LeadFieldEnum.EMAIL) {
      newErrorMap.set(LeadFieldEnum.EMAIL, !isValidEmail(value));
    }

    if (field === LeadFieldEnum.PHONE) {
      newErrorMap.set(LeadFieldEnum.PHONE, !isValidPhoneNumber(value));
    }

    if (field === LeadFieldEnum.POSTAL_CODE) {
      newErrorMap.set(LeadFieldEnum.POSTAL_CODE, !isValidPostalCode(value));
    }

    setLeadErrors(newErrorMap);
    setLead(updatedLeadValue);
  };

  return (
    <LeadContext.Provider value={{ lead, leadErrors, updateLead }}>
      {children}
    </LeadContext.Provider>
  );
};

export default LeadProvider;
