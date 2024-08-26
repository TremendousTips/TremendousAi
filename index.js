import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>My AI App</title>
        <meta name="description" content="An AI-powered application" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to My AI App</h1>
        <p className={styles.description}>This is a simple AI app built with Next.js</p>
      </main>
    </div>
  );
}
