import { ButtonHTMLAttributes } from "react";
import { ButtonContainer } from "./Button.style";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export function Button(props: ButtonProps){
  return(
    <ButtonContainer {...props}/>
  )
}