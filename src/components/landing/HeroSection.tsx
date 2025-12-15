import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Sparkles } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0 hero-gradient" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "1s" }} />
      
      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border mb-8"
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">
              Nova versão 2.0 disponível
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground mb-6"
          >
            Automatize fluxos.{" "}
            <span className="gradient-text">Libere potencial.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 text-balance"
          >
            Elimine tarefas repetitivas e reduza erros humanos. O AlfaVision conecta suas ferramentas 
            e automatiza processos em minutos — sem precisar escrever uma linha de código.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button variant="hero" size="xl" className="group">
              Experimente grátis
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="heroOutline" size="xl" className="group">
              <Play className="w-5 h-5" />
              Ver demonstração
            </Button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-16 flex flex-col items-center gap-4"
          >
            <p className="text-sm text-muted-foreground">
              Confiado por +500 empresas em todo o Brasil
            </p>
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="w-5 h-5 text-primary"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
              <span className="ml-2 text-sm text-foreground font-medium">4.9/5</span>
              <span className="text-sm text-muted-foreground ml-1">(2.4k avaliações)</span>
            </div>
          </motion.div>
        </div>

        {/* Hero Visual */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 relative"
        >
          <div className="relative max-w-5xl mx-auto">
            {/* Glow Effect */}
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 rounded-2xl blur-2xl opacity-50" />
            
            {/* Dashboard Preview */}
            <div className="relative rounded-xl overflow-hidden border border-border bg-card/50 backdrop-blur-sm">
              <div className="aspect-video bg-gradient-to-br from-secondary via-card to-secondary p-8 flex items-center justify-center">
                {/* Abstract Workflow Visualization */}
                <div className="w-full max-w-3xl">
                  <div className="flex items-center justify-between gap-4">
                    {/* Node 1 */}
                    <motion.div
                      animate={{ y: [0, -10, 0] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                      className="flex-1 p-6 rounded-xl bg-background/50 border border-border backdrop-blur-sm"
                    >
                      <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center mb-3">
                        <div className="w-4 h-4 rounded bg-primary" />
                      </div>
                      <div className="h-2 w-20 bg-muted-foreground/20 rounded mb-2" />
                      <div className="h-2 w-16 bg-muted-foreground/10 rounded" />
                    </motion.div>

                    {/* Connection Line */}
                    <div className="flex-shrink-0 w-12 h-[2px] bg-gradient-to-r from-primary to-accent" />

                    {/* Node 2 */}
                    <motion.div
                      animate={{ y: [0, -10, 0] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                      className="flex-1 p-6 rounded-xl bg-background/50 border border-primary/30 backdrop-blur-sm glow-primary"
                    >
                      <div className="w-10 h-10 rounded-lg bg-primary/30 flex items-center justify-center mb-3">
                        <Sparkles className="w-5 h-5 text-primary" />
                      </div>
                      <div className="h-2 w-24 bg-primary/30 rounded mb-2" />
                      <div className="h-2 w-20 bg-primary/20 rounded" />
                    </motion.div>

                    {/* Connection Line */}
                    <div className="flex-shrink-0 w-12 h-[2px] bg-gradient-to-r from-accent to-primary" />

                    {/* Node 3 */}
                    <motion.div
                      animate={{ y: [0, -10, 0] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                      className="flex-1 p-6 rounded-xl bg-background/50 border border-border backdrop-blur-sm"
                    >
                      <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center mb-3">
                        <div className="w-4 h-4 rounded-full bg-accent" />
                      </div>
                      <div className="h-2 w-20 bg-muted-foreground/20 rounded mb-2" />
                      <div className="h-2 w-14 bg-muted-foreground/10 rounded" />
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
