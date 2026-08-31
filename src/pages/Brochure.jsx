import { useState } from "react";
import { Globe, Printer } from "lucide-react";
import { Image } from "@/components/ui/image";
import { Button } from "@/components/ui/button";
import BrochureAr from "@/components/drtom/brochure/BrochureAr";
import BrochureEn from "@/components/drtom/brochure/BrochureEn";

const LOGO = "https://media.base44.com/images/public/6a92a06f32c39b0226f9e8c3/e44611d94_Screenshot2026-08-05143830.png";

export default function Brochure() {
  const [lang, setLang] = useState("ar");
  const isAr = lang === "ar";

  return (
    <div dir={isAr ? "rtl" : "ltr"} className="min-h-screen bg-secondary/40 font-body">
      {/* Controls */}
      <div className="bg-primary text-white print:hidden">
        <div className="mx-auto max-w-5xl px-4 h-12 flex items-center justify-end gap-2">
          <Button
            size="sm"
            variant="secondary"
            className="gap-2"
            onClick={() => setLang(isAr ? "en" : "ar")}
          >
            <Globe className="w-4 h-4" />
            {isAr ? "English" : "العربية"}
          </Button>
          <Button size="sm" variant="secondary" className="gap-2 hidden sm:inline-flex" onClick={() => window.print()}>
            <Printer className="w-4 h-4" />
            {isAr ? "طباعة" : "Print"}
          </Button>
        </div>
      </div>

      {/* Cover header */}
      <header className="bg-gradient-to-b from-primary to-primary/90 text-white">
        <div className="mx-auto max-w-5xl px-6 py-12 flex flex-col items-center text-center">
          <Image src={LOGO} fittingType="fit" className="h-24 w-56 drop-shadow-lg" />
          <h1 className="mt-6 text-3xl sm:text-4xl font-extrabold">
            {isAr ? "عيادة دكتور توم البيطرية المتقدمة" : "Dr. TOM Advanced Veterinary Clinic"}
          </h1>
          <p className="mt-2 text-brand font-bold">
            {isAr ? "ملتقى الطب والترفيه" : "Where Medicine Meets Joy"}
          </p>
          <span className="mt-4 inline-block rounded-full bg-white/15 px-4 py-1.5 text-xs font-semibold backdrop-blur">
            {isAr ? "بروفايل تعريفي احترافي" : "Professional Profile Brochure"}
          </span>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-4 sm:px-6 py-10">
        {isAr ? <BrochureAr /> : <BrochureEn />}
      </main>

      <footer className="border-t border-border bg-white">
        <div className="mx-auto max-w-5xl px-6 py-6 text-center text-xs text-muted-foreground">
          {isAr
            ? "© 2026 عيادة دكتور توم البيطرية المتقدمة"
            : "© 2026 Dr. TOM Advanced Veterinary Clinic"}
        </div>
      </footer>
    </div>
  );
}