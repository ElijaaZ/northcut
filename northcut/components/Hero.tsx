import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="relative flex min-h-screen items-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/hero-image.jpg')" }}
    >
      <div>
        <p>BARBERARE · FIKTIV DEMO</p>

        <h1>SKARPT. STILLA. NORDISKT.</h1>

        <p>
          Hantverksmässig herrklippning och skäggvård i en lugn, mörk studio.
        </p>

        <div>
          <Link href="#boka">Boka tid</Link>
          <Link href="#tjanster">Se priser</Link>
        </div>
      </div>
    </section>
  );
}
