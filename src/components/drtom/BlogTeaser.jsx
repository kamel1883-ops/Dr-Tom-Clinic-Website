import { ArrowLeft } from "lucide-react";
import { Image } from "@/components/ui/image";

const img = "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=800&q=80";

export default function BlogTeaser() {
  return (
    <section id="blog" className="py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center">
          <span className="text-primary font-bold">المقالات</span>
          <h2 className="mt-2 text-3xl font-extrabold text-foreground">أليفك هو أليفنا.. لذا تثقّف معنا</h2>
        </div>
        <div className="mt-10 max-w-md mx-auto rounded-3xl overflow-hidden border border-border bg-white shadow-sm hover:shadow-lg transition">
          <Image src={img} fittingType="fill" className="w-full h-52" />
          <div className="p-6">
            <span className="text-xs font-bold text-primary bg-primary/10 rounded-full px-3 py-1">تربية الأليفة</span>
            <h3 className="mt-3 text-lg font-extrabold text-foreground leading-7">
              كيف تساهم تربية حيوانات أليفة في تعديل سلوك الطفل
            </h3>
            <p className="mt-2 text-sm text-muted-foreground leading-7">
              اكتشف كيف تؤثر تربية الحيوانات الأليفة إيجابياً على سلوك الأطفال ومهاراتهم الاجتماعية والعاطفية.
            </p>
            <a href="#blog" className="mt-4 inline-flex items-center gap-2 text-primary font-bold text-sm hover:gap-3 transition-all">
              اقرأ المزيد <ArrowLeft className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}