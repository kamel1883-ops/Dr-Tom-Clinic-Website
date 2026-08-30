import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import BlogCard from "@/components/drtom/BlogCard";
import { posts } from "@/data/blogPosts";

export default function BlogTeaser() {
  return (
    <section id="blog" className="py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center">
          <span className="text-primary font-bold">المقالات</span>
          <h2 className="mt-2 text-3xl font-extrabold text-foreground">أليفك هو أليفنا.. لذا تثقّف معنا</h2>
          <p className="mt-3 max-w-2xl mx-auto text-muted-foreground leading-8">
            من فلسفة رعاية الحيوان إلى أنظمة وزارة البيئة والمياه والزراعة والطب الوقائي — محتوى موثوق من فريقنا الطبي.
          </p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.slice(0, 3).map((p) => (
            <BlogCard key={p.slug} post={p} />
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground font-bold px-6 py-3 hover:bg-primary/90 transition"
          >
            تصفّح كل المقالات <ArrowLeft className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}