import { Facebook } from "lucide-react";
import TikTokIcon from "@/components/drtom/TikTokIcon";

const FB_PAGE = "https://www.facebook.com/p/%D8%B9%D9%8A%D8%A7%D8%AF%D8%A9-%D8%AF-%D8%AA%D9%88%D9%85-%D8%A7%D9%84%D8%A8%D9%8A%D8%B7%D8%B1%D9%8A%D8%A9-%D8%A7%D9%84%D9%85%D8%AA%D9%82%D8%AF%D9%85%D8%A9-Dr-TOM-Pet-Clinic-100091919482521/";
const TT = "https://www.tiktok.com/@drtompetclinic";

export default function SocialGallery() {
  const fbSrc = `https://www.facebook.com/plugins/page.php?href=${encodeURIComponent(FB_PAGE)}&tabs=timeline&width=500&height=640&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true`;

  return (
    <section id="social-gallery" className="py-20 bg-secondary/40">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center">
          <span className="inline-block rounded-full bg-brand text-brand-foreground text-sm font-bold px-4 py-1.5">منصاتنا</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-foreground">معرض الصور والفيديوهات</h2>
          <p className="mt-3 max-w-2xl mx-auto text-muted-foreground leading-8">
            أحدث اللحظات من عيادة دكتور توم مباشرةً من صفحاتنا على فيسبوك وتيك توك.
          </p>
        </div>

        <div className="mt-12 grid lg:grid-cols-2 gap-8 items-start">
          {/* معرض فيسبوك — منشورات الصفحة الحقيقية */}
          <div className="rounded-3xl bg-white ring-1 ring-border shadow-sm p-4">
            <div className="flex items-center gap-3 px-2 pb-3">
              <div className="grid place-items-center w-10 h-10 rounded-xl bg-[#1877f2] text-white">
                <Facebook className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-extrabold text-foreground">معرض فيسبوك</h3>
                <p className="text-xs text-muted-foreground">منشورات وصور وفيديوهات الصفحة مباشرةً</p>
              </div>
              <a href={FB_PAGE} target="_blank" rel="noopener noreferrer" className="ms-auto text-sm font-bold text-primary hover:underline">زيارة الصفحة</a>
            </div>
            <div className="rounded-2xl overflow-hidden bg-secondary/40">
              <iframe
                title="عيادة دكتور توم على فيسبوك"
                src={fbSrc}
                className="w-full"
                style={{ border: 0, height: 640 }}
                loading="lazy"
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
              />
            </div>
          </div>

          {/* معرض تيك توك */}
          <div className="rounded-3xl bg-[#0b121c] text-white ring-1 ring-border shadow-sm p-8 flex flex-col">
            <div className="flex items-center gap-3">
              <div className="grid place-items-center w-10 h-10 rounded-xl bg-white/10 text-white">
                <TikTokIcon className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-extrabold">معرض تيك توك</h3>
                <p className="text-xs text-white/55">@drtompetclinic</p>
              </div>
            </div>

            <p className="mt-6 text-white/70 leading-8">
              شاهد أحدث مقاطعنا على تيك توك — فيديوهات من داخل العيادة ورعاية الأليف ولحظات طريفة. اضغط الزر أدناه لفتح الحساب ومشاهدة المحتوى كاملاً.
            </p>

            <div className="mt-8 grid place-items-center rounded-2xl bg-white/5 p-6 text-center">
              <TikTokIcon className="w-12 h-12 mb-3" />
              <p className="text-white/55 text-sm">لدمج الفيديوهات داخل الموقع مباشرةً يمكن إما ربط حساب تيك توك أو مشاركة روابط المقاطع.</p>
            </div>

            <a href={TT} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-white text-[#0b121c] px-6 py-3 font-extrabold hover:bg-white/90 transition">
              <TikTokIcon className="w-5 h-5" /> شاهد على تيك توك
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}