import { motion } from "framer-motion";

interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export function SectionHeading({ label, title, description, align = "center" }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className={align === "center" ? "text-center max-w-3xl mx-auto" : "max-w-3xl"}
    >
      {label && (
        <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
          {label}
        </span>
      )}
      <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
        {title}
      </h2>
      {description && (
        <p className="text-lg text-muted-foreground leading-relaxed">
          {description}
        </p>
      )}
    </motion.div>
  );
}
