import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Quote, Star } from "lucide-react";
import InfiniteMarquee from "@/components/effects/InfiniteMarquee";
import SpotlightCard from "@/components/effects/SpotlightCard";

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const testimonials = [
    {
      quote:
        "O AlfaVision transformou completamente nossa operação. O que antes levava 3 horas diárias, agora acontece automaticamente em segundos.",
      author: "Marina Santos",
      role: "Head de Operações",
      company: "TechFlow",
      avatar: "M",
      rating: 5,
    },
    {
      quote:
        "Reduzimos 90% dos erros em nossos processos de onboarding. A facilidade de uso é impressionante — minha equipe aprendeu em um dia.",
      author: "Ricardo Almeida",
      role: "CEO",
      company: "StartupBR",
      avatar: "R",
      rating: 5,
    },
    {
      quote:
        "Finalmente uma ferramenta de automação que não precisa de desenvolvedor. Economizamos R$50k/mês só em horas de trabalho manual.",
      author: "Camila Ferreira",
      role: "CFO",
      company: "NovaSoft",
      avatar: "C",
      rating: 5,
    },
  ];

  const companies = [
    { name: "TechFlow", logo: "TF" },
    { name: "StartupBR", logo: "SB" },
    { name: "NovaSoft", logo: "NS" },
    { name: "CloudPro", logo: "CP" },
    { name: "DataSync", logo: "DS" },
    { name: "Innovate.io", logo: "IO" },
    { name: "MetaHub", logo: "MH" },
    { name: "Quantum", logo: "QT" },
  ];

  return (
    <section ref={ref} id="testimonials" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background" />

      <div className="relative z-10">
        {/* Infinite Marquee Logos */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-sm text-muted-foreground text-center mb-8">
            Utilizado por equipes inovadoras em todo o Brasil
          </p>

          <InfiniteMarquee speed={25} pauseOnHover className="py-4">
            {companies.map((company) => (
              <div
                key={company.name}
                className="flex items-center gap-3 px-6 py-3 rounded-xl bg-card/50 border border-border backdrop-blur-sm mx-2 hover:border-primary/30 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <span className="font-display font-bold text-primary text-sm">
                    {company.logo}
                  </span>
                </div>
                <span className="font-display font-semibold text-foreground/70 whitespace-nowrap">
                  {company.name}
                </span>
              </div>
            ))}
          </InfiniteMarquee>

          <InfiniteMarquee speed={20} direction="right" pauseOnHover className="py-4 mt-2">
            {[...companies].reverse().map((company) => (
              <div
                key={company.name + "-2"}
                className="flex items-center gap-3 px-6 py-3 rounded-xl bg-card/50 border border-border backdrop-blur-sm mx-2 hover:border-accent/30 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                  <span className="font-display font-bold text-accent text-sm">
                    {company.logo}
                  </span>
                </div>
                <span className="font-display font-semibold text-foreground/70 whitespace-nowrap">
                  {company.name}
                </span>
              </div>
            ))}
          </InfiniteMarquee>
        </motion.div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center mb-16"
          >
            <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block">
              Depoimentos
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              O que nossos clientes{" "}
              <span className="gradient-text">dizem</span>
            </h2>
          </motion.div>

          {/* Testimonials grid */}
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <SpotlightCard
                key={index}
                className="rounded-2xl bg-card border border-border"
                spotlightColor="rgba(0, 212, 255, 0.1)"
              >
                <div className="p-6 h-full flex flex-col">
                  {/* Rating Stars */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ delay: 0.5 + index * 0.1 + i * 0.05 }}
                      >
                        <Star className="w-4 h-4 text-primary fill-primary" />
                      </motion.div>
                    ))}
                  </div>

                  {/* Quote icon */}
                  <Quote className="w-8 h-8 text-primary/20 mb-4" />

                  {/* Quote */}
                  <p className="text-foreground/90 mb-6 leading-relaxed flex-grow">
                    "{testimonial.quote}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-3">
                    <motion.div
                      className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/30 to-accent/30 flex items-center justify-center ring-2 ring-border"
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <span className="text-primary font-bold">
                        {testimonial.avatar}
                      </span>
                    </motion.div>
                    <div>
                      <p className="font-medium text-foreground">
                        {testimonial.author}
                      </p>
                      <p className="text-muted-foreground text-sm">
                        {testimonial.role} · {testimonial.company}
                      </p>
                    </div>
                  </div>
                </div>
              </SpotlightCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
