import Link from "next/link";
import styles from "../styles/Home.module.css";
import utilStyle from "../styles/utils.module.css";
import Layout, { siteTitle } from "../components/Layout";
import { getPostsData } from "../lib/post";
import Head from "next/head";

//SSGの場合
export async function getStaticProps() {
  const allPostsData = getPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <div>
      <Layout home>
        <Head>
          <title>{siteTitle}</title>
        </Head>
        <section className={utilStyle.headingMd}>
          <p>
            私はフルスタックエンジニア→アーキリードを目指してます。現在はシンプレクスで働いています
          </p>
        </section>
        <section>
          <h2>エンジニアのブログ</h2>
          <div className={styles.grid}>
            {allPostsData.map(({ id, title, date, thumbnail }) => (
              <atricle key={id}>
                <Link href={`/posts/${id}`}>
                  <img src={`${thumbnail}`} className={styles.thumbnailImage} />
                </Link>
                <Link href={`/posts/${id}`} className={utilStyle.boldText}>
                  {title}
                </Link>
                <br />
                <small className={utilStyle.lightText}>{date}</small>
              </atricle>
            ))}
          </div>
        </section>
      </Layout>
    </div>
  );
}
