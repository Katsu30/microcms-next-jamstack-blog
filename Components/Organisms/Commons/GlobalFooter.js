import styled from 'styled-components';

const GlobalFooter = (props) => {
  const { siteTitle } = props;

  return (
    <FooterComponentsWithStyled>
      <FooterTextWithStyled>&copy; { siteTitle }</FooterTextWithStyled>
    </FooterComponentsWithStyled>
  );
}

const FooterComponentsWithStyled = styled.div`
  margin: 0 auto;
  max-width: 960px;
  display: flex;
  justify-content: center;
`;

const FooterTextWithStyled = styled.p`
`;

export default GlobalFooter;