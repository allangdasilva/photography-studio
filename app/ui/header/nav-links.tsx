import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLinksProps extends React.HTMLAttributes<HTMLDivElement> {
  textColor: string;
}

export const menuData = [
  {
    id: 1,
    label: "Home",
    href: "/",
  },
  {
    id: 2,
    label: "Contato",
    href: "/contato",
  },
];

export default function NavLinks({ textColor, ...props }: NavLinksProps) {
  const pathname = usePathname();

  return (
    <nav {...props}>
      <ul
        className={clsx("flex gap-6 fontNav", {
          "text-textNavDesktopColor": textColor === "nav-desktop",
          "text-textNavMobileColor":
            textColor === "nav-mobile" || pathname !== "/",
        })}
      >
        {menuData.map(({ label, href, id }) => (
          <li key={id}>
            <Link
              className={clsx(
                "relative block after:absolute after:w-full after:h-[1px] after:bottom-0 after:left-0 after:scale-x-0 hover:after:scale-x-100 focus:after:scale-x-100 after:origin-left  after:transition-transform after:duration-700",
                {
                  "after:scale-x-100": pathname === href,
                  "after:bg-textNavDesktopColor": textColor === "nav-desktop",
                  "after:bg-textNavMobileColor":
                    textColor === "nav-mobile" || pathname !== "/",
                }
              )}
              href={href}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
