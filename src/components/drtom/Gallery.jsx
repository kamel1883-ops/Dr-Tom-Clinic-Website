import { Image } from "@/components/ui/image";

const items = [
  { src: "https://media.base44.com/images/public/6a92a06f32c39b0226f9e8c3/2026b2c28_generated_image.png", t: "متجر المستلزمات", d: "كل ما يحتاجه أليفك في مكان واحد" },
  { src: "https://media.base44.com/images/public/6a92a06f32c39b0226f9e8c3/57978afca_image.png", t: "الحديقة والممشى", d: "مساحة ترفيهية آمنة على مدار الساعة" },
  { src: "https://media.base44.com/images/public/6a92a06f32c39b0226f9e8c3/b02d2b52d_generated_image.png", t: "القرومنق الطبي", d: "شاور وحلاقة احترافية لأليفك" },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 bg-[#0b121c]">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center text-white">
          <span className="inline-block rounded-full bg-white/10 text-[#4ade80] text-sm font-bold px-4 py-1.5">معرض الصور</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold">لمحة من عيادتنا</h2>
        </div>
        <div className="mt-10 grid sm:grid-cols-3 gap-6">
          {items.map(({ src, t, d }) => (
            <div key={t} className="group relative rounded-3xl overflow-hidden ring-1 ring-white/10 hover:ring-[#4ade80]/40 transition">
              <Image src={src} fittingType="fill" alt={t} className="w-full h-64" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b121c] via-[#0b121c]/30 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <h3 className="text-white font-extrabold text-lg">{t}</h3>
                <p className="text-white/75 text-sm mt-1">{d}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}