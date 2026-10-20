export default function Services() {
  const services = [
    {
      name: "KLIPPNING",
      price: 500,
      duration: 45,
      description: "Konsultation, klippning och styling.",
    },
    {
      name: "SKÄGGTRIM",
      price: 300,
      duration: 30,
      description: "Formning, konturer och skäggolja.",
    },
    {
      name: "KLIPPNING + SKÄGG",
      price: 700,
      duration: 75,
      description: "Hela behandlingen - vår mest bokade.",
    },
    {
      name: "SKIN FADE",
      price: 550,
      duration: 60,
      description: "Precisionsfade med sax eller maskin ovanpå",
    },
    {
      name: "KLASSISK RAKNING",
      price: 395,
      duration: 45,
      description: "Rakkniv, varma handdukar och balsam.",
    },
    {
      name: "BARNKLIPPNING",
      price: 300,
      duration: 30,
      description: "Klippning för barn under 12 år.",
    },
  ];

  return (
    <section id="tjanster" className="w-full bg-[#12100f] py-24 scroll-mt-24">
      <div className="mx-auto max-w-[1050px] px-6">
        <p className="mb-4 text-xs tracking-[0.3em] text-[#c18f63]">
          TJÄNSTER & PRISER
        </p>

        <h2 className="font-[family-name:var(--font-archivo)] text-5xl text-[#f4efe5]">
          VÅR MENY
        </h2>

        <p className="mt-4 text-[#c4bdb5]">
          Hantverk, precision och känsla i varje detalj.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-x-12 gap-y-8 lg:grid-cols-2">
          {services.map((service) => (
            <div key={service.name} className="border-b border-white/30 pb-6">
              <div className="flex items-center justify-between gap-4">
                <h3 className="text-lg font-bold text-[#f4efe5]">
                  {service.name}
                </h3>
                <div className="min-w-0 flex-1 border-b border-dotted border-white/20" />
                <span className="shrink-0 font-bold text-[#c18f63]">
                  {service.price} kr
                </span>
              </div>
              <p className="mt-2 text-sm text-[#c4bdb5]">
                {service.description} · {service.duration} min
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
