import { Lead } from "@/types/lead";
import { LeadApiInterface } from "./LeadInterface";

class LeadApiMock implements LeadApiInterface {
  submitLead = (lead: Lead) => {
    const promise = new Promise<void>((resolve) => {
      console.info(`Mock POST --- URL: ${lead}`);
      window.setTimeout(() => {
        resolve();
      }, 500);
    });

    return promise;
  };

  getLead = (leadId: string) => {
    const promise = new Promise<Lead>((resolve) => {
      console.info(`Mock GET --- URL: ${leadId}`);
      window.setTimeout(() => {
        resolve({} as Lead);
      }, 500);
    });

    return promise;
  };
}

export default LeadApiMock;
