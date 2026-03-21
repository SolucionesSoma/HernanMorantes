import { useState, useEffect, useRef, type ElementType } from 'react';
import { cn } from '@/lib/utils';
import { servicesConfig } from '@/config';
import { Scale, Gavel, BookOpen, Shield, Circle, Check, ArrowRight } from 'lucide-react';

function getIcon(iconName: string): ElementType {
  const icons: Record<string, ElementType> = {
    Scale,
    Gavel,
    BookOpen,
    Shield,
  };

  return icons[iconName] || Circle;
}



interface ServiceCardProps {
  service: { 
    iconName: string; 
    title: string; 
    description: string; 
    features?: string[];
    image: string 
  };
  index: number;
  isVisible: boolean;
}

function ServiceCard({ service, index, isVisible }: ServiceCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const Icon = getIcon(service.iconName);

  return (
    <div
      className={cn(
        'group relative bg-white/95 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg border border-white/20',
        'hover:shadow-2xl hover:border-emerald-300/50 hover:bg-white transition-all duration-500',
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      )}
      style={{ transitionDelay: `${(index + 1) * 150}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image - Always visible */}
      <div className="relative h-48 lg:h-56 overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          loading="lazy"
          decoding="async"
          className={cn(
            'w-full h-full object-cover transition-transform duration-700',
            isHovered ? 'scale-110' : 'scale-100'
          )}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        
        {/* Icon badge */}
        <div className="absolute top-4 left-4 w-12 h-12 bg-white/95 backdrop-blur rounded-xl flex items-center justify-center shadow-lg">
          <Icon className="w-6 h-6 text-emerald-600" />
        </div>

        {/* Index number */}
        <div className="absolute top-4 right-4 text-white/60 text-sm font-mono">
          0{index + 1}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-emerald-700 transition-colors">
          {service.title}
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed mb-4">
          {service.description}
        </p>
        
        {/* Features List */}
        {service.features && service.features.length > 0 && (
          <ul className="space-y-2">
            {service.features.slice(0, 3).map((feature, idx) => (
              <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                <Check className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                <span className="line-clamp-1">{feature}</span>
              </li>
            ))}
          </ul>
        )}

        {/* CTA */}
        <div className="mt-4 pt-4 border-t border-gray-100">
          <a 
            href="#contacto" 
            className="inline-flex items-center gap-2 text-emerald-600 text-sm font-medium group-hover:gap-3 transition-all"
          >
            Más información
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
}

export function Services() {
  if (!servicesConfig.heading && servicesConfig.services.length === 0) return null;

  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [bgLoaded, setBgLoaded] = useState(false);

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

  return (
    <section 
      id="servicios" 
      className="relative w-full py-24 lg:py-32 overflow-hidden"
      ref={sectionRef}
    >
      {/* Background Image - Naturaleza */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/santurban.jpg"
          alt="Fondo naturaleza"
          loading="lazy"
          decoding="async"
          className={cn(
            'w-full h-full object-cover transition-opacity duration-1000',
            bgLoaded ? 'opacity-100' : 'opacity-0'
          )}
          onLoad={() => setBgLoaded(true)}
        />
        {/* Manta oscura - overlay */}
        <div className="absolute inset-0 bg-emerald-950/85" />
        {/* Degradado adicional para suavizar */}
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/50 via-transparent to-emerald-950/50" />
      </div>


      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          {servicesConfig.label && (
            <span 
              className={cn(
                'text-emerald-400 text-sm font-mono uppercase tracking-wider block mb-4 transition-all duration-700',
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              )}
            >
              {servicesConfig.label}
            </span>
          )}

          {servicesConfig.heading && (
            <h2 
              className={cn(
                'text-3xl lg:text-4xl font-bold text-white mb-4 transition-all duration-700',
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              )}
              style={{ transitionDelay: '100ms' }}
            >
              {servicesConfig.heading}
            </h2>
          )}

          {servicesConfig.description && (
            <p 
              className={cn(
                'text-lg text-emerald-100/80 transition-all duration-700',
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              )}
              style={{ transitionDelay: '150ms' }}
            >
              {servicesConfig.description}
            </p>
          )}
        </div>

        {/* Services Grid */}
        {servicesConfig.services.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {servicesConfig.services.map((service, index) => (
              <ServiceCard 
                key={service.title} 
                service={service} 
                index={index}
                isVisible={isVisible}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
