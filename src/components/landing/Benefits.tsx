import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Zap, Link2, Clock, TrendingUp } from "lucide-react";
import TiltCard from "@/components/effects/TiltCard";

const Benefits = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const benefits = [
    {
      icon: Zap,
      title: "Automacao sem codigo",
      description:
        "Crie fluxos complexos com nossa interface drag-and-drop intuitiva. Zero programacao necessaria.",
      color: "primary",
      stats: "95%",
      statsLabel: "mais rapido",
    },
    {
      icon: Link2,
      title: "Integracoes instantaneas",
      description:
        "Conecte suas ferramentas favoritas em segundos. +200 apps disponiveis e crescendo.",
      color: "accent",
      stats: "200+",
      statsLabel: "integracoes",
    },
    {
      icon: Clock,
      title: "Economize tempo",
      description:
        "Reduza ate 80% do tempo gasto em tarefas repetitivas. Foque no que realmente importa.",
      color: "primary",
      stats: "80%",
      statsLabel: "tempo salvo",
    },
    {
      icon: TrendingUp,
      title: "Escale com confianca",
      description:
        "Infraestrutura robusta que cresce com seu negocio. De 10 a 10.000 execucoes por dia.",
      color: "accent",
      stats: "10k+",
      statsLabel: "execucoes/dia",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section ref={ref} id="benefits" className="py-24 lg:py-32 relative">
      {/* Ambient background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block">
            Beneficios
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Tudo que voce precisa para{" "}
            <span className="gradient-text">automatizar</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ferramentas poderosas que simplificam processos complexos
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {benefits.map((benefit, index) => (
            <motion.div key={index} variants={itemVariants}>
              <TiltCard className="h-full" glareEnabled>
                <div className="group relative h-full p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300">
                  {/* Stats badge */}
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-background/50 border border-border">
                    <span
                      className={`text-xs font-bold ${
                        benefit.color === "primary"
                          ? "text-primary"
                          : "text-accent"
                      }`}
                    >
                      {benefit.stats}
                    </span>
                    <span className="text-xs text-muted-foreground ml-1">
                      {benefit.statsLabel}
                    </span>
                  </div>

                  {/* Icon */}
                  <motion.div
                    className={`w-14 h-14 rounded-2xl mb-4 flex items-center justify-center transition-all duration-300 group-hover:scale-110 ${
                      benefit.color === "primary"
                        ? "bg-primary/10 group-hover:bg-primary/20"
                        : "bg-accent/10 group-hover:bg-accent/20"
                    }`}
                    whileHover={{ rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    <benefit.icon
                      className={`w-7 h-7 ${
                        benefit.color === "primary"
                          ? "text-primary"
                          : "text-accent"
                      }`}
                    />
                  </motion.div>

                  {/* Content */}
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {benefit.description}
                  </p>

                  {/* Animated border on hover */}
                  <div
                    className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
                    style={{
                      background: `linear-gradient(135deg, ${
                        benefit.color === "primary"
                          ? "hsl(185 100% 50% / 0.1)"
                          : "hsl(270 95% 65% / 0.1)"
                      }, transparent)`,
                    }}
                  />

                  {/* Decorative line */}
                  <motion.div
                    className={`absolute bottom-0 left-6 right-6 h-[2px] rounded-full ${
                      benefit.color === "primary" ? "bg-primary" : "bg-accent"
                    }`}
                    initial={{ scaleX: 0, opacity: 0 }}
                    whileHover={{ scaleX: 1, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Benefits;
