export default function HoverGallery() {
  return (
    <span
      aria-hidden="true"
      style={{ backgroundImage: "url('/images/search-icon.svg')" }}
      className="absolute block w-full h-full top-0 left-0 bg-black/50 bg-no-repeat bg-center opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity duration-700"
    ></span>
  );
}
