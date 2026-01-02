import { motion } from "framer-motion";
import { Quote } from "lucide-react";

interface TestimonialCardProps {
  quote: string;
  author: string;
  company: string;
  index?: number;
}

export function TestimonialCard({ quote, author, company, index = 0 }: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative"
    >
      <div className="relative h-full p-8 rounded-2xl border border-border/50 bg-card/30 backdrop-blur-sm transition-all duration-500 hover:border-primary/20 hover:bg-card/50">
        {/* Quote icon */}
        <div className="absolute -top-3 -left-3 w-10 h-10 rounded-lg bg-primary flex items-center justify-center shadow-[0_0_20px_hsl(120_97%_36%/0.3)]">
          <Quote className="w-5 h-5 text-primary-foreground" />
        </div>

        {/* Quote text */}
        <p className="text-foreground/90 leading-relaxed mb-6 mt-4 line-clamp-6">
          "{quote}"
        </p>

        {/* Author info */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
            <span className="text-sm font-semibold text-primary">
              {author.split(" ").map(n => n[0]).join("")}
            </span>
          </div>
          <div>
            <p className="font-medium text-foreground">{author}</p>
            <p className="text-sm text-muted-foreground">{company}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
