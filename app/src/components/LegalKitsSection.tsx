import { useEffect, useRef, useState } from 'react';
import { legalKitsConfig } from '@/config';
import { ExternalLink, FolderOpen, ArrowRight } from 'lucide-react';

export function LegalKitsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const featuredKit = legalKitsConfig.kits.find((kit) => kit.featured);
  const regularKits = legalKitsConfig.kits.filter((kit) => !kit.featured);

  // Combinar todos los kits en un solo array para grid uniforme
  const allKits = featuredKit ? [featuredKit, ...regularKits] : regularKits;

  return (
    <section
      id="kits"
      ref={sectionRef}
      className="w-full py-24 lg:py-32 bg-white relative overflow-hidden"
    >
      <div className="max-w-[80rem] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="text-xs font-mono uppercase tracking-wider text-[#666] mb-4 block">
            {legalKitsConfig.label}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-[#131313] mb-6 max-w-3xl">
            {legalKitsConfig.heading}
          </h2>
          <p className="text-lg text-[#666] max-w-2xl">
            {legalKitsConfig.description}
          </p>
        </div>

        {/* Grid uniforme - todas las cards iguales */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {allKits.map((kit, index) => (
            <a
              key={kit.id}
              href={kit.driveLink}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative bg-[#f5f5f5] rounded-lg overflow-hidden transition-all duration-1000 hover:shadow-xl ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${(index + 1) * 100}ms` }}
            >
              {/* Aspect ratio fijo 4:3 para todas las imágenes */}
              <div className="aspect-[4/3] relative overflow-hidden">
                <img
                  src={kit.image}
                  alt={kit.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                
                {/* Badge de featured si aplica */}
                {kit.featured && (
                  <span className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-500 text-white text-xs font-medium rounded-full">
                    <FolderOpen className="w-3 h-3" />
                    Destacado
                  </span>
                )}
                
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-emerald-500/90 text-white text-xs font-medium rounded-full mb-2">
                    <FolderOpen className="w-3 h-3" />
                    {kit.category}
                  </span>
                  <h3 className="text-lg font-medium text-white mb-1 group-hover:text-emerald-300 transition-colors">
                    {kit.title}
                  </h3>
                  <p className="text-white/70 text-sm line-clamp-2 mb-3">
                    {kit.description}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-emerald-400 text-sm font-medium group-hover:gap-2.5 transition-all">
                    {kit.featured ? 'Acceder al kit' : 'Acceder'}
                    <ExternalLink className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </a>
          ))}

          {/* CTA Card - misma altura que las demás */}
          <div
            className={`relative bg-[#131313] rounded-lg overflow-hidden transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: `${(allKits.length + 1) * 100}ms` }}
          >
            <div className="aspect-[4/3] flex flex-col justify-center p-6">
              <span className="text-xs font-mono uppercase tracking-wider text-[#888] mb-3">
                {legalKitsConfig.cta.label}
              </span>
              <h3 className="text-xl font-medium text-white mb-4">
                {legalKitsConfig.cta.heading}
              </h3>
              <a
                href={legalKitsConfig.cta.linkHref}
                className="inline-flex items-center gap-2 text-emerald-400 text-sm font-medium hover:text-emerald-300 transition-colors group"
              >
                {legalKitsConfig.cta.linkText}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
