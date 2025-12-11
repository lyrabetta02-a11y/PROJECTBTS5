import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { motion } from "framer-motion";
import heroImage from "@assets/generated_images/modern_commercial_building_hvac_system_on_roof.png";
import { useLanguage } from "@/lib/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="HVAC Roof System"
          className="w-full h-full object-cover"
        />
        {/* Overlay - Gradient for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/40 mix-blend-multiply" />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Content */}
      <div className="relative h-full container mx-auto px-6 flex flex-col justify-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <div className="flex items-center gap-2 mb-6">
            <div className="h-0.5 w-12 bg-accent" />
            <span className="text-accent font-medium tracking-widest uppercase text-sm">{t("hero.badge")}</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-white leading-tight mb-8 whitespace-pre-line">
            {t("hero.title")}
          </h1>
          
          <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl leading-relaxed">
            {t("hero.description")}
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/projects">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-white border-none rounded-none px-8 h-14 text-base font-medium">
                {t("hero.portfolioBtn")}
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary rounded-none px-8 h-14 text-base font-medium bg-transparent">
                {t("hero.contactBtn")}
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-white/60 text-xs tracking-widest uppercase">{t("hero.scrollDown")}</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent" />
      </motion.div>
    </section>
  );
}
