import { useEffect, useRef, useState } from 'react';
import { brandValuesConfig } from '@/config';
import { Check } from 'lucide-react';

export function BrandValuesSection() {
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

  return (
    <section
      ref={sectionRef}
      className="w-full py-24 lg:py-32 bg-emerald-950 relative overflow-hidden"
    >
      {/* Elementos decorativos sutiles */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-800 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-800 to-transparent" />
      
      {/* Patrón de fondo muy sutil */}
      <div className="absolute inset-0 opacity-[0.02]" 
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}
      />

      <div className="max-w-[80rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="text-xs font-mono uppercase tracking-wider text-emerald-400 mb-4 block">
            {brandValuesConfig.label}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-white max-w-2xl mx-auto">
            {brandValuesConfig.heading}
          </h2>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {brandValuesConfig.values.map((value, index) => (
            <div
              key={value.title}
              className={`group p-6 bg-emerald-900/50 rounded-xl border border-emerald-800/50 hover:bg-emerald-900 hover:border-emerald-700 transition-all duration-500 hover:shadow-lg hover:shadow-emerald-950/50 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${(index + 1) * 75}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center group-hover:scale-110 group-hover:bg-emerald-400 transition-all">
                  <Check className="w-4 h-4 text-emerald-950" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-white mb-2 group-hover:text-emerald-300 transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-sm text-emerald-200/70 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}