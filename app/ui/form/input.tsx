interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
  icon: string;
}

export default function Input({ id, label, icon, ...props }: InputProps) {
  return (
    <div className="relative border-b border-black/20 after:absolute after:w-full after:h-[1px] after:-bottom-[1px] after:left-0 after:scale-x-0 hover:after:scale-x-100 focus-within:after:scale-x-100 after:origin-left after:bg-primaryColor after:transition-transform after:duration-700 focus-within:**:placeholder:text-textBodyColor dark:border-white/20">
      <label className="sr-only" htmlFor={id}>
        {label}
      </label>
      <span
        aria-hidden="true"
        style={{ backgroundImage: `url("${icon}")` }}
        className="absolute w-4 h-full bg-center bg-contain bg-no-repeat"
      ></span>
      <input
        className="py-1 pl-7 w-full outline-0 text-ellipsis placeholder:text-textFormColor"
        {...props}
        id={id}
      />
    </div>
  );
}
