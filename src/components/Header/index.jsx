import React from 'react';
import styled from 'styled-components';
import { StyledLink } from './../../utils/style/Atoms';
import Logo from '../../assets/Logo.svg';

export const headerHeight = '12.5rem';

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: ${headerHeight};
`;

function Header() {
  return (
    <StyledHeader>
      <img src={Logo} alt="logo" width="187px" />

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
    </StyledHeader>
  );
}

export default Header;
