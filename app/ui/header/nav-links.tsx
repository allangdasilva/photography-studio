import { usePathname } from "next/navigation";
import clsx from "clsx";
import { menuData } from "@/app/lib/siteData";
import Link from "next/link";

export default function NavLinks() {
  const menuItems = menuData;
  const pathname = usePathname();

  return (
    <nav className="max-sm:hidden">
      <ul className="flex gap-6 fontMenu">
        {menuItems.map(({ label, href, id }) => (
          <li key={id}>
            <Link
              className={clsx(
                "relative block after:absolute after:w-full after:h-[1px] after:bottom-0 after:left-0 after:scale-x-0 hover:after:scale-x-100 after:origin-left after:bg-menuColor after:transition-transform after:duration-700",
                { "after:scale-x-100": pathname === href }
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
