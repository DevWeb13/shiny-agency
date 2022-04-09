import { Link } from 'react-router-dom';
import styled from 'styled-components';
import colors from './colors';

const StyledLink = styled(Link)`
padding: 15px;
color: ${colors.secondary};
text-decoration: none;
font-size: 18px;
${(props) =>
  // @ts-ignore
  props.$isFullLink &&
  `color: white; border-radius: 30px; background-color: ${colors.primary}; padding: 10px 38px;`} }
`;

export { StyledLink };
