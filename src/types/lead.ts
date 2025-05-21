export interface Lead {
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