import { Link } from "wouter";
import logoImage from "@assets/generated_images/logo_for_pt_benua_teknik_solusindo.png";
import { MapPin, Phone, Mail, Instagram, Linkedin, Facebook } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-primary text-white pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <img src={logoImage} alt="Benua Teknik" className="h-12 w-12 object-contain brightness-0 invert" />
              <div className="flex flex-col text-white">
                <span className="font-heading font-bold text-xl leading-tight">BENUA TEKNIK</span>
                <span className="text-xs tracking-widest uppercase opacity-70">Solusindo</span>
              </div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              {t("footer.description")}
            </p>
            <div className="flex gap-4">
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-accent transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-accent transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-accent transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-6">{t("footer.quickLinks")}</h4>
            <ul className="space-y-3">
              <li><Link href="/" className="text-white/70 hover:text-accent transition-colors text-sm">{t("nav.home")}</Link></li>
              <li><Link href="/about" className="text-white/70 hover:text-accent transition-colors text-sm">{t("nav.about")}</Link></li>
              <li><Link href="/services" className="text-white/70 hover:text-accent transition-colors text-sm">{t("nav.services")}</Link></li>
              <li><Link href="/projects" className="text-white/70 hover:text-accent transition-colors text-sm">{t("nav.projects")}</Link></li>
              <li><Link href="/contact" className="text-white/70 hover:text-accent transition-colors text-sm">{t("nav.contact")}</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-6">{t("footer.ourServices")}</h4>
            <ul className="space-y-3">
              <li className="text-white/70 text-sm">{t("services.items.installation.title")}</li>
              <li className="text-white/70 text-sm">{t("projects.categories.chiller")}</li>
              <li className="text-white/70 text-sm">{t("projects.categories.vrv")}</li>
              <li className="text-white/70 text-sm">{t("projects.categories.ducting")}</li>
              <li className="text-white/70 text-sm">{t("projects.categories.maintenance")}</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-6">{t("footer.contactUs")}</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <span className="text-white/70 text-sm">
                  Jl. HVAC Professional No. 88, Jakarta Selatan, Indonesia 12345
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent shrink-0" />
                <span className="text-white/70 text-sm">+62 21 555 0123</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent shrink-0" />
                <span className="text-white/70 text-sm">info@benuateknik.co.id</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/50 text-xs">{t("footer.rights")}</p>
          <div className="flex gap-6">
            <span className="text-white/50 text-xs cursor-pointer hover:text-white">{t("footer.privacy")}</span>
            <span className="text-white/50 text-xs cursor-pointer hover:text-white">{t("footer.terms")}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
