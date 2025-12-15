import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import AnimatedCounter from "@/components/effects/AnimatedCounter";
import SpotlightCard from "@/components/effects/SpotlightCard";

const StatsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    {
      value: 500,
      suffix: "+",
      label: "Empresas ativas",
      description: "Confiando na nossa plataforma",
    },
    {
      value: 2400000,
      suffix: "",
      label: "Automações executadas",
      description: "Por mês em nossa infraestrutura",
    },
    {
      value: 80,
      suffix: "%",
      label: "Tempo economizado",
      description: "Em tarefas repetitivas",
    },
    {
      value: 99.9,
      suffix: "%",
      label: "Uptime garantido",
      description: "Infraestrutura enterprise",
    },
  ];

  return (
    <section ref={ref} className="py-20 lg:py-28 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block">
            Resultados comprovados
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">
            Números que <span className="gradient-text">impressionam</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <SpotlightCard
              key={index}
              className="p-6 rounded-2xl bg-card/50 border border-border backdrop-blur-sm"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-2">
                  <AnimatedCounter
                    value={stat.value}
                    suffix={stat.suffix}
                    duration={2.5}
                    className="gradient-text"
                  />
                </div>
                <h3 className="font-semibold text-foreground mb-1">
                  {stat.label}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {stat.description}
                </p>
              </motion.div>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
