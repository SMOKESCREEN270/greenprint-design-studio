import { motion } from "framer-motion";
import { Table2, CheckCircle2, LayoutDashboard, Users, BarChart3, Workflow } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { SectionHeading } from "@/components/SectionHeading";
import { CTASection } from "@/components/CTASection";
import { TestimonialCard } from "@/components/TestimonialCard";

const features = [
  {
    icon: LayoutDashboard,
    title: "Custom Dashboards",
    description: "Real-time visibility into your operations with dashboards built for your specific KPIs.",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Views and permissions tailored to each team member's role and responsibilities.",
  },
  {
    icon: BarChart3,
    title: "Reporting & Analytics",
    description: "Automated reports and visualizations that surface insights without manual effort.",
  },
  {
    icon: Workflow,
    title: "Process Automation",
    description: "Built-in automations that trigger actions, send notifications, and update records.",
  },
];

const useCases = [
  "Project Management Systems",
  "Sales CRM & Pipeline Tracking",
  "Inventory Management",
  "Client Portals",
  "Operations Dashboards",
  "Resource Planning",
  "Content Calendars",
  "Vendor Management",
];

const testimonials = [
  {
    quote: "Josh No Code revolutionized our workflow with seamless automation solutions. Their personalized approach and excellent support have made a remarkable impact on our productivity.",
    author: "Julia Sung",
    company: "Onthemove Inc",
  },
  {
    quote: "We have used Josh No Code for multiple, complex data migration projects. Their team showed amazing creativity and proficiency at their jobs.",
    author: "Matthew Morrisson",
    company: "Acculynx",
  },
];

export default function Airtable() {
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
              <Table2 className="w-4 h-4" />
              Airtable Systems
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6"
            >
              Custom Tools{" "}
              <span className="text-gradient">Your Team Will Actually Use</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-muted-foreground max-w-2xl mx-auto"
            >
              We design and build custom Airtable tools to power your team — dashboards, CRMs, 
              and project trackers built around your real workflow, not a template.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <SectionHeading
            label="Capabilities"
            title="Built for Your Workflow"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-2xl border border-border/50 bg-card/30 hover:border-primary/20 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {feature.description}
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
                title="What Can We Build?"
                description="From simple project trackers to complex operational hubs, we build Airtable systems that scale with your business."
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

            {/* Why Airtable */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute inset-0 bg-primary/5 rounded-3xl blur-3xl" />
              <div className="relative p-8 rounded-2xl border border-border/50 bg-card/50">
                <h3 className="font-display text-xl font-semibold text-foreground mb-4">
                  Why Airtable?
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-medium text-foreground">Flexible & Powerful</p>
                      <p className="text-sm text-muted-foreground">Adapts to any workflow without rigid structure</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-medium text-foreground">Easy to Use</p>
                      <p className="text-sm text-muted-foreground">Intuitive interface your team will adopt quickly</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-medium text-foreground">Highly Integrable</p>
                      <p className="text-sm text-muted-foreground">Connects with 1000+ tools via native integrations</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-medium text-foreground">Cost Effective</p>
                      <p className="text-sm text-muted-foreground">Fraction of the cost of custom software development</p>
                    </div>
                  </li>
                </ul>
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
            title="What Clients Are Saying"
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
        title="Ready to Build Your System?"
        description="Let's design an Airtable solution that fits your team's unique workflow."
        primaryCTA={{ text: "Get Started", href: "/contact" }}
        secondaryCTA={{ text: "View Process", href: "/process" }}
      />
    </Layout>
  );
}
