"use client";

import LeadForm from "@/components/LeadForm";
import styles from "./page.module.css";
import Typography from "@/components/Typography";
import LeadProvider from "@/providers/LeadProvider";

export default function Home() {
  return (
    <div>
      <header className={styles.header}>
        <Typography variant="h1">Solar Calculator</Typography>
      </header>

      <main className={styles.main}>
        <LeadProvider>
          <LeadForm />
        </LeadProvider>
      </main>
    </div>
  );
}
