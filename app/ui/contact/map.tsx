export default function Map() {
  return (
    <section aria-labelledby="map-title" className="px-6 pb-6">
      <div className="max-w-[1280px] m-auto">
        <h2 id="map-title" className="sr-only">
          Localização no mapa
        </h2>
        <iframe
          title="Localização do Museu Catavento em São Paulo"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.669050642923!2d-46.631965628576815!3d-23.54440281411731!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce58fe6597b5ab%3A0xb5320d52c494e282!2sMuseu%20Catavento!5e0!3m2!1spt-BR!2sbr!4v1759973590073!5m2!1spt-BR!2sbr"
          className="w-full h-96"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <a
          href="https://maps.app.goo.gl/bMsrS3ZGr3s9Aqai6"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block fontBody underline mt-2 opacity-60 hover:opacity-100 focus-visible:opacity-100 transition-opacity duration-300"
        >
          Ver no Google Maps
        </a>
      </div>
    </section>
  );
}
