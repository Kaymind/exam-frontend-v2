import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { theme } from 'styled-tools';
import { theme as themeConfig } from './lib/theme';

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: "Prompt", sans-serif;
}

html,
body,
#root {
  height: 100%;
}

.app {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.title {
  font-size: 37px;
  color ${theme('colors.title')};
  text-align: center;
  font-weight: bold;
}
`;

ReactDOM.render(
  <ThemeProvider theme={themeConfig}>
    <GlobalStyle />
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);

serviceWorker.unregister();
