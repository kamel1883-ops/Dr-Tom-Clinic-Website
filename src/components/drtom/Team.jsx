import DoctorCard from "@/components/drtom/DoctorCard";

const teamImg = "https://media.base44.com/images/public/6a92a06f32c39b0226f9e8c3/9fbdc5bea_Screenshot2026-08-29134546.png";

const docs = [
  { n: "د. عبد الرحمن يسري", img: "https://media.base44.com/images/public/6a92a06f32c39b0226f9e8c3/24bedaa91_image.png" },
  { n: "د. محمد عنتر", img: "https://media.base44.com/images/public/6a92a06f32c39b0226f9e8c3/180b1e4f3_image.png" },
  { n: "د. مروى مسعد", pos: "50% 55%" },
  { n: "د. ماير ميشيل", pos: "75% 55%" },
  { n: "د. عمر سنبل", pos: "100% 55%" },
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

        <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 justify-items-center">
          {docs.map((d) => (
            <DoctorCard key={d.n} name={d.n} img={d.img} pos={d.pos} teamImg={teamImg} />
          ))}
        </div>
      </div>
    </section>
  );
}