import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
  features?: string[];
  index?: number;
}

export function ServiceCard({ title, description, icon: Icon, href, features, index = 0 }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link to={href} className="block group">
        <div className="relative h-full p-8 rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm transition-all duration-500 hover:border-primary/30 hover:shadow-[0_0_40px_hsl(120_97%_36%/0.1)] hover:-translate-y-1">
          {/* Gradient overlay on hover */}
          <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent rounded-2xl" />
          </div>

          <div className="relative">
            {/* Icon */}
            <div className="w-14 h-14 rounded-xl bg-muted flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors duration-300">
              <Icon className="w-7 h-7 text-primary" />
            </div>

            {/* Title */}
            <h3 className="font-display text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
              {title}
            </h3>

            {/* Description */}
            <p className="text-muted-foreground mb-6 leading-relaxed">
              {description}
            </p>

            {/* Features list */}
            {features && (
              <ul className="space-y-2 mb-6">
                {features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
            )}

            {/* CTA */}
            <div className="inline-flex items-center gap-2 text-primary font-medium">
              <span>Learn more</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
