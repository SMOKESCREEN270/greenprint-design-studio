import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface ProcessStepProps {
  number: number;
  title: string;
  description: string;
  icon: LucideIcon;
  isLast?: boolean;
}

export function ProcessStep({ number, title, description, icon: Icon, isLast = false }: ProcessStepProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: number * 0.15 }}
      className="relative flex gap-6"
    >
      {/* Timeline line */}
      {!isLast && (
        <div className="absolute left-6 top-16 bottom-0 w-px bg-gradient-to-b from-primary/50 to-border/30" />
      )}

      {/* Step number circle */}
      <div className="relative z-10 flex-shrink-0">
        <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center shadow-[0_0_20px_hsl(120_97%_36%/0.3)]">
          <span className="text-primary-foreground font-display font-bold">{number}</span>
        </div>
      </div>

      {/* Content */}
      <div className="pb-12">
        <div className="flex items-center gap-3 mb-3">
          <Icon className="w-5 h-5 text-primary" />
          <h3 className="font-display text-xl font-semibold text-foreground">{title}</h3>
        </div>
        <p className="text-muted-foreground leading-relaxed max-w-md">
          {description}
        </p>
      </div>
    </motion.div>
  );
}
