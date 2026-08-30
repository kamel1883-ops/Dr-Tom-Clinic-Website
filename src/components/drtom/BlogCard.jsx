import { Link } from "react-router-dom";
import { ArrowLeft, Clock } from "lucide-react";
import { Image } from "@/components/ui/image";

export default function BlogCard({ post }) {
  return (
    <Link
      to={`/blog/${post.slug}`}
      className="group flex flex-col rounded-3xl overflow-hidden border border-border bg-white shadow-sm hover:shadow-xl transition"
    >
      <div className="relative">
        <Image src={post.img} fittingType="fill" alt={post.title} className="w-full h-48" />
        <span className="absolute top-4 right-4 rounded-full bg-primary text-primary-foreground text-xs font-bold px-3 py-1">
          {post.cat}
        </span>
      </div>
      <div className="flex-1 flex flex-col p-6">
        <h3 className="text-lg font-extrabold text-foreground leading-8 group-hover:text-primary transition">
          {post.title}
        </h3>
        <p className="mt-2 flex-1 text-sm text-muted-foreground leading-7">{post.excerpt}</p>
        <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground font-semibold">
          <span className="inline-flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /> {post.read}</span>
          <span>{post.date}</span>
        </div>
        <span className="mt-4 inline-flex items-center gap-2 text-primary font-bold text-sm group-hover:gap-3 transition-all">
          اقرأ المقال <ArrowLeft className="w-4 h-4" />
        </span>
      </div>
    </Link>
  );
}