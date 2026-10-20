export default function About() {
  const stats = [
    { value: 12, label: "Års erfarenhet" },
    { value: 4, label: "Barberare" },
    { value: 1, label: "Studio" },
  ];

  return (
    <section id="om-oss" className="w-full scroll-mt-24 bg-[#f3eddf] py-24">
      <div className="mx-auto grid w-full max-w-[1050px] grid-cols-1 gap-12 px-6 lg:grid-cols-2 lg:gap-20">
        {/* Vänster kolumn */}
        <div>
          <p className="mb-6 text-xs font-semibold tracking-[0.3em] text-[#ad7850]">
            OM OSS
          </p>

          <h2 className="font-[family-name:var(--font-archivo)] text-4xl leading-[1.12] tracking-tight text-[#171310] sm:text-5xl">
            PRECISION.
            <br />
            UTAN
            <br />
            KOMPROMISS.
          </h2>

          <div className="mt-8 h-[3px] w-12 bg-[#bd8e65]" />
        </div>

        {/* Höger kolumn */}
        <div className="flex flex-col justify-center">
          <p className="text-base leading-8 text-[#28231e]">
            NORTHCUT är ett koncept byggt kring det som verkligen spelar roll:
            hantverket, detaljerna och upplevelsen.
          </p>

          <p className="mt-5 text-base leading-8 text-[#5c534a]">
            Vi förenar klassisk barberartradition med ett modernt, nordiskt
            uttryck. En plats där varje klippning får ta sin tid.
          </p>

          {/* Statistik */}
          <div className="mt-8 grid grid-cols-3 gap-3 border-t border-black/20 pt-6">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="font-[family-name:var(--font-archivo)] text-2xl text-[#171310] sm:text-3xl">
                  {stat.value}
                </p>

                <p className="mt-1 text-xs text-[#766c62]">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
