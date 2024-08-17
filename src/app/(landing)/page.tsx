import { Button } from "@/components/ui/button";
import { Navbar } from "../_components/Navbar";
import { Hero } from "./Hero";
import { Testimonials } from "./Testimonials";
import { Footer } from "./Footer";
import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="h-full">
      <Hero />
      <Testimonials />
      <Footer />
    </div>
  );
}
