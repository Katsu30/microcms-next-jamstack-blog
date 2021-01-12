import styled from 'styled-components';

const GlobalFooter = props => {
  // const { siteTitle } = props;

  return (
    <FooterComponentsWithStyled>
      <FooterTextWithStyled>&copy; { props.siteTitle }</FooterTextWithStyled>
    </FooterComponentsWithStyled>
  );
}

const FooterComponentsWithStyled = styled.div`
  margin: 0 auto;
  max-width: 960px;
  display: flex;
  justify-content: center;
`;

const FooterTextWithStyled = styled.span`
`;

export default GlobalFooter;