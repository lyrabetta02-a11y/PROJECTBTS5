import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ProjectGallery from "@/components/projects/ProjectGallery";
import { useLanguage } from "@/lib/LanguageContext";

export default function Projects() {
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Page Header */}
      <div className="bg-primary pt-32 pb-16">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">{t("projects.title")}</h1>
          <p className="text-white/70 max-w-2xl text-lg">
            {t("projects.badge")}
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16">
        <ProjectGallery />
      </div>

      <Footer />
    </div>
  );
}
