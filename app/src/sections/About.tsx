import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import { Heart, Target, Users, Check } from 'lucide-react';
import { aboutConfig } from '@/config';

const values = [
  {
    icon: Heart,
    title: 'Compromiso',
    description: 'Dedicación total a cada caso y cliente.',
  },
  {
    icon: Target,
    title: 'Excelencia',
    description: 'Búsqueda constante de los mejores resultados.',
  },
  {
    icon: Users,
    title: 'Justicia Social',
    description: 'Defensa de los derechos de las comunidades.',
  },
];

const achievements = [
  'Más de 10 años de experiencia en derecho ambiental',
  'Especialista en legislación ambiental colombiana',
  'Asesor de comunidades indígenas y campesinas',
  'Experiencia en litigio ambiental internacional',
  'Conferencista en temas de sostenibilidad jurídica',
];

// Falling Leaves Component
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
      {/* Falling leaves - only on white background */}
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
              
              {/* Decorative elements */}
              <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-emerald-200 rounded-lg -z-10" />
              <div className="absolute -top-4 -left-4 w-20 h-20 bg-emerald-500/10 rounded-lg -z-10" />
            </div>

            {/* Experience badge */}
            <div className="absolute bottom-6 -right-2 lg:right-6 bg-emerald-900 text-white px-6 py-4 rounded-lg shadow-xl">
              <p className="text-4xl font-bold text-emerald-400">{aboutConfig.experienceValue}</p>
              <p className="text-sm text-emerald-200">Años de experiencia</p>
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
                Hernan <span className="text-emerald-600">Morantes</span>
              </h2>
              <p className="text-lg text-gray-600 mt-4">
                Abogado especialista en derecho ambiental y justicia social
              </p>
            </div>

            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                {aboutConfig.description}
              </p>
              <p>
                A lo largo de mi carrera, he tenido el privilegio de representar a 
                comunidades indígenas, organizaciones ambientalistas y empresas 
                comprometidas con la sostenibilidad. Mi objetivo es utilizar el derecho 
                como herramienta de transformación social y ambiental.
              </p>
            </div>

            {/* Achievements list */}
            <div className="space-y-3">
              {achievements.map((item, index) => (
                <div 
                  key={index} 
                  className={cn(
                    'flex items-start gap-3 transition-all duration-500',
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  )}
                  style={{ transitionDelay: `${400 + index * 100}ms` }}
                >
                  <div className="w-5 h-5 bg-emerald-500 rounded flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-gray-700 text-sm">{item}</span>
                </div>
              ))}
            </div>

            {/* Values */}
            <div 
              className={cn(
                'grid grid-cols-3 gap-4 pt-6 border-t border-gray-200 transition-all duration-700',
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              )}
              style={{ transitionDelay: '800ms' }}
            >
              {values.map((value, index) => (
                <div key={index} className="text-center">
                  <value.icon className="w-6 h-6 text-emerald-600 mx-auto mb-2" />
                  <p className="font-medium text-gray-900 text-sm">{value.title}</p>
                </div>
              ))}
            </div>

            {/* Signature */}
            <div 
              className={cn(
                'pt-4 transition-all duration-700',
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              )}
              style={{ transitionDelay: '900ms' }}
            >
              <p className="font-serif text-2xl text-emerald-700 italic">
                &ldquo;La justicia ambiental es justicia social&rdquo;
              </p>
              <p className="text-gray-500 mt-2 text-sm">— Hernan Morantes</p>
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
