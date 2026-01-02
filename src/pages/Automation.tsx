import { motion } from "framer-motion";
import { Zap, CheckCircle2, ArrowRight, Workflow, RefreshCw, Bot, Shield } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { SectionHeading } from "@/components/SectionHeading";
import { CTASection } from "@/components/CTASection";
import { TestimonialCard } from "@/components/TestimonialCard";

const benefits = [
  {
    icon: Workflow,
    title: "Eliminate Repetitive Tasks",
    description: "Free your team from manual data entry, follow-ups, and routine processes that drain productivity.",
  },
  {
    icon: RefreshCw,
    title: "Real-Time Sync",
    description: "Keep all your tools connected and data flowing automatically between platforms.",
  },
  {
    icon: Bot,
    title: "Smart Triggers",
    description: "Set up intelligent automations that respond to events, conditions, and schedules.",
  },
  {
    icon: Shield,
    title: "Error Prevention",
    description: "Reduce human error with validated, consistent processes that run the same way every time.",
  },
];

const tools = [
  "Zapier", "Make.com", "HubSpot", "Salesforce", "QuickBooks", 
  "Shopify", "Airtable", "Slack", "Google Workspace", "Microsoft 365",
  "DocuSign", "Stripe", "Twilio", "Calendly", "Custom APIs"
];

const useCases = [
  "Lead routing and follow-up sequences",
  "Invoice generation and payment reminders",
  "Customer onboarding workflows",
  "Inventory updates across platforms",
  "Report generation and distribution",
  "Team notifications and task assignments",
  "Data enrichment and validation",
  "Cross-platform data synchronization",
];

const testimonials = [
  {
    quote: "Josh automated our entire operation, from service visit scheduling to paperwork, invoicing, and team communication. It saves us approximately 160 hours every month.",
    author: "Daniel Goaillard",
    company: "DS Water",
  },
  {
    quote: "Josh's approach and automation skills, particularly with Zapier, has transformed our QuickBooks invoicing. His automations save us countless hours each week.",
    author: "Mike Anthony",
    company: "Smart ERC",
  },
];

export default function Automation() {
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
              <Zap className="w-4 h-4" />
              Automation Consulting
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6"
            >
              Stop Doing Tasks That{" "}
              <span className="text-gradient">Machines Should Handle</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-muted-foreground max-w-2xl mx-auto"
            >
              We build automated workflows using Zapier, Make, and custom scripts — 
              so you can eliminate repetitive tasks, reduce human error, and move faster.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <SectionHeading
            label="Why Automate"
            title="Transform How Your Business Operates"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-2xl border border-border/50 bg-card/30 hover:border-primary/20 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-24 bg-card/30">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeading
                label="Use Cases"
                title="What Can We Automate?"
                description="From simple task automation to complex multi-step workflows, we've built it all."
                align="left"
              />

              <div className="grid sm:grid-cols-2 gap-4 mt-10">
                {useCases.map((useCase, index) => (
                  <motion.div
                    key={useCase}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground/80">{useCase}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Tools we use */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute inset-0 bg-primary/5 rounded-3xl blur-3xl" />
              <div className="relative p-8 rounded-2xl border border-border/50 bg-card/50">
                <h3 className="font-display text-xl font-semibold text-foreground mb-6">
                  Tools We Work With
                </h3>
                <div className="flex flex-wrap gap-3">
                  {tools.map((tool) => (
                    <span
                      key={tool}
                      className="px-4 py-2 rounded-lg bg-muted/50 border border-border/50 text-foreground/80 text-sm"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <SectionHeading
            label="Results"
            title="Real Impact, Real Savings"
          />

          <div className="grid md:grid-cols-2 gap-6 mt-16 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={testimonial.author} {...testimonial} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Ready to Automate Your Workflows?"
        description="Let's discuss your current processes and identify opportunities for automation."
        primaryCTA={{ text: "Get Started", href: "/contact" }}
        secondaryCTA={{ text: "View Process", href: "/process" }}
      />
    </Layout>
  );
}
