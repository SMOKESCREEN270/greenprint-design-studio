import { motion } from "framer-motion";
import { Database, CheckCircle2, Users, Zap, ArrowRight, Building } from "lucide-react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/SectionHeading";
import { CTASection } from "@/components/CTASection";
import { TestimonialCard } from "@/components/TestimonialCard";

const dataTypes = [
  "Jobs and Active Work Orders",
  "Photos and Documents",
  "Notes and Communications",
  "Financial and Accounting Data",
  "Milestones and Statuses",
  "Customer and Contact Info",
  "Estimates, Deals, and Quotes",
  "Custom Fields",
];

const trustReasons = [
  {
    title: "Fully Automated",
    description: "No manual teams, no spreadsheets, no copy-paste.",
  },
  {
    title: "Fast Turnarounds",
    description: "Our process is designed to move quickly without compromising accuracy.",
  },
  {
    title: "Secure Process",
    description: "Your customer's data is handled with care and never shared.",
  },
  {
    title: "Proven Record",
    description: "Thousands of records migrated with 0 data loss issues.",
  },
];

const testimonials = [
  {
    quote: "We have used Josh No Code for multiple, complex data migration projects. Josh's team showed amazing creativity and proficiency at their jobs, while also staying in communication with me, as needed.",
    author: "Matthew Morrisson",
    company: "7 months ago",
  },
  {
    quote: "JoshNoCode delivered exceptional automation consulting for our DocuSign/Zapier project. Their work quality was outstanding, with thorough QA testing that caught every edge case before deployment.",
    author: "Robert Wallace",
    company: "3 months ago",
  },
];

export default function CRMDataMigration() {
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
              <Building className="w-4 h-4" />
              For CRM Companies
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6"
            >
              Data Migrations So Fast,{" "}
              <span className="text-gradient">Your Customers Think It's Magic</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8"
            >
              Say goodbye to slow, painful onboarding. We move your customers' data into your CRM in days — not weeks — with zero hand-holding and zero cleanup required.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Link to="/contact">
                <Button variant="hero" size="xl">
                  Let's Talk CRM Migration
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Data We Move */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <SectionHeading
            label="What We Move"
            title="Data We'll Move for You"
            description="We handle the messy stuff your team dreads — so your customers start fresh, fast, and fully loaded."
          />

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 mt-16 max-w-4xl mx-auto">
            {dataTypes.map((type, index) => (
              <motion.div
                key={type}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex items-center gap-3 p-4 rounded-xl border border-border/50 bg-card/30"
              >
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-foreground text-sm">{type}</span>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-lg text-foreground mt-12 max-w-3xl mx-auto font-medium"
          >
            We've migrated just about everything you can imagine. If it lives in an old system, we can probably move it.
          </motion.p>
        </div>
      </section>

      {/* Built for CRMs Like Yours */}
      <section className="py-24 bg-card/30">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <SectionHeading
                label="Our Specialty"
                title="Built for CRMs Like Yours"
                align="left"
              />
              <div className="mt-6 space-y-4 text-muted-foreground">
                <p>
                  Whether your customers are coming from spreadsheets, legacy platforms, or Frankenstein systems — we've seen it all, and we've moved it all.
                </p>
                <p>
                  We specialize in CRMs for Home Service Businesses. That includes Roofers and Construction Contractors.
                </p>
                <p>
                  We understand your client's needs deeply, which makes us the perfect data migration partner for your CRM.
                </p>
              </div>
              <Link to="/contact" className="inline-block mt-8">
                <Button variant="glow" size="lg">
                  Partner With Us
                </Button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute inset-0 bg-primary/5 rounded-3xl blur-3xl" />
              <div className="relative p-8 rounded-2xl border border-primary/20 bg-card/50">
                <h3 className="font-display text-xl font-semibold text-foreground mb-4">
                  First impressions matter.
                </h3>
                <p className="text-muted-foreground">
                  A clunky migration can turn a win into churn. We help you close faster, onboard cleaner, and scale your CRM without burning out your customer success team.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Trust Us */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <SectionHeading
            label="Why Us"
            title="Why Trust Us With Your Data Migration Projects"
            description="We move your customer's data with care, precision, and zero stress — so they can hit the ground running in your CRM."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            {trustReasons.map((reason, index) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                  {reason.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {reason.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-24 bg-card/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Our Approach
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              No interns. No manual entry. No excuses.
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Our fully automated pipeline takes your customer's mess and transforms it into clean, production-ready data.
            </p>
            <Link to="/contact">
              <Button variant="hero" size="xl">
                Let's Talk CRM Migration
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <SectionHeading
            label="Reviews"
            title="What Our Clients Say"
            description="Real results. Real businesses. Real impact."
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
        title="Ready to Partner With Us?"
        description="Let's discuss how we can help your customers migrate faster and start using your CRM sooner."
        primaryCTA={{ text: "Partner With Us", href: "/contact" }}
      />
    </Layout>
  );
}
