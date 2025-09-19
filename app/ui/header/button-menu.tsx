import { JSX } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export default function Button({
  children,
  ...props
}: ButtonProps): JSX.Element {
  return <button {...props}>{children}</button>;
}
