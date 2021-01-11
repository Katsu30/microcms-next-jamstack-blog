import styled from 'styled-components';
import Link from 'next/link';

import { HeaderButton } from '../../Molecules/Commons';

const GlobalHeader = props => {
  const { siteTitle } = props;

  return (
    <HeaderComponentWithStyled>
      <HeaderTitleWithStyled>
        <Link href="/">
          <HeaderLinkWithStyled>{ siteTitle }</HeaderLinkWithStyled>
        </Link>
      </HeaderTitleWithStyled>

      <HeaderButtonAreaWithStyled>
        <HeaderButton text={ 'About' } />
        <HeaderButton text={ 'Posts' } />
      </HeaderButtonAreaWithStyled>
    </HeaderComponentWithStyled>
  )
}

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
      siteTitle: data,
    }
  };
};

const HeaderComponentWithStyled = styled.div`
  margin: 0 auto;
  max-width: 960px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const HeaderTitleWithStyled = styled.h1`
`;

const HeaderLinkWithStyled = styled.a`
  color: inherit;
  text-decoration: none;
`;

const HeaderButtonAreaWithStyled = styled.div`
`;

export default GlobalHeader;