import styled from 'styled-components';
import Head from 'next/head';

import { GlobalHeader, GlobalFooter } from '../Components/Organisms/Commons';

const CommonLayout = ( props ) => {
  const { title, children } = props;
  const siteTitle = "Katsu's Tech Blog";

  return (
    <PageContainerWithStyled>
      <Head>
        <title>{ title ? `${title} | ${siteTitle}` : siteTitle }</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <GlobalHeaderAreaWithStyled>
        <GlobalHeaderWithStyled siteTitle={siteTitle}/>
      </GlobalHeaderAreaWithStyled>

      <MainAreaWithStyled>
        { title
          ? <MainTitleWithStyled>{ title }</MainTitleWithStyled>
          : `` }
        <MainContentWithStyled>
          { children }
        </MainContentWithStyled>
      </MainAreaWithStyled>

      <GlobalFooterWithStyled>
        <GlobalFooter siteTitle={ siteTitle }/>
      </GlobalFooterWithStyled>
    </PageContainerWithStyled>
  );
}

const PageContainerWithStyled = styled.div`
  margin: 0 auto;
`;

const GlobalHeaderAreaWithStyled = styled.div`
  border-bottom: solid 1px #555555;
`;

const GlobalHeaderWithStyled = styled(GlobalHeader)`
`;

const MainAreaWithStyled = styled.main`
  max-width: 960px;
  margin: 0 auto;
  min-height: 500px;
`;

const MainTitleWithStyled = styled.h1`
`;

const MainContentWithStyled = styled.div`
`;

const GlobalFooterWithStyled = styled.footer`
  border-top: solid 1px #555555;
`;

export default CommonLayout;