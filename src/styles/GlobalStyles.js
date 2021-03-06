import styled, { createGlobalStyle } from 'styled-components';
import * as colors from '../config/colors';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
  }

  body{
    font-family: sans-serif;
    background: #fff;
    color: ${colors.textDarkColor};
  }

  html, body, #root {
    height: 90vh;
  }

  button {
    cursor: pointer;
    background: ${colors.textDarkColor};
    border: none;
    color:#fff;
    padding: 10px 20px;
    border-radius: 4px;
    font-weight: 700;
    transition: all 300ms;
    }

  button:hover{
    background-color: ${colors.primaryDarkColor};
    color: black;
  }

  a{
    text-decoration: none;
    color: ${colors.textDarkColor};
  }

  ul{
    list-style: none;
  }

  body .Toastify .Toastify__toast-container .Toastify__toast--success {
    background: ${colors.successColor};
    color: #fff;
  }

  body .Toastify .Toastify__toast-container .Toastify__toast--error {
    background: #d20000;
    color: #fff;
  }
`;

export const Container = styled.section`
  max-width: 480px;
  background: #fff;
  margin: 100px auto 0 auto;
  padding: 30px;
  border-radius: 4px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;
