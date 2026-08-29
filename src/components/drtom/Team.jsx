const teamImg = "https://media.base44.com/images/public/6a92a06f32c39b0226f9e8c3/bfeb9def0_Screenshot2026-08-29134546.png";

// 5 أطباء في صف واحد، كل طبيب يشغل ~20% من عرض الصورة
const docs = [
  { pos: "0% 25%", n: "د. عبد الرحمن يسري" },
  { pos: "25% 25%", n: "د. محمد عنتر" },
  { pos: "50% 25%", n: "د. مروى مسعد" },
  { pos: "75% 25%", n: "د. ماير ميشيل" },
  { pos: "100% 25%", n: "د. عمر سنبل" },
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

        <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 justify-items-center">
          {docs.map((d) => (
            <div key={d.n} className="flex flex-col items-center text-center">
              {/* إطار دائري أخضر/أزرق */}
              <div className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-full p-[5px] shadow-sm"
                   style={{ background: "conic-gradient(from 200deg, hsl(82 54% 47%) 0deg 180deg, hsl(211 64% 40%) 180deg 360deg)" }}>
                <div className="relative w-full h-full rounded-full overflow-hidden bg-white"
                     style={{
                       backgroundImage: `url(${teamImg})`,
                       backgroundSize: "500% 220%",
                       backgroundPosition: d.pos,
                     }}
                     aria-label={d.n}
                />
              </div>
              <h3 className="mt-4 text-base font-extrabold text-foreground">{d.n}</h3>
              <span className="mt-1 text-xs font-semibold text-brand">طبيب بيطري</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}