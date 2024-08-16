import { Button } from "@/components/ui/button";
import { Navbar } from "../_components/Navbar";
import { Hero } from "./Hero";
import { Testimonials } from "./Testimonials";
import { Footer } from "./Footer";

export default function LandingPage() {
  return (
    <div className="h-full">
      <Navbar />
      <Hero />

      <Testimonials />

      <div className="w-full flex items-center justify-center mt-6">
        <Button variant="blue">Sign in here →</Button>
      </div>
      <p className="text-center text-sm mt-4 font-medium bg-gradient-to-r from-blue-600 via-pink-500 to-indigo-400 bg-clip-text">
        Sign in to experience our newest technology
      </p>

      <Footer />
    </div>
  );
}
