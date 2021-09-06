import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *, *:before, *:after {
    box-sizing: border-box;
  }
  html, body {
    height: 100%;
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #000000;
    color: #333333;
    font-size: 16px;
}
  .film-title{
    text-align: center;
    color: white;
    text-transform: uppercase;
    font-weight: 500;
  }
  .form{
    display: flex;
    flex-direction: column;
    color: white;
    align-items: center;
  }
  .form-group{
    width: 450px;
  }
  .error-message{
    color: #e87c03;
    font-size: 13px;
    margin-top: 5px;
  }
`;
