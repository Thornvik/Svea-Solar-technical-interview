"use client";

import LeadForm from "@/components/LeadForm";
import styles from "./page.module.css";
import LeadProvider from "@/providers/LeadProvider";
import Typography from "@/components/Typography";

export default function Home() {
  return (
    <div className={styles.root}>
      <main className={styles.main}>
        <div className={styles.banner}>
          <Typography className={styles.heading} variant="h1">Connect with us about you future solar panels</Typography>
        </div>
        <LeadProvider>
          <LeadForm />
        </LeadProvider>
      </main>
    </div>
  );
}
