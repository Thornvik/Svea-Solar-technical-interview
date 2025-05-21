import { Lead, LeadWithEstimate } from "@/types/lead";

export interface LeadApiInterface {
  submitLead: (lead: Lead, estiamtedSavings?: number) => Promise<void>;
  getLead: (leadId: string) => Promise<LeadWithEstimate>;
}
