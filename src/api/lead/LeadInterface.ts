import { Lead } from "@/types/lead";

export interface LeadApiInterface {
  submitLead: (lead: Lead) => Promise<void>
  getLead: (leadId: string) => Promise<Lead>
}