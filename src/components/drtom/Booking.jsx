import { useState } from "react";
import { CalendarCheck, Send, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const selectCls = "flex h-10 w-full rounded-md border border-input bg-white px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary";

export default function Booking() {
  const [sent, setSent] = useState(false);
  const onSubmit = (e) => { e.preventDefault(); setSent(true); };

  return (
    <section id="booking" className="py-20 bg-primary text-white">
      <div className="mx-auto max-w-3xl px-4">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold flex items-center justify-center gap-2">
            <CalendarCheck className="w-7 h-7" /> احجز موعداً.. ونوّرنا في عيادتنا
          </h2>
          <p className="mt-2 text-white/85">عبّي بياناتك وسيتواصل معك فريقنا لتأكيد الموعد</p>
        </div>

        {sent ? (
          <div className="mt-8 rounded-3xl bg-white text-foreground p-8 text-center shadow-xl">
            <CheckCircle2 className="mx-auto w-14 h-14 text-primary" />
            <h3 className="mt-4 text-2xl font-extrabold">تم استلام طلب الحجز بنجاح</h3>
            <p className="mt-2 text-muted-foreground">سيتواصل معك فريق دكتور توم في أقرب وقت لتأكيد الموعد.</p>
            <Button onClick={() => setSent(false)} className="mt-6">حجز موعد آخر</Button>
          </div>
        ) : (
          <form onSubmit={onSubmit} className="mt-8 grid sm:grid-cols-2 gap-4 rounded-3xl bg-white/10 p-6 backdrop-blur">
            <div className="space-y-1.5">
              <Label htmlFor="name">اسم العميل</Label>
              <Input id="name" name="name" required placeholder="الاسم الكامل" className="bg-white text-foreground" />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="phone">رقم الجوال</Label>
              <Input id="phone" name="phone" required placeholder="05xxxxxxxx" className="bg-white text-foreground" />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="email">الإيميل</Label>
              <Input id="email" name="email" type="email" placeholder="example@mail.com" className="bg-white text-foreground" />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="pet">اسم الأليف</Label>
              <Input id="pet" name="pet" placeholder="اسم الحيوان" className="bg-white text-foreground" />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="type">نوع الأليف</Label>
              <select id="type" name="type" defaultValue="كلب" className={selectCls}>
                <option value="قط">قط</option>
                <option value="كلب">كلب</option>
                <option value="نوع آخر">نوع آخر</option>
              </select>
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="goal">نوع الزيارة</Label>
              <select id="goal" name="goal" defaultValue="زيارة عيادتنا" className={selectCls}>
                <option value="زيارة عيادتنا">لزيارتك عيادتنا</option>
                <option value="استشارة أون لاين">استشارة أون لاين</option>
                <option value="زيارتنا لك">لزيارتنا لك</option>
              </select>
            </div>
            <div className="sm:col-span-2">
              <Button type="submit" size="lg" className="w-full gap-2 bg-brand text-white hover:bg-brand/90">
                <Send className="w-4 h-4" /> تواصل معنا
              </Button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}