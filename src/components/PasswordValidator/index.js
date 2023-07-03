// Write your code here
import {useState} from 'react'
import {
  MainContainer,
  PasswordContainer,
  Heading,
  Text,
  PasswordInput,
  ErrorText,
} from './styledComponents'

const PasswordValidator = () => {
  const [errorText, onErrorChange] = useState(
    'Your password must be at least 8 characters',
  )
  const [password, setPassword] = useState('')

  const onChangeEvent = event => {
    setPassword(event.target.value)
    onErrorChange(
      event.target.value.length >= 8
        ? ' '
        : 'Your password must be at least 8 characters',
    )
  }
  return (
    <MainContainer>
      <PasswordContainer>
        <Heading>Password Validator</Heading>
        <Text>Check how strong and secure is your password</Text>
        <PasswordInput
          type="password"
          value={password}
          onChange={onChangeEvent}
        />
        <ErrorText>{errorText}</ErrorText>
      </PasswordContainer>
    </MainContainer>
  )
}
export default PasswordValidator
