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
    <section id="services" className="py-20 bg-[#0b1016]">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center text-white">
          <span className="text-[#74c69d] font-bold text-sm">ما نقدمه</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold">خدماتنا البيطرية</h2>
          <p className="mt-4 max-w-2xl mx-auto text-white/55 leading-8">
            مجموعة متكاملة من الخدمات البيطرية المتخصصة — من الفحوصات الروتينية إلى العمليات الجراحية المتقدمة.
          </p>
        </div>

        <div className="mt-10 rounded-3xl bg-[#16202f] p-5 sm:p-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map(({ icon: Icon, t, d }) => (
              <div key={t} className="rounded-2xl bg-[#0b1016] p-6 hover:bg-[#1c2738] transition">
                <div className="grid place-items-center w-12 h-12 rounded-xl bg-[#2d6a4f]/15 text-[#74c69d]">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="mt-4 text-lg font-extrabold text-white">{t}</h3>
                <p className="mt-2 text-sm text-white/55 leading-7">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}