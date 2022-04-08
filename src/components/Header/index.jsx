import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(Link)`
  padding: 15px;
  color: #8186a0;
  text-decoration: none;
  font-size: 18px;
  ${(props) =>
    // @ts-ignore
    props.$isFullLink &&
    `color: white; border-radius: 30px; background-color: #5843E4;`}
`;

function Header() {
  return (
    <nav>
      <StyledLink to="/">Accueil</StyledLink>
      <StyledLink to="/freelances">Freelance</StyledLink>
      <StyledLink
        to="/survey/1"
        // @ts-ignore
        $isFullLink
      >
        Faire le test
      </StyledLink>
    </nav>
  );
}

export default Header;
