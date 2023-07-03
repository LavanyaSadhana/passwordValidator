// Style your elements here
import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #24263c;
  background-size: cover;
`
export const PasswordContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px;
  justify-content: center;
  align-items: center;
  width: 500px;
  box-shadow: 10px #434451;
  background-color: #383a4e;
  border-radius: 10px;
  font-family: 'Roboto';
`

export const Heading = styled.h1`
  color: #fff;
  font-family: 'Roboto';
`
export const Text = styled.p`
  color: #f8fafc;
`
export const PasswordInput = styled.input`
  background-color: #fff;
  padding: 8px;
  border: 0px;
`
export const ErrorText = styled.p`
  color: #ef4444;
  font-size: 12px;
`
