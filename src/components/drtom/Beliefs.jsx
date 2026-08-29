import { Heart, ShieldCheck, HandHeart } from "lucide-react";

const items = [
  { icon: Heart, t: "نؤمن بأن أليفك أليفنا", d: "لذا نقدّم الأفضل دائماً دون أدنى تردد؛ لأن أليفك يستحق الاهتمام." },
  { icon: ShieldCheck, t: "نؤمن بأننا نستحق الثقة", d: "لأننا نهتم بجميع التفاصيل الطبية الدقيقة التي تجعلنا خيارك الأول، إضافة إلى الرفاهية العالية التي تصنع الاختلاف." },
  { icon: HandHeart, t: "نبذل قصارى جهدنا", d: "لنقوم بدورنا تجاه الحيوانات الأليفة؛ لأن أليفك أمانة يجب أن نعتني به ونحافظ عليه." },
];

export default function Beliefs() {
  return (
    <section className="py-20 bg-primary text-white">
      <div className="mx-auto max-w-7xl px-4 grid md:grid-cols-3 gap-8">
        {items.map(({ icon: Icon, t, d }) => (
          <div key={t} className="text-center">
            <div className="mx-auto grid place-items-center w-16 h-16 rounded-full bg-white/15">
              <Icon className="w-8 h-8" />
            </div>
            <h3 className="mt-5 text-xl font-extrabold">{t}</h3>
            <p className="mt-3 text-white/85 leading-7">{d}</p>
          </div>
        ))}
      </div>
    </section>
  );
}