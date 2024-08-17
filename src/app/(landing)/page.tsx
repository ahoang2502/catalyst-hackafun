import { AfterTestimonials } from "./AfterTestimonials";
import { Footer } from "./Footer";
import { Hero } from "./Hero";
import { Testimonials } from "./Testimonials";

export default function LandingPage() {
  return (
    <div className="h-full">
      <Hero />
      <Testimonials />
      <AfterTestimonials />
      <Footer />
    </div>
  );
}
