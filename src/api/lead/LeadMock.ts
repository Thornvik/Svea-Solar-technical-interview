import { Lead, LeadWithEstimate } from "@/types/lead";
import { LeadApiInterface } from "./LeadInterface";

class LeadApiMock implements LeadApiInterface {
  submitLead = (lead: Lead, estimatedSavings?: number) => {
    const promise = new Promise<void>((resolve) => {
      console.info(`Mock POST --- URL: ${lead}`);

      window.setTimeout(() => {
        localStorage.setItem(
          "lead-1",
          JSON.stringify({...lead, estimatedSavings })
        );

        resolve();
      }, 500);
    });

    return promise;
  };

  getLead = (leadId: string) => {
    const promise = new Promise<LeadWithEstimate>((resolve) => {
      console.info(`Mock GET --- URL: ${leadId}`);

      const lead = localStorage.getItem(leadId);

      if (lead) {
        const parsedLead = JSON.parse(lead);
        resolve(parsedLead as LeadWithEstimate);
      }
    });

    return promise;
  };
}

export default LeadApiMock;
