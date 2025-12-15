import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MousePointer, Settings, Rocket } from "lucide-react";

const HowItWorks = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const steps = [
    {
      number: "01",
      icon: MousePointer,
      title: "Conecte seus apps",
      description:
        "Escolha entre +200 integrações e conecte em poucos cliques. CRM, email, planilhas, e mais.",
    },
    {
      number: "02",
      icon: Settings,
      title: "Configure seu fluxo",
      description:
        "Arraste e solte ações, defina gatilhos e condições. Nossa IA sugere otimizações automaticamente.",
    },
    {
      number: "03",
      icon: Rocket,
      title: "Ative e relaxe",
      description:
        "Seu fluxo roda 24/7 automaticamente. Acompanhe tudo em tempo real pelo dashboard.",
    },
  ];

  return (
    <section ref={ref} id="how-it-works" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute right-0 top-1/3 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block">
            Como Funciona
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Simples como <span className="gradient-text">1, 2, 3</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comece a automatizar em minutos, não em semanas
          </p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-[2px] bg-gradient-to-r from-primary/20 via-primary to-primary/20 -translate-y-1/2" />

          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.15 }}
                className="relative"
              >
                {/* Step card */}
                <div className="relative p-8 rounded-2xl bg-card border border-border text-center group hover:border-primary/30 transition-all duration-300">
                  {/* Step number badge */}
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-primary text-primary-foreground text-sm font-bold">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-secondary flex items-center justify-center group-hover:bg-primary/10 transition-colors duration-300">
                    <step.icon className="w-8 h-8 text-primary" />
                  </div>

                  {/* Content */}
                  <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Connection dot */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-6 w-3 h-3 rounded-full bg-primary border-4 border-background -translate-y-1/2 z-10" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
