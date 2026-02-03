/*
 * DESIGN: Dark Glass Morphism - Home Page
 * - Hero section with mascot
 * - YouTube videos section
 * - Footer with social links
 */

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import YouTubeSection from "@/components/YouTubeSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <YouTubeSection />
        <Footer />
      </main>
    </div>
  );
}
