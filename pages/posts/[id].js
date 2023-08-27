import Head from "next/head";
import Layout from "../../components/Layout";
import { getAllPostids, getPostData } from "../../lib/post";
import utilStyle from "../../styles/utils.module.css";

export async function getStaticPaths() {
  const paths = getAllPostids();
  // フォールバックfalseでないページに飛ばされたとき404エラー
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}
export default function post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyle.headingX1}>{postData.title}</h1>
        <div className={utilStyle.ligntText}>{postData.date}</div>
        <div
          dangerouslySetInnerHTML={{ __html: postData.blogContentHTML }}
        ></div>
      </article>
    </Layout>
  );
}
