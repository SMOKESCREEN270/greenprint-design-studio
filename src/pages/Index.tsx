import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Zap, Database, Table2, Play, Star, CheckCircle2 } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ServiceCard } from "@/components/ServiceCard";
import { TestimonialCard } from "@/components/TestimonialCard";
import { SectionHeading } from "@/components/SectionHeading";
import { CTASection } from "@/components/CTASection";

const services = [
  {
    title: "Automation Consulting",
    description: "We build automated workflows using Zapier, Make, and custom scripts — eliminating repetitive tasks and reducing human error.",
    icon: Zap,
    href: "/automation",
    features: ["Zapier & Make.com", "Custom integrations", "Error reduction"],
  },
  {
    title: "Data Migration",
    description: "We handle complex data transfers between platforms — job records, photos, documents, and more. Fully automated, zero cleanup.",
    icon: Database,
    href: "/data-migration",
    features: ["CRM transfers", "Document migration", "Zero data loss"],
  },
  {
    title: "Airtable Systems",
    description: "Custom Airtable tools to power your team — dashboards, CRMs, and project trackers built around your real workflow.",
    icon: Table2,
    href: "/airtable",
    features: ["Custom dashboards", "Workflow automation", "Team collaboration"],
  },
];

const testimonials = [
  {
    quote: "Josh No Code has been an exceptional asset. Their ability to quickly understand our complex operations and recommend no-code solutions saved our team countless hours and reduced costly manual errors.",
    author: "Greg Bobbitt",
    company: "Birdcreek Roofing Company",
  },
  {
    quote: "Josh is the automation king! He automated our entire operation, from service visit scheduling to paperwork, invoicing, and team communication. It saves us approximately 160 hours every month.",
    author: "Daniel Goaillard",
    company: "DS Water",
  },
  {
    quote: "Josh's approach and automation skills transformed our QuickBooks invoicing. His automations save us countless hours each week. A true game-changer for our business!",
    author: "Mike Anthony",
    company: "Smart ERC",
  },
];

const integrations = [
  "Zapier", "Make.com", "HubSpot", "Airtable", "QuickBooks", "Shopify", 
  "DocuSign", "Slack", "Google Sheets", "Salesforce", "Stripe", "Notion"
];

export default function Index() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Background effects */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Hero glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[600px]">
            <div className="w-full h-full bg-primary/5 rounded-full blur-[150px]" />
          </div>
          {/* Grid pattern */}
          <div className="absolute inset-0 grid-pattern opacity-30" />
        </div>

        <div className="container mx-auto px-6 relative">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-8">
                <Zap className="w-4 h-4" />
                Trusted by 100+ businesses worldwide
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 text-balance leading-tight"
            >
              Manual Work Is{" "}
              <span className="text-gradient">Killing Your Business</span>
              {" "}— Automate It
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto"
            >
              Unleash the power of automation. Slash your workload, eliminate errors, 
              and supercharge your team's productivity.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link to="/contact">
                <Button variant="hero" size="xl">
                  Talk with an Expert
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Link to="/process">
                <Button variant="outline-glow" size="xl">
                  <Play className="w-5 h-5" />
                  See How It Works
                </Button>
              </Link>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-16 flex flex-wrap items-center justify-center gap-6 text-muted-foreground"
            >
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full bg-muted border-2 border-background flex items-center justify-center">
                      <Star className="w-4 h-4 text-primary" fill="currentColor" />
                    </div>
                  ))}
                </div>
                <span className="text-sm">5.0 Rating</span>
              </div>
              <div className="w-px h-6 bg-border hidden sm:block" />
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                <span className="text-sm">500+ Automations Built</span>
              </div>
              <div className="w-px h-6 bg-border hidden sm:block" />
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                <span className="text-sm">10,000+ Hours Saved</span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 rounded-full border-2 border-border flex items-start justify-center p-2">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 rounded-full bg-primary"
            />
          </div>
        </motion.div>
      </section>

      {/* Integration Marquee */}
      <section className="py-16 border-y border-border/50 overflow-hidden">
        <div className="relative">
          <div className="flex animate-marquee">
            {[...integrations, ...integrations].map((tool, i) => (
              <div
                key={i}
                className="flex-shrink-0 px-8 py-3 mx-4 rounded-lg bg-muted/30 border border-border/50 text-muted-foreground font-medium"
              >
                {tool}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-6">
          <SectionHeading
            label="Our Services"
            title="Everything You Need to Automate & Scale"
            description="Whether you're drowning in manual tasks, switching CRMs, or building internal tools — we make it simple."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
            {services.map((service, index) => (
              <ServiceCard key={service.title} {...service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 relative bg-card/30">
        <div className="container mx-auto px-6">
          <SectionHeading
            label="Success Stories"
            title="Trusted by Industry Leaders"
            description="Hear from clients who have transformed their operations with our automation solutions."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={testimonial.author} {...testimonial} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to Transform Your Workflow?"
        description="In 30 minutes, we'll show you exactly what's broken, what's possible, and how to make automation your unfair advantage."
        primaryCTA={{ text: "Schedule a Call", href: "/contact" }}
        secondaryCTA={{ text: "View Our Process", href: "/process" }}
      />
    </Layout>
  );
}
