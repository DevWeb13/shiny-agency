import { Link } from 'react-router-dom';
import React from 'react';

function Header() {
  return (
    <nav>
      <Link to="/">Accueil</Link>
      <Link to="/survey/1">Questionnaire</Link>
      <Link to="/freelances">Freelance</Link>
    </nav>
  );
}

export default Header;
