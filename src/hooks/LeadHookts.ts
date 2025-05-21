import { LeadService } from "@/api";
import { Lead } from "@/types/lead";
import { useState } from "react";
import { useRouter } from 'next/navigation'

export const useSubmitLead = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter()

  const submitLead = (lead: Lead, estiamtedSavings?: number) => {
    setLoading(true);
    LeadService.submitLead(lead, estiamtedSavings)
      .then(() => {
        router.push("/lead/lead-1");
      })
      .catch(() => {
        // handle error
      })
      .finally(() => setLoading(false));
  };

  return { loading, submitLead };
};

export const useGetLead = () => {
  const [lead, setLead] = useState<Lead>();
  const [loading, setLoading] = useState(false);

  const getLead = (id: string) => {
    setLoading(true);
    LeadService.getLead(id)
      .then((res) => setLead(res))
      .catch(() => {
        // handle error
      })
      .finally(() => setLoading(false));
  };

  return { lead, getLead, loading };
};
