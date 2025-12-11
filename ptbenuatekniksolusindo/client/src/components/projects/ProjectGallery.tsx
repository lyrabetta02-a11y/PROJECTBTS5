import { projects } from "@/lib/data";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

export default function ProjectGallery({ limit }: { limit?: number }) {
  const [filter, setFilter] = useState("All");
  const { t } = useLanguage();
  
  const categories = ["All", ...Array.from(new Set(projects.map((p) => p.category)))];
  
  const filteredProjects = filter === "All" 
    ? projects 
    : projects.filter((p) => p.category === filter);

  const displayProjects = limit ? filteredProjects.slice(0, limit) : filteredProjects;

  // Helper to translate categories
  const getCategoryLabel = (cat: string) => {
    if (cat === "All") return t("projects.filterAll");
    return cat; // For now keeping category names as is, or map them if needed
  };

  return (
    <div className="w-full">
      {/* Filter Buttons */}
      <div className="flex flex-wrap gap-2 mb-12 justify-center">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-6 py-2 text-sm font-medium transition-all duration-300 rounded-full border ${
              filter === cat
                ? "bg-primary text-white border-primary"
                : "bg-transparent text-gray-500 border-gray-200 hover:border-primary hover:text-primary"
            }`}
          >
            {getCategoryLabel(cat)}
          </button>
        ))}
      </div>

      {/* Grid */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence>
          {displayProjects.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="group relative cursor-pointer overflow-hidden aspect-[4/3] bg-gray-100"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center p-6 text-center">
                <span className="text-accent text-xs font-bold tracking-widest uppercase mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                  {project.category}
                </span>
                <h3 className="text-white font-heading font-bold text-xl mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-150">
                  {project.title}
                </h3>
                <p className="text-white/80 text-sm mb-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-200">
                  {project.location}
                </p>
                <Button 
                  size="icon" 
                  variant="outline" 
                  className="rounded-full border-white text-white hover:bg-white hover:text-primary translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-250"
                >
                  <Plus className="w-5 h-5" />
                </Button>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
