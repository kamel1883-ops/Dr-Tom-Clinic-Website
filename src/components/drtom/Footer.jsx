import { Phone, MessageCircle, Mail, MapPin, PawPrint } from "lucide-react";

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
    <footer className="bg-foreground text-white/80">
      <div className="mx-auto max-w-7xl px-4 py-14 grid md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center gap-2">
            <div className="grid place-items-center w-10 h-10 rounded-full bg-primary text-primary-foreground">
              <PawPrint className="w-5 h-5" />
            </div>
            <div>
              <div className="font-extrabold text-white text-lg">دكتور توم</div>
              <div className="text-[11px] text-white/60">أكثر من مجرد عيادة</div>
            </div>
          </div>
          <p className="mt-4 text-sm leading-7">
            دكتور توم ملتقى الطب والترفيه — رعاية طبية ورفاهية متكاملة لأليفك على مدار الساعة.
          </p>
        </div>
        <div>
          <h3 className="font-bold text-white mb-3">القائمة</h3>
          <ul className="space-y-2 text-sm">
            {menu.map((m) => (
              <li key={m.label}><a href={m.href} className="hover:text-primary transition">{m.label}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-white mb-3">المقالات</h3>
          <ul className="space-y-2 text-sm">
            {articles.map((a) => (
              <li key={a}><a href="#blog" className="hover:text-primary transition">{a}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-white mb-3">تواصل معنا</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2"><MapPin className="w-4 h-4 text-primary mt-1 shrink-0" /> الرياض، حي العقيق، مبنى 7083</li>
            <li><a href="tel:+966533399462" className="flex items-center gap-2 hover:text-primary"><Phone className="w-4 h-4 text-primary" /> +966 53 339 9462</a></li>
            <li><a href="https://wa.me/966533399462" className="flex items-center gap-2 hover:text-primary"><MessageCircle className="w-4 h-4 text-primary" /> واتساب</a></li>
            <li><a href="mailto:info@drtom-clinic.com" className="flex items-center gap-2 hover:text-primary"><Mail className="w-4 h-4 text-primary" /> info@drtom-clinic.com</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-white/50">
        Copyright © 2023 Dr Tom Clinic — Powered by Tom
      </div>
    </footer>
  );
}