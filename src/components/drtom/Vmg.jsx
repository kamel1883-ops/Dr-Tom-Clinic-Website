import { Eye, Target, Compass } from "lucide-react";

const items = [
  {
    icon: Eye,
    title: "رؤيتنا",
    text: "أن نكون العيادة البيطرية الرائدة في المملكة العربية السعودية، ومرجعاً موثوقاً في الرعاية الطبية المتقدمة للحيوانات الأليفة، مع دمج الترفيه برفقية عالية في تجربة فريدة.",
  },
  {
    icon: Compass,
    title: "رسالتنا",
    text: "تقديم رعاية طبية بيطارية متكاملة وآمنة بأحدث الأجهزة وطاقم احترافي، والارتقاء بجودة حياة الأليف وعميلنا عبر خدمات طبية واستشارية وإيواء وتجميل وتسوق على مدار الساعة.",
  },
  {
    icon: Target,
    title: "أهدافنا",
    text: "تحقيق الرفاهية المتكاملة لأليفنا، وبناء ثقة طويلة مع عملائنا، والمساهمة في نشر الوعي الصحي والترفيهي للحيوانات الأليفة ضمن مجتمع آمن ومستدام.",
  },
];

export default function Vmg() {
  return (
    <section id="vmg" className="py-20 bg-background">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center">
          <span className="inline-block rounded-full bg-brand text-brand-foreground text-sm font-bold px-4 py-1.5">قيمنا</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-foreground">رؤيتنا ورسالتنا وأهدافنا</h2>
          <p className="mt-3 max-w-2xl mx-auto text-muted-foreground leading-8">
            نؤمن أن لكل أليف حقه في رعاية طبية وترفيهية متكاملة، ونسعى لتحقيق ذلك عبر قيم واضحة توجّه كل خطوة في عيادة دكتور توم.
          </p>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {items.map(({ icon: Icon, title, text }) => (
            <div key={title} className="rounded-3xl bg-white ring-1 ring-border shadow-sm p-7 hover:shadow-md transition text-center">
              <div className="mx-auto grid place-items-center w-16 h-16 rounded-2xl bg-secondary text-primary">
                <Icon className="w-8 h-8" />
              </div>
              <h3 className="mt-5 text-xl font-extrabold text-foreground">{title}</h3>
              <p className="mt-3 text-muted-foreground leading-8 text-sm">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}