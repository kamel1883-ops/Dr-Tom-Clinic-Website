import {
  Stethoscope, Microscope, Syringe, ClipboardCheck, Baby, Siren,
  Scissors, Footprints, Trees, ShoppingBag, Sofa,
} from "lucide-react";

const medical = [
  { icon: Stethoscope, t: "الاستضافة الطبية" },
  { icon: Syringe, t: "العمليات الجراحية بكافة أنواعها" },
  { icon: Scissors, t: "الشاور الطبي" },
  { icon: Microscope, t: "معامل التحاليل" },
  { icon: Syringe, t: "التطعيمات" },
  { icon: ClipboardCheck, t: "الفحوصات الأولية" },
  { icon: Baby, t: "حالات الحمل والولادة" },
  { icon: Siren, t: "الطوارئ والحالات الحرجة" },
];
const rec = [
  { icon: Scissors, t: "القرومنق (شاور وحلاقة)" },
  { icon: Footprints, t: "ممشى مخصص للكلاب" },
  { icon: Sofa, t: "جلسات داخلية وخارجية مجهزة" },
  { icon: Trees, t: "حديقة ترفيهية" },
  { icon: ShoppingBag, t: "متجر لاحتياجات ومستلزمات أليفك" },
];

function Card({ icon: Icon, t }) {
  return (
    <div className="group flex flex-col items-center gap-3 rounded-2xl border border-border bg-white p-5 text-center hover:border-primary hover:shadow-lg transition">
      <div className="grid place-items-center w-14 h-14 rounded-2xl bg-primary/10 text-primary group-hover:bg-brand group-hover:text-white transition">
        <Icon className="w-7 h-7" />
      </div>
      <span className="text-sm font-bold text-foreground leading-6">{t}</span>
    </div>
  );
}

export default function Services() {
  return (
    <section id="services" className="py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center">
          <span className="text-primary font-bold">خدماتنا</span>
          <h2 className="mt-2 text-3xl font-extrabold text-foreground">اختر الخدمة التي تحتاجها لأليفك</h2>
          <p className="mt-3 text-muted-foreground">كل ما يحتاجه أليفك في مكان واحد، على مدار 24 ساعة</p>
        </div>
        <h3 className="mt-12 text-xl font-extrabold text-foreground text-center">الخدمات الطبية</h3>
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {medical.map((s) => <Card key={s.t} {...s} />)}
        </div>
        <h3 className="mt-14 text-xl font-extrabold text-foreground text-center">الخدمات الترفيهية</h3>
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {rec.map((s) => <Card key={s.t} {...s} />)}
        </div>
        <div className="mt-10 text-center">
          <span className="inline-block rounded-full bg-brand/10 text-brand font-bold px-5 py-2.5 text-sm">
            نعمل على مدار 24 ساعة يومياً • عدا الجمعة من 4 صباحاً حتى 4 عصراً للطوارئ فقط
          </span>
        </div>
      </div>
    </section>
  );
}