"use client";

import LeadForm from "@/components/LeadForm";
import styles from "./page.module.css";
import Typography from "@/components/Typography";
import LeadProvider from "@/providers/LeadProvider";

export default function Home() {
  return (
    <div className={styles.root}>
      <main className={styles.main}>
        <div className={styles.banner}>
          <Typography variant="h1">Solar Calculator</Typography>
        </div>
        <LeadProvider>
          <LeadForm />
        </LeadProvider>
      </main>
    </div>
  );
}
