"use client";

import { useEffect, useState } from "react";
import type { SubmitEvent } from "react";

const services = [
  { id: "klippning", name: "Klippning", price: 500, duration: 45 },
  { id: "skaggtrim", name: "Skäggtrim", price: 300, duration: 30 },
  {
    id: "klippning-skagg",
    name: "Klippning + skägg",
    price: 700,
    duration: 75,
  },
  { id: "skin-fade", name: "Skin fade", price: 550, duration: 60 },
  {
    id: "rakning",
    name: "Klassisk rakning",
    price: 395,
    duration: 45,
  },
  {
    id: "barnklippning",
    name: "Barnklippning",
    price: 300,
    duration: 30,
  },
];

const demoTimes = [
  "10:00",
  "11:00",
  "12:00",
  "13:00",
  "14:00",
  "15:00",
  "16:00",
  "17:00",
];

const inputStyle =
  "w-full border border-black/25 bg-transparent px-4 py-3 text-sm text-[#12100f] outline-none transition-colors focus:border-[#c18f63]";

const labelStyle = "mb-2 block text-sm font-semibold text-[#12100f]";

function formatLocalDate(date: Date) {
  return [
    date.getFullYear(),
    String(date.getMonth() + 1).padStart(2, "0"),
    String(date.getDate()).padStart(2, "0"),
  ].join("-");
}

export default function Booking() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [serviceId, setServiceId] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [localToday, setLocalToday] = useState("");

  useEffect(() => {
    const timeout = window.setTimeout(() => {
      setLocalToday(formatLocalDate(new Date()));
    }, 0);

    return () => window.clearTimeout(timeout);
  }, []);

  const selectedService = services.find((service) => service.id === serviceId);

  const handleSubmit = (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!selectedService || !date || !time || !localToday) {
      return;
    }

    if (date < localToday) {
      return;
    }

    setConfirmed(true);
  };

  return (
    <section
      id="boka"
      className="w-full scroll-mt-24 bg-[#f3eddf] py-24 lg:py-16"
    >
      <div className="mx-auto w-full max-w-[780px] px-6">
        {/* Rubrik */}
        <div className="mb-10">
          <h2 className="font-[family-name:var(--font-archivo)] text-4xl text-[#12100f] sm:text-5xl">
            BOKA TID
          </h2>

          <p className="mt-4 text-sm leading-relaxed text-[#5c534a]">
            Det här formuläret är endast en demonstration. Inga uppgifter
            skickas eller sparas.
          </p>
        </div>

        {confirmed ? (
          /* Bekräftelse */
          <div
            role="status"
            className="border border-[#c18f63] bg-[#e9dfd0] p-6"
          >
            <h3 className="mb-4 font-[family-name:var(--font-archivo)] text-2xl text-[#12100f]">
              BOKNING KLAR!
            </h3>

            <p className="mb-5 text-sm leading-relaxed text-[#5c534a]">
              Tack {name}! Det här är en förhandsvisning av hur en
              bokningsbekräftelse skulle kunna se ut. Ingen riktig bokning har
              genomförts.
            </p>

            <div className="mb-6 space-y-2 text-sm text-[#12100f]">
              <p>
                <strong>Behandling:</strong> {selectedService?.name}
              </p>

              <p>
                <strong>Datum:</strong> {date}
              </p>

              <p>
                <strong>Tid:</strong> {time}
              </p>

              <p>
                <strong>Pris:</strong> {selectedService?.price} kr
              </p>

              <p>
                <strong>E-post:</strong> {email}
              </p>
            </div>

            <button
              type="button"
              onClick={() => setConfirmed(false)}
              className="bg-[#c18f63] px-6 py-3 text-sm font-bold uppercase tracking-wider text-[#12100f] transition-colors hover:bg-[#d5a678]"
            >
              Tillbaka till formuläret
            </button>
          </div>
        ) : (
          /* Bokningsformulär */
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Namn och telefon */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className={labelStyle}>
                  Namn
                </label>

                <input
                  id="name"
                  type="text"
                  autoComplete="name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className={inputStyle}
                  placeholder="Ditt namn"
                />
              </div>

              <div>
                <label htmlFor="phone" className={labelStyle}>
                  Telefon
                </label>

                <input
                  id="phone"
                  type="tel"
                  autoComplete="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className={inputStyle}
                  placeholder="070-000 00 00"
                />
              </div>
            </div>

            {/* E-post */}
            <div>
              <label htmlFor="email" className={labelStyle}>
                E-post
              </label>

              <input
                id="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={inputStyle}
                placeholder="namn@exempel.se"
              />
            </div>

            {/* Behandling och datum */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="service" className={labelStyle}>
                  Behandling
                </label>

                <select
                  id="service"
                  required
                  value={serviceId}
                  onChange={(e) => {
                    setServiceId(e.target.value);
                    setTime("");
                  }}
                  className={inputStyle}
                >
                  <option value="">Välj behandling</option>

                  {services.map((service) => (
                    <option key={service.id} value={service.id}>
                      {service.name} – {service.price} kr
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="date" className={labelStyle}>
                  Datum
                </label>

                <input
                  id="date"
                  type="date"
                  required
                  min={localToday || undefined}
                  disabled={!localToday}
                  value={date}
                  onChange={(e) => {
                    setDate(e.target.value);
                    setTime("");
                  }}
                  className={inputStyle}
                />
              </div>
            </div>

            {/* Tidsval */}
            {serviceId && date && (
              <div>
                <p className={labelStyle}>Välj tid</p>

                <div
                  role="group"
                  aria-label="Välj tid"
                  className="grid grid-cols-3 gap-3 sm:grid-cols-4"
                >
                  {demoTimes.map((slot) => (
                    <button
                      key={slot}
                      type="button"
                      aria-pressed={time === slot}
                      onClick={() => setTime(slot)}
                      className={`border px-3 py-3 text-sm font-semibold transition-all duration-200 ${
                        time === slot
                          ? "border-[#c18f63] bg-[#c18f63] text-[#12100f]"
                          : "border-black/25 text-[#12100f] hover:border-[#c18f63] hover:bg-[#e9dfd0]"
                      }`}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Sammanfattning */}
            {selectedService && date && time && (
              <div className="border-t border-black/20 pt-5">
                <div className="flex items-center justify-between gap-4 text-sm">
                  <div>
                    <p className="font-semibold text-[#12100f]">
                      {selectedService.name}
                    </p>

                    <p className="mt-1 text-[#766c62]">
                      {date} kl. {time} · {selectedService.duration} min
                    </p>
                  </div>

                  <p className="font-bold text-[#12100f]">
                    {selectedService.price} kr
                  </p>
                </div>
              </div>
            )}

            {/* Skicka */}
            <button
              type="submit"
              disabled={!serviceId || !date || !time || !localToday}
              className="w-full bg-[#c18f63] px-6 py-4 text-sm font-bold uppercase tracking-[0.15em] text-[#12100f] transition-all duration-200 hover:bg-[#d5a678] disabled:cursor-not-allowed disabled:opacity-50"
            >
              Visa demobekräftelse
            </button>

            <p className="text-center text-xs text-[#766c62]">
              Detta är en fiktiv demo. Inga bokningar eller personuppgifter
              skickas till någon server.
            </p>
          </form>
        )}
      </div>
    </section>
  );
}
