import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Workflow,
  Zap,
  Shield,
  Globe2,
  Code2,
  BarChart3,
  Layers,
  Sparkles
} from "lucide-react";
import TiltCard from "@/components/effects/TiltCard";

const BentoFeatures = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: Workflow,
      title: "Visual Flow Builder",
      description: "Construa automações complexas com nossa interface visual intuitiva. Arraste, solte e conecte em minutos.",
      gradient: "from-primary/20 to-primary/5",
      span: "col-span-2 row-span-2",
      iconSize: "lg",
    },
    {
      icon: Zap,
      title: "Execução em tempo real",
      description: "Processamento instantâneo com latência mínima.",
      gradient: "from-accent/20 to-accent/5",
      span: "col-span-1",
      iconSize: "md",
    },
    {
      icon: Shield,
      title: "Segurança Enterprise",
      description: "Criptografia ponta-a-ponta e conformidade LGPD.",
      gradient: "from-green-500/20 to-green-500/5",
      span: "col-span-1",
      iconSize: "md",
    },
    {
      icon: Globe2,
      title: "200+ Integrações",
      description: "Conecte todas as ferramentas que você já usa: Slack, Salesforce, HubSpot, Google Sheets e muito mais.",
      gradient: "from-blue-500/20 to-blue-500/5",
      span: "col-span-2",
      iconSize: "md",
    },
    {
      icon: Code2,
      title: "API Flexível",
      description: "SDK completo para customizações avançadas.",
      gradient: "from-orange-500/20 to-orange-500/5",
      span: "col-span-1",
      iconSize: "md",
    },
    {
      icon: BarChart3,
      title: "Analytics Avançado",
      description: "Dashboards em tempo real para acompanhar performance.",
      gradient: "from-pink-500/20 to-pink-500/5",
      span: "col-span-1",
      iconSize: "md",
    },
    {
      icon: Layers,
      title: "Templates prontos",
      description: "Biblioteca com +50 templates de automação.",
      gradient: "from-yellow-500/20 to-yellow-500/5",
      span: "col-span-1",
      iconSize: "md",
    },
    {
      icon: Sparkles,
      title: "AI-Powered",
      description: "Sugestões inteligentes de automação baseadas em IA.",
      gradient: "from-primary/20 to-accent/5",
      span: "col-span-1",
      iconSize: "md",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section ref={ref} className="py-24 lg:py-32 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block">
            Recursos
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Ferramentas <span className="gradient-text">poderosas</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tudo que você precisa para construir automações profissionais
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 max-w-6xl mx-auto"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={feature.span}
            >
              <TiltCard className="h-full" glareEnabled={true}>
                <div
                  className={`h-full p-6 lg:p-8 rounded-2xl border border-border bg-gradient-to-br ${feature.gradient} backdrop-blur-sm relative overflow-hidden group`}
                >
                  {/* Animated background pattern */}
                  <div className="absolute inset-0 opacity-30">
                    <div
                      className="absolute inset-0"
                      style={{
                        backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
                        backgroundSize: "24px 24px",
                      }}
                    />
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    <div
                      className={`${
                        feature.iconSize === "lg" ? "w-16 h-16" : "w-12 h-12"
                      } rounded-xl bg-background/50 border border-border flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <feature.icon
                        className={`${
                          feature.iconSize === "lg" ? "w-8 h-8" : "w-6 h-6"
                        } text-primary`}
                      />
                    </div>

                    <h3
                      className={`font-display ${
                        feature.iconSize === "lg" ? "text-2xl" : "text-lg"
                      } font-semibold text-foreground mb-2`}
                    >
                      {feature.title}
                    </h3>
                    <p
                      className={`text-muted-foreground ${
                        feature.iconSize === "lg" ? "text-base" : "text-sm"
                      } leading-relaxed`}
                    >
                      {feature.description}
                    </p>
                  </div>

                  {/* Hover glow */}
                  <div className="absolute inset-0 rounded-2xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default BentoFeatures;
