import { Image } from "@/components/ui/image";

const teamImg = "https://media.base44.com/images/public/6a92a06f32c39b0226f9e8c3/bfeb9def0_Screenshot2026-08-29134546.png";

const docs = [
  { fpX: 0.11, n: "د. عبد الرحمن يسري" },
  { fpX: 0.31, n: "د. محمد عنتر" },
  { fpX: 0.50, n: "د. مروى مسعد" },
  { fpX: 0.69, n: "د. ماير ميشيل" },
  { fpX: 0.89, n: "د. عمر سنبل" },
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
              <div className="relative w-36 h-36 sm:w-40 sm:h-40 rounded-full p-[5px] bg-white shadow-sm">
                {/* إطار دائري أخضر/أزرق */}
                <div className="absolute inset-0 rounded-full" style={{ background: "conic-gradient(from 200deg, hsl(82 54% 47%) 0deg 180deg, hsl(211 64% 40%) 180deg 360deg)" }} />
                <div className="absolute inset-[5px] rounded-full bg-white" />
                <Image src={teamImg} fittingType="fill" focalPointX={d.fpX} focalPointY={0.3} alt={d.n} className="relative rounded-full w-full h-full object-cover" />
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