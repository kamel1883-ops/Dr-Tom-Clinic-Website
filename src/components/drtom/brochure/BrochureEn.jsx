import {
  Eye, Target, Compass, Heart, ShieldCheck, HandHeart, Syringe, Stethoscope,
  Microscope, Scissors, Bone, House, UserCog, Users, Sparkles, Activity, Clock,
  ShoppingBag, Siren, MessagesSquare, BedDouble, Phone, Mail, MapPin, CheckCircle2, Facebook,
} from "lucide-react";
import TikTokIcon from "@/components/drtom/TikTokIcon";
import { WhatsAppIcon } from "@/components/drtom/icons";
import { Image } from "@/components/ui/image";

const STORY_IMG = "https://media.base44.com/images/public/6a92a06f32c39b0226f9e8c3/50b83f965_generated_image.png";

const vmg = [
  { icon: Eye, t: "Our Vision", d: "To be the leading veterinary clinic in the Kingdom of Saudi Arabia and a trusted reference in advanced pet medical care, blending recreation with refined hospitality in a unique experience." },
  { icon: Compass, t: "Our Mission", d: "To deliver comprehensive, safe veterinary care using the latest equipment and a professional team, elevating the quality of life of pets and clients through round-the-clock medical, consultative, boarding, grooming and retail services." },
  { icon: Target, t: "Our Goals", d: "To achieve complete well-being for our pets, build lasting trust with our clients, and promote health and recreational awareness for pets within a safe and sustainable community." },
];

const beliefs = [
  { icon: Heart, t: "We believe your pet is our pet", d: "That is why we always give our best without hesitation, because your pet deserves genuine care." },
  { icon: ShieldCheck, t: "We believe we earn trust", d: "Because we attend to every precise medical detail that makes us your first choice, alongside the high well-being that makes the difference." },
  { icon: HandHeart, t: "We give our utmost", d: "To fulfill our duty towards pets, because your pet is an trust we protect and care for." },
];

const services = [
  { icon: Syringe, t: "Vaccinations", d: "Core and non-core vaccinations tailored to your pet's age and lifestyle." },
  { icon: Stethoscope, t: "General Medicine", d: "Comprehensive exams, travel documents, and treatment of general diseases and injuries." },
  { icon: Bone, t: "Surgery", d: "Soft-tissue, orthopedic, dental and tumor surgery using imported German equipment." },
  { icon: Microscope, t: "Advanced Diagnostics", d: "Allergy and genetic testing, imaging, ultrasound and more." },
  { icon: House, t: "Pet Hotel", d: "Dedicated rooms delivering maximum comfort and safety to AKC standards." },
  { icon: Scissors, t: "Grooming & Spa", d: "Professional grooming sessions including bathing, trimming and relaxation." },
  { icon: ShieldCheck, t: "Preventive Care", d: "Microchipping, deworming and parasite control." },
];

const features = [
  { icon: UserCog, t: "Expert medical team" },
  { icon: Users, t: "Specialized nursing team" },
  { icon: Sparkles, t: "Dedicated recreation section" },
  { icon: Activity, t: "Advanced medical equipment" },
  { icon: Clock, t: "Open 24 hours" },
  { icon: ShoppingBag, t: "Pet supplies store (24h)" },
  { icon: Siren, t: "Emergency cases (24h)" },
  { icon: MessagesSquare, t: "Consultations (24h)" },
  { icon: BedDouble, t: "Medical boarding by case type" },
];

const doctors = ["Dr. Abdelrahman Yousri", "Dr. Mohamed Antar", "Dr. Marwa Masad", "Dr. Mair Michel", "Dr. Omar Sanbal"];

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

