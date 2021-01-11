import styled from 'styled-components';
import Head from "next/head"
import Link from "next/link"

const CommonLayout = ( props ) => {
  const { title, children } = props;
  const siteTitle = "Katsu's Tech Blog";

  return (
    <PageContainerWithStyled>
      <Head>
        <title>{ title ? `${title} | ${siteTitle}` : siteTitle }</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <GlobalHeaderWithStyled>
        <HeaderTitleWithStyled>
          <Link href="/">
            <HeaderLinkWithStyled>{ siteTitle }</HeaderLinkWithStyled>
          </Link>
        </HeaderTitleWithStyled>
      </GlobalHeaderWithStyled>

      <MainAreaWithStyled>
        { title
          ? <MainTitleWithStyled>{ title }</MainTitleWithStyled>
          : `` }
        <MainContentWithStyled>
          { children }
        </MainContentWithStyled>
      </MainAreaWithStyled>

      <GlobalFooterWithStyled>
        &copy; { siteTitle }
      </GlobalFooterWithStyled>
    </PageContainerWithStyled>
  );
}

const PageContainerWithStyled = styled.div`
  margin: 0 auto;
  max-width: 960px;
  min-height: 100vh;
`;

const GlobalHeaderWithStyled = styled.header`
`;

const HeaderTitleWithStyled = styled.h1`
`;

const HeaderLinkWithStyled = styled.a`
  color: inherit;
  text-decoration: none;
`;

const MainAreaWithStyled = styled.main`
`;

const MainTitleWithStyled = styled.h1`
`;

const MainContentWithStyled = styled.div`
`;

const GlobalFooterWithStyled = styled.footer`
`;

export default CommonLayout;