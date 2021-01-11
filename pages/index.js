import Link from 'next/link';
import styled from 'styled-components';

import { CommonLayout } from '../Layouts'

const Home = ({ blog }) => {

  return (
    <CommonLayout>
      <IndexBodyWithStyled>
        <BlogListUlWithStyled>
          {blog.map(blog => (
            <BlogListItemsWithStyled key={blog.id}>
              <Link href={`/blog/${blog.id}`}>
                <a>{blog.title}</a>
              </Link>
            </BlogListItemsWithStyled>
          ))}
        </BlogListUlWithStyled>
        </IndexBodyWithStyled>
      </CommonLayout>
  );
}

export const getStaticProps = async () => {
  const key = {
    headers: { 'X-API-KEY': process.env.API_KEY },
  };

  const data = await fetch('https://katsu.microcms.io/api/v1/blog', key)
    .then(res => res.json())
    .catch(() => null);

  return {
    props: {
      blog: data.contents,
    }
  }
}

const IndexBodyWithStyled = styled.div`
`;

const BlogListUlWithStyled = styled.ul`
`;

const BlogListItemsWithStyled = styled.li`
  list-style: none;
`;

export default Home;