import { Link, useParams } from "react-router-dom";
import { ArrowRight, Clock, CalendarDays } from "lucide-react";
import Navbar from "@/components/drtom/Navbar";
import Footer from "@/components/drtom/Footer";
import BlogCard from "@/components/drtom/BlogCard";
import { Image } from "@/components/ui/image";
import { posts, getPost } from "@/data/blogPosts";

export default function BlogPost() {
  const { slug } = useParams();
  const post = getPost(slug);

  if (!post) {
    return (
      <div dir="rtl" className="min-h-screen bg-background font-body">
        <Navbar />
        <div className="mx-auto max-w-3xl px-4 py-28 text-center">
          <h1 className="text-2xl font-extrabold text-foreground">لم يتم العثور على المقال</h1>
          <Link to="/blog" className="mt-6 inline-flex items-center gap-2 text-primary font-bold">
            <ArrowRight className="w-4 h-4" /> رجوع إلى المدونة
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const related = posts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <div dir="rtl" className="min-h-screen bg-background font-body">
      <Navbar />

      <article className="mx-auto max-w-3xl px-4 py-14">
        <Link to="/blog" className="inline-flex items-center gap-2 text-primary font-bold text-sm hover:gap-3 transition-all">
          <ArrowRight className="w-4 h-4" /> كل المقالات
        </Link>

        <span className="mt-6 inline-block rounded-full bg-primary text-primary-foreground text-xs font-bold px-3 py-1">
          {post.cat}
        </span>
        <h1 className="mt-4 text-3xl sm:text-4xl font-extrabold text-foreground leading-relaxed">{post.title}</h1>
        <div className="mt-4 flex items-center gap-5 text-sm text-muted-foreground font-semibold">
          <span className="inline-flex items-center gap-1.5"><Clock className="w-4 h-4" /> {post.read}</span>
          <span className="inline-flex items-center gap-1.5"><CalendarDays className="w-4 h-4" /> {post.date}</span>
        </div>

        <Image src={post.img} fittingType="fill" alt={post.title} className="mt-8 w-full h-72 rounded-3xl overflow-hidden" />

        <p className="mt-8 text-lg text-foreground leading-9 border-r-4 border-brand pr-4 font-semibold">
          {post.excerpt}
        </p>

        <div className="mt-10 space-y-8">
          {post.body.map((s) => (
            <div key={s.h}>
              <h2 className="text-xl font-extrabold text-primary">{s.h}</h2>
              <p className="mt-3 text-foreground/85 leading-9">{s.p}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-3xl bg-secondary/60 border border-border p-7 text-center">
          <h3 className="text-xl font-extrabold text-foreground">هل يحتاج أليفك استشارة؟</h3>
          <p className="mt-2 text-muted-foreground leading-8">
            فريقنا الطبي متاح على مدار الساعة في الرياض — العقيق.
          </p>
          <Link
            to="/#booking"
            className="mt-5 inline-flex items-center justify-center rounded-full bg-primary text-primary-foreground font-bold px-6 py-3 hover:bg-primary/90 transition"
          >
            احجز موعداً الآن
          </Link>
        </div>
      </article>

      <section className="py-14 bg-secondary/40">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-2xl font-extrabold text-foreground text-center">مقالات ذات صلة</h2>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {related.map((p) => (
              <BlogCard key={p.slug} post={p} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}