import { motion } from "framer-motion";
import { Zap, CheckCircle2, Award, Workflow, RefreshCw, Bot, Lightbulb } from "lucide-react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/SectionHeading";
import { CTASection } from "@/components/CTASection";
import { TestimonialCard } from "@/components/TestimonialCard";

const consultingServices = [
  {
    title: "Zapier Consulting",
    description: "Already using Zapier to move data and trigger automations? We'll clean up what you have or build new workflows that are faster, more reliable, and easier to scale.",
    cta: "Talk with a Zapier Expert",
    href: "/contact",
  },
  {
    title: "Make Consulting",
    description: "Need robust logic, complex workflows, or multi-step data orchestration? We design and build advanced Make systems for operations that demand control, structure, and flexibility.",
    cta: "Talk with a Make Expert",
    href: "/contact",
  },
  {
    title: "Not Sure What Tool You Need?",
    description: "We'll help you identify the right platform for your workflow — then build the system around it. No guesswork, no stress.",
    cta: "Help me decide",
    href: "/contact",
  },
];

const caseStudies = [
  {
    emoji: "🚀",
    title: "Automatically Route Google LSA Leads to the Right Team in Acculynx",
    challenge: "This roofing company was generating leads through Google Local Services Ads (LSA), but every new inquiry had to be manually reviewed, sorted by ZIP code, and entered into Acculynx — often causing delays or misrouted leads across their multiple service areas.",
    solution: "We built an advanced Zapier automation for Acculynx lead creation that instantly parses incoming Google LSA emails, extracts and formats lead details, and matches the ZIP code against a dynamic regional service map using Zapier Tables. Based on the ZIP code, the system auto-creates the lead under the correct Acculynx team.",
    impact: "This automated lead distribution system for roofing companies eliminated triage delays, improved lead response time, and ensured every opportunity was captured and correctly routed — without any manual intervention.",
  },
  {
    emoji: "📦",
    title: "Automate Order Fulfillment from Squarespace Using Make.com",
    challenge: "This growing e-commerce brand was manually exporting Squarespace orders, formatting them into shipping documents, and flagging address issues — a time-consuming and error-prone process that was holding back their operations.",
    solution: "We built a robust Make.com automation for e-commerce fulfillment that runs every 15 minutes, pulling in new pending Squarespace orders and preparing them for shipment. The scenario automatically aggregates order data, formats it into structured Google Sheets, calculates order subtotals, flags incomplete addresses, and routes orders down different fulfillment paths.",
    impact: "What once took hours per day is now fully automated — reducing human error, accelerating delivery times, and enabling the team to scale without adding operational overhead.",
  },
  {
    emoji: "📄",
    title: "Automated Proposal Generation in PandaDoc from Airtable for a Marketing Agency",
    challenge: "A high-velocity performance marketing agency was losing time and momentum creating client proposals manually. Although they tracked all project data in Airtable, the process of pulling costs, formatting names, and building documents in PandaDoc was slow, repetitive, and vulnerable to human error.",
    solution: "We built a Zapier-powered Airtable-to-PandaDoc proposal automation that allows the team to generate fully customized, ready-to-send proposals in seconds — using a single button click. The system parses client names, determines consulting fees, selects the correct template, and generates proposals pre-filled with all relevant data.",
    impact: "Proposal generation that once took +30 minutes is now done in under five seconds — consistently, accurately, and on brand.",
  },
  {
    emoji: "🎥",
    title: "AI-Powered YouTube Content Generation with Make.com and Airtable",
    challenge: "A niche content agency specializing in educational YouTube content was struggling to keep up with content planning and video scripting demands. Their small team couldn't scale content output without bottlenecks or burnout.",
    solution: "We built a Make.com automation for AI-assisted video content creation — turning Airtable into a hands-free content engine. When a new video idea is submitted, the system uses OpenAI to generate custom titles, descriptions, tags, SEO-rich hashtags, and AI-generated scripting tips.",
    impact: "The team scaled from one video per week to three without hiring a single content assistant. Each video now launches with SEO metadata, a production brief, and a script-ready outline — all AI-powered. The system reduced prep time by 80%.",
  },
];

const integrations = [
  "Shopify", "Xero", "Acculynx", "QuickBooks", "HubSpot", "JobTread", 
  "Housecall Pro", "SquareSpace", "PandaDoc", "DocuSign", "Make.com", "Zapier"
];

const testimonials = [
  {
    quote: "JoshNoCode delivered exceptional automation consulting for our DocuSign/Zapier project. Their work quality was outstanding, with thorough QA testing that caught every edge case before deployment. Communication was superb throughout - clear updates, quick responses, and they explained technical details in business terms we could understand.",
    author: "Robert Wallace",
    company: "3 months ago",
  },
  {
    quote: "We have used Josh No Code for multiple, complex data migration projects. Josh's team showed amazing creativity and proficiency at their jobs, while also staying in communication with me, as needed. Not only do they do their jobs well, they have also created a solid internal process to manage projects and expectations every step of the way.",
    author: "Matthew Morrisson",
    company: "7 months ago",
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
              We Don't Just Automate —{" "}
              <span className="text-gradient">We Architect.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8"
            >
              Timeless systems, thoughtfully engineered and tailored to your workflow. 
              Built in Zapier and Make to bring order to chaos — and clarity to your growth.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Link to="/contact">
                <Button variant="hero" size="xl">
                  Talk with an Automation Expert
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Streamline Section - Integration Logos */}
      <section className="py-16 border-y border-border/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
              Streamline Your Operations
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Trusted by teams who value systems that last — not just automations that run. 
              These are the companies building better, faster, and smarter with Josh No Code.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {integrations.map((tool) => (
              <span
                key={tool}
                className="px-4 py-2 rounded-lg bg-muted/30 border border-border/50 text-muted-foreground text-sm"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Consulting Services */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <SectionHeading
            label="Services"
            title="How Can We Help You Automate Smarter?"
            description="Whether you already use Zapier or Make — or you just know your process is broken — we'll guide you to the right platform and build a system that scales."
          />

          <div className="grid md:grid-cols-3 gap-6 mt-16">
            {consultingServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 rounded-2xl border border-border/50 bg-card/30 hover:border-primary/20 transition-all duration-300"
              >
                <h3 className="font-display text-xl font-semibold text-foreground mb-4">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {service.description}
                </p>
                <Link to={service.href}>
                  <Button variant="outline-glow" size="default">
                    {service.cta}
                  </Button>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-24 bg-card/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                <Award className="w-4 h-4" />
                Certified Experts
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                We're Certified Automation Experts
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We're officially certified by the platforms we build on — Zapier and Make.
                That means when we design your system, we're not figuring it out as we go — we're bringing real expertise to the table.
              </p>
            </motion.div>
          </div>

          <div className="flex flex-wrap justify-center gap-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="px-8 py-6 rounded-2xl border border-primary/30 bg-primary/5 flex items-center gap-4"
            >
              <Zap className="w-10 h-10 text-primary" />
              <div>
                <p className="font-display font-semibold text-foreground">Certified Zapier Expert</p>
                <p className="text-sm text-muted-foreground">Official Partner</p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="px-8 py-6 rounded-2xl border border-primary/30 bg-primary/5 flex items-center gap-4"
            >
              <Workflow className="w-10 h-10 text-primary" />
              <div>
                <p className="font-display font-semibold text-foreground">Certified Make.com Partner</p>
                <p className="text-sm text-muted-foreground">Official Partner</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <SectionHeading
            label="Case Studies"
            title="Automation Case Studies"
            description="We build automations that solve real operational problems — from intelligent lead distribution to fully streamlined order fulfillment. Explore how teams like yours are scaling smarter with custom-built systems powered by Zapier and Make."
          />

          <div className="space-y-12 mt-16">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 rounded-2xl border border-border/50 bg-card/30"
              >
                <h3 className="font-display text-2xl font-semibold text-foreground mb-6">
                  {study.emoji} {study.title}
                </h3>
                
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Challenge:</h4>
                    <p className="text-muted-foreground text-sm">{study.challenge}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Solution:</h4>
                    <p className="text-muted-foreground text-sm">{study.solution}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Impact:</h4>
                    <p className="text-muted-foreground text-sm">{study.impact}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-card/30">
        <div className="container mx-auto px-6">
          <SectionHeading
            label="Reviews"
            title="Client Reviews"
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
        title="Let's Talk Automation"
        description="In 30 minutes, we'll show you exactly what's broken, what's possible, and how to make automation your unfair advantage."
        primaryCTA={{ text: "Schedule a Call", href: "/contact" }}
      />
    </Layout>
  );
}
