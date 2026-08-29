import DoctorCard from "@/components/drtom/DoctorCard";

export default function DoctorsMarquee({ doctors, isArabic }) {
  const repeatedDoctors = [...doctors, ...doctors, ...doctors];

  return (
    <div className="mt-12 overflow-hidden" aria-label={isArabic ? "أطباؤنا" : "Our doctors"}>
      <div className="flex w-max gap-10 animate-[doctor-marquee_18s_linear_infinite]">
        {repeatedDoctors.map(([names, img], index) => (
          <div key={`${img}-${index}`} className="w-[210px] shrink-0">
            <DoctorCard name={names[isArabic ? 0 : 1]} img={img} />
          </div>
        ))}
      </div>
    </div>
  );
}