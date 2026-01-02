import { motion } from "framer-motion";
import { Users, Target, Heart, Award, CheckCircle2 } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { SectionHeading } from "@/components/SectionHeading";
import { CTASection } from "@/components/CTASection";

const values = [
  {
    icon: Target,
    title: "Results-Focused",
    description: "We measure success by the hours saved and problems solved, not just deliverables shipped.",
  },
  {
    icon: Users,
    title: "Client Partnership",
    description: "We work alongside you as partners, not just vendors. Your success is our success.",
  },
  {
    icon: Heart,
    title: "Quality First",
    description: "Every automation is built to last — tested, documented, and designed for reliability.",
  },
  {
    icon: Award,
    title: "Continuous Learning",
    description: "We stay ahead of the curve, constantly exploring new tools and techniques.",
  },
];

const stats = [
  { number: "500+", label: "Automations Built" },
  { number: "100+", label: "Clients Served" },
  { number: "10,000+", label: "Hours Saved" },
  { number: "5.0", label: "Average Rating" },
];

const expertise = [
  "Zapier Certified Expert",
  "Make.com (Integromat) Partner",
  "Airtable Consultant",
  "API Integration Specialist",
  "Data Migration Expert",
  "Process Optimization",
];

export default function About() {
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
              Automation Experts Who{" "}
              <span className="text-gradient">Actually Deliver</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-muted-foreground max-w-2xl mx-auto"
            >
              We're a team of automation specialists helping businesses eliminate manual work, 
              reduce errors, and scale their operations efficiently.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 border-y border-border/50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="font-display text-4xl md:text-5xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <SectionHeading
                label="Our Story"
                title="From Side Project to Full-Time Mission"
                align="left"
              />
              <div className="mt-6 space-y-4 text-muted-foreground">
                <p>
                  We started automating our own workflows and quickly realized the transformative 
                  power of eliminating repetitive tasks. What began as optimizing our own processes 
                  turned into helping friends and colleagues do the same.
                </p>
                <p>
                  Today, we work with businesses of all sizes — from solo entrepreneurs to 
                  $50M+ operations — helping them reclaim thousands of hours and scale 
                  without scaling headcount.
                </p>
                <p>
                  Our approach is simple: understand your workflow, identify the bottlenecks, 
                  and build solutions that work seamlessly with your existing tools.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute inset-0 bg-primary/5 rounded-3xl blur-3xl" />
              <div className="relative p-8 rounded-2xl border border-border/50 bg-card/50">
                <h3 className="font-display text-xl font-semibold text-foreground mb-6">
                  Our Expertise
                </h3>
                <div className="space-y-4">
                  {expertise.map((item, index) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-foreground">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-card/30">
        <div className="container mx-auto px-6">
          <SectionHeading
            label="Our Values"
            title="What Drives Us"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-2xl border border-border/50 bg-background/50 hover:border-primary/20 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Ready to Work Together?"
        description="Let's discuss how we can help transform your operations."
        primaryCTA={{ text: "Get in Touch", href: "/contact" }}
        secondaryCTA={{ text: "View Services", href: "/automation" }}
      />
    </Layout>
  );
}
