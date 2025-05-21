import { Lead } from "@/types/lead";
import { LeadApiInterface } from "./LeadInterface";

class LeadApi implements LeadApiInterface {
  submitLead = (lead: Lead) => {
    const promise = new Promise<void>((reslove, reject) => {
      fetch("", { method: "post", body: JSON.stringify(lead) })
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
    const promise = new Promise<Lead>((reslove, reject) => {
      fetch(`url/${leadId}`)
        .then(async (res) => {
          if (!res.ok) {
            const errorResponse = await res.json();
            reject(errorResponse);
          }

          const responseJson = await res.json();
          reslove(responseJson as Lead);
        })
        .catch((error) => {
          reject(error);
        });
    });

    return promise;
  };
}

export default LeadApi;
