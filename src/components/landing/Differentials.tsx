import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, Brain, Headphones, Code2 } from "lucide-react";

const Differentials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const differentials = [
    {
      icon: Brain,
      title: "IA Integrada",
      description:
        "Nossa IA analisa seus fluxos e sugere melhorias automaticamente, aprendendo com seus padrões de uso.",
    },
    {
      icon: Shield,
      title: "Segurança Enterprise",
      description:
        "Criptografia ponta a ponta, SOC 2 Type II, LGPD compliant. Seus dados estão sempre protegidos.",
    },
    {
      icon: Code2,
      title: "API Aberta",
      description:
        "Para quando você precisar ir além: API RESTful completa e webhooks para integrações customizadas.",
    },
    {
      icon: Headphones,
      title: "Suporte Humano",
      description:
        "Atendimento real em português, não bots. Time dedicado para garantir seu sucesso.",
    },
  ];

  return (
    <section ref={ref} className="py-24 lg:py-32 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-6xl mx-auto">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block">
              Por que AlfaVision
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Não somos apenas{" "}
              <span className="gradient-text">mais uma ferramenta</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Enquanto outras ferramentas focam em quantidade de integrações, nós 
              focamos em qualidade da experiência. Cada detalhe foi pensado para 
              que você tenha resultados reais, não apenas dashboards bonitos.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div>
                <p className="font-display text-3xl lg:text-4xl font-bold text-primary">
                  99.9%
                </p>
                <p className="text-sm text-muted-foreground">Uptime garantido</p>
              </div>
              <div>
                <p className="font-display text-3xl lg:text-4xl font-bold text-primary">
                  &lt;50ms
                </p>
                <p className="text-sm text-muted-foreground">Latência média</p>
              </div>
              <div>
                <p className="font-display text-3xl lg:text-4xl font-bold text-primary">
                  24/7
                </p>
                <p className="text-sm text-muted-foreground">Suporte ativo</p>
              </div>
            </div>
          </motion.div>

          {/* Right content - Differential cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid sm:grid-cols-2 gap-4"
          >
            {differentials.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                className="p-5 rounded-xl bg-card border border-border hover:border-primary/20 transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Differentials;
