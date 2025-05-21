import LeadApi from "./lead/Lead";
import LeadApiMock from "./lead/LeadMock";

const isProp = process.env.NODE_ENV === "production";

export const LeadService = isProp ? new LeadApi() : new LeadApiMock();
