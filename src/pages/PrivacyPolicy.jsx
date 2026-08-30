import Navbar from "@/components/drtom/Navbar";
import Footer from "@/components/drtom/Footer";
import { ShieldCheck } from "lucide-react";

const sections = [
  {
    h: "مقدمة",
    p: "تلتزم عيادة دكتور توم البيطرية المتقدمة بحماية خصوصية عملائها وزوار موقعها الإلكتروني. توضّح هذه السياسة كيفية جمعنا واستخدامنا وحمايتنا للبيانات الشخصية عند استخدامك لخدماتنا أو موقعنا.",
  },
  {
    h: "البيانات التي نجمعها",
    p: "قد نجمع بيانات مثل الاسم، رقم الهاتف، البريد الإلكتروني، عنوانك، وبيانات الحيوان الأليف (النوع، العمر، الحالة الصحية) عند حجز موعد أو التواصل معنا أو الاشتراك في خدماتنا.",
  },
  {
    h: "كيفية استخدامنا للبيانات",
    p: "نستخدم بياناتك لتأكيد وحجز المواعيد، تقديم الخدمات الطبية والاستشارية، التواصل بشأن العروض والخدمات، وتحسين تجربتك. لا نبيع بياناتك لأي طرف ثالث.",
  },
  {
    h: "مشاركة البيانات",
    p: "قد نشارك بياناتك مع مزوّدي serviços ضروريين لتقديم خدمتنا (مثل خدمات الرسائل أو الدفع) ضمن حدود الالتزام القانوني، ولا نمنحهم إذناً لاستخدامها لأغراض أخرى.",
  },
  {
    h: "حماية البيانات",
    p: "نتخذ تدابير أمنية فنية وتنظيمية مناسبة لحماية بياناتك من الوصول غير المصرّح به أو الفقدان أو التعديل، ونحدّد صلاحية الوصول لفريقنا المصرّح له فقط.",
  },
  {
    h: "حقوقك",
    p: "لك الحق في الوصول إلى بياناتك وتصحيحها أو طلب حذفها أو إيقاف معالجتها في أي وقت عبر التواصل معنا. يسري حذف البيانات ضمن القيود النظامية والقانونية.",
  },
  {
    h: "ملفات تعريف الارتباط (Cookies)",
    p: "يستخدم موقعنا ملفات تعريف الارتباط لتحسين تجربة التصفح وتحليل الأداء. يمكنك ضبط متصفحك للتحكم في هذه الملفات دون التأثير على الوصول للمحتوى الأساسي.",
  },
  {
    h: "التعديلات على السياسة",
    p: "قد نحدّث هذه السياسة من حين لآخر لتعكس التغييرات في خدماتنا أو متطلبات النظام. سيتم نشر أي تعديلات على هذه الصفحة مع تحديث تاريخ آخر مراجعة.",
  },
  {
    h: "التواصل",
    p: "لأي استفسار يتعلق بسياسة الخصوصية، تواصل معنا عبر الهاتف +966533399462 أو البريد الإلكتروني privacy@drtom-clinic.com.",
  },
];

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="py-16">
        <div className="mx-auto max-w-3xl px-4">
          <div className="text-center">
            <div className="mx-auto grid place-items-center w-16 h-16 rounded-2xl bg-secondary text-primary">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <h1 className="mt-4 text-3xl sm:text-4xl font-extrabold text-foreground">سياسة الخصوصية</h1>
            <p className="mt-2 text-sm text-muted-foreground">آخر تحديث: أغسطس 2026</p>
          </div>

          <div className="mt-10 space-y-6">
            {sections.map((s) => (
              <div key={s.h} className="rounded-2xl bg-white ring-1 ring-border shadow-sm p-6">
                <h2 className="text-lg font-extrabold text-primary">{s.h}</h2>
                <p className="mt-2 text-muted-foreground leading-8 text-sm">{s.p}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <a href="/" className="inline-flex items-center gap-2 rounded-full bg-primary text-white px-6 py-3 font-bold hover:bg-primary/90 transition">
              العودة للرئيسية
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}