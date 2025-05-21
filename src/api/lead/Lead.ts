import { Lead, LeadWithEstimate } from "@/types/lead";
import { LeadApiInterface } from "./LeadInterface";

class LeadApi implements LeadApiInterface {
  submitLead = (lead: Lead, estiamtedSavings?: number,) => {
    const promise = new Promise<void>((reslove, reject) => {
      fetch("", { method: "post", body: JSON.stringify({lead, estiamtedSavings}) })
        .then(async (res) => {
          if (!res.ok) {
            const errorResponse = await res.json();
            reject(errorResponse);
          }

          reslove();
        })
        .catch((error) => {
          reject(error);
        });
    });

    return promise;
  };

  getLead = (leadId: string) => {
    const promise = new Promise<LeadWithEstimate>((reslove, reject) => {
      fetch(`url/${leadId}`)
        .then(async (res) => {
          if (!res.ok) {
            const errorResponse = await res.json();
            reject(errorResponse);
          }

          const responseJson = await res.json();
          reslove(responseJson as LeadWithEstimate);
        })
        .catch((error) => {
          reject(error);
        });
    });

    return promise;
  };
}

export default LeadApi;
