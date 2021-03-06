import styled from 'styled-components';
import styles from '../../styles/Home.module.scss'

import { CommonLayout } from '../../Layouts'

const BlogId = ({ blog }) => {
  // dangerouslySetInnerHTMLはローダッシュ2つ
  return (
    <CommonLayout>
      <main className={ styles.main }>
        <h1 className={ styles.title }>{blog.title}</h1>
        <p className={styles.publishedAt}>{blog.publishedAt}</p>
        <p className={styles.category}>{ blog.category && `${ blog.category.name }` }</p>
        <div
          dangerouslySetInnerHTML={{
            __html: `${blog.body}`,
          }}
          className={ styles.post }
        />
      </main>
    </CommonLayout>
  );
};

export const getStaticPaths = async () => {
  const key = {
    headers: { 'X-API-KEY': process.env.API_KEY },
  }

  const data = await fetch('https://katsu.microcms.io/api/v1/blog', key)
    .then(res => res.json())
    .catch(() => null);

  const paths = data.contents.map(content => `/blog/${content.id}`);
  return { paths, fallback: false };
};

export const getStaticProps = async context => {
  const id = context.params.id;
  const key = {
    headers: { 'X-API-KEY' : process.env.API_KEY },
  }

  const data = await fetch(
    `https://katsu.microcms.io/api/v1/blog/${ id }`,
    key,
  )
    .then(res => res.json())
    .catch(() => null);

  return {
    props: {
      blog: data,
    }
  };
};

export default BlogId;