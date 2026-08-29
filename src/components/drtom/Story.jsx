import { Image } from "@/components/ui/image";
import { CheckCircle2 } from "lucide-react";

const img = "https://media.base44.com/images/public/6a92a06f32c39b0226f9e8c3/0a25c84f8_generated_image.png";
const LOGO = "https://media.base44.com/images/public/6a92a06f32c39b0226f9e8c3/372576e8e_Screenshot2026-07-26144441.png";
const PAD = "absolute z-10 w-9 sm:w-11 rounded-md bg-white/90 p-1 shadow-md pointer-events-none";
const points = ["طاقم طبي احترافي", "أجهزة طبية متقدمة", "رفاهية متكاملة"];

export default function Story() {
  return (
    <section id="story" className="py-20 bg-secondary/50">
      <div className="mx-auto max-w-7xl px-4 grid md:grid-cols-2 gap-10 items-center">
        <div className="relative">
          <Image src={img} fittingType="fill" focalPointX={0.5} focalPointY={0.4} className="rounded-3xl block w-full h-[360px] shadow-xl" />
          <img src={LOGO} alt="شعار دكتور توم" className={`${PAD} left-[15%] top-[63%]`} />
          <img src={LOGO} alt="شعار دكتور توم" className={`${PAD} left-[46%] top-[61%]`} />
          <img src={LOGO} alt="شعار دكتور توم" className={`${PAD} left-[72%] top-[63%]`} />
        </div>
        <div>
          <span className="text-primary font-bold">قصتنا</span>
          <h2 className="mt-2 text-3xl font-extrabold text-foreground">دكتور توم.. ملتقى الطب والترفيه</h2>
          <p className="mt-4 text-muted-foreground leading-8">
            بدأت عيادة دكتور توم البيطرية المتقدمة رحلتها بشكل احترافي، يتميز بالتكامل والابتكار؛ لتكون رائدةً في مجال الرعاية الطبية للحيوانات الأليفة ومنفردةً فيما يتعلق بالرفاهية العالية للأليف وعميلنا العزيز.
          </p>
          <p className="mt-3 text-muted-foreground leading-8">
            وفرنا في دكتور توم طاقم طبي احترافي يتناسب مع الأجهزة الطبية المتقدمة؛ لنقدم لأليفنا خدمة آمنة وعالية الجودة، واستكمالاً لقصتنا صنعنا لعميلنا وأليفه وسائل ترفيهية مميزة لنحقق الرفاهية المتكاملة.
          </p>
          <ul className="mt-6 space-y-3">
            {points.map((t) => (
              <li key={t} className="flex items-center gap-3 text-foreground/85">
                <CheckCircle2 className="w-5 h-5 text-brand shrink-0" /> <span className="font-semibold">{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}