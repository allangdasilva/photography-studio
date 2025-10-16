import { JSX } from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({
  children,
  ...props
}: ButtonProps): JSX.Element {
  return <button {...props}>{children}</button>;
}
