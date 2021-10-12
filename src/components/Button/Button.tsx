import { ButtonHTMLAttributes } from "react";
import { ButtonContainer } from "./Button.style";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

type OutlinedProps = {
  isOutlined?: boolean
}

export function Button({isOutlined = false, ...props}: ButtonProps & OutlinedProps){
  return(
    <ButtonContainer 
    className={`${isOutlined ? 'outlined' : ''}`}
    {...props}/>
  )
}