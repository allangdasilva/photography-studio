import { JSX } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  ariaLabel: string;
  ariaControls?: string;
  ariaExpanded?: boolean;
}

export default function Button({
  children,
  ariaLabel,
  ariaExpanded,
  ariaControls,
  ...props
}: ButtonProps): JSX.Element {
  return (
    <button
      aria-label={ariaLabel}
      aria-expanded={ariaExpanded}
      aria-controls={ariaControls}
      {...props}
    >
      {children}
    </button>
  );
}
