import { MapPin, Phone, MessageCircle, Mail, Clock } from "lucide-react";

const rows = [
  { icon: MapPin, t: "العنوان", d: "الرياض، حي العقيق، طريق الأمير محمد بن سعد بن عبدالعزيز، مبنى رقم 7083" },
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
        <div className="rounded-3xl overflow-hidden border border-border min-h-[360px] bg-secondary/40">
          <iframe
            title="موقع عيادة دكتور توم"
            className="w-full h-full"
            style={{ minHeight: 360, border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps?q=Riyadh+Al+Aqeeq&output=embed"
          />
        </div>
      </div>
    </section>
  );
}