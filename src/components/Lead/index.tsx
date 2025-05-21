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
      <Typography>{lead?.firstName}</Typography>
      <Typography>{lead?.lastName}</Typography>
      <Typography>{lead?.email}</Typography>
      <Typography>{lead?.phone}</Typography>
      <Typography>{lead?.address}</Typography>
      <Typography>{lead?.postalCode}</Typography>
      <Typography>{lead?.city}</Typography>
    </div>
  );
};

export default Lead;
