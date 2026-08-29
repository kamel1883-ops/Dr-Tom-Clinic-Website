import { Image } from "@/components/ui/image";

const items = [
  { src: "https://media.base44.com/images/public/6a92a06f32c39b0226f9e8c3/6fad66c26_generated_image.png", t: "متجر المستلزمات", d: "كل ما يحتاجه أليفك في مكان واحد" },
  { src: "https://media.base44.com/images/public/6a92a06f32c39b0226f9e8c3/737dce985_generated_image.png", t: "الحديقة والممشى", d: "مساحة ترفيهية آمنة على مدار الساعة" },
  { src: "https://media.base44.com/images/public/6a92a06f32c39b0226f9e8c3/ef5c0597f_generated_image.png", t: "القرومنق الطبي", d: "شاور وحلاقة احترافية لأليفك" },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center">
          <span className="text-primary font-bold">معرض الصور</span>
          <h2 className="mt-2 text-3xl font-extrabold text-foreground">لمحة من عيادتنا</h2>
        </div>
        <div className="mt-10 grid sm:grid-cols-3 gap-6">
          {items.map(({ src, t, d }) => (
            <div key={t} className="group relative rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition">
              <Image src={src} fittingType="fill" alt={t} className="w-full h-64" />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-foreground/85 to-transparent p-4">
                <h3 className="text-white font-extrabold text-lg">{t}</h3>
                <p className="text-white/85 text-sm mt-1">{d}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}