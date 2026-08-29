import Navbar from "@/components/drtom/Navbar";
import Hero from "@/components/drtom/Hero";
import Story from "@/components/drtom/Story";
import Vmg from "@/components/drtom/Vmg";
import Services from "@/components/drtom/Services";
import Team from "@/components/drtom/Team";
import Beliefs from "@/components/drtom/Beliefs";
import Features from "@/components/drtom/Features";
import Gallery from "@/components/drtom/Gallery";
import BlogTeaser from "@/components/drtom/BlogTeaser";
import Testimonials from "@/components/drtom/Testimonials";
import Booking from "@/components/drtom/Booking";
import Contact from "@/components/drtom/Contact";
import Footer from "@/components/drtom/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Story />
        <Vmg />
        <Services />
        <Team />
        <Beliefs />
        <Features />
        <Gallery />
        <BlogTeaser />
        <Testimonials />
        <Booking />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}