import styles from "./faq.module.css";

export default function Faq() {
  return (
    <div className={styles.faq}>
      <h3>Frequently Asked Questions</h3>
      <main className={styles.question}>
        <section className={styles.question}>
          <p>What is Money Manager?</p>
          <p>
            Money Manager is a personal finance app that helps you track your
            fiances.
          </p>
        </section>
      </main>
    </div>
  );
}
