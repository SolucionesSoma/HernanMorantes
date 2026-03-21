import { type MouseEvent, type ComponentType } from 'react';
import { cn } from '@/lib/utils';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { ArrowUpRight, Linkedin, Instagram, Facebook, X, Circle, Youtube } from 'lucide-react';
import tiktok from '/icons/tiktok.svg';
import { footerConfig } from '@/config';

type SocialIconProps = {
  className?: string;
};

const TikTokIcon = ({ className }: SocialIconProps) => (
  <img src={tiktok} alt="" className={className} aria-hidden="true" />
);

const icons: Record<string, ComponentType<SocialIconProps>> = {
    Linkedin,
    Instagram,
    Facebook,
    X,
    Youtube,
    TikTok: TikTokIcon,
  };

function getIcon(iconName: string): ComponentType<SocialIconProps> {
  return icons[iconName] || Circle;
}

export function Footer() {
  if (!footerConfig.logo && footerConfig.columns.length === 0 && footerConfig.socialLinks.length === 0) return null;

  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const handleNavClick = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer ref={ref} className="w-full bg-exvia-black text-white py-16 lg:py-24">
      <div className="container-large px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div
            className={cn(
              'lg:col-span-4 space-y-6 transition-all duration-800 ease-out-quart',
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            )}
          >
            {footerConfig.logo && (
              <a href="#" className="inline-flex items-center gap-3">
                {footerConfig.logoImage && (
                  <img 
                    src={footerConfig.logoImage} 
                    alt={footerConfig.logo}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                )}
                <span className="text-2xl font-semibold tracking-tight">{footerConfig.logo}</span>
              </a>
            )}
            {footerConfig.description && (
              <p className="text-sm text-white/60 max-w-xs leading-relaxed">
                {footerConfig.description}
              </p>
            )}

            {/* Social Links */}
            {footerConfig.socialLinks.length > 0 && (
              <div className="flex gap-3 pt-2">
                {footerConfig.socialLinks.map((social) => {
                  const Icon = getIcon(social.iconName);
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center hover:bg-white hover:text-exvia-black transition-all duration-300"
                      aria-label={social.label}
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  );
                })}
              </div>
            )}
          </div>

          {/* Links Columns */}
          {footerConfig.columns.map((column, colIndex) => (
            <div
              key={column.title}
              className={cn(
                'lg:col-span-2 transition-all duration-800 ease-out-quart',
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              )}
              style={{ transitionDelay: `${(colIndex + 1) * 100}ms` }}
            >
              <h4 className="text-xs font-geist-mono uppercase tracking-widest text-white/40 mb-4">
                {column.title}
              </h4>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className="text-sm text-white/70 hover:text-white transition-colors inline-flex items-center gap-1 group"
                    >
                      {link.label}
                      <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter Column */}
          {footerConfig.newsletterHeading && (
            <div
              className={cn(
                'lg:col-span-2 transition-all duration-800 ease-out-quart',
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              )}
              style={{ transitionDelay: '400ms' }}
            >
              <h4 className="text-xs font-geist-mono uppercase tracking-widest text-white/40 mb-4">
                {footerConfig.newsletterHeading}
              </h4>
              {footerConfig.newsletterDescription && (
                <p className="text-sm text-white/60 mb-4">
                  {footerConfig.newsletterDescription}
                </p>
              )}
            </div>
          )}
        </div>

        {/* Bottom Bar */}
        {(footerConfig.copyright || footerConfig.credit) && (
          <div
            className={cn(
              'mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 transition-all duration-800 ease-out-quart',
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            )}
            style={{ transitionDelay: '500ms' }}
          >
            {footerConfig.copyright && (
              <p className="text-xs text-white/40">
                {footerConfig.copyright}
              </p>
            )}
            {footerConfig.credit && (
              <p className="text-xs text-white/40">
                {footerConfig.credit}
              </p>
            )}
          </div>
        )}
      </div>
    </footer>
  );
}
