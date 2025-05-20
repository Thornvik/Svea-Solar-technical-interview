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
  leadErrors: Record<LeadFieldEnum, boolean> | undefined;
}

export const LeadContext = createContext({} as LeadContextValue);

interface LeadProviderProps {
  children: ReactNode;
}

const LeadProvider = (props: LeadProviderProps) => {
  const { children } = props;
  const [lead, setLead] = useState<Lead>({} as Lead);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [leadErrors, setLeadErrors] =
    useState<Record<LeadFieldEnum, boolean>>();

  const updateLead = (field: LeadFieldEnum, value: string) => {
    const updatedLeadValue = { ...lead, field: value };

    // TODO: validate required fields

    setLead(updatedLeadValue);
  };

  return (
    <LeadContext.Provider value={{ lead, leadErrors, updateLead }}>
      {children}
    </LeadContext.Provider>
  );
};

export default LeadProvider;
