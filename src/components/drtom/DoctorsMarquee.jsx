import DoctorCard from "@/components/drtom/DoctorCard";

export default function DoctorsMarquee({ doctors, isArabic }) {
  const cycleDoctors = [...doctors, doctors[0]];
  const repeatedDoctors = [...cycleDoctors, ...cycleDoctors];

  return (
    <div className="relative mt-12 h-[280px] overflow-hidden" aria-label={isArabic ? "أطباؤنا" : "Our doctors"}>
      <div dir="ltr" className="absolute left-0 top-0 flex w-max animate-[doctor-marquee_18s_linear_infinite]">
        {repeatedDoctors.map(([names, img], index) => (
          <div dir={isArabic ? "rtl" : "ltr"} key={`${img}-${index}`} className="mr-10 w-[210px] shrink-0">
            <DoctorCard name={names[isArabic ? 0 : 1]} img={img} />
          </div>
        ))}
      </div>
    </div>
  );
}