export default function BrochureEn() {
  return (
    <div className="space-y-14">
      <section>
        <SectionTitle kicker="Who We Are" title="Our Story" />
        <div className="mt-6 grid md:grid-cols-3 gap-5">
          <Card className="md:col-span-2">
            <p className="text-foreground/85 leading-8">
              Dr. TOM Advanced Veterinary Clinic began its journey with a professional approach defined by integration and innovation — to lead in pet medical care and stand apart in delivering elevated well-being for both pets and clients.
            </p>
            <p className="mt-3 text-muted-foreground leading-8">
              We brought together a professional medical team matched with advanced medical equipment to provide safe, high-quality care. Completing our story, we created distinctive recreational amenities to deliver complete well-being for our clients and their pets.
            </p>
            <ul className="mt-5 grid sm:grid-cols-3 gap-3">
              {["Professional team", "Advanced equipment", "Complete well-being"].map((t) => (
                <li key={t} className="flex items-center gap-2 rounded-xl bg-secondary/60 p-3 text-sm font-semibold text-foreground/85">
                  <CheckCircle2 className="w-5 h-5 text-brand shrink-0" /> {t}
                </li>
              ))}
            </ul>
          </Card>
          <div className="relative overflow-hidden rounded-2xl ring-1 ring-border shadow-sm min-h-[260px]">
            <Image src={STORY_IMG} fittingType="fill" focalPointX={0.5} focalPointY={0.4} className="absolute inset-0 w-full h-full" alt="Dr. TOM clinic" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/85 to-transparent" />
            <div className="absolute bottom-0 inset-x-0 p-5 text-white text-center">
              <span className="text-brand text-xs font-bold">Our Motto</span>
              <p className="mt-1 text-lg font-extrabold leading-relaxed">Where Medicine Meets Joy</p>
              <p className="mt-1 text-white/85 text-sm leading-7">Round-the-clock, complete medical care and well-being for your pet.</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <SectionTitle kicker="Our Values" title="Vision, Mission & Goals" />
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

      <section className="rounded-3xl bg-brand text-white p-8">
        <h2 className="text-center text-2xl sm:text-3xl font-extrabold">Our Beliefs</h2>
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

      <section>
        <SectionTitle kicker="What We Offer" title="Our Veterinary Services" />
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

      <section>
        <SectionTitle kicker="Why Us" title="Why Dr. TOM?" />
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

      <section>
        <SectionTitle kicker="Our Team" title="Our Specialist Doctors" />
        <div className="mt-6 grid grid-cols-2 md:grid-cols-5 gap-4">
          {doctors.map((n) => (
            <div key={n} className="rounded-2xl bg-white ring-1 ring-border p-4 text-center">
              <div className="mx-auto grid place-items-center w-14 h-14 rounded-full bg-secondary text-primary font-extrabold">
                {n.replace("Dr. ", "").charAt(0)}
              </div>
              <p className="mt-3 text-sm font-bold text-foreground">{n}</p>
              <p className="text-xs text-muted-foreground">Veterinarian</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <SectionTitle kicker="Get In Touch" title="Contact & Working Hours" />
        <div className="mt-6 grid md:grid-cols-2 gap-5">
          <Card>
            <ul className="space-y-3">
              <li className="flex items-center gap-3"><Phone className="w-5 h-5 text-primary" /> <span dir="ltr" className="font-bold">+966 53 339 9462</span></li>
              <li className="flex items-center gap-3"><WhatsAppIcon className="w-5 h-5 text-brand" /> <span dir="ltr" className="font-bold">966533399462</span></li>
              <li className="flex items-center gap-3"><Mail className="w-5 h-5 text-primary" /> <span className="font-bold">hello@drtom-clinic.com</span></li>
              <li className="flex items-center gap-3"><MapPin className="w-5 h-5 text-brand" /> <span className="font-bold">Al-Aqiq, Riyadh, Saudi Arabia</span></li>
            </ul>
            <div className="mt-5 flex items-center gap-3">
              <a href={FB} target="_blank" rel="noopener noreferrer" className="grid place-items-center w-10 h-10 rounded-xl bg-primary text-white"><Facebook className="w-5 h-5" /></a>
              <a href={TT} target="_blank" rel="noopener noreferrer" className="grid place-items-center w-10 h-10 rounded-xl bg-primary text-white"><TikTokIcon className="w-5 h-5" /></a>
            </div>
          </Card>
          <Card>
            <h3 className="flex items-center gap-2 font-extrabold text-foreground"><Clock className="w-5 h-5 text-brand" /> Working Hours</h3>
            <div className="mt-4 space-y-3">
              <div className="flex items-center justify-between rounded-xl bg-secondary/60 p-4">
                <span className="font-bold text-primary">Open 24 hours</span>
                <span className="text-sm text-muted-foreground">Daily (Sat – Thu)</span>
              </div>
              <div className="flex items-center justify-between rounded-xl bg-secondary/60 p-4">
                <span className="font-bold text-brand">Closed 4 AM – 4 PM</span>
                <span className="text-sm text-muted-foreground">Friday</span>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}