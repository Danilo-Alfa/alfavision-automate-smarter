import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { XCircle, CheckCircle, ArrowRight } from "lucide-react";

const ProblemSolution = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const problems = [
    "Processos manuais que consomem horas todos os dias",
    "Erros humanos que geram retrabalho constante",
    "Ferramentas desconectadas sem comunicação",
    "Dificuldade para escalar operações",
  ];

  const solutions = [
    "Automatize tarefas em minutos, não semanas",
    "Reduza erros em até 95% com validações automáticas",
    "Conecte +200 apps nativamente",
    "Escale sem aumentar equipe proporcionalmente",
  ];

  return (
    <section ref={ref} className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Do caos à clareza
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Transforme a forma como sua equipe trabalha
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {/* Problem Card */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative p-8 rounded-2xl bg-destructive/5 border border-destructive/20"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-destructive/10">
                <XCircle className="w-6 h-6 text-destructive" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground">
                Sem AlfaVision
              </h3>
            </div>

            <ul className="space-y-4">
              {problems.map((problem, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <XCircle className="w-5 h-5 text-destructive/60 flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{problem}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Solution Card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative p-8 rounded-2xl bg-primary/5 border border-primary/20 glow-primary"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-primary/10">
                <CheckCircle className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground">
                Com AlfaVision
              </h3>
            </div>

            <ul className="space-y-4">
              {solutions.map((solution, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{solution}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Arrow between cards on desktop */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.4, delay: 0.5 }}
          className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
        >
          <div className="p-4 rounded-full bg-background border border-border shadow-xl">
            <ArrowRight className="w-6 h-6 text-primary" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSolution;
