import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface CTASectionProps {
  title: string;
  description: string;
  primaryCTA: {
    text: string;
    href: string;
  };
  secondaryCTA?: {
    text: string;
    href: string;
  };
}

export function CTASection({ title, description, primaryCTA, secondaryCTA }: CTASectionProps) {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px]">
          <div className="w-full h-full bg-primary/10 rounded-full blur-[120px]" />
        </div>
      </div>

      <div className="container mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            {title}
          </h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
            {description}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to={primaryCTA.href}>
              <Button variant="hero" size="xl">
                {primaryCTA.text}
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
            {secondaryCTA && (
              <Link to={secondaryCTA.href}>
                <Button variant="outline-glow" size="xl">
                  {secondaryCTA.text}
                </Button>
              </Link>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
