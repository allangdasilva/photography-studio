import clsx from "clsx";
import Image from "next/image";

type studioInfosProps = React.HTMLAttributes<HTMLUListElement>;

const studioInfosData = [
  {
    content: "Av. Algum Lugar. 0000 - Bairro - Cidade - SP",
    link: null,
    icon: {
      src: "/images/map-icon.svg",
      width: 16,
      height: 20,
    },
  },
  {
    content: "+55 (11) 9 0000 0000",
    link: "tel:900000000",
    icon: {
      src: "/images/chat-icon.svg",
      width: 16,
      height: 15,
    },
  },
  {
    content: "contato@mail.com",
    link: "mailto:mail@outlook.com",
    icon: {
      src: "/images/mail-icon.svg",
      width: 16,
      height: 12,
    },
  },
];

export default function StudioInfos({ ...props }: studioInfosProps) {
  return (
    <ul {...props}>
      <li className="hidden" aria-hidden="true"></li>

      <li className="col-start-2 col-end-5">
        <ul className="flex flex-col gap-4 min-sm:gap-9">
          {studioInfosData.map(({ content, link, icon }, index) => (
            <li className="fontBody" key={index}>
              <div className="flex gap-3">
                <div
                  className={clsx("max-w-4 min-w-4", {
                    "self-center": index === 2,
                  })}
                >
                  <Image
                    aria-hidden="true"
                    src={icon.src}
                    width={icon.width}
                    height={icon.height}
                    alt=""
                    className={`w-full h-auto `}
                  />
                </div>

                {!link ? (
                  <p>{content}</p>
                ) : (
                  <a
                    className="relative block font-medium after:absolute after:w-full after:h-[1px] after:-bottom-1 after:left-0 after:scale-x-0 hover:after:scale-x-100 focus-visible:after:scale-x-100 after:origin-left after:bg-primaryColor after:transition-transform after:duration-700"
                    href={link}
                  >
                    {content}
                  </a>
                )}
              </div>
            </li>
          ))}
        </ul>
      </li>

      <li className="hidden" aria-hidden="true"></li>
    </ul>
  );
}
