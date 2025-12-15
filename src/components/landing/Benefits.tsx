import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Zap, Link2, Clock, TrendingUp } from "lucide-react";

const Benefits = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const benefits = [
    {
      icon: Zap,
      title: "Automação sem código",
      description:
        "Crie fluxos complexos com nossa interface drag-and-drop intuitiva. Zero programação necessária.",
      color: "primary",
    },
    {
      icon: Link2,
      title: "Integrações instantâneas",
      description:
        "Conecte suas ferramentas favoritas em segundos. +200 apps disponíveis e crescendo.",
      color: "accent",
    },
    {
      icon: Clock,
      title: "Economize tempo",
      description:
        "Reduza até 80% do tempo gasto em tarefas repetitivas. Foque no que realmente importa.",
      color: "primary",
    },
    {
      icon: TrendingUp,
      title: "Escale com confiança",
      description:
        "Infraestrutura robusta que cresce com seu negócio. De 10 a 10.000 execuções por dia.",
      color: "accent",
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
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section ref={ref} id="benefits" className="py-24 lg:py-32 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block">
            Benefícios
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Tudo que você precisa para{" "}
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
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
            >
              {/* Icon */}
              <div
                className={`w-12 h-12 rounded-xl mb-4 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 ${
                  benefit.color === "primary"
                    ? "bg-primary/10"
                    : "bg-accent/10"
                }`}
              >
                <benefit.icon
                  className={`w-6 h-6 ${
                    benefit.color === "primary"
                      ? "text-primary"
                      : "text-accent"
                  }`}
                />
              </div>

              {/* Content */}
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {benefit.description}
              </p>

              {/* Hover gradient */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Benefits;
