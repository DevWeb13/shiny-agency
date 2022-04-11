import { Link } from 'react-router-dom';
import styled from 'styled-components';
import colors from './colors';
import { variables } from './../../utils/style/variables';

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

const HomeAndErrorContainer = styled.main`
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: ${colors.background};
  height: calc(100vh - ${variables.headerHeight});
  ${(props) =>
    // @ts-ignore
    props.column && `flex-direction: column; `} }
`;

export { StyledLink, HomeAndErrorContainer };
