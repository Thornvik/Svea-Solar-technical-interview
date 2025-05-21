import { Lead, LeadWithEstimate } from "@/types/lead";

export interface LeadApiInterface {
  submitLead: (lead: Lead, estimatedSavings?: number) => Promise<void>;
  getLead: (leadId: string) => Promise<LeadWithEstimate>;
}
