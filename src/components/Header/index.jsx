import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import colors from '../../utils/style/colors';
import Logo from '../../assets/Logo.svg';

const StyledLink = styled(Link)`
  padding: 15px;
  color: #8186a0;
  text-decoration: none;
  font-size: 18px;
  ${(props) =>
    // @ts-ignore
    props.$isFullLink &&
    `color: white; border-radius: 30px; background-color: ${colors.primary}; padding: 10px 38px;`} }
`;

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

function Header() {
  return (
    <StyledHeader>
      <img src={Logo} alt="logo" />

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
