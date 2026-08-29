import { MapPin, Phone, MessageCircle, Mail, Clock, Share2, Facebook } from "lucide-react";
import TikTokIcon from "@/components/drtom/TikTokIcon";

const FB = "https://www.facebook.com/p/%D8%B9%D9%8A%D8%A7%D8%AF%D8%A9-%D8%AF-%D8%AA%D9%88%D9%85-%D8%A7%D9%84%D8%A8%D9%8A%D8%B7%D8%B1%D9%8A%D8%A9-%D8%A7%D9%84%D9%85%D8%AA%D9%82%D8%AF%D9%85%D8%A9-Dr-TOM-Pet-Clinic-100091919482521/";
const TT = "https://www.tiktok.com/@drtompetclinic";

const rows = [
  { icon: MapPin, t: "العنوان", d: "الرياض، المملكة العربية السعودية" },
  { icon: Phone, t: "الجوال", d: "+966 53 339 9462", href: "tel:+966533399462" },
  { icon: MessageCircle, t: "واتساب", d: "+966 53 339 9462", href: "https://wa.me/966533399462" },
  { icon: Mail, t: "الإيميل", d: "info@drtom-clinic.com", href: "mailto:info@drtom-clinic.com" },
];

export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="mx-auto max-w-7xl px-4 grid md:grid-cols-2 gap-10 items-stretch">
        <div>
          <span className="text-primary font-bold">تواصل معنا</span>
          <h2 className="mt-2 text-3xl font-extrabold text-foreground">نحن هنا لخدمتك وأليفك</h2>
          <div className="mt-6 space-y-4">
            {rows.map(({ icon: Icon, t, d, href }) => (
              <a key={t} href={href} className="flex items-start gap-4 rounded-2xl border border-border bg-white p-4 hover:border-primary hover:shadow-md transition">
                <div className="grid place-items-center w-12 h-12 rounded-xl bg-primary/10 text-primary shrink-0">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-bold text-foreground">{t}</div>
                  <div className="text-sm text-muted-foreground mt-1 leading-7">{d}</div>
                </div>
              </a>
            ))}
            <div className="flex items-start gap-4 rounded-2xl border border-border bg-white p-4">
              <div className="grid place-items-center w-12 h-12 rounded-xl bg-primary/10 text-primary shrink-0">
                <Share2 className="w-6 h-6" />
              </div>
              <div>
                <div className="font-bold text-foreground">تابعنا</div>
                <div className="mt-2 flex items-center gap-3">
                  <a href={FB} target="_blank" rel="noopener noreferrer" className="grid place-items-center w-9 h-9 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white transition" aria-label="فيسبوك"><Facebook className="w-4 h-4" /></a>
                  <a href={TT} target="_blank" rel="noopener noreferrer" className="grid place-items-center w-9 h-9 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white transition" aria-label="تيك توك"><TikTokIcon className="w-4 h-4" /></a>
                </div>
              </div>
            </div>
            <div className="flex items-start gap-4 rounded-2xl border border-border bg-white p-4">
              <div className="grid place-items-center w-12 h-12 rounded-xl bg-primary/10 text-primary shrink-0">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <div className="font-bold text-foreground">مواعيد العمل</div>
                <div className="text-sm text-muted-foreground mt-1 leading-7">
                  نعمل على مدار 24 ساعة يومياً، عدا يوم الجمعة من 4 صباحاً حتى 4 عصراً لحالات الطوارئ فقط
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative rounded-3xl overflow-hidden border border-border min-h-[360px] bg-secondary/40">
          <iframe
            title="موقع عيادة دكتور توم"
            className="w-full h-full"
            style={{ minHeight: 360, border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps?q=24.7639613,46.6242536&z=16&output=embed"
          />
          <a href="https://www.google.com/maps/place/dr.+tom+pet+clinic/@24.7639613,46.6242536,17z" target="_blank" rel="noopener noreferrer" className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-full bg-primary text-white px-4 py-2 text-sm font-bold shadow-lg hover:bg-primary/90 transition">
            <MapPin className="w-4 h-4" /> احصل على الاتجاهات
          </a>
        </div>
      </div>
    </section>
  );
}