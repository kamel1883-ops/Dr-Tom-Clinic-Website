import { Star, Quote } from "lucide-react";

const reviews = [
  { n: "R R", d: "شكراً لكل الموظفين وشكراً لكل الكادر الموجود. ما شاء الله اهتمام، وأين ما تروح من تحت حتى تطلع فوق 😍" },
  { n: "MALAK Li", d: "ممتازين والدكتور مرّه فاهم وممتاز، وتعامل الاستقبال البنات يجنّن. الله يجزاكم خير صدق عيادة تخاف الله." },
  { n: "HESS", d: "من أول ما تدخل الباب إلى أن تطلع بتصير راضٍ ومبسوط 💘 الطاقم كله لطيف وبشوش ومتعاون ويعرفون يتعاملون مع الحيوانات الأليفة." },
  { n: "لمياء", d: "من أفضل العيادات التي جبت كلبي لها؛ من الممشى، من الدكاترة، من تعامل الموظفين والمتجر. شكراً لكم عيادة دكتور توم 💞" },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-secondary/50">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center">
          <span className="text-primary font-bold">آراء عملائنا</span>
          <h2 className="mt-2 text-3xl font-extrabold text-foreground">نفتخر بآراء عملاءنا</h2>
        </div>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((r) => (
            <div key={r.n} className="relative rounded-3xl bg-white border border-border p-6 shadow-sm flex flex-col">
              <Quote className="absolute top-5 left-5 w-8 h-8 text-primary/15" />
              <div className="flex gap-1 text-amber-400 mb-3">
                {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="w-4 h-4 fill-amber-400" />)}
              </div>
              <p className="text-sm text-muted-foreground leading-7 flex-1">{r.d}</p>
              <div className="mt-5 flex items-center gap-3">
                <div className="grid place-items-center w-10 h-10 rounded-full bg-primary text-white font-bold text-sm">
                  {r.n.charAt(0)}
                </div>
                <span className="font-bold text-foreground text-sm">{r.n}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}