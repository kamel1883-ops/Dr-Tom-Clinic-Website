import {
  UserCog, Users, Sparkles, Activity, Clock, ShoppingBag, Siren, MessagesSquare, BedDouble,
} from "lucide-react";

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

export default function Features() {
  return (
    <section id="features" className="py-20 bg-secondary/50">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center">
          <span className="text-primary font-bold">مميزاتنا</span>
          <h2 className="mt-2 text-3xl font-extrabold text-foreground">لماذا دكتور توم؟</h2>
        </div>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map(({ icon: Icon, t }) => (
            <div key={t} className="flex items-center gap-4 rounded-2xl bg-white border border-border p-4 hover:shadow-md hover:border-primary/40 transition">
              <div className="grid place-items-center w-12 h-12 rounded-xl bg-primary text-white shrink-0">
                <Icon className="w-6 h-6" />
              </div>
              <span className="font-bold text-foreground text-sm leading-6">{t}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}