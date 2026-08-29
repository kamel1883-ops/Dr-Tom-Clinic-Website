import { useEffect, useState } from "react";
import { CalendarCheck, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const slides = [
  "دكتور توم أكثر من مجرد عيادة",
  "قسم الرعاية الطبية بكافة تخصصاتها على مدار 24 ساعة",
  "قسم الاستضافة الطبية برعاية طبية على مدار 24 ساعة",
  "قسم القرومنق (شاور وحلاقة) على مدار 24 ساعة",
  "قسم التسوق لاحتياجات أليفك على مدار 24 ساعة",
  "استمتع بالحديقة والممشى على مدار 24 ساعة",
];

const bg = "https://images.unsplash.com/photo-1450778869180-41d0601e046e?auto=format&fit=crop&w=1920&q=80";

export default function Hero() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % slides.length), 5000);
    return () => clearInterval(t);
  }, []);
  const go = (d) => setI((p) => (p + d + slides.length) % slides.length);
  return (
    <section id="home" className="relative h-[82vh] min-h-[480px] w-full overflow-hidden">
      <img src={bg} alt="حيوانات أليفة في عيادة دكتور توم" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-l from-sky-900/85 via-sky-800/75 to-sky-700/55" />
      <div className="relative z-10 mx-auto max-w-7xl h-full px-4 flex flex-col items-center justify-center text-center text-white">
        <span className="mb-5 inline-block rounded-full bg-white/15 px-4 py-1.5 text-sm font-semibold backdrop-blur">
          اختر الخدمة التي تحتاجها لأليفك
        </span>
        <h1 key={i} className="max-w-3xl text-3xl sm:text-5xl font-extrabold leading-tight drop-shadow-lg">
          {slides[i]}
        </h1>
        <Button asChild size="lg" className="mt-8 gap-2 text-base h-12 px-8">
          <a href="#booking"><CalendarCheck className="w-5 h-5" /> احجز موعد الآن</a>
        </Button>
      </div>
      <button onClick={() => go(-1)} className="absolute right-4 top-1/2 -translate-y-1/2 z-10 grid place-items-center w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 text-white transition" aria-label="السابق">
        <ChevronRight className="w-5 h-5" />
      </button>
      <button onClick={() => go(1)} className="absolute left-4 top-1/2 -translate-y-1/2 z-10 grid place-items-center w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 text-white transition" aria-label="التالي">
        <ChevronLeft className="w-5 h-5" />
      </button>
      <div className="absolute bottom-5 inset-x-0 z-10 flex justify-center gap-2">
        {slides.map((_, idx) => (
          <button key={idx} onClick={() => setI(idx)} className={`h-2 rounded-full transition-all ${idx === i ? "w-8 bg-white" : "w-2 bg-white/50"}`} aria-label={`شريحة ${idx + 1}`} />
        ))}
      </div>
    </section>
  );
}