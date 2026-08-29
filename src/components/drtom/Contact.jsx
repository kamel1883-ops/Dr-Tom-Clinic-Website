import { MapPin, Phone, Mail, Clock, Facebook, Share2 } from "lucide-react";
import TikTokIcon from "@/components/drtom/TikTokIcon";
import { WhatsAppIcon } from "@/components/drtom/icons";

const FB = "https://www.facebook.com/p/%D8%B9%D9%8A%D8%A7%D8%AF%D8%A9-%D8%AF-%D8%AA%D9%88%D9%85-%D8%A7%D9%84%D8%A8%D9%8A%D8%B7%D8%B1%D9%8A%D8%A9-%D8%A7%D9%84%D9%85%D8%AA%D9%82%D8%AF%D9%85%D8%A9-Dr-TOM-Pet-Clinic-100091919482521/";
const TT = "https://www.tiktok.com/@drtompetclinic";

const info = [
  { icon: Phone, t: "الهاتف", d: "+966533399462", href: "tel:+966533399462" },
  { icon: WhatsAppIcon, t: "واتساب", d: "966533399462", href: "https://wa.me/966533399462" },
  { icon: Mail, t: "البريد الإلكتروني", d: "hello@drtom-clinic.com", href: "mailto:hello@drtom-clinic.com" },
  { icon: MapPin, t: "العنوان", d: "الرياض، العقيق، المملكة العربية السعودية", href: "https://www.google.com/maps/place/dr.+tom+pet+clinic/@24.7639613,46.6242536,17z" },
];

const hours = [
  { day: "يومياً (السبت إلى الخميس)", time: "على مدار الساعة", closed: false },
  { day: "الجمعة (مغلق)", time: "مغلق من 4 صباحاً إلى 4 عصراً", closed: true },
];

export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="mx-auto max-w-7xl px-4 grid md:grid-cols-2 gap-8 items-stretch">
        {/* معلومات التواصل */}
        <div className="rounded-3xl bg-[#0b121c] p-7 sm:p-9 text-white">
          <h3 className="text-xl font-extrabold">معلومات التواصل</h3>
          <div className="mt-6 space-y-4">
            {info.map(({ icon: Icon, t, d, href }) => (
              <a key={t} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="flex items-center gap-4 rounded-2xl bg-[#1e293b]/80 p-4 hover:bg-[#243449] transition">
                <div className="grid place-items-center w-11 h-11 rounded-xl bg-[#1e293b] text-[#4ade80] shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="flex-1 text-center">
                  <div className="text-sm text-white/55 font-semibold">{t}</div>
                  <div className="text-base font-bold mt-0.5" dir="ltr">{d}</div>
                </div>
              </a>
            ))}
            <div className="rounded-2xl bg-[#1e293b]/80 p-4">
              <div className="flex items-center gap-4">
                <div className="grid place-items-center w-11 h-11 rounded-xl bg-[#1e293b] text-[#4ade80] shrink-0">
                  <Share2 className="w-5 h-5" />
                </div>
                <div className="flex-1 text-center">
                  <div className="text-sm text-white/55 font-semibold">تابعنا</div>
                </div>
              </div>
              <div className="mt-3 flex items-center justify-center gap-3">
                <a href={FB} target="_blank" rel="noopener noreferrer" className="grid place-items-center w-10 h-10 rounded-xl bg-[#0b121c] text-[#4ade80] hover:bg-[#4ade80] hover:text-[#0b121c] transition" aria-label="فيسبوك"><Facebook className="w-5 h-5" /></a>
                <a href={TT} target="_blank" rel="noopener noreferrer" className="grid place-items-center w-10 h-10 rounded-xl bg-[#0b121c] text-[#4ade80] hover:bg-[#4ade80] hover:text-[#0b121c] transition" aria-label="تيك توك"><TikTokIcon className="w-5 h-5" /></a>
              </div>
            </div>
          </div>
        </div>

        {/* مواعيد العمل + الخريطة */}
        <div className="flex flex-col gap-8">
          <div className="rounded-3xl bg-[#0b121c] p-7 sm:p-9 text-white">
            <h3 className="flex items-center gap-2 text-xl font-extrabold">
              <Clock className="w-5 h-5 text-[#4ade80]" /> مواعيد العمل
            </h3>
            <div className="mt-6 space-y-3">
              {hours.map((r) => (
                <div key={r.day} className="flex items-center justify-between gap-4 rounded-2xl bg-[#1e293b]/80 p-4">
                  <span className={`text-base font-bold ${r.closed ? "text-[#4ade80]" : "text-white"}`}>{r.time}</span>
                  <span className="text-sm text-white/55 font-semibold text-left">{r.day}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative flex-1 rounded-3xl overflow-hidden border border-border min-h-[300px] bg-secondary/40">
            <iframe
              title="موقع عيادة دكتور توم"
              className="w-full h-full"
              style={{ minHeight: 300, border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps?q=24.7639613,46.6242536&z=16&output=embed"
            />
            <a href="https://www.google.com/maps/place/dr.+tom+pet+clinic/@24.7639613,46.6242536,17z" target="_blank" rel="noopener noreferrer" className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-full bg-[#4ade80] text-[#0b121c] px-4 py-2 text-sm font-bold shadow-lg hover:bg-[#5ef08f] transition">
              <MapPin className="w-4 h-4" /> احصل على الاتجاهات
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}