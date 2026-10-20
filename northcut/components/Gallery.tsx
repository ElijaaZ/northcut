import Image from "next/image";

export default function Gallery() {
  const images = [
    { src: "/images/barberimage.jpg", alt: "Barberare som klipper hår" },
    { src: "/images/barberimage2.jpg", alt: "Barberarverktyg" },
    { src: "/images/studioimage.jpg", alt: "Barbershop interiör" },
  ];
  return (
    <section id="galleri" className="w-full scroll-mt-24 bg-[#12100f] py-24">
      <div className="mx-auto max-w-[1050px] px-6">
        <p className=" text-xs tracking-[0.3em] text-[#c18f63] mb-4">Galleri</p>
        <h1 className="font-[family-name:var(--font-archivo)] text-5xl text-[#f4efe5]">
          FRÅN STUDION
        </h1>
        <div className="mt-12 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((image) => (
            <div
              key={image.src}
              className="relative aspect-[4/5] overflow-hidden"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
