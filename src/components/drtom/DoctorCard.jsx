export default function DoctorCard({ name, img, pos, teamImg }) {
  return (
    <div className="group flex flex-col items-center text-center">
      {/* إطار دائري إبداعي: قوسان أزرق وأخضر بفراغين */}
      <div
        className="relative w-[190px] h-[190px] rounded-full p-[6px] transition-transform duration-300 group-hover:scale-[1.04]"
        style={{
          background:
            "conic-gradient(from 200deg, hsl(var(--brand)) 0deg 160deg, transparent 160deg 182deg, hsl(var(--primary)) 182deg 342deg, transparent 342deg 360deg)",
        }}
      >
        <div className="w-full h-full rounded-full bg-white p-[5px]">
          <div className="w-full h-full rounded-full overflow-hidden bg-white">
            {img ? (
              <img
                src={img}
                alt={name}
                className="w-full h-full object-cover scale-[1.45] origin-center"
              />
            ) : (
              <div
                className="w-full h-full"
                style={{
                  backgroundImage: `url(${teamImg})`,
                  backgroundSize: "500% 165%",
                  backgroundPosition: pos,
                  backgroundRepeat: "no-repeat",
                }}
                aria-label={name}
              />
            )}
          </div>
        </div>
      </div>

      <h3 className="mt-5 text-lg font-extrabold text-foreground">{name}</h3>
      <span className="mt-1 inline-block rounded-full bg-secondary text-primary text-xs font-bold px-3 py-1">
        طبيب بيطري
      </span>
    </div>
  );
}