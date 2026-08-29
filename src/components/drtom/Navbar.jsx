import { useState } from "react";
import { Menu, X, CalendarCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Image } from "@/components/ui/image";
import { useLanguage } from "@/lib/LanguageContext";
import { Link } from "react-router-dom";

const LOGO = "https://media.base44.com/images/public/6a92a06f32c39b0226f9e8c3/e44611d94_Screenshot2026-08-05143830.png";
const links = { ar: [["الرئيسية", "#home"], ["قصتنا", "#story"], ["خدماتنا", "#services"], ["مميزاتنا", "#features"], ["آراء العملاء", "#testimonials"], ["تواصل معنا", "#contact"]], en: [["Home", "#home"], ["Our story", "#story"], ["Services", "#services"], ["Why us", "#features"], ["Reviews", "#testimonials"], ["Contact", "#contact"]] };

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { language, isArabic, setLanguage } = useLanguage();
  const booking = isArabic ? "احجز الآن" : "Book now";
  const blog = isArabic ? "المدونة" : "Blog";
  return <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur border-b border-border">
    <div className="mx-auto max-w-7xl px-4 h-16 flex items-center justify-between">
      <Link to="/#home" className="flex items-center"><Image src={LOGO} fittingType="fit" className="h-12 w-28" /></Link>
      <nav className="hidden md:flex items-center gap-6">{links[language].map(([label, href]) => <Link key={href} to={`/${href}`} className="text-sm font-semibold text-foreground/80 hover:text-primary transition">{label}</Link>)}<Link to="/blog" className="text-sm font-semibold text-foreground/80 hover:text-primary transition">{blog}</Link><Button asChild size="sm" className="gap-2"><Link to="/#booking"><CalendarCheck className="w-4 h-4" /> {booking}</Link></Button><button onClick={() => setLanguage(isArabic ? "en" : "ar")} className="text-sm font-bold text-primary border border-primary rounded-full px-3 py-1.5">{isArabic ? "English" : "العربية"}</button></nav>
      <button className="md:hidden p-2 text-foreground" onClick={() => setOpen(!open)} aria-label={isArabic ? "القائمة" : "Menu"}>{open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}</button>
    </div>
    {open && <nav className="md:hidden border-t border-border bg-white px-4 py-3 flex flex-col gap-1">{links[language].map(([label, href]) => <Link key={href} to={`/${href}`} onClick={() => setOpen(false)} className="py-2 text-sm font-semibold text-foreground/80">{label}</Link>)}<Link to="/blog" onClick={() => setOpen(false)} className="py-2 text-sm font-semibold text-foreground/80">{blog}</Link><Button asChild size="sm" className="mt-2 gap-2"><Link to="/#booking" onClick={() => setOpen(false)}><CalendarCheck className="w-4 h-4" /> {booking}</Link></Button><button onClick={() => { setLanguage(isArabic ? "en" : "ar"); setOpen(false); }} className="mt-2 py-2 text-sm font-bold text-primary">{isArabic ? "English" : "العربية"}</button></nav>}
  </header>;
}