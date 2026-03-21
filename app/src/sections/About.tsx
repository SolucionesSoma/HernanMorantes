import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import { Scale, BookOpen, Shield, GraduationCap } from 'lucide-react';
import { aboutConfig } from '@/config';

const values = [
  {
    icon: Scale,
    title: 'Litigio Estratégico',
    description: 'Más de 11 años defendiendo comunidades y el territorio en casos de impacto nacional e internacional.',
  },
  {
    icon: GraduationCap,
    title: 'Formación de Alto Nivel',
    description: 'Magíster en Derecho del Estado (Externado) y Especialista (U. Nacional).',
  },
  {
    icon: Shield,
    title: 'Defensa Técnica',
    description: 'Experto en derecho ambiental, administrativo, constitucional y servicios públicos.',
  },
  {
    icon: BookOpen,
    title: 'Pedagogía Legal',
    description: 'Transformo la ley en una herramienta comprensible para que recuperes el control.',
  },
];

const teachingAreas = [
  'Derecho Administrativo',
  'Procesal Administrativo',
  'Derecho Ambiental',
  'Investigación Jurídica',
  'Derechos Humanos',
  'Derecho Internacional Humanitario',
];

function FallingLeaves() {
  const [leaves, setLeaves] = useState<Array<{
    id: number;
    left: string;
    duration: string;
    delay: string;
    size: string;
    color: string;
  }>>([]);

  const leafColors = [
    '#10b981',
    '#059669',
    '#047857',
    '#34d399',
    '#6ee7b7',
    '#22c55e',
    '#16a34a',
  ];

  useEffect(() => {
    const generateLeaves = () => {
      const newLeaves = [];
      for (let i = 0; i < 15; i++) {
        newLeaves.push({
          id: i,
          left: `${Math.random() * 100}%`,
          duration: `${Math.random() * 8 + 12}s`,
          delay: `${Math.random() * 10}s`,
          size: `${Math.random() * 14 + 10}px`,
          color: leafColors[Math.floor(Math.random() * leafColors.length)],
        });
      }
      setLeaves(newLeaves);
    };

    generateLeaves();
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      {leaves.map((leaf) => (
        <svg
          key={leaf.id}
          className="absolute animate-fall"
          style={{
            left: leaf.left,
            width: leaf.size,
            height: leaf.size,
            animationDuration: leaf.duration,
            animationDelay: leaf.delay,
            opacity: 0.3,
          }}
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M12 2C12 2 8 6 8 11C8 14 9.5 16.5 12 19C14.5 16.5 16 14 16 11C16 6 12 2 12 2Z"
            fill={leaf.color}
          />
          <path
            d="M12 19V22"
            stroke={leaf.color}
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      ))}
    </div>
  );
}

export function About() {
  if (!aboutConfig.description) return null;

  const { ref: sectionRef, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section 
      id="sobre-mi" 
      className="relative py-24 lg:py-32 bg-white overflow-hidden"
      ref={sectionRef}
    >
      <FallingLeaves />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Image */}
          <div 
            className={cn(
              'relative transition-all duration-1000 ease-out',
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            )}
          >
            <div className="relative">
              <div className="aspect-[4/5] bg-gray-100 rounded-lg overflow-hidden">
                <img
                  src="/images/abogado.jpg"
                  alt="Hernan Morantes"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              
              <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-emerald-200 rounded-lg -z-10" />
              <div className="absolute -top-4 -left-4 w-20 h-20 bg-emerald-500/10 rounded-lg -z-10" />
            </div>

            <div className="absolute bottom-6 -right-2 lg:right-6 bg-emerald-900 text-white px-6 py-4 rounded-lg shadow-xl">
              <p className="text-4xl font-bold text-emerald-400">{aboutConfig.experienceValue}</p>
              <p className="text-sm text-emerald-200 whitespace-pre-line">{aboutConfig.experienceLabel}</p>
            </div>
          </div>

          {/* Right - Content */}
          <div 
            className={cn(
              'space-y-6 transition-all duration-1000 delay-200 ease-out',
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            )}
          >
            <div>
              <span className="text-emerald-600 text-sm font-mono uppercase tracking-wider">
                {aboutConfig.label}
              </span>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mt-2">
                Hernán <span className="text-emerald-600">Morantes</span>
              </h2>
              <p className="text-xl text-emerald-700 font-medium mt-3">
                {aboutConfig.heading}
              </p>
            </div>

            {/* Main description - JUSTIFICADO */}
            <p className="text-lg text-gray-600 leading-relaxed text-justify">
              {aboutConfig.description}
            </p>

            {/* Values grid - 4 tarjetas */}
            <div className="grid sm:grid-cols-2 gap-4 pt-4">
              {values.map((value, index) => (
                <div 
                  key={index}
                  className={cn(
                    'p-4 bg-emerald-50/50 rounded-lg border border-emerald-100 transition-all duration-500 hover:bg-emerald-50',
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  )}
                  style={{ transitionDelay: `${400 + index * 100}ms` }}
                >
                  <value.icon className="w-5 h-5 text-emerald-600 mb-2" />
                  <h3 className="font-semibold text-gray-900 text-sm mb-1">{value.title}</h3>
                  <p className="text-gray-600 text-xs leading-relaxed text-justify">{value.description}</p>
                </div>
              ))}
            </div>

            {/* Teaching areas */}
            <div 
              className={cn(
                'pt-4 transition-all duration-700',
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              )}
              style={{ transitionDelay: '800ms' }}
            >
              <p className="text-sm font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <GraduationCap className="w-4 h-4 text-emerald-600" />
                Experiencia Docente
              </p>
              <div className="flex flex-wrap gap-2">
                {teachingAreas.map((area, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div 
              className={cn(
                'grid grid-cols-3 gap-4 pt-6 border-t border-gray-200 transition-all duration-700',
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              )}
              style={{ transitionDelay: '900ms' }}
            >
              {aboutConfig.stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <p className="text-2xl font-bold text-emerald-600">{stat.value}</p>
                  <p className="text-xs text-gray-600 mt-1">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Quote */}
            <div 
              className={cn(
                'pt-4 transition-all duration-700',
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              )}
              style={{ transitionDelay: '1000ms' }}
            >
              <p className="font-serif text-xl text-emerald-700 italic text-center">
                &ldquo;La justicia es un servicio público, no un privilegio&rdquo;
              </p>
              <p className="text-gray-500 mt-2 text-sm text-center">— Hernán Morantes</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Hook for scroll animation
function useScrollAnimation({ threshold = 0.2 }: { threshold?: number }) {
  const ref = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [threshold]);

  return { ref, isVisible };
}