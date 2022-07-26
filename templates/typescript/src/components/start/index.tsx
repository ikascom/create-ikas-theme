import { observer } from "mobx-react-lite";
import Head from "next/head";
import styles from "./style.module.css";

const Home: React.FC = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create ikas Theme</title>
        <meta name="description" content="Generated by create-ikas-theme" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to{" "}
          <a href="https://ikas.com" target="_blank">
            ikas!
          </a>
        </h1>

        <p className={styles.description}>
          Start by{" "}
          <a
            href="https://ikas.dev/docs/theme/getting-started/introduction"
            target="_blank"
          >
            {" "}
            creating your first component!{" "}
          </a>
        </p>
      </main>

      <footer className={styles.footer}>
        <a href="https://ikas.com" target="_blank" rel="noopener noreferrer">
          Powered by{" "}
          <span className={styles.logo}>
            <img src="/ikas.svg" alt="ikas Logo" height={20} />
          </span>
        </a>
      </footer>
    </div>
  );
};

export default observer(Home);
