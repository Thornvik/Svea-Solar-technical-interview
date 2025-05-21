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
      <div className={styles.detail}>
        <Typography className={styles['detail-title']} variant="body2">First name:</Typography>
        <Typography variant="body2">{lead?.firstName}</Typography>
      </div>

      <div className={styles.detail}>
        <Typography className={styles['detail-title']}  variant="body2">Last name:</Typography>
        <Typography variant="body2">{lead?.lastName}</Typography>
      </div>
      <div className={styles.detail}>
        <Typography className={styles['detail-title']}  variant="body2">Email:</Typography>
        <Typography variant="body2">{lead?.email}</Typography>
      </div>
      <div className={styles.detail}>
        <Typography className={styles['detail-title']}  variant="body2">Phone number:</Typography>
        <Typography variant="body2">{lead?.phone}</Typography>
      </div>
      <div className={styles.detail}>
        <Typography className={styles['detail-title']}  variant="body2">Address:</Typography>
        <Typography variant="body2">{lead?.address}</Typography>
      </div>
      <div className={styles.detail}>
        <Typography className={styles['detail-title']}  variant="body2">Postal code:</Typography>
        <Typography variant="body2">{lead?.postalCode}</Typography>
      </div>
      <div className={styles.detail}>
        <Typography className={styles['detail-title']}  variant="body2">City:</Typography>
        <Typography variant="body2">{lead?.city}</Typography>
      </div>
    </div>
  );
};

export default Lead;
