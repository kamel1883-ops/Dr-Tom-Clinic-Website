import { useState } from "react";
import { Menu, X, CalendarCheck, PawPrint } from "lucide-react";
import { Button } from "@/components/ui/button";

const links = [
  { label: "الرئيسية", href: "#home" },
  { label: "قصتنا", href: "#story" },
  { label: "خدماتنا", href: "#services" },
  { label: "مميزاتنا", href: "#features" },
  { label: "آراء العملاء", href: "#testimonials" },
  { label: "تواصل معنا", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur border-b border-border">
      <div className="mx-auto max-w-7xl px-4 h-16 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2">
          <div className="grid place-items-center w-10 h-10 rounded-full bg-primary text-primary-foreground">
            <PawPrint className="w-5 h-5" />
          </div>
          <div className="leading-tight">
            <div className="font-extrabold text-foreground text-lg">دكتور توم</div>
            <div className="text-[11px] text-muted-foreground">أكثر من مجرد عيادة</div>
          </div>
        </a>
        <nav className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-semibold text-foreground/80 hover:text-primary transition">
              {l.label}
            </a>
          ))}
          <Button asChild size="sm" className="gap-2">
            <a href="#booking"><CalendarCheck className="w-4 h-4" /> احجز الآن</a>
          </Button>
        </nav>
        <button className="md:hidden p-2 text-foreground" onClick={() => setOpen(!open)} aria-label="القائمة">
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>
      {open && (
        <nav className="md:hidden border-t border-border bg-white px-4 py-3 flex flex-col gap-1">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="py-2 text-sm font-semibold text-foreground/80 hover:text-primary">
              {l.label}
            </a>
          ))}
          <Button asChild size="sm" className="mt-2 gap-2">
            <a href="#booking" onClick={() => setOpen(false)}><CalendarCheck className="w-4 h-4" /> احجز الآن</a>
          </Button>
        </nav>
      )}
    </header>
  );
}