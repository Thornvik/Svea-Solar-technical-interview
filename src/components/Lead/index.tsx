"use client";

import { useGetLead } from "@/hooks/LeadHookts";
import { useEffect } from "react";
import styles from "./Lead.module.css";
import Typography from "../Typography";

interface LeadProps {
  leadId: string;
}

const Lead = (props: LeadProps) => {
  const { leadId } = props;
  const { getLead, lead, loading } = useGetLead();

  useEffect(() => {
    if (leadId) getLead(leadId);
  }, [leadId]);

  if (loading && !lead) {
    return (
      <div className={styles.root}>
        <Typography>...loading</Typography>
      </div>
    );
  }

  return (
    <div className={styles.root}>
      <Typography variant="body1">First name: {lead?.firstName}</Typography>
      <Typography variant="body1">Last name: {lead?.lastName}</Typography>
      <Typography variant="body1">Email: {lead?.email}</Typography>
      <Typography variant="body1">Phone number: {lead?.phone}</Typography>
      <Typography variant="body1">Address: {lead?.address}</Typography>
      <Typography variant="body1">Postal code: {lead?.postalCode}</Typography>
      <Typography variant="body1">City: {lead?.city}</Typography>
    </div>
  );
};

export default Lead;
