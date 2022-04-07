import { Link } from 'react-router-dom';
import React from 'react';

function Header() {
  return (
    <nav>
      <Link to="/">Accueil</Link>
      <Link to="/survey/42">Questionnaire</Link>
    </nav>
  );
}

export default Header;
