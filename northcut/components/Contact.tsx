export default function Contact() {
  const openingHours = [
    { day: "Måndag – Fredag", hours: "10:00 – 19:00" },
    { day: "Lördag", hours: "10:00 – 16:00" },
    { day: "Söndag", hours: "Stängt" },
  ];

  return (
    <section id="kontakt" className="w-full scroll-mt-24 bg-[#12100f] py-12">
      <div className="mx-auto grid w-full max-w-[850px] grid-cols-1 gap-12 px-6 lg:grid-cols-[400px_250px] lg:justify-center lg:gap-20">
        {/* Vänster kolumn */}
        <div id="oppettider">
          <p className="text-[#c18f63] text-sm font-semibold letter-spacing-[0.3em] mb-4 text-semibold">
            ÖPPETTIDER
          </p>
          <h2 className="text-[#f4efe5] text-3xl font-bold mb-6 font-[family-name:var(--font-archivo)] leading-[1.2]">
            NÄR VI KLIPPER
          </h2>

          <div>
            {openingHours.map((item) => (
              <div
                key={item.day}
                className="flex justify-between items-center py-4 border-b border-white/30"
              >
                <span className="text-sm text-[#f4efe5]">{item.day}</span>
                <span className="text-sm text-[#c4db5]">{item.hours}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Höger kolumn */}
        <div>
          <p className="mb-4 text-sm font-semibold tracking-[0.3em] text-[#c18f63]">
            KONTAKT
          </p>

          <h2 className="font-[family-name:var(--font-archivo)] text-3xl leading-[1.2] text-[#f4efe5]">
            HITTA HIT
          </h2>

          <div className="mt-8 flex flex-col gap-4">
            {/* Adress */}
            <div>
              <p className="mb-1 text-sm text-[#a69a8e]">Adress</p>
              <p className="text-sm leading-normal text-[#f4efe5]">
                Exempelgatan 1, Exempelstad
              </p>
            </div>

            {/* Telefon */}
            <div>
              <p className="mb-1 text-sm text-[#a69a8e]">Telefon</p>
              <p className="text-sm leading-normal text-[#f4efe5]">
                000-000 00 00
              </p>
            </div>

            {/* E-post */}
            <div>
              <p className="mb-1 text-sm text-[#a69a8e]">E-post</p>
              <p className="text-sm leading-normal text-[#f4efe5]">
                hej@exempel.invalid
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
