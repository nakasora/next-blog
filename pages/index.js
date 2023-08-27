import Link from "next/link";
import styles from "../styles/Home.module.css";
import utilStyle from "../styles/utils.module.css";
import Layout, { siteTitle } from "../components/Layout";
import { getPostsData } from "../lib/post";
import Head from "next/head";

//SSGの場合
export async function getStaticProps() {
  const allPostsData = getPostsData();
  console.log(allPostsData);
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
          <link
            href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.17.1/themes/prism.min.css"
            rel="stylesheet"
          />
          <title>{siteTitle}</title>
        </Head>
        <section className={utilStyle.headingMd}>
          <ul>
            <li>
              要件定義～運用まで経験あり。SSGでブログ作ってみようと思い超簡易的ではあるが作成。
            </li>
            <li>
              特に現在はフロント周りの技術と運用まで見据えたDebOpsに興味あり。
            </li>
            <li>現在はシンプレクスで働いています</li>
            <li>プロフィール画像はImageCreatorで作りました</li>
          </ul>
          <br />
        </section>
        <section>
          <h2>駆け出しエンジニアのブログ</h2>
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
