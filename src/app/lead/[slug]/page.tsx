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
    <div>
      <header className={styles.header}>
        <Typography variant="h1">Submited form</Typography>
      </header>

      <main className={styles.main}>
        <Lead leadId={slug} />
      </main>
    </div>
  );
}
