import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    text-decoration: none;
    box-sizing: border-box;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    list-style: none;
  }
`

export const Button = styled.button`
  display: flex;
  align-items: center;
  cursor: pointer;
  font-weight: bold;
  transition: all 0.5s ease;
  background-color: transparent;
`

export const Container = styled.div`
  width: 1440px;
  max-width: 100%;
  margin: 0 auto;
`

export const Titulo = styled.h2`
  font-size: 32px;
  text-decoration: wavy;
  font-weight: bold;
  margin-top: 32px;
  margin-bottom: 32px;
`

export default GlobalStyle
