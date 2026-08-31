import {
  Eye, Target, Compass, Heart, ShieldCheck, HandHeart, Syringe, Stethoscope,
  Microscope, Scissors, Bone, House, UserCog, Users, Sparkles, Activity, Clock,
  ShoppingBag, Siren, MessagesSquare, BedDouble, Phone, Mail, MapPin, CheckCircle2, Facebook,
} from "lucide-react";
import TikTokIcon from "@/components/drtom/TikTokIcon";
import { WhatsAppIcon } from "@/components/drtom/icons";

const vmg = [
  { icon: Eye, t: "رؤيتنا", d: "أن نكون العيادة البيطرية الرائدة في المملكة العربية السعودية، ومرجعاً موثوقاً في الرعاية الطبية المتقدمة للحيوانات الأليفة، مع دمج الترفيه برفقية عالية في تجربة فريدة." },
  { icon: Compass, t: "رسالتنا", d: "تقديم رعاية طبية بيطارية متكاملة وآمنة بأحدث الأجهزة وطاقم احترافي، والارتقاء بجودة حياة الأليف وعميلنا عبر خدمات طبية واستشارية وإيواء وتجميل وتسوق على مدار الساعة." },
  { icon: Target, t: "أهدافنا", d: "تحقيق الرفاهية المتكاملة لأليفنا، وبناء ثقة طويلة مع عملائنا، والمساهمة في نشر الوعي الصحي والترفيهي للحيوانات الأليفة ضمن مجتمع آمن ومستدام." },
];

const beliefs = [
  { icon: Heart, t: "نؤمن بأن أليفك أليفنا", d: "لذا نقدّم الأفضل دائماً دون أدنى تردد؛ لأن أليفك يستحق الاهتمام." },
  { icon: ShieldCheck, t: "نؤمن بأننا نستحق الثقة", d: "لأننا نهتم بجميع التفاصيل الطبية الدقيقة التي تجعلنا خيارك الأول، إضافة إلى الرفاهية العالية التي تصنع الاختلاف." },
  { icon: HandHeart, t: "نبذل قصارى جهدنا", d: "لنقوم بدورنا تجاه الحيوانات الأليفة؛ لأن أليفك أمانة يجب أن نعتني به ونحافظ عليه." },
];

const services = [
  { icon: Syringe, t: "التطعيمات", d: "تطعيمات أساسية وغير أساسية تناسب عمر أليفك وأسلوب حياته." },
  { icon: Stethoscope, t: "الطب العام", d: "فحوصات شاملة ووثائق السفر وعلاج الأمراض والإصابات العامة." },
  { icon: Bone, t: "الجراحة", d: "جراحات الأنسجة الرخوة والعظام والأسنان والأورام باستخدام معدات ألمانية مستوردة." },
  { icon: Microscope, t: "التشخيصات المتقدمة", d: "اختبارات الحساسية والجينات والأشعة والموجات فوق الصوتية وغيرها." },
  { icon: House, t: "فندق الأليفات", d: "غرف مخصصة توفر أقصى درجات الراحة والسلامة بمعايير AKC." },
  { icon: Scissors, t: "التجميل والسبا", d: "جلسات تجميل احترافية تشمل الاستحمام والقص وجلسات الاسترخاء." },
  { icon: ShieldCheck, t: "الرعاية الوقائية", d: "زرع الشرائح الإلكترونية وإزالة الديدان ومكافحة الطفيليات." },
];

const features = [
  { icon: UserCog, t: "طاقم طبي خبير" },
  { icon: Users, t: "فريق تمريض متخصص" },
  { icon: Sparkles, t: "قسم خاص بالترفيه" },
  { icon: Activity, t: "أجهزة طبية متقدمة" },
  { icon: Clock, t: "نعمل على مدار 24 ساعة" },
  { icon: ShoppingBag, t: "متجر لاحتياجات أليفك (24 ساعة)" },
  { icon: Siren, t: "نستقبل حالات الطوارئ (24 ساعة)" },
  { icon: MessagesSquare, t: "نستقبل استشاراتكم (24 ساعة)" },
  { icon: BedDouble, t: "استضافة طبية مقسمة حسب الحالات" },
];

