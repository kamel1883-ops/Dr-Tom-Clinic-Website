import { Play } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

const videos = [
  {
    src: "https://media.base44.com/videos/public/6a92a06f32c39b0226f9e8c3/9dbf3fb5f_operationRoomDx8kt7o0.mov",
    ar: ["غرفة العمليات", "تعرّف على تجهيزات الرعاية الطبية المتقدمة في العيادة."],
    en: ["Operating room", "Explore the clinic’s advanced medical-care facilities."],
  },
  {
    src: "https://media.base44.com/videos/public/6a92a06f32c39b0226f9e8c3/8c317edd5_clinicPromoVidC31MwqqQ.mp4",
    ar: ["جولة في عيادة دكتور توم", "شاهد أجواء العيادة والخدمات المتكاملة لأليفك."],
    en: ["A tour of Dr. Tom Clinic", "See the clinic atmosphere and integrated pet-care services."],
  },
];

export default function ClinicVideos() {
  const { isArabic } = useLanguage();

  return (
    <section id="videos" className="bg-background py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center">
          <span className="inline-flex items-center gap-2 text-primary font-bold"><Play className="w-4 h-4" />{isArabic ? "فيديوهات العيادة" : "Clinic videos"}</span>
          <h2 className="mt-2 text-3xl font-extrabold text-foreground">{isArabic ? "شاهد عيادتنا عن قرب" : "See our clinic up close"}</h2>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {videos.map((video) => {
            const [title, description] = video[isArabic ? "ar" : "en"];
            return <article key={video.src} className="overflow-hidden rounded-3xl border border-border bg-card shadow-sm">
              <video controls preload="metadata" className="block aspect-video w-full bg-muted" aria-label={title}><source src={video.src} /></video>
              <div className="p-5"><h3 className="font-extrabold text-foreground text-lg">{title}</h3><p className="mt-1 text-sm leading-7 text-muted-foreground">{description}</p></div>
            </article>;
          })}
        </div>
      </div>
    </section>
  );
}