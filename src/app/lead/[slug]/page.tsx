import Typography from "@/components/Typography";
import styles from "./page.module.css";
import Lead from "@/components/Lead";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return (
    <div className={styles.root}>
      <main className={styles.main}>
        <div className={styles.banner}>
          <Typography variant="h1" className={styles.heading}>Thank you for submitting</Typography>
        </div>

        <Lead leadId={slug} />
      </main>
    </div>
  );
}
