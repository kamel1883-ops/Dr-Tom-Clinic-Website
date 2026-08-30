import { Syringe, Stethoscope, Microscope, Scissors, ShieldCheck, House, Bone } from "lucide-react";

const services = [
  { icon: Syringe, t: "التطعيمات", d: "تطعيمات أساسية وغير أساسية تناسب عمر أليفك وأسلوب حياته." },
  { icon: Stethoscope, t: "الطب العام", d: "فحوصات شاملة ووثائق السفر وعلاج الأمراض والإصابات العامة." },
  { icon: Bone, t: "الجراحة", d: "جراحات الأنسجة الرخوة والعظام والأسنان والأورام باستخدام معدات ألمانية مستوردة." },
  { icon: Microscope, t: "التشخيصات المتقدمة", d: "اختبارات الحساسية والجينات والأشعة والموجات فوق الصوتية وغيرها." },
  { icon: House, t: "فندق الأليفات", d: "غرف مخصصة توفر أقصى درجات الراحة والسلامة بمعايير AKC." },
  { icon: Scissors, t: "التجميل والسبا", d: "جلسات تجميل احترافية تشمل الاستحمام والقص وجلسات الاسترخاء." },
  { icon: ShieldCheck, t: "الرعاية الوقائية", d: "زرع الشرائح الإلكترونية وإزالة الديدان ومكافحة الطفيليات." },
];

export default function Services() {
  return (
    <section id="services" className="py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center">
          <span className="text-primary font-bold">ما نقدمه</span>
          <h2 className="mt-2 text-3xl font-extrabold text-foreground">خدماتنا البيطرية</h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground leading-8">
            مجموعة متكاملة من الخدمات البيطرية المتخصصة — من الفحوصات الروتينية إلى العمليات الجراحية المتقدمة.
          </p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, t, d }) => (
            <div key={t} className="group rounded-3xl border border-border bg-white p-6 hover:border-brand hover:shadow-xl transition">
              <div className="grid place-items-center w-12 h-12 rounded-xl bg-accent text-brand group-hover:bg-brand group-hover:text-white transition">
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="mt-4 text-lg font-extrabold text-foreground">{t}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-7">{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}