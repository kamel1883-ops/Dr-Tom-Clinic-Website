import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/drtom/Navbar";
import Footer from "@/components/drtom/Footer";
import BlogCard from "@/components/drtom/BlogCard";
import { posts } from "@/data/blogPosts";

export default function Blog() {
  return (
    <div dir="rtl" className="min-h-screen bg-background font-body">
      <Navbar />
      <section className="bg-secondary/50 border-b border-border py-16">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <span className="inline-block rounded-full bg-brand text-brand-foreground text-sm font-bold px-4 py-1.5">
            مركز المعرفة
          </span>
          <h1 className="mt-4 text-3xl sm:text-4xl font-extrabold text-foreground">مدونة عيادة د. توم البيطرية</h1>
          <p className="mt-4 max-w-3xl mx-auto text-muted-foreground leading-8">
            مقالات علمية موثوقة عن فلسفة رعاية الحيوان، الأنظمة السعودية الصادرة من وزارة البيئة والمياه والزراعة،
            الطب الوقائي، التغذية، والطوارئ — بقلم فريقنا الطبي.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((p) => (
              <BlogCard key={p.slug} post={p} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link to="/" className="inline-flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all">
              <ArrowRight className="w-4 h-4" /> العودة إلى الصفحة الرئيسية
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}