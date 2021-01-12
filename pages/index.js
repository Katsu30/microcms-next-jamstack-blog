import styled from 'styled-components';

import { CommonLayout } from '../Layouts'

const Home = () => {

  return (
    <CommonLayout>
      <IndexBodyWithStyled>
        "インデックス"
      </IndexBodyWithStyled>
    </CommonLayout>
  );
}

const IndexBodyWithStyled = styled.div`
`;

const BlogListItemsWithStyled = styled.li`
  list-style: none;
`;

export default Home;