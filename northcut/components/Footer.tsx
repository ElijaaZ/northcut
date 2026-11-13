export default function Footer() {
  return (
    <footer className="w-full border-t border-white/10 bg-[#12100f]">
      <div className="mx-auto flex w-full max-w-[1050px] flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row">
        {/* Logotyp */}
        <p className="font-[family-name:var(--font-archivo)] text-sm text-[#f4efe5]">
          NORTHCUT. Studio
        </p>

        {/* Copyright */}
        <p className="text-center text-xs text-[#a69a8e] sm:text-right">
          Fiktiv verksamhet · Designexempel · © 2026
        </p>
      </div>
    </footer>
  );
}
