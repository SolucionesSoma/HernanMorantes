import { useEffect, useRef, useState } from 'react';
import { contactConfig, ctaConfig } from '@/config';
import { Send, User, Mail, Phone, MessageSquare, FileText } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

// Falling Leaves - Estilo About (sutil y elegante)
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

export function ContactForm() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const message = contactConfig.whatsappMessageTemplate
      .replace('{nombre}', formData.name)
      .replace('{asunto}', formData.subject)
      .replace('{mensaje}', formData.message)
      .replace('{email}', formData.email)
      .replace('{telefono}', formData.phone);

    const whatsappUrl = `https://wa.me/${ctaConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, '_blank');

    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    });
    setIsSubmitting(false);
  };

  return (
    <section
      id="contacto"
      ref={sectionRef}
      className="w-full py-24 lg:py-32 bg-[#f8f8f8] relative overflow-hidden"
    >
      {/* Falling Leaves - Estilo About */}
      <FallingLeaves />

      <div className="max-w-[80rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column - Info */}
          <div
            className={`transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <span className="text-xs font-mono uppercase tracking-wider text-[#666] mb-4 block">
              {contactConfig.label}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-[#131313] mb-6">
              {contactConfig.heading}
            </h2>
            <p className="text-lg text-[#666] mb-8">
              {contactConfig.description}
            </p>

            {/* Contact Info */}
            <div className="space-y-4 mb-8">
              <a
                href={`https://wa.me/${ctaConfig.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-[#131313] hover:text-emerald-600 transition-colors group"
              >
                <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center group-hover:bg-emerald-200 transition-colors">
                  <Phone className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <span className="text-sm text-[#666] block">WhatsApp</span>
                  <span className="font-medium">{ctaConfig.phone}</span>
                </div>
              </a>

              <a
                href={`mailto:${ctaConfig.email}`}
                className="flex items-center gap-3 text-[#131313] hover:text-emerald-600 transition-colors group"
              >
                <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center group-hover:bg-emerald-200 transition-colors">
                  <Mail className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <span className="text-sm text-[#666] block">Email</span>
                  <span className="font-medium">{ctaConfig.email}</span>
                </div>
              </a>
            </div>

            {/* Response Time Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 border border-emerald-200 rounded-full">
              <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
              <span className="text-sm text-emerald-700 font-medium">
                Respuesta en menos de 24 horas
              </span>
            </div>
          </div>

          {/* Right Column - Form */}
          <div
            className={`transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-xl p-6 sm:p-8 shadow-lg border border-[#eaeaea]"
            >
              <div className="space-y-5">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-[#131313] mb-2">
                    {contactConfig.formLabels.name}
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#999]" />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full pl-10 pr-4 py-3 border border-[#e0e0e0] rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                      placeholder="Tu nombre completo"
                    />
                  </div>
                </div>

                {/* Email & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-[#131313] mb-2">
                      {contactConfig.formLabels.email}
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#999]" />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full pl-10 pr-4 py-3 border border-[#e0e0e0] rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                        placeholder="tu@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-[#131313] mb-2">
                      {contactConfig.formLabels.phone}
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#999]" />
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full pl-10 pr-4 py-3 border border-[#e0e0e0] rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                        placeholder="+57 300 000 0000"
                      />
                    </div>
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-[#131313] mb-2">
                    {contactConfig.formLabels.subject}
                  </label>
                  <div className="relative">
                    <FileText className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#999]" />
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full pl-10 pr-4 py-3 border border-[#e0e0e0] rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                      placeholder="¿Sobre qué necesitas ayuda?"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[#131313] mb-2">
                    {contactConfig.formLabels.message}
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-[#999]" />
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full pl-10 pr-4 py-3 border border-[#e0e0e0] rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all resize-none"
                      placeholder="Describe brevemente tu situación..."
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-4 rounded-lg transition-all duration-300 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed group"
                >
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  {contactConfig.formLabels.submit}
                </button>

                <p className="text-xs text-[#888] text-center">
                  Al enviar, serás redirigido a WhatsApp con tu mensaje prellenado.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}