const doctors = [
  "د. عبد الرحمن يسري", "د. محمد عنتر", "د. مروى مسعد", "د. ماير ميشيل", "د. عمر سنبل",
];

const FB = "https://www.facebook.com/p/عيادة-د-توم-البيطرية-المتقدمة-Dr-TOM-Pet-Clinic-100091919482521/";
const TT = "https://www.tiktok.com/@drtompetclinic";

function SectionTitle({ kicker, title }) {
  return (
    <div className="text-center">
      <span className="text-brand font-bold text-sm">{kicker}</span>
      <h2 className="mt-1 text-2xl sm:text-3xl font-extrabold text-foreground">{title}</h2>
      <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-brand" />
    </div>
  );
}

function Card({ children, className = "" }) {
  return <div className={`rounded-2xl bg-white ring-1 ring-border shadow-sm p-6 ${className}`}>{children}</div>;
}

export default function BrochureAr() {
  return (
    <div className="space-y-14">
      {/* About / Story */}
      <section>
        <SectionTitle kicker="من نحن" title="قصتنا" />
        <div className="mt-6 grid md:grid-cols-3 gap-5">
          <Card className="md:col-span-2">
            <p className="text-foreground/85 leading-8">
              بدأت عيادة دكتور توم البيطرية المتقدمة رحلتها بشكل احترافي، يتميز بالتكامل والابتكار؛ لتكون رائدةً في مجال الرعاية الطبية للحيوانات الأليفة ومنفردةً فيما يتعلق بالرفاهية العالية للأليف وعميلنا العزيز.
            </p>
            <p className="mt-3 text-muted-foreground leading-8">
              وفرنا في دكتور توم طاقم طبي احترافي يتناسب مع الأجهزة الطبية المتقدمة؛ لنقدم لأليفنا خدمة آمنة وعالية الجودة، واستكمالاً لقصتنا صنعنا لعميلنا وأليفه وسائل ترفيهية مميزة لنحقق الرفاهية المتكاملة.
            </p>
            <ul className="mt-5 grid sm:grid-cols-3 gap-3">
              {["طاقم طبي احترافي", "أجهزة طبية متقدمة", "رفاهية متكاملة"].map((t) => (
                <li key={t} className="flex items-center gap-2 rounded-xl bg-secondary/60 p-3 text-sm font-semibold text-foreground/85">
                  <CheckCircle2 className="w-5 h-5 text-brand shrink-0" /> {t}
                </li>
              ))}
            </ul>
          </Card>
          <Card className="bg-brand text-white flex flex-col justify-center text-center">
            <span className="text-brand-foreground/80 text-sm font-bold">شعارنا</span>
            <p className="mt-2 text-lg font-extrabold leading-relaxed">ملتقى الطب والترفيه</p>
            <p className="mt-2 text-white/85 text-sm leading-7">رعاية طبية ورفاهية متكاملة لأليفك على مدار الساعة.</p>
          </Card>
        </div>
      </section>

      {/* Vision / Mission / Goals */}
      <section>
        <SectionTitle kicker="قيمنا" title="رؤيتنا ورسالتنا وأهدافنا" />
        <div className="mt-6 grid md:grid-cols-3 gap-5">
          {vmg.map(({ icon: Icon, t, d }) => (
            <Card key={t} className="text-center">
              <div className="mx-auto grid place-items-center w-14 h-14 rounded-2xl bg-secondary text-primary">
                <Icon className="w-7 h-7" />
              </div>
              <h3 className="mt-4 text-lg font-extrabold text-foreground">{t}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-7">{d}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Beliefs */}
      <section className="rounded-3xl bg-brand text-white p-8">
        <h2 className="text-center text-2xl sm:text-3xl font-extrabold">قناعاتنا</h2>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {beliefs.map(({ icon: Icon, t, d }) => (
            <div key={t} className="text-center">
              <div className="mx-auto grid place-items-center w-14 h-14 rounded-full bg-white/15">
                <Icon className="w-7 h-7" />
              </div>
              <h3 className="mt-4 text-lg font-extrabold">{t}</h3>
              <p className="mt-2 text-white/85 text-sm leading-7">{d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section>
        <SectionTitle kicker="ما نقدمه" title="خدماتنا البيطرية" />
        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map(({ icon: Icon, t, d }) => (
            <Card key={t}>
              <div className="grid place-items-center w-12 h-12 rounded-xl bg-accent text-brand">
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="mt-4 text-base font-extrabold text-foreground">{t}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground leading-7">{d}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Features */}
      <section>
        <SectionTitle kicker="مميزاتنا" title="لماذا دكتور توم؟" />
        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map(({ icon: Icon, t }) => (
            <div key={t} className="flex items-center gap-3 rounded-2xl bg-white ring-1 ring-border p-4">
              <div className="grid place-items-center w-11 h-11 rounded-xl bg-primary text-white shrink-0">
                <Icon className="w-5 h-5" />
              </div>
              <span className="font-bold text-foreground text-sm">{t}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section>
        <SectionTitle kicker="فريقنا" title="أطباؤنا المتخصصون" />
        <div className="mt-6 grid grid-cols-2 md:grid-cols-5 gap-4">
          {doctors.map((n) => (
            <div key={n} className="rounded-2xl bg-white ring-1 ring-border p-4 text-center">
              <div className="mx-auto grid place-items-center w-14 h-14 rounded-full bg-secondary text-primary font-extrabold">
                {n.replace("د. ", "").charAt(0)}
              </div>
              <p className="mt-3 text-sm font-bold text-foreground">{n}</p>
              <p className="text-xs text-muted-foreground">طبيب بيطري</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section>
        <SectionTitle kicker="تواصل معنا" title="معلومات التواصل ومواعيد العمل" />
        <div className="mt-6 grid md:grid-cols-2 gap-5">
          <Card>
            <ul className="space-y-3">
              <li className="flex items-center gap-3"><Phone className="w-5 h-5 text-primary" /> <span dir="ltr" className="font-bold">+966 53 339 9462</span></li>
              <li className="flex items-center gap-3"><WhatsAppIcon className="w-5 h-5 text-brand" /> <span dir="ltr" className="font-bold">966533399462</span></li>
              <li className="flex items-center gap-3"><Mail className="w-5 h-5 text-primary" /> <span className="font-bold">hello@drtom-clinic.com</span></li>
              <li className="flex items-center gap-3"><MapPin className="w-5 h-5 text-brand" /> <span className="font-bold">الرياض، العقيق، المملكة العربية السعودية</span></li>
            </ul>
            <div className="mt-5 flex items-center gap-3">
              <a href={FB} target="_blank" rel="noopener noreferrer" className="grid place-items-center w-10 h-10 rounded-xl bg-primary text-white"><Facebook className="w-5 h-5" /></a>
              <a href={TT} target="_blank" rel="noopener noreferrer" className="grid place-items-center w-10 h-10 rounded-xl bg-primary text-white"><TikTokIcon className="w-5 h-5" /></a>
            </div>
          </Card>
          <Card>
            <h3 className="flex items-center gap-2 font-extrabold text-foreground"><Clock className="w-5 h-5 text-brand" /> مواعيد العمل</h3>
            <div className="mt-4 space-y-3">
              <div className="flex items-center justify-between rounded-xl bg-secondary/60 p-4">
                <span className="font-bold text-primary">على مدار الساعة</span>
                <span className="text-sm text-muted-foreground">يومياً (السبت إلى الخميس)</span>
              </div>
              <div className="flex items-center justify-between rounded-xl bg-secondary/60 p-4">
                <span className="font-bold text-brand">مغلق 4 ص – 4 ع</span>
                <span className="text-sm text-muted-foreground">الجمعة</span>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}