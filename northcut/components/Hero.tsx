import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="relative flex min-h-screen items-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/hero-image.jpg')" }}
    >
      {/* Mörk overlay över hela bakgrundsbilden */}
      <div className="pointer-events-none absolute inset-0 bg-black/40" />

      {/* Mjuk övergång till nästa sektion */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-80 bg-linear-to-b from-transparent to-[#12100f]" />

      <div className="relative z-10 mx-auto w-full max-w-[1050px] px-6 pt-28 pb-20">
        <p className="mb-6 text-xs font-bold tracking-[0.3em] text-[#c18f63]">
          BARBERARE
        </p>

        <h1 className="font-[family-name:var(--font-archivo)] text-[clamp(3rem,8vw,8rem)] leading-none font-black tracking-tight text-[#f4efe5]">
          SKARPT.
          <br />
          STILLA.
          <br />
          <span className="text-[#c18f63]">NORDISKT.</span>
        </h1>

        <p className="mt-8 max-w-md text-base leading-relaxed text-[#c4bdb5]">
          Hantverksmässig herrklippning och skäggvård i en lugn, mörk studio.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="#boka"
            className="inline-block bg-[#c18f63] px-6 py-3 text-sm font-bold uppercase tracking-wider text-[#12100f] transition-all duration-200 hover:-translate-y-1 hover:bg-[#f4efe5]"
          >
            Boka tid
          </Link>

          <Link
            href="#tjanster"
            className="inline-block border border-white/30 px-6 py-3 text-sm font-bold uppercase tracking-wider text-[#f4efe5] transition-colors hover:bg-white/10"
          >
            Se priser
          </Link>
        </div>
      </div>
    </section>
  );
}
