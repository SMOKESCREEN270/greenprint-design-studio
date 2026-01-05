import { motion } from "framer-motion";
import { Mail, Calendar, MessageCircle, ArrowRight, Clock, CheckCircle2 } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/SectionHeading";

const contactMethods = [
  {
    icon: Calendar,
    title: "Schedule a Call",
    description: "Book a 30-minute strategy call to discuss your automation needs.",
    cta: "Book Now",
    href: "https://calendly.com",
    primary: true,
  },
  {
    icon: Mail,
    title: "Send an Email",
    description: "Prefer email? Drop us a line and we'll respond within 24 hours.",
    cta: "Email Us",
    href: "mailto:hello@labcraftsolutions.com",
    primary: false,
  },
];

const expectations = [
  "Understand your current workflow and pain points",
  "Identify automation opportunities with the highest ROI",
  "Discuss potential solutions and timeline",
  "Answer any questions about our process and pricing",
];

export default function Contact() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px]">
            <div className="w-full h-full bg-primary/5 rounded-full blur-[150px]" />
          </div>
        </div>

        <div className="container mx-auto px-6 relative">
          <div className="max-w-4xl mx-auto text-center">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6"
            >
              <MessageCircle className="w-4 h-4" />
              Let's Talk
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6"
            >
              Ready to{" "}
              <span className="text-gradient">Transform Your Workflow</span>?
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-muted-foreground max-w-2xl mx-auto"
            >
              In 30 minutes, we'll show you exactly what's broken, what's possible, 
              and how to make automation your unfair advantage.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {contactMethods.map((method, index) => (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative group"
              >
                <div className={`h-full p-8 rounded-2xl border transition-all duration-300 ${
                  method.primary 
                    ? "border-primary/30 bg-primary/5 hover:border-primary/50 hover:shadow-[0_0_40px_hsl(120_97%_36%/0.15)]"
                    : "border-border/50 bg-card/30 hover:border-primary/20"
                }`}>
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${
                    method.primary ? "bg-primary" : "bg-muted"
                  }`}>
                    <method.icon className={`w-7 h-7 ${
                      method.primary ? "text-primary-foreground" : "text-primary"
                    }`} />
                  </div>

                  <h3 className="font-display text-2xl font-semibold text-foreground mb-3">
                    {method.title}
                  </h3>

                  <p className="text-muted-foreground mb-6">
                    {method.description}
                  </p>

                  <a
                    href={method.href}
                    target={method.href.startsWith("http") ? "_blank" : undefined}
                    rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  >
                    <Button 
                      variant={method.primary ? "hero" : "outline-glow"} 
                      size="lg"
                      className="w-full"
                    >
                      {method.cta}
                      <ArrowRight className="w-5 h-5" />
                    </Button>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-24 bg-card/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <SectionHeading
              label="What to Expect"
              title="Your Strategy Call"
              description="A focused 30-minute conversation designed to understand your needs and explore solutions."
            />

            <div className="grid md:grid-cols-2 gap-6 mt-16">
              {/* Expectations list */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                {expectations.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </motion.div>

              {/* Time commitment */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="p-6 rounded-2xl border border-border/50 bg-background/50"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">30 Minutes</p>
                    <p className="text-sm text-muted-foreground">Quick & Focused</p>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm">
                  No pressure, no obligation. Just a straightforward conversation about 
                  your business and how automation might help.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
              Have a quick question?
            </h2>
            <p className="text-muted-foreground mb-8">
              Check out our <a href="/process" className="text-primary hover:underline">Process page</a> for 
              common questions, or email us directly at{" "}
              <a href="mailto:hello@labcraftsolutions.com" className="text-primary hover:underline">
                hello@labcraftsolutions.com
              </a>
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
