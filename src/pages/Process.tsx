import { motion } from "framer-motion";
import { Phone, FileText, Rocket, MessageCircle, Calendar, CheckCircle2, Clock } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { SectionHeading } from "@/components/SectionHeading";
import { CTASection } from "@/components/CTASection";
import { ProcessStep } from "@/components/ProcessStep";

const processSteps = [
  {
    icon: Phone,
    title: "Strategy Call",
    description: "We'll talk through your goals, tech stack, and pain points to see how we can help — no pressure, just clarity.",
  },
  {
    icon: FileText,
    title: "Scope & Proposal",
    description: "You get a detailed proposal with timelines, deliverables, and clear pricing. No hidden fees or surprises.",
  },
  {
    icon: Rocket,
    title: "Build & Test",
    description: "We build and automate behind the scenes, keeping you updated with progress reports and demos along the way.",
  },
  {
    icon: CheckCircle2,
    title: "Launch & Support",
    description: "We deliver a tested, working solution. You get documentation, training, and ongoing support as needed.",
  },
];

const principles = [
  {
    title: "Transparent Communication",
    description: "Regular updates, clear timelines, and honest conversations about what's possible.",
    icon: MessageCircle,
  },
  {
    title: "Fast Turnaround",
    description: "Most projects delivered within 2-4 weeks. Complex migrations planned meticulously.",
    icon: Clock,
  },
  {
    title: "Ongoing Support",
    description: "We don't disappear after delivery. Questions, tweaks, and adjustments are always welcome.",
    icon: Calendar,
  },
];

const faqs = [
  {
    question: "How long does a typical project take?",
    answer: "Most automation projects are completed within 1-2 weeks. Data migrations vary based on volume and complexity, typically 2-4 weeks. Airtable systems can range from 1-6 weeks depending on scope.",
  },
  {
    question: "What's your pricing model?",
    answer: "We offer project-based pricing with clear scopes and deliverables. For ongoing work, we also offer retainer arrangements. All pricing is transparent and agreed upon before work begins.",
  },
  {
    question: "Do you offer ongoing support?",
    answer: "Absolutely. We provide documentation and training with every project, and offer ongoing support packages for clients who need continued assistance.",
  },
  {
    question: "What if the automation breaks?",
    answer: "All our automations include error handling and monitoring. If something goes wrong, we're notified automatically and can fix it quickly. We also include a warranty period with every project.",
  },
];

export default function Process() {
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
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6"
            >
              Simple Process,{" "}
              <span className="text-gradient">Exceptional Results</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-muted-foreground max-w-2xl mx-auto"
            >
              Every project is different, but our process is simple, fast, and built around your business.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <SectionHeading
            label="How It Works"
            title="From Discovery to Delivery"
          />

          <div className="max-w-2xl mx-auto mt-16">
            {processSteps.map((step, index) => (
              <ProcessStep
                key={step.title}
                number={index + 1}
                title={step.title}
                description={step.description}
                icon={step.icon}
                isLast={index === processSteps.length - 1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="py-24 bg-card/30">
        <div className="container mx-auto px-6">
          <SectionHeading
            label="Our Approach"
            title="What Makes Us Different"
          />

          <div className="grid md:grid-cols-3 gap-6 mt-16">
            {principles.map((principle, index) => (
              <motion.div
                key={principle.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 rounded-2xl border border-border/50 bg-background/50 hover:border-primary/20 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <principle.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  {principle.title}
                </h3>
                <p className="text-muted-foreground">
                  {principle.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <SectionHeading
            label="FAQ"
            title="Common Questions"
          />

          <div className="max-w-3xl mx-auto mt-16 space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-2xl border border-border/50 bg-card/30"
              >
                <h3 className="font-display text-lg font-semibold text-foreground mb-3">
                  {faq.question}
                </h3>
                <p className="text-muted-foreground">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Ready to Get Started?"
        description="Book a strategy call and let's discuss how we can help automate your business."
        primaryCTA={{ text: "Book a Call", href: "/contact" }}
      />
    </Layout>
  );
}
