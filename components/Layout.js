import Head from "next/head";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
const NAME = "Shin Code";

export const siteTitle = "Next.js Blog";
function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link fal="icon" href="/favicon.io"></link>
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <img
              src="/images/profile.png"
              className={`${utilStyles.borderCircle} ${styles.headerHomeImage}`}
            />
            <h1 className={utilStyles.heading2Xl}>{NAME}</h1>
          </>
        ) : (
          <>
            <img
              src="/images/profile.png"
              className={`${utilStyles.borderCircle}`}
            />
            <h1 className={utilStyles.heading2Xl}>{NAME}</h1>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div>
          <Link href="/">ホームへ戻る</Link>
        </div>
      )}
    </div>
  );
}

export default Layout;
