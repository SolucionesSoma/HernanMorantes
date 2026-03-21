import { useEffect, useState, useRef, useCallback } from 'react';
import { cn } from '@/lib/utils';
import { heroConfig } from '@/config';
import { ArrowDown } from 'lucide-react';

const boxSize = 450;
const halfBox = boxSize / 2;
const imageScale = 0.8;

export function Hero() {
  if (!heroConfig.name && heroConfig.roles.length === 0) return null;

  const [isLoaded, setIsLoaded] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLElement>) => {
    const section = e.currentTarget;
    const rect = section.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    section.style.setProperty('--mouse-x', `${x - halfBox}px`);
    section.style.setProperty('--mouse-y', `${y - halfBox}px`);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="inicio"
      className="relative w-full min-h-screen overflow-hidden bg-neutral-900 cursor-none"
      onMouseMove={handleMouseMove}
      style={{ '--mouse-x': 'calc(50vw - 200px)', '--mouse-y': 'calc(50vh - 200px)' } as React.CSSProperties}
    >
      {/* Background Image with Blur */}
      <div
        className={cn(
          'absolute inset-0 flex items-center justify-center transition-opacity duration-[1800ms]',
          isLoaded && imageLoaded ? 'opacity-100' : 'opacity-0'
        )}
      >
        <img
          src={heroConfig.backgroundImage}
          alt="Hero Background"
          fetchPriority="high"
          decoding="async"
          className="object-contain"
          style={{ 
            width: `${imageScale * 100}vw`,
            height: `${imageScale * 100}vh`,
            filter: 'blur(15px) brightness(0.7)',
            objectPosition: 'center center'
          }}
          onLoad={() => setImageLoaded(true)}
        />
      </div>

      {/* Sharp Image Container */}
      <div
        className={cn(
          'absolute top-0 left-0 overflow-hidden pointer-events-none z-20',
          isLoaded && imageLoaded ? 'opacity-100' : 'opacity-0'
        )}
        style={{
          width: boxSize,
          height: boxSize,
          transform: 'translate3d(var(--mouse-x), var(--mouse-y), 0)',
          willChange: 'transform',
        }}
      >
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{
            transform: 'translate3d(calc(var(--mouse-x) * -1), calc(var(--mouse-y) * -1), 0)',
            width: '100vw',
            height: '100vh',
            willChange: 'transform',
          }}
        >
          <img
            src={heroConfig.backgroundImage}
            alt="Hero Sharp"
            fetchPriority="high"
            decoding="async"
            className="object-contain"
            style={{ 
              width: `${imageScale * 100}vw`,
              height: `${imageScale * 100}vh`,
              objectPosition: 'center center'
            }}
          />
        </div>
      </div>

      {/* Square border frame */}
      <div
        className={cn(
          'absolute top-0 left-0 pointer-events-none z-20',
          isLoaded && imageLoaded ? 'opacity-100' : 'opacity-0'
        )}
        style={{
          width: boxSize,
          height: boxSize,
          border: '1px solid rgba(255,255,255,0.4)',
          transform: 'translate3d(var(--mouse-x), var(--mouse-y), 0)',
          willChange: 'transform',
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-4 h-px bg-white/60" />
          <div className="absolute w-px h-4 bg-white/60" />
        </div>
      </div>

      {/* Roles - Desktop: flotando en los bordes */}
      <div className="hidden lg:block absolute inset-0 z-30 pointer-events-none">
        {heroConfig.roles[0] && (
          <div
            className={cn(
              'absolute left-16 top-1/3 -translate-y-1/2 transition-all duration-[1200ms] ease-out-quart',
              isLoaded ? 'opacity-100' : 'opacity-0'
            )}
            style={{ transitionDelay: '800ms' }}
          >
            <span className="text-xs font-geist-mono uppercase tracking-[0.3em] text-white/70">
              {heroConfig.roles[0]}
            </span>
          </div>
        )}
        {heroConfig.roles[1] && (
          <div
            className={cn(
              'absolute right-16 top-1/3 -translate-y-1/2 transition-all duration-[1200ms] ease-out-quart',
              isLoaded ? 'opacity-100' : 'opacity-0'
            )}
            style={{ transitionDelay: '900ms' }}
          >
            <span className="text-xs font-geist-mono uppercase tracking-[0.3em] text-white/70">
              {heroConfig.roles[1]}
            </span>
          </div>
        )}
        {heroConfig.roles[2] && (
          <div
            className={cn(
              'absolute left-16 bottom-1/3 translate-y-1/2 transition-all duration-[1200ms] ease-out-quart',
              isLoaded ? 'opacity-100' : 'opacity-0'
            )}
            style={{ transitionDelay: '1000ms' }}
          >
            <span className="text-xs font-geist-mono uppercase tracking-[0.3em] text-white/70">
              {heroConfig.roles[2]}
            </span>
          </div>
        )}
        {heroConfig.roles[3] && (
          <div
            className={cn(
              'absolute right-16 bottom-1/3 translate-y-1/2 transition-all duration-[1200ms] ease-out-quart',
              isLoaded ? 'opacity-100' : 'opacity-0'
            )}
            style={{ transitionDelay: '1100ms' }}
          >
            <span className="text-xs font-geist-mono uppercase tracking-[0.3em] text-white/70">
              {heroConfig.roles[3]}
            </span>
          </div>
        )}
      </div>

      {/* Roles en Mobile: arriba */}
      <div className="lg:hidden absolute top-20 left-0 right-0 z-30 flex flex-wrap justify-center gap-x-4 gap-y-1 px-4 pointer-events-none">
        {heroConfig.roles.map((role, index) => (
          <span
            key={index}
            className={cn(
              'text-[10px] font-geist-mono uppercase tracking-[0.2em] text-white/60 transition-all duration-[1200ms] ease-out-quart',
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
            )}
            style={{ transitionDelay: `${800 + index * 100}ms` }}
          >
            {role}
          </span>
        ))}
      </div>

      {/* Content Container */}
      <div className="relative z-30 flex flex-col items-center justify-end min-h-screen px-6 lg:px-12 pointer-events-none">
        
        {/* Main Heading - exactamente como estaba */}
        <div
          className={cn(
            'text-center transition-all duration-[1200ms] ease-out-quart pb-8 md:pb-12',
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          )}
          style={{ transitionDelay: '600ms' }}
        >
          <h1 className="text-[clamp(3rem,12vw,12rem)] font-black text-white tracking-[-0.04em] leading-[0.85]">
            {heroConfig.name}
          </h1>
        </div>

        {/* CTA Button - exactamente como estaba */}
        {heroConfig.ctaText && (
          <div
            className={cn(
              'text-center transition-all duration-[1200ms] ease-out-quart pb-16 md:pb-20 pointer-events-auto',
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            )}
            style={{ transitionDelay: '800ms' }}
          >
            <a
              href={heroConfig.ctaHref}
              className="inline-flex items-center gap-3 px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-medium rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/30 group"
            >
              <span>{heroConfig.ctaText}</span>
              <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
            </a>
          </div>
        )}

        {/* Subtitle - debajo del botón CTA */}
        {heroConfig.subtitle && (
          <div
            className={cn(
              'text-center transition-all duration-[1200ms] ease-out-quart pb-8',
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            )}
            style={{ transitionDelay: '1000ms' }}
          >
            <p className="text-lg md:text-xl text-white/80 font-light tracking-wide">
              {heroConfig.subtitle}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
