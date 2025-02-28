import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    list-style: none;
    text-decoration: none;
    box-sizing: border-box;
    font-family: "Archivo Black", serif;

    textarea {
      resize: none;
      border: none;
      background-color: transparent;

      &:focus {
        border: none;
        outline: none;
        background-color: #fff;
      }
    }
  }
`

export const Container = styled.div`
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
`

export const Titulo = styled.h2`
  font-size: 32px;
  text-decoration: wavy;
  font-weight: bold;
  font-style: italic;
  margin-bottom: 16px;
`

export const Button = styled.button`
  padding: 12px;
  cursor: pointer;
  font-size: 14px;
  border-radius: 16px;
  color: #fff;
  transition: all 0.5s ease;
`

export const Input = styled.input`
  padding: 12px;
  font-size: 18px;
  width: 40%;
  font-weight: bold;
  text-align: center;
  border: 1px solid transparent;
  /* background-color: #f5f5f5; */
  color: #000;
  outline: none;
  box-shadow: #666;
  border-radius: 16px;
  border-bottom: #eee solid 8px;

  &:focus {
    outline: none;
  }
`

export default GlobalStyles
