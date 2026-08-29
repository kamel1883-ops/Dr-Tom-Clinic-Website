import { Phone, MessageCircle, Mail, MapPin, Facebook } from "lucide-react";
import { Image } from "@/components/ui/image";
import { Link } from "react-router-dom";
import TikTokIcon from "@/components/drtom/TikTokIcon";

const LOGO = "https://media.base44.com/images/public/6a92a06f32c39b0226f9e8c3/e44611d94_Screenshot2026-08-05143830.png";
const FB = "https://www.facebook.com/p/%D8%B9%D9%8A%D8%A7%D8%AF%D8%A9-%D8%AF-%D8%AA%D9%88%D9%85-%D8%A7%D9%84%D8%A8%D9%8A%D8%B7%D8%B1%D9%8A%D8%A9-%D8%A7%D9%84%D9%85%D8%AA%D9%82%D8%AF%D9%85%D8%A9-Dr-TOM-Pet-Clinic-100091919482521/";
const TT = "https://www.tiktok.com/@drtompetclinic";

const articles = [
  "كيف تساهم تربية حيوانات أليفة في تعديل سلوك الطفل",
  "فوائد وأهمية تربية الحيوانات الأليفة في حياتنا",
  "خدمات عيادة دكتور توم البيطرية المتقدمة",
  "متجر عيادة دكتور توم",
];
const menu = [
  { label: "الرئيسية", href: "#home" },
  { label: "قصتنا", href: "#story" },
  { label: "خدماتنا", href: "#services" },
  { label: "مميزاتنا", href: "#features" },
  { label: "آراء العملاء", href: "#testimonials" },
  { label: "احجز الآن", href: "#booking" },
  { label: "تواصل معنا", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-primary text-white/85">
      <div className="mx-auto max-w-7xl px-4 py-14 grid md:grid-cols-4 gap-8">
        <div>
          <Image src={LOGO} fittingType="fit" className="h-16 w-36 mb-2" />
          <p className="mt-4 text-sm leading-7">
            دكتور توم ملتقى الطب والترفيه — رعاية طبية ورفاهية متكاملة لأليفك على مدار الساعة.
          </p>
        </div>
        <div>
          <h3 className="font-bold text-white mb-3">القائمة</h3>
          <ul className="space-y-2 text-sm">
            {menu.map((m) => (
              <li key={m.label}><a href={m.href} className="hover:text-brand transition">{m.label}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-white mb-3">المقالات</h3>
          <ul className="space-y-2 text-sm">
            {articles.map((a) => (
              <li key={a}><a href="#blog" className="hover:text-brand transition">{a}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-white mb-3">تواصل معنا</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2"><MapPin className="w-4 h-4 text-brand mt-1 shrink-0" /> الرياض، العقيق، المملكة العربية السعودية</li>
            <li><a href="tel:+966533399462" className="flex items-center gap-2 hover:text-brand"><Phone className="w-4 h-4 text-brand" /> +966 53 339 9462</a></li>
            <li><a href="https://wa.me/966533399462" className="flex items-center gap-2 hover:text-brand"><MessageCircle className="w-4 h-4 text-brand" /> واتساب</a></li>
            <li><a href="mailto:hello@drtom-clinic.com" className="flex items-center gap-2 hover:text-brand"><Mail className="w-4 h-4 text-brand" /> hello@drtom-clinic.com</a></li>
          </ul>
          <div className="flex items-center gap-3 mt-4">
            <a href={FB} target="_blank" rel="noopener noreferrer" className="grid place-items-center w-9 h-9 rounded-full bg-white/10 text-brand hover:bg-brand hover:text-brand-foreground transition" aria-label="فيسبوك"><Facebook className="w-4 h-4" /></a>
            <a href={TT} target="_blank" rel="noopener noreferrer" className="grid place-items-center w-9 h-9 rounded-full bg-white/10 text-brand hover:bg-brand hover:text-brand-foreground transition" aria-label="تيك توك"><TikTokIcon className="w-4 h-4" /></a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-5">
        <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-white/60">
          <Link to="/privacy-policy" className="hover:text-brand transition">سياسة الخصوصية</Link>
          <Link to="/refund-policy" className="hover:text-brand transition">سياسة الاسترداد</Link>
          <span className="text-white/30">•</span>
          <span>Copyright © 2026 Dr Tom Clinic — Powered by Tom</span>
        </div>
      </div>
    </footer>
  );
}