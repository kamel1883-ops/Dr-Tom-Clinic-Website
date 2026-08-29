const teamImg = "https://media.base44.com/images/public/6a92a06f32c39b0226f9e8c3/9fbdc5bea_Screenshot2026-08-29134546.png";

// 5 أطباء في صف واحد — كل طبيب يشغل ~20% من عرض الصورة
const docs = [
  { pos: "0% 62%", n: "د. عبد الرحمن يسري" },
  { pos: "25% 62%", n: "د. محمد عنتر" },
  { pos: "50% 62%", n: "د. مروى مسعد" },
  { pos: "75% 62%", n: "د. ماير ميشيل" },
  { pos: "100% 62%", n: "د. عمر سنبل" },
];

export default function Team() {
  return (
    <section id="team" className="py-20 bg-secondary/40">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center">
          <span className="inline-block rounded-full bg-brand text-brand-foreground text-sm font-bold px-4 py-1.5">فريقنا</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-foreground">أطباؤنا المتخصصون</h2>
          <p className="mt-3 max-w-2xl mx-auto text-muted-foreground leading-8">
            فريق من الأطباء البيطريين المؤهلين المخصصين لصحة أليفك.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 justify-items-center">
          {docs.map((d) => (
            <div key={d.n} className="w-full max-w-[220px] rounded-2xl overflow-hidden bg-white shadow-md ring-1 ring-border">
              <div className="w-full aspect-[3/4] bg-white"
                   style={{
                     backgroundImage: `url(${teamImg})`,
                     backgroundSize: "500% 190%",
                     backgroundPosition: d.pos,
                     backgroundRepeat: "no-repeat",
                   }}
                   aria-label={d.n}
              />
              <div className="bg-primary px-4 py-3 text-center">
                <h3 className="text-white text-base font-extrabold">{d.n}</h3>
                <span className="block mt-0.5 text-xs font-semibold text-white/70">طبيب بيطري</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}