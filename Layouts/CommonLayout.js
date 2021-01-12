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

      <GlobalFooterAreaWithStyled>
        <GlobalFooterWithStyled siteTitle={siteTitle}/>
      </GlobalFooterAreaWithStyled>
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
  display: flex;
  flex: 1 0 auto;
  max-width: 960px;
  margin: 0 auto;
  min-height: 500px;
`;

const MainTitleWithStyled = styled.h1`
`;

const MainContentWithStyled = styled.div`
  flex: 1 1 auto;
  max-width: 100%;
`;

const GlobalFooterAreaWithStyled = styled.div`
  border-top: solid 1px #555555;
`;

const GlobalFooterWithStyled = styled(GlobalFooter)`
`;

export default CommonLayout;