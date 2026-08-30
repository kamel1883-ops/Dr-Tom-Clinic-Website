import Navbar from "@/components/drtom/Navbar";
import Footer from "@/components/drtom/Footer";
import { RotateCcw } from "lucide-react";

const sections = [
  {
    h: "مقدمة",
    p: "تسري سياسة الاسترداد والاسترجاع الخاصة بعيادة دكتور توم البيطرية المتقدمة على الخدمات والمنتجات المقدّمة عبر الموقع أو داخل العيادة، وهي توضّح شروط وآلية الاسترداد والتاسترجاع.",
  },
  {
    h: "الخدمات الطبية والاستشارية",
    p: "الخدمات الطبية (الكشف، الجراحة، التحاليل، الاستشارات) غير قابلة للاسترداد بعد تنفيذها أو حضور الموعد. في حال إلغاء الموعد قبل 24 ساعة من الموعد المحدد، يتم استرداد أي مبالغال مدفوعة مقدماً بالكامل.",
  },
  {
    h: "الاستضافة والإيواء",
    p: "خدمة الإيواء والاستضافة الطبية قابلة للاسترداد نسبة من المبلغ المدفوع مقدماً عند الإلغاء قبل بدء فترة الإيواء بـ 48 ساعة. لا يتم استرداد المبالغ بعد بدء فترة الإيواء.",
  },
  {
    h: "القرومنق والتجميل",
    p: "خدمات القرومنق (الاستحمام والحلاقة) قابلة للاسترداد الكامل عند الإلغاء قبل 12 ساعة من الموعد. بعد ذلك لا يوجد استرداد، ويمكن إعادة الجدولة مرة واحدة دون رسوم.",
  },
  {
    h: "المنتجات والمتجر",
    p: "المنتجات المباعة في متجر العيادة قابلة للاسترداد أو الاستبدال خلال 7 أيام من تاريخ الشراء، بشرط أن تكون في حالتها الأصلية وغير مستخدمة وفي عبوتها الأصلية مع إبراز فاتورة الشراء.",
  },
  {
    h: "المنتجات غير القابلة للاسترداد",
    p: "لا تشمل سياسة الاسترداد: الأدوية البيطرية الموصوفة، الأغذية المفتوحة، المستلزمات المستخدمة، والخدمات المكتملة أو المنفّذة فعلاً.",
  },
  {
    h: "آلية الاسترداد",
    p: "يتم الاسترداد خلال 7 إلى 14 يوم عمل من تاريخ الموافقة على طلب الاسترداد، وعبر نفس وسيلة الدفع المستخدمة في الدفع، أو تحويل بنكي حسب الموقع.",
  },
  {
    h: "طرق تقديم طلب الاسترداد",
    p: "للتقدّم بطلب استرداد أو استرجاع، يرجى التواصل معنا عبر الهاتف +966533399462 أو البريد الإلكتروني refunds@drtom-clinic.com مع إرفاق رقم الطلب أو الفاتورة وسبب الطلب.",
  },
  {
    h: "التعديلات على السياسة",
    p: "نحتفظ بحق تعديل هذه السياسة في أي وقت، وتسري التعديلات فور نشرها على هذه الصفحة. حضورك أو استخدامك لخدماتنا بعد التعديل يعتبر موافقة على السياسة المعدّلة.",
  },
];

export default function RefundPolicy() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="py-16">
        <div className="mx-auto max-w-3xl px-4">
          <div className="text-center">
            <div className="mx-auto grid place-items-center w-16 h-16 rounded-2xl bg-secondary text-primary">
              <RotateCcw className="w-8 h-8" />
            </div>
            <h1 className="mt-4 text-3xl sm:text-4xl font-extrabold text-foreground">سياسة الاسترداد</h1>
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