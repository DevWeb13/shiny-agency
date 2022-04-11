import { useContext } from 'react';
import { ThemeContext } from '../context';
import { createGlobalStyle } from 'styled-components';

const StyledGlobalStyle = createGlobalStyle`
    * {
        font-family: 'Trebuchet MS', Helvetica, sans-serif;
    }
 
   
    body {
        margin: 0 5%;
        background-color: ${({
          // @ts-ignore
          isDarkMode,
        }) => (isDarkMode ? '#2F2E41' : 'white')};
       
    }
`;
function GlobalStyle() {
  const { theme } = useContext(ThemeContext);
  // @ts-ignore
  return <StyledGlobalStyle isDarkMode={theme === 'dark'} />;
}

export default GlobalStyle;
