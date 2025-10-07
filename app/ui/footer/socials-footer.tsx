const socialsFooter = [
  {
    id: 1,
    label: "Instagram",
    href: "#",
  },
  {
    id: 2,
    label: "Facebook",
    href: "#",
  },
];

export default function SocialsFooter() {
  return (
    <nav
      aria-label="Redes Social"
      className="flex flex-col items-center gap-1 text-center min-sm:flex-row min-sm:justify-end min-sm:gap-6"
    >
      {socialsFooter.map(({ id, href, label }) => (
        <a
          key={id}
          href={href}
          className="fontNav text-textNavMobileColor capitalize relative block after:absolute after:w-full after:h-[1px] after:bottom-0 after:left-0 after:scale-x-0 hover:after:scale-x-100 focus-visible:after:scale-x-100 after:origin-left after:bg-textNavMobileColor after:transition-transform after:duration-700"
        >
          {label}
        </a>
      ))}
    </nav>
  );
}
