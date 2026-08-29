import DoctorCard from "@/components/drtom/DoctorCard";

export default function DoctorsMarquee({ doctors, isArabic }) {
  const cycleDoctors = [...doctors, doctors[0]];
  const repeatedDoctors = [...cycleDoctors, ...cycleDoctors];

  return (
    <div className="mt-12 overflow-hidden" aria-label={isArabic ? "أطباؤنا" : "Our doctors"}>
      <div className="flex w-max animate-[doctor-marquee_18s_linear_infinite]">
        {repeatedDoctors.map(([names, img], index) => (
          <div key={`${img}-${index}`} className="mr-10 w-[210px] shrink-0">
            <DoctorCard name={names[isArabic ? 0 : 1]} img={img} />
          </div>
        ))}
      </div>
    </div>
  );
}