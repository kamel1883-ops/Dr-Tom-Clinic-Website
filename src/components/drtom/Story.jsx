import { Image } from "@/components/ui/image";
import { CheckCircle2 } from "lucide-react";

const img = "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?auto=format&fit=crop&w=900&q=80";
const points = ["طاقم طبي احترافي", "أجهزة طبية متقدمة", "رفاهية متكاملة"];

export default function Story() {
  return (
    <section id="story" className="py-20 bg-secondary/50">
      <div className="mx-auto max-w-7xl px-4 grid md:grid-cols-2 gap-10 items-center">
        <Image src={img} fittingType="fill" focalPointX={0.5} focalPointY={0.4} className="rounded-3xl w-full h-[360px] shadow-xl" />
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
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0" /> <span className="font-semibold">{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}