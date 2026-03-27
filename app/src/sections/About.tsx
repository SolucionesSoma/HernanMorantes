import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import {
  BookOpen,
  ChevronDown,
  ChevronUp,
  Droplets,
  GraduationCap,
  Landmark,
  Scale,
  Shield,
  Trees,
} from 'lucide-react';
import { aboutConfig } from '@/config';

const values = [
  {
    icon: Scale,
    title: 'Litigio Estratégico',
    description: 'Más de 11 años defendiendo comunidades y territorio en casos de impacto nacional e internacional.',
  },
  {
    icon: GraduationCap,
    title: 'Formación de Alto Nivel',
    description: 'Magister en Derecho del Estado (Externado) y Especialista en Derecho Administrativo (U. Nacional).',
  },
  {
    icon: Shield,
    title: 'Defensa Técnica',
    description: 'Experto en derecho ambiental, administrativo, constitucional y servicios públicos.',
  },
  {
    icon: BookOpen,
    title: 'Pedagogía Legal',
    description: 'Transformo la ley en una herramienta comprensible para recuperar el control.',
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

const impactCounters = [
  {
    value: '19',
    label: 'instituciones educativas con agua garantizada',
    link: 'https://www.bucaramanga.gov.co/noticias/quedaron-instaladas-17-plantas-de-tratamiento-de-agua-para-el-servicio-de-colegios-oficiales-del-sector-rural-en-bucaramanga/',
  },
  {
    value: '+$3.200M',
    label: 'en hallazgos fiscales por corrupción',
    link: '',
  },
  {
    value: '+1.000',
    label: 'familias con acceso vital al agua en Bucaramanga',
    link: 'https://caracol.com.co/emisora/2021/09/01/bucaramanga/1630510185_808805.html',
  },
  {
    value: '+20',
    label: 'proyectos de ley nacionales asesorados',
    link: '',
  },
];

const victoryCards = [
  {
    icon: Trees,
    title: 'Defensa del Territorio',
    detail:
      'Santurbán, Ciénaga de San Silvestre y ríos estratégicos protegidos con acciones jurídicas y cautelares.',
  },
  {
    icon: Shield,
    title: 'Integridad Pública',
    detail:
      'Seguimiento a casos de alto impacto como UNGRD y defensa del interés ciudadano en plazas de mercado.',
  },
  {
    icon: Droplets,
    title: 'Derechos Ciudadanos',
    detail:
      'Acciones para proteger servicios públicos, agua, aire limpio y calidad de vida de comunidades vulnerables.',
  },
  {
    icon: Landmark,
    title: 'Incidencia Legislativa',
    detail:
      'Asesoría jurídica al Congreso en proyectos de ley para naturaleza, servicios públicos y derechos colectivos.',
  },
];

const achievements = [
  {
    text: 'Protegimos jurídicamente el Páramo de Santurbán para asegurar el agua de las próximas generaciones.',
    link: 'https://www.facebook.com/watch/?v=9482004495193419',
  },
  {
    text: 'Protegimos judicialmente la biodiversidad de la Ciénaga de San Silvestre, blindándola contra la degradación.',
    link: 'https://caracol.com.co/2025/08/20/historico-fallo-ordena-proteger-la-cienaga-san-silvestre-en-barrancabermeja/',
  },
  {
    text: 'Frenamos la minería de carbón que amenazaba con destruir el equilibrio natural en municipios de Santander.',
    link: 'https://elaw.org/es/open-pit-coal-mine-suspended-colombia#:~:text=Hern%C3%A1n%20Morantes%2C%20abogado%20y%20socio,%2C%20Santander%2C%20ha%20sido%20suspendida.',
  },
  {
    text: 'Logramos que el Río Sogamoso fuera limpiado para las comunidades que dependen de él.',
    link: 'https://www.vanguardia.com/santander/barrancabermeja/2015/04/09/ordenan-a-isagen-limpiar-material-vegetal-y-organico-en-santander/',
  },
  {
    text: 'Devolvimos el descanso y la paz a hogares de niños y adultos mayores frente al ruido excesivo.',
    link: '',
  },
  {
    text: 'Limpiamos el aire de nuestras comunidades, eliminando olores y riesgos industriales para la salud.',
    link: '',
  },
  {
    text: 'Detuvimos el proyecto urbanístico ilegal de la ciudad para proteger el territorio del volteo de tierras.',
    link: '',
  },
  {
    text: 'Creamos proyectos de ley para proteger la naturaleza y garantizar derechos en servicios públicos.',
    link: '',
  },
];

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

function FallingLeaves() {
  const [leaves, setLeaves] = useState<
    Array<{
      id: number;
      left: string;
      duration: string;
      delay: string;
      size: string;
      color: string;
    }>
  >([]);

  const leafColors = ['#10b981', '#059669', '#047857', '#34d399', '#6ee7b7', '#22c55e', '#16a34a'];

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
          <path d="M12 2C12 2 8 6 8 11C8 14 9.5 16.5 12 19C14.5 16.5 16 14 16 11C16 6 12 2 12 2Z" fill={leaf.color} />
          <path d="M12 19V22" stroke={leaf.color} strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      ))}
    </div>
  );
}

export function About() {
  if (!aboutConfig.description) return null;

  const { ref: sectionRef, isVisible } = useScrollAnimation({ threshold: 0.2 });
  const [activeCard, setActiveCard] = useState<number | null>(0);

  return (
    <section 
      id="sobre-mi" 
      className="relative py-16 sm:py-20 lg:py-32 bg-white overflow-hidden" 
      ref={sectionRef}
    >
      <FallingLeaves />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-start">
          
          {/* Columna Izquierda - Bio y Valores */}
          <div
            className={cn(
              'rounded-2xl border border-emerald-100 bg-white/95 p-5 sm:p-6 lg:p-8 shadow-sm transition-all duration-1000 ease-out h-full',
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            )}
          >
            <p className="text-emerald-600 text-xs sm:text-sm font-mono uppercase tracking-wider mb-4">
              {aboutConfig.label}
            </p>
            
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed text-justify">
              {aboutConfig.description}
            </p>

            <div className="mt-6 space-y-6">
              {/* Valores - Grid responsive */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {values.map((value, index) => (
                  <div 
                    key={index} 
                    className="p-4 bg-emerald-50/50 rounded-lg border border-emerald-100 hover:bg-emerald-50 transition-colors"
                  >
                    <value.icon className="w-5 h-5 text-emerald-600 mb-2" />
                    <h3 className="font-semibold text-gray-900 text-sm mb-1">{value.title}</h3>
                    <p className="text-gray-600 text-xs leading-relaxed text-justify">{value.description}</p>
                  </div>
                ))}
              </div>

              {/* Experiencia Docente */}
              <div className="pt-2">
                <p className="text-sm font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <GraduationCap className="w-4 h-4 text-emerald-600" />
                  Experiencia Docente
                </p>
                <div className="flex flex-wrap gap-2">
                  {teachingAreas.map((area, index) => (
                    <span 
                      key={index} 
                      className="px-3 py-1.5 bg-gray-100 text-gray-700 text-xs rounded-full hover:bg-emerald-100 hover:text-emerald-700 transition-colors"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>

              {/* Stats - Grid responsive 2 cols en móvil, 3 en desktop */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-5 border-t border-gray-200">
                {aboutConfig.stats.map((stat, index) => (
                  <div key={index} className="text-center p-2">
                    <p className="text-xl sm:text-2xl font-bold text-emerald-600">{stat.value}</p>
                    <p className="text-xs text-gray-600 mt-1 leading-tight">{stat.label}</p>
                  </div>
                ))}
              </div>

              {/* Quote */}
              <div className="pt-4 border-t border-gray-200">
                <p className="font-serif text-lg sm:text-xl text-emerald-700 italic text-center px-2">
                  &ldquo;La justicia es un derecho humano, no un privilegio&rdquo;
                </p>
                <p className="text-gray-500 mt-2 text-sm text-center">- Hernán Morantes</p>
              </div>
            </div>
          </div>

          {/* Columna Derecha - Impacto y Logros */}
          <div
            className={cn(
              'rounded-2xl border border-emerald-100 bg-white/95 p-5 sm:p-6 lg:p-8 shadow-sm flex flex-col transition-all duration-1000 delay-200 ease-out h-full',
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            )}
          >
            {/* Contador de Impacto - Grid en lugar de scroll horizontal */}
            <div>
              <p className="text-xs uppercase tracking-wider text-emerald-600 font-mono mb-4">
                Contador de Impacto
              </p>
              <div className="grid grid-cols-2 gap-3">
                {impactCounters.map((impact, index) => (
                  <article 
                    key={index} 
                    className="rounded-xl border border-emerald-100 bg-emerald-50/70 px-4 py-4 hover:shadow-md transition-shadow"
                  >
                    <p className="text-2xl sm:text-3xl font-bold text-emerald-700 leading-none">{impact.value}</p>
                    <p className="mt-2 text-xs text-gray-600 leading-relaxed">{impact.label}</p>
                    {impact.link ? (
                      <a 
                        href={impact.link} 
                        target="_blank" 
                        rel="noreferrer" 
                        className="inline-flex mt-2 text-xs font-semibold text-emerald-700 hover:underline items-center gap-1"
                      >
                        Ver fuente
                        <span className="text-[10px]">↗</span>
                      </a>
                    ) : null}
                  </article>
                ))}
              </div>
            </div>

            {/* Tarjetas de Victoria */}
            <div className="mt-6">
              <p className="text-xs uppercase tracking-wider text-emerald-600 font-mono mb-3">
                Tarjetas de Victoria
              </p>
              <div className="space-y-2">
                {victoryCards.map((card, index) => {
                  const isOpen = activeCard === index;
                  return (
                    <article 
                      key={index} 
                      className="rounded-xl border border-gray-200 bg-white overflow-hidden hover:border-emerald-200 transition-colors"
                    >
                      <button
                        type="button"
                        className="w-full flex items-center justify-between gap-3 px-4 py-3 text-left hover:bg-gray-50 transition-colors"
                        onClick={() => setActiveCard(isOpen ? null : index)}
                        aria-expanded={isOpen}
                      >
                        <div className="flex items-center gap-3 min-w-0">
                          <card.icon className="w-5 h-5 text-emerald-600 shrink-0" />
                          <p className="text-sm font-semibold text-gray-900 truncate">{card.title}</p>
                        </div>
                        {isOpen ? (
                          <ChevronUp className="w-4 h-4 text-gray-500 shrink-0" />
                        ) : (
                          <ChevronDown className="w-4 h-4 text-gray-500 shrink-0" />
                        )}
                      </button>

                      {isOpen ? (
                        <div className="px-4 pb-4 bg-gray-50/50">
                          <p className="text-sm text-gray-600 leading-relaxed">{card.detail}</p>
                        </div>
                      ) : null}
                    </article>
                  );
                })}
              </div>
            </div>

            {/* Logros - Altura adaptativa con max-height en desktop */}
            <div className="mt-6 pt-5 border-t border-gray-200 flex-1">
              <p className="text-xs uppercase tracking-wider text-emerald-600 font-mono mb-3">
                Logros
              </p>

              <div className="max-h-[400px] lg:max-h-[150px] overflow-y-auto pr-2 space-y-3 scrollbar-thin scrollbar-thumb-emerald-200 scrollbar-track-transparent">
                {achievements.map((achievement, index) => (
                  <li 
                    key={index} 
                    className="list-none rounded-lg border border-gray-200 bg-gray-50/60 p-3 hover:bg-emerald-50/50 transition-colors"
                  >
                    <p className="text-sm text-gray-700 leading-relaxed">{achievement.text}</p>
                    {achievement.link ? (
                      <a
                        href={achievement.link}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex mt-2 text-xs font-semibold text-emerald-700 hover:underline items-center gap-1"
                      >
                        Ver evidencia
                        <span className="text-[10px]">↗</span>
                      </a>
                    ) : null}
                  </li>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}