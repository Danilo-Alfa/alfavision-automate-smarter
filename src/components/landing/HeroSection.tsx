import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Sparkles, Activity, Zap, TrendingUp, Cpu, Database, Shield, Globe, Clock, CheckCircle2 } from "lucide-react";
import AuroraText from "@/components/effects/AuroraText";
import MagneticButton from "@/components/effects/MagneticButton";
import GlowingOrb from "@/components/effects/GlowingOrb";
import TextReveal from "@/components/effects/TextReveal";

const HeroSection = () => {
  // Simulated chart data points
  const chartPoints = [20, 45, 30, 65, 40, 80, 55, 90, 70, 95, 85, 100];
  const chartPoints2 = [10, 25, 40, 35, 55, 45, 70, 60, 80, 75, 90, 85];

  // Time labels for X axis
  const timeLabels = ["00h", "02h", "04h", "06h", "08h", "10h", "12h", "14h", "16h", "18h", "20h", "22h"];

  // Generate SVG path from points
  const generatePath = (points: number[], height: number, width: number) => {
    const step = width / (points.length - 1);
    return points
      .map((point, i) => {
        const x = i * step;
        const y = height - (point / 100) * height;
        return `${i === 0 ? "M" : "L"} ${x} ${y}`;
      })
      .join(" ");
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0 hero-gradient" />

      {/* Animated Orbs */}
      <GlowingOrb
        size={500}
        color="primary"
        blur={120}
        className="top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2"
      />
      <GlowingOrb
        size={400}
        color="accent"
        blur={100}
        className="bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2"
      />

      {/* Static Grid Pattern - removed animation for performance */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                             linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      {/* Floating particles - reduced for performance */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary/30 rounded-full"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
            }}
            animate={{
              y: [0, -15, 0],
              opacity: [0.15, 0.4, 0.15],
            }}
            transition={{
              duration: 5 + i,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border mb-8 backdrop-blur-sm"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="w-4 h-4 text-primary" />
            </motion.div>
            <span className="text-sm text-muted-foreground">
              Nova versão 2.0 disponível
            </span>
            <motion.span
              className="w-2 h-2 rounded-full bg-primary"
              animate={{ scale: [1, 1.2, 1], opacity: [1, 0.7, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground mb-6"
          >
            <TextReveal delay={0.2}>Automatize fluxos.</TextReveal>{" "}
            <AuroraText className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
              Libere potencial.
            </AuroraText>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 text-balance"
          >
            Elimine tarefas repetitivas e reduza erros humanos. O AlfaVision conecta suas ferramentas
            e automatiza processos em minutos — sem precisar escrever uma linha de código.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <MagneticButton strength={0.2}>
              <Button variant="hero" size="xl" className="group">
                Experimente grátis
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </MagneticButton>
            <MagneticButton strength={0.15}>
              <Button variant="heroOutline" size="xl" className="group">
                <Play className="w-5 h-5" />
                Ver demonstração
              </Button>
            </MagneticButton>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-16 flex flex-col items-center gap-4"
          >
            <p className="text-sm text-muted-foreground">
              Confiado por +500 empresas em todo o Brasil
            </p>
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <motion.svg
                  key={i}
                  className="w-5 h-5 text-primary"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7 + i * 0.1 }}
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </motion.svg>
              ))}
              <span className="ml-2 text-sm text-foreground font-medium">4.9/5</span>
              <span className="text-sm text-muted-foreground ml-1">(2.4k avaliações)</span>
            </div>
          </motion.div>
        </div>

        {/* Hero Visual - Tech Dashboard */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-20 relative"
        >
          <div className="relative max-w-6xl mx-auto">
            {/* Glow Effect - simplified for performance */}
            <div
              className="absolute -inset-4 bg-gradient-to-r from-primary/15 via-accent/15 to-primary/15 rounded-2xl blur-2xl opacity-40"
            />

            {/* Dashboard Preview */}
            <div className="relative rounded-xl overflow-hidden border border-border bg-card/80 backdrop-blur-sm">
              {/* Window Controls */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-border bg-secondary/30">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <div className="px-4 py-1 rounded-md bg-background/50 text-xs text-muted-foreground">
                  app.alfavision.com.br/dashboard
                </div>
                <div className="flex items-center gap-2">
                  <motion.div
                    className="w-2 h-2 rounded-full bg-green-500"
                    animate={{ opacity: [1, 0.5, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  />
                  <span className="text-xs text-green-500">Live</span>
                </div>
              </div>

              {/* Dashboard Content */}
              <div className="p-6 bg-gradient-to-br from-background via-card to-background">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">

                  {/* Main Chart Area */}
                  <div className="lg:col-span-8 space-y-4">
                    {/* Stats Row */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      {[
                        { label: "Automações Ativas", value: "1,247", change: "+12%", icon: Zap, color: "text-primary" },
                        { label: "Execuções/Hora", value: "8,439", change: "+28%", icon: Activity, color: "text-green-500" },
                        { label: "Taxa de Sucesso", value: "99.9%", change: "+0.2%", icon: Shield, color: "text-accent" },
                        { label: "Tempo Economizado", value: "847h", change: "+45%", icon: TrendingUp, color: "text-primary" },
                      ].map((stat, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.7 + i * 0.1 }}
                          className="p-3 rounded-lg bg-secondary/50 border border-border"
                        >
                          <div className="flex items-center justify-between mb-2">
                            <stat.icon className={`w-4 h-4 ${stat.color}`} />
                            <span className="text-xs text-green-500">{stat.change}</span>
                          </div>
                          <div className="text-lg font-bold text-foreground">{stat.value}</div>
                          <div className="text-xs text-muted-foreground">{stat.label}</div>
                        </motion.div>
                      ))}
                    </div>

                    {/* Main Chart with Y-axis labels */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.9 }}
                      className="p-4 rounded-xl bg-secondary/30 border border-border"
                    >
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <h3 className="text-sm font-semibold text-foreground">Performance em Tempo Real</h3>
                          <p className="text-xs text-muted-foreground">Últimas 24 horas</p>
                        </div>
                        <div className="flex gap-4 text-xs">
                          <div className="flex items-center gap-1">
                            <div className="w-2 h-2 rounded-full bg-primary" />
                            <span className="text-muted-foreground">Execuções</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <div className="w-2 h-2 rounded-full bg-accent" />
                            <span className="text-muted-foreground">Sucesso</span>
                          </div>
                        </div>
                      </div>

                      {/* Chart with axes */}
                      <div className="flex">
                        {/* Y-axis labels */}
                        <div className="flex flex-col justify-between pr-2 text-[10px] text-muted-foreground h-32">
                          <span>10k</span>
                          <span>7.5k</span>
                          <span>5k</span>
                          <span>2.5k</span>
                          <span>0</span>
                        </div>

                        {/* Chart area */}
                        <div className="flex-1 relative">
                          <div className="relative h-32">
                            <svg className="w-full h-full" viewBox="0 0 400 100" preserveAspectRatio="none">
                              {/* Grid lines */}
                              {[0, 25, 50, 75, 100].map((y) => (
                                <line
                                  key={y}
                                  x1="0"
                                  y1={100 - y}
                                  x2="400"
                                  y2={100 - y}
                                  stroke="currentColor"
                                  strokeOpacity="0.1"
                                  strokeWidth="1"
                                />
                              ))}

                              {/* Vertical grid lines */}
                              {timeLabels.map((_, i) => (
                                <line
                                  key={i}
                                  x1={(i / (timeLabels.length - 1)) * 400}
                                  y1="0"
                                  x2={(i / (timeLabels.length - 1)) * 400}
                                  y2="100"
                                  stroke="currentColor"
                                  strokeOpacity="0.05"
                                  strokeWidth="1"
                                />
                              ))}

                              {/* Area fill for primary */}
                              <motion.path
                                d={`${generatePath(chartPoints, 100, 400)} L 400 100 L 0 100 Z`}
                                fill="url(#primaryGradient)"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 0.3 }}
                                transition={{ delay: 1, duration: 1 }}
                              />

                              {/* Line for primary */}
                              <motion.path
                                d={generatePath(chartPoints, 100, 400)}
                                fill="none"
                                stroke="hsl(185 100% 50%)"
                                strokeWidth="2"
                                initial={{ pathLength: 0 }}
                                animate={{ pathLength: 1 }}
                                transition={{ delay: 1, duration: 2, ease: "easeOut" }}
                              />

                              {/* Line for secondary */}
                              <motion.path
                                d={generatePath(chartPoints2, 100, 400)}
                                fill="none"
                                stroke="hsl(270 95% 65%)"
                                strokeWidth="2"
                                initial={{ pathLength: 0 }}
                                animate={{ pathLength: 1 }}
                                transition={{ delay: 1.2, duration: 2, ease: "easeOut" }}
                              />

                              {/* Data points for primary line */}
                              {chartPoints.map((point, i) => (
                                <motion.circle
                                  key={`p1-${i}`}
                                  cx={(i / (chartPoints.length - 1)) * 400}
                                  cy={100 - point}
                                  r="3"
                                  fill="hsl(185 100% 50%)"
                                  initial={{ opacity: 0, scale: 0 }}
                                  animate={{ opacity: 1, scale: 1 }}
                                  transition={{ delay: 1.5 + i * 0.05 }}
                                />
                              ))}

                              {/* Animated pulse dot */}
                              <motion.circle
                                cx="400"
                                cy={100 - chartPoints[chartPoints.length - 1]}
                                r="5"
                                fill="hsl(185 100% 50%)"
                                animate={{
                                  r: [5, 8, 5],
                                  opacity: [1, 0.5, 1]
                                }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                              />

                              {/* Gradient definitions */}
                              <defs>
                                <linearGradient id="primaryGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                  <stop offset="0%" stopColor="hsl(185 100% 50%)" stopOpacity="0.5" />
                                  <stop offset="100%" stopColor="hsl(185 100% 50%)" stopOpacity="0" />
                                </linearGradient>
                              </defs>
                            </svg>

                            {/* Scanning line effect - slowed down for performance */}
                            <motion.div
                              className="absolute top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/50 to-transparent"
                              animate={{ left: ["0%", "100%"] }}
                              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                            />
                          </div>

                          {/* X-axis labels */}
                          <div className="flex justify-between mt-2 text-[10px] text-muted-foreground">
                            {timeLabels.filter((_, i) => i % 2 === 0).map((label, i) => (
                              <span key={i}>{label}</span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>

                    {/* Bottom Stats Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {[
                        { label: "Regiões Ativas", value: "12", icon: Globe, desc: "Brasil, USA, EU" },
                        { label: "Uptime Mensal", value: "99.99%", icon: Clock, desc: "Último mês" },
                        { label: "Tasks Completas", value: "2.4M", icon: CheckCircle2, desc: "Este mês" },
                      ].map((item, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 1.3 + i * 0.1 }}
                          className="p-3 rounded-lg bg-secondary/30 border border-border flex items-center gap-3"
                        >
                          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                            <item.icon className="w-5 h-5 text-primary" />
                          </div>
                          <div>
                            <div className="text-sm font-bold text-foreground">{item.value}</div>
                            <div className="text-[10px] text-muted-foreground">{item.label}</div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Side Panel */}
                  <div className="lg:col-span-4 space-y-4">
                    {/* Live Activity */}
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1 }}
                      className="p-4 rounded-xl bg-secondary/30 border border-border"
                    >
                      <div className="flex items-center gap-2 mb-3">
                        <motion.div
                          className="w-2 h-2 rounded-full bg-green-500"
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 1, repeat: Infinity }}
                        />
                        <span className="text-sm font-semibold text-foreground">Atividade ao Vivo</span>
                      </div>

                      <div className="space-y-2">
                        {[
                          { action: "Webhook recebido", time: "agora", status: "success" },
                          { action: "Dados processados", time: "2s", status: "success" },
                          { action: "Email enviado", time: "5s", status: "success" },
                          { action: "Sincronização CRM", time: "8s", status: "pending" },
                          { action: "Backup concluído", time: "12s", status: "success" },
                        ].map((item, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, x: 10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 1.2 + i * 0.1 }}
                            className="flex items-center justify-between py-1.5 px-2 rounded bg-background/30"
                          >
                            <div className="flex items-center gap-2">
                              <motion.div
                                className={`w-1.5 h-1.5 rounded-full ${
                                  item.status === "success" ? "bg-green-500" : "bg-yellow-500"
                                }`}
                                animate={item.status === "pending" ? { opacity: [1, 0.3, 1] } : {}}
                                transition={{ duration: 1, repeat: Infinity }}
                              />
                              <span className="text-xs text-foreground">{item.action}</span>
                            </div>
                            <span className="text-xs text-muted-foreground">{item.time}</span>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>

                    {/* System Status */}
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1.2 }}
                      className="p-4 rounded-xl bg-secondary/30 border border-border"
                    >
                      <h4 className="text-sm font-semibold text-foreground mb-3">Status do Sistema</h4>

                      <div className="space-y-3">
                        {[
                          { label: "CPU", value: 42, icon: Cpu },
                          { label: "Memória", value: 68, icon: Database },
                          { label: "Rede", value: 89, icon: Activity },
                        ].map((item, i) => (
                          <div key={i} className="space-y-1">
                            <div className="flex items-center justify-between text-xs">
                              <div className="flex items-center gap-1.5 text-muted-foreground">
                                <item.icon className="w-3 h-3" />
                                {item.label}
                              </div>
                              <span className="text-foreground font-medium">{item.value}%</span>
                            </div>
                            <div className="h-1.5 rounded-full bg-background/50 overflow-hidden">
                              <motion.div
                                className={`h-full rounded-full ${
                                  item.value > 80 ? "bg-red-500" : item.value > 60 ? "bg-yellow-500" : "bg-primary"
                                }`}
                                initial={{ width: 0 }}
                                animate={{ width: `${item.value}%` }}
                                transition={{ delay: 1.4 + i * 0.1, duration: 1, ease: "easeOut" }}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </motion.div>

                    {/* Hexagon Tech Visual */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.4 }}
                      className="p-4 rounded-xl bg-secondary/30 border border-border relative overflow-hidden"
                    >
                      <div className="flex items-center justify-center h-24">
                        <svg viewBox="0 0 100 100" className="w-20 h-20">
                          {/* Hexagon outline */}
                          <motion.polygon
                            points="50,5 90,27.5 90,72.5 50,95 10,72.5 10,27.5"
                            fill="none"
                            stroke="hsl(185 100% 50%)"
                            strokeWidth="1"
                            initial={{ pathLength: 0, opacity: 0 }}
                            animate={{ pathLength: 1, opacity: 1 }}
                            transition={{ delay: 1.5, duration: 2 }}
                          />
                          {/* Inner hexagon */}
                          <motion.polygon
                            points="50,20 75,35 75,65 50,80 25,65 25,35"
                            fill="hsl(185 100% 50% / 0.1)"
                            stroke="hsl(270 95% 65%)"
                            strokeWidth="1"
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 1.7, duration: 0.5 }}
                          />
                          {/* Center dot */}
                          <motion.circle
                            cx="50"
                            cy="50"
                            r="4"
                            fill="hsl(185 100% 50%)"
                            initial={{ scale: 0 }}
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ delay: 1.8, duration: 1, repeat: Infinity }}
                          />
                          {/* Rotating elements */}
                          <motion.g
                            animate={{ rotate: 360 }}
                            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                            style={{ transformOrigin: "50px 50px" }}
                          >
                            {[0, 60, 120, 180, 240, 300].map((angle, i) => (
                              <circle
                                key={i}
                                cx={50 + 30 * Math.cos((angle * Math.PI) / 180)}
                                cy={50 + 30 * Math.sin((angle * Math.PI) / 180)}
                                r="2"
                                fill="hsl(185 100% 50% / 0.5)"
                              />
                            ))}
                          </motion.g>
                        </svg>
                      </div>
                      <div className="text-center">
                        <div className="text-xs text-muted-foreground">AI Engine</div>
                        <div className="text-sm font-semibold text-primary">Processando</div>
                      </div>
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
