import './App.css';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import Router from './Router';

function App() {
  return (
    <GlobalStyle>
      <Router />
    </GlobalStyle>
  );
}

const GlobalStyle = createGlobalStyle`
body {
  font-family: "Helvetica", "Arial", sans-serif;
  line-height: 1.5;
  background-color: #333333;
}
`

export default App;
