export default function HoverGallery() {
  return (
    <span
      aria-hidden="true"
      className="absolute w-full h-full top-0 left-0 flex justify-center items-center bg-black/50 opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity duration-700"
    >
      <div className="w-6 h-6 overflow-hidden">
        <span
          style={{ backgroundImage: "url('/images/search-icon.svg')" }}
          className="block w-full h-full object-cover bg-no-repeat bg-center translate-y-full group-hover:translate-y-0 group-focus-visible:translate-y-0 transition-transform duration-700"
        ></span>
      </div>
    </span>
  );
}
