import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import AboutSection from "@/components/home/AboutSection";
import Services from "@/components/home/Services";
import ProjectGallery from "@/components/projects/ProjectGallery";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

export default function Home() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <Hero />
      
      <AboutSection />
      
      <Services />

      {/* Recent Projects Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="max-w-2xl">
              <span className="text-accent font-medium tracking-widest uppercase text-sm mb-2 block">{t("projects.badge")}</span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary">{t("projects.title")}</h2>
            </div>
            <Link href="/projects">
              <Button variant="ghost" className="text-primary hover:text-accent group">
                {t("projects.viewAll")} <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
          
          <ProjectGallery limit={3} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">{t("cta.title")}</h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-10 text-lg">
            {t("cta.description")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-primary hover:bg-gray-100 rounded-none h-14 px-8 font-medium">
                {t("cta.quoteBtn")}
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 rounded-none h-14 px-8 font-medium bg-transparent">
              {t("cta.brochureBtn")}
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
