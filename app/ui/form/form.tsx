import { formInputs } from "@/app/lib/formInputs";
import Input from "./input";
import Image from "next/image";

interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {}

export default function Form({ ...props }: FormProps) {
  return (
    <form {...props}>
      {formInputs.map(({ id, type, placeholder, label, icon }) => (
        <Input
          key={id}
          type={type}
          placeholder={placeholder}
          label={label}
          id={id}
          icon={icon}
          required={true}
          maxLength={100}
        />
      ))}

      {/* Textarea */}
      <div className="relative border-b border-black/20 after:absolute after:w-full after:h-[1px] after:-bottom-[1px] after:left-0 after:scale-x-0 hover:after:scale-x-100 focus-within:after:scale-x-100 after:origin-left after:bg-primaryColor after:transition-transform after:duration-700 focus-within:**:placeholder:text-textBodyColor min-sm:col-span-full dark:border-white/20">
        <label className="sr-only" htmlFor="mensagem">
          Mensagem
        </label>
        <span
          aria-hidden="true"
          style={{ backgroundImage: 'url("/images/message-icon.svg")' }}
          className="absolute w-4 mt-1.5 h-full bg-contain bg-no-repeat"
        ></span>
        <textarea
          rows={3}
          className="py-1 pl-7 w-full outline-0 resize-none text-ellipsis placeholder:text-textFormColor"
          name="message"
          id="mensagem"
          maxLength={600}
          placeholder="Mensagem"
          required={true}
        ></textarea>
      </div>

      <button
        className="mt-2 py-3 px-4 flex gap-4 bg-primaryColor w-fit cursor-pointer hover:scale-95 focus:scale-95 transition-transform duration-400"
        type="submit"
      >
        <Image
          aria-hidden="true"
          src={"/images/send-icon-white.svg"}
          width={16}
          height={16}
          alt=""
          className="object-contain"
        />

        <span className="text-white">Enviar</span>
      </button>
    </form>
  );
}
