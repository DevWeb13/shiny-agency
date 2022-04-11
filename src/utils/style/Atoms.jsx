import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import colors from './colors';
import { variables } from './../../utils/style/variables';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Loader = styled.div`
  padding: 10px;
  border: 6px solid ${colors.primary};
  border-bottom-color: transparent;
  border-radius: 22px;
  animation: ${rotate} 1s infinite linear;
  height: 0;
  width: 0;
`;

export const StyledLink = styled(Link)`
padding: 15px;
color: ${colors.secondary};
text-decoration: none;
font-size: 18px;
${(props) =>
  // @ts-ignore
  props.$isFullLink &&
  `color: white; border-radius: 30px; background-color: ${colors.primary}; padding: 10px 38px;`} }
`;

export const HomeAndErrorContainer = styled.main`
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: ${colors.background};
  height: calc(100vh - ${variables.headerHeight});
  ${(props) =>
    // @ts-ignore
    props.column && `flex-direction: column; `} }
`;
