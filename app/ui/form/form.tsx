"use client";

import { formInputs } from "@/app/lib/formInputs";
import Input from "./input";
import Image from "next/image";
import { FormEvent, useState } from "react";
import emailjs, { EmailJSResponseStatus } from "@emailjs/browser";
import { toast } from "react-toastify";
import clsx from "clsx";

interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {}

export default function Form({ ...props }: FormProps) {
  const [disabled, setDisabled] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    const data = Object.fromEntries(formData.entries());

    const serviceID = "service_gr85usj";
    const templateID = "template_b9oujc4";
    const publicKEY = "3yX2moeUAL9vkTa2f";

    try {
      setDisabled(true);

      await emailjs.send(
        serviceID,
        templateID,
        {
          name: data.name,
          email: data.email,
          tel: data.tel,
          subject: data.subject,
          message: data.message,
        },
        {
          publicKey: publicKEY,
        }
      );

      setDisabled(false);
      toast.success("Email enviado com sucesso!");
      form.reset();
    } catch (err) {
      setDisabled(false);
      toast.error("Falha ao enviar email!");

      if (err instanceof EmailJSResponseStatus) {
        console.log("EMAILJS FALHOU...", err);
        return;
      }

      console.log("ERROR", err);
    }
  };

  return (
    <form method="post" id="form" onSubmit={handleSubmit} {...props}>
      {formInputs.map(({ id, type, placeholder, label, icon }) => (
        <Input
          key={id}
          type={type}
          placeholder={placeholder}
          label={label}
          id={id}
          name={id}
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

      <div>
        <button
          className={clsx(
            "mt-2 py-3 px-4 flex gap-4 bg-primaryColor w-fit cursor-pointer hover:scale-95 focus:scale-95 transition-all duration-400",
            {
              "opacity-20 ": disabled,
            }
          )}
          type="submit"
          disabled={disabled}
        >
          <Image
            aria-hidden="true"
            src={"/images/send-icon-white.svg"}
            width={16}
            height={16}
            alt=""
            className="object-contain"
          />

          <span className="text-white">
            {disabled ? "Enviando..." : "Enviar"}
          </span>
        </button>
      </div>
    </form>
  );
}
