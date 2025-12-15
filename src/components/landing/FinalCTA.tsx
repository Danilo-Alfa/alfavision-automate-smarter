import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Check } from "lucide-react";
import MagneticButton from "@/components/effects/MagneticButton";
import AuroraText from "@/components/effects/AuroraText";
import GlowingOrb from "@/components/effects/GlowingOrb";

const FinalCTA = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const trustSignals = [
    "Setup em 5 minutos",
    "Sem cartao de credito",
    "Cancele quando quiser",
  ];

  return (
    <section ref={ref} className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 hero-gradient" />

      {/* Animated orbs */}
      <GlowingOrb
        size={600}
        color="primary"
        blur={150}
        className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      />
      <GlowingOrb
        size={400}
        color="accent"
        blur={100}
        className="top-0 right-0"
      />

      {/* Animated grid */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8 backdrop-blur-sm"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="w-4 h-4 text-primary" />
            </motion.div>
            <span className="text-sm text-primary font-medium">
              14 dias gratis, sem cartao de credito
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6"
          >
            Pronto para transformar sua{" "}
            <AuroraText className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold">
              produtividade?
            </AuroraText>
          </motion.h2>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto"
          >
            Junte-se a mais de 500 empresas que ja economizam tempo e dinheiro
            com automacao inteligente.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <MagneticButton strength={0.25}>
              <Button variant="glow" size="xl" className="group relative overflow-hidden">
                <span className="relative z-10 flex items-center gap-2">
                  Comecar agora — e gratis
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </span>
                {/* Shimmer effect */}
                <motion.div
                  className="absolute inset-0 -translate-x-full"
                  animate={{ x: ["-100%", "200%"] }}
                  transition={{
                    repeat: Infinity,
                    repeatDelay: 2,
                    duration: 1.5,
                    ease: "easeInOut",
                  }}
                  style={{
                    background:
                      "linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)",
                  }}
                />
              </Button>
            </MagneticButton>
            <MagneticButton strength={0.15}>
              <Button variant="heroOutline" size="lg">
                Agendar demonstracao
              </Button>
            </MagneticButton>
          </motion.div>

          {/* Trust signals */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-6"
          >
            {trustSignals.map((signal, index) => (
              <motion.span
                key={signal}
                initial={{ opacity: 0, x: -10 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.6 + index * 0.1 }}
                className="flex items-center gap-2 text-sm text-muted-foreground"
              >
                <motion.div
                  className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center"
                  whileHover={{ scale: 1.2 }}
                >
                  <Check className="w-3 h-3 text-primary" />
                </motion.div>
                {signal}
              </motion.span>
            ))}
          </motion.div>

          {/* Decorative elements */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
