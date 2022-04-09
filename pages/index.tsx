import type { NextPage } from 'next';
import Head from 'next/head';
import { queryDatabase } from '../src/api/query-database';
import styles from '../styles/Home.module.css';
import { parseProperties, Post } from '../src/utils/parse-properties';

type HomeProps = {
  posts: Post[];
};

const Home: NextPage<HomeProps> = ({ posts }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>My Notion Blog</title>
        <meta
          name="description"
          content="Notion blog generated from Notion API"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>My Notion Blog</h1>
        <ul>
          {posts.map(({ id, title }) => (
            <li key={id}>{title}</li>
          ))}
        </ul>
      </main>
    </div>
  );
};

export async function getStaticProps() {
  const database = await queryDatabase();
  const posts = parseProperties(database);

  return {
    props: {
      posts,
    },
  };
}

export default Home;
