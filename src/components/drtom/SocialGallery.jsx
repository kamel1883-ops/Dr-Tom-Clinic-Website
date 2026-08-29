import { Facebook, Share2 } from "lucide-react";
import TikTokIcon from "@/components/drtom/TikTokIcon";

const FB_PAGE = "https://www.facebook.com/p/%D8%B9%D9%8A%D8%A7%D8%AF%D8%A9-%D8%AF-%D8%AA%D9%88%D9%85-%D8%A7%D9%84%D8%A8%D9%8A%D8%B7%D8%B1%D9%8A%D8%A9-%D8%A7%D9%84%D9%85%D8%AA%D9%82%D8%AF%D9%85%D8%A9-Dr-TOM-Pet-Clinic-100091919482521/";
const TT = "https://www.tiktok.com/@drtompetclinic";

export default function SocialGallery() {
  const fbSrc = `https://www.facebook.com/plugins/page.php?href=${encodeURIComponent(FB_PAGE)}&tabs=timeline&width=500&height=640&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&colorscheme=dark`;

  return (
    <section id="social-gallery" className="py-20 bg-[#0b121c]">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center text-white">
          <span className="inline-block rounded-full bg-white/10 text-[#4ade80] text-sm font-bold px-4 py-1.5">منصاتنا</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold">معرض الصور والفيديوهات</h2>
          <p className="mt-3 max-w-2xl mx-auto text-white/55 leading-8">
            أحدث اللحظات من عيادة دكتور توم مباشرةً من صفحاتنا على فيسبوك وتيك توك.
          </p>
        </div>

        <div className="mt-12 grid lg:grid-cols-2 gap-8 items-stretch">
          {/* معرض فيسبوك — منشورات الصفحة الحقيقية */}
          <div className="rounded-3xl bg-[#1c232d] p-6">
            <div className="flex items-center gap-3 px-1 pb-4">
              <div className="grid place-items-center w-11 h-11 rounded-xl bg-[#0b121c] text-[#4ade80] shrink-0">
                <Facebook className="w-5 h-5" />
              </div>
              <div className="flex-1 text-center">
                <div className="text-sm text-white/55 font-semibold">معرض فيسبوك</div>
                <div className="text-base font-bold mt-0.5">منشورات الصفحة مباشرةً</div>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden bg-[#0b121c]">
              <iframe
                title="عيادة دكتور توم على فيسبوك"
                src={fbSrc}
                className="w-full"
                style={{ border: 0, height: 600 }}
                loading="lazy"
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
              />
            </div>
            <a href={FB_PAGE} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-white/10 text-white px-5 py-2.5 text-sm font-bold hover:bg-[#4ade80] hover:text-[#0b121c] transition w-full">
              <Facebook className="w-4 h-4" /> زيارة الصفحة
            </a>
          </div>

          {/* معرض تيك توك */}
          <div className="rounded-3xl bg-[#1c232d] p-6 flex flex-col">
            <div className="flex items-center gap-3 px-1 pb-4">
              <div className="grid place-items-center w-11 h-11 rounded-xl bg-[#0b121c] text-[#4ade80] shrink-0">
                <TikTokIcon className="w-5 h-5" />
              </div>
              <div className="flex-1 text-center">
                <div className="text-sm text-white/55 font-semibold">معرض تيك توك</div>
                <div className="text-base font-bold mt-0.5" dir="ltr">@drtompetclinic</div>
              </div>
            </div>

            <p className="mt-4 px-1 text-white/70 leading-8 text-center">
              شاهد أحدث مقاطعنا على تيك توك — من داخل العيادة ورعاية الأليف ولحظات طريفة.
            </p>

            <div className="mt-6 flex-1 grid place-items-center rounded-2xl bg-[#0b121c] p-8 text-center">
              <div>
                <div className="mx-auto grid place-items-center w-14 h-14 rounded-2xl bg-[#1c232d] text-[#4ade80] mb-4">
                  <TikTokIcon className="w-7 h-7" />
                </div>
                <p className="text-white/55 text-sm leading-7 max-w-xs">
                  لدمج الفيديوهات داخل الموقع مباشرةً يمكن إما ربط حساب تيك توك أو مشاركة روابط المقاطع.
                </p>
              </div>
            </div>

            <a href={TT} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-white/10 text-white px-5 py-3 text-sm font-bold hover:bg-[#4ade80] hover:text-[#0b121c] transition">
              <TikTokIcon className="w-5 h-5" /> شاهد على تيك توك
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}