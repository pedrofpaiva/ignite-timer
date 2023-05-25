import styled, {css} from "styled-components";
import App from '../../App';

export type ButtonVariant = 'primary' | 'secondary' | 'success' | 'danger'
interface ButtonContainerProps {
  variant: ButtonVariant
}
const buttonVariants = {
  primary: 'purple',
  secondary: 'orange',
  success: 'lime',
  danger: 'red'
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  height: 40px;
  width: 100px;
  background-color: ${({theme}) => theme['green-300']};
  color: ${props => props.theme.white};
  margin: 8px;
  border: 0

/* ${props => css`background-color: ${buttonVariants[props.variant]}`} */
`


