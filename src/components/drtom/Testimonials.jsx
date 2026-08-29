import { Star, Quote, Pencil } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import { Button } from "@/components/ui/button";

const REVIEW_URL = "https://search.google.com/local/writereview?placeid=ChIJJbtk4g_jLj4ROSJCxFxQYeo";

export default function Testimonials() {
  const { isArabic } = useLanguage();

  const reviews = isArabic
    ? [
        {
          name: "Toshah A",
          text: "أخذت حبيبي ماكس اليوم لموعده في التجميل، ولم أكن أكثر سعادة بالنتيجة. نأتي هنا منذ قرابة 3 سنوات، ولا يزال أفضل مكان للتجميل وجدناه.",
        },
        {
          name: "Raoya M",
          text: "تجربة رائعة مع كِنت! ✨ قام بجلسة تجميل كاملة لقطتي، وأكثر ما أعجبني دقته ونظافته، والأهم أنه كان لطيفًا ورقيقًا مع قطتي.",
        },
        {
          name: "T",
          text: "يصعب وصف امتناني للدكتور ماير؛ ليس فقط طبيبًا بيطريًا بالغ المهارة والمعرفة، بل أحد أكثر الأطباء رحمة ولطفًا وصدقًا قابلتُه على الإطلاق.",
        },
      ]
    : [
        {
          name: "Toshah A",
          text: "I took my lovely boy Max for his grooming appointment today, and I couldn't be happier with the results. We've been coming here for almost 3 years, and it continues to be the best grooming place we've found.",
        },
        {
          name: "Raoya M",
          text: "I had a wonderful experience with Kent! ✨ He did a full grooming session for my cat, and I couldn't be happier with the results. His work is incredibly precise and clean, and most importantly, he was very gentle and kind with my cat.",
        },
        {
          name: "T",
          text: "It is difficult to put into words how grateful I am to Dr. Mayer. He is not only an exceptionally skilled and knowledgeable veterinarian, but also one of the most compassionate, kind-hearted, and genuine doctors I have ever met.",
        },
      ];

  return (
    <section id="testimonials" className="py-20 bg-secondary/50">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center">
          <span className="text-primary font-bold">{isArabic ? "آراء عملائنا" : "Client reviews"}</span>
          <h2 className="mt-2 text-3xl font-extrabold text-foreground">{isArabic ? "نفتخر بآراء عملائنا" : "We value our clients' feedback"}</h2>
          <a href="https://www.google.com/maps/place/dr.+tom+pet+clinic/data=!4m7!3m6!1s0x3e2ee30fe264bb25:0xea61505cc4422239!8m2!3d24.7639613!4d46.6242536!16s%2Fg%2F11sjcg2dc8!19sChIJJbtk4g_jLj4ROSJCxFxQYeo?hl=ar" target="_blank" rel="noreferrer" className="mt-3 inline-block text-sm text-primary hover:underline">
            {isArabic ? "مراجعات Google Maps • 4.3 من 755 تقييم" : "Google Maps reviews • 4.3 from 755 ratings"}
          </a>
        </div>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((r) => (
            <div key={r.name} className="relative rounded-3xl bg-white border border-border p-6 shadow-sm flex flex-col">
              <Quote className="absolute top-5 left-5 w-8 h-8 text-primary/15" />
              <div className="flex gap-1 text-amber-400 mb-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground leading-7 flex-1">{r.text}</p>
              <div className="mt-5 flex items-center gap-3">
                <div className="grid place-items-center w-10 h-10 rounded-full bg-primary text-white font-bold text-sm">{r.name.charAt(0)}</div>
                <span className="font-bold text-foreground text-sm">{r.name}</span>
              </div>
            </div>
          ))}

          {/* Invitation card — encourage customers to leave a review */}
          <div className="relative rounded-3xl bg-gradient-to-br from-primary to-brand text-white border border-primary p-6 shadow-sm flex flex-col items-center justify-center text-center">
            <div className="grid place-items-center w-14 h-14 rounded-full bg-white/15 mb-4">
              <Pencil className="w-7 h-7" />
            </div>
            <h3 className="text-lg font-extrabold">{isArabic ? "شاركنا تجربتك" : "Share your experience"}</h3>
            <p className="mt-2 text-sm text-white/85 leading-7">{isArabic ? "سعداء دائمًا بملاحظاتك. اترك تقييمك على Google وادعم عيادة دكتور توم." : "We'd love to hear from you. Leave your review on Google and support Dr. Tom's clinic."}</p>
            <Button asChild variant="secondary" className="mt-5 bg-white text-primary hover:bg-white/90">
              <a href={REVIEW_URL} target="_blank" rel="noreferrer">{isArabic ? "اكتب تقييمك الآن" : "Write your review"}</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}