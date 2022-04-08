import { Link } from 'react-router-dom';
import styled from 'styled-components';
import React from 'react';

const StyledLink = styled(Link)`
  padding: 15px;
  color: #8186a0;
  text-decoration: none;
  font-size: 18px;
`;

function Header() {
  return (
    <nav>
      <StyledLink to="/">Accueil</StyledLink>
      <StyledLink to="/survey/1">Questionnaire</StyledLink>
      <StyledLink to="/freelances">Freelance</StyledLink>
    </nav>
  );
}

export default Header;
