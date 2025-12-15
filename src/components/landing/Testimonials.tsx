import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Quote } from "lucide-react";

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
    },
    {
      quote:
        "Reduzimos 90% dos erros em nossos processos de onboarding. A facilidade de uso é impressionante — minha equipe aprendeu em um dia.",
      author: "Ricardo Almeida",
      role: "CEO",
      company: "StartupBR",
      avatar: "R",
    },
    {
      quote:
        "Finalmente uma ferramenta de automação que não precisa de desenvolvedor. Economizamos R$50k/mês só em horas de trabalho manual.",
      author: "Camila Ferreira",
      role: "CFO",
      company: "NovaSoft",
      avatar: "C",
    },
  ];

  const companies = [
    "TechFlow",
    "StartupBR",
    "NovaSoft",
    "CloudPro",
    "DataSync",
    "Innovate.io",
  ];

  return (
    <section ref={ref} id="testimonials" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Trusted by logos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm text-muted-foreground mb-8">
            Utilizado por equipes inovadoras em todo o Brasil
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-12">
            {companies.map((company, index) => (
              <motion.div
                key={company}
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 0.5 } : {}}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ opacity: 1 }}
                className="font-display text-xl font-bold text-foreground/30 hover:text-foreground/60 transition-colors cursor-default"
              >
                {company}
              </motion.div>
            ))}
          </div>
        </motion.div>

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
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="relative p-6 rounded-2xl bg-card border border-border hover:border-primary/20 transition-all duration-300 group"
            >
              {/* Quote icon */}
              <Quote className="w-8 h-8 text-primary/20 mb-4" />

              {/* Quote */}
              <p className="text-foreground/90 mb-6 leading-relaxed">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-primary font-semibold text-sm">
                    {testimonial.avatar}
                  </span>
                </div>
                <div>
                  <p className="font-medium text-foreground text-sm">
                    {testimonial.author}
                  </p>
                  <p className="text-muted-foreground text-xs">
                    {testimonial.role} · {testimonial.company}
                  </p>
                </div>
              </div>

              {/* Decorative gradient */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
