import { motion } from "framer-motion";
import { useState } from "react";
import { Database, CheckCircle2, Shield, Clock, Zap, FileCheck, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/SectionHeading";
import { CTASection } from "@/components/CTASection";
import { TestimonialCard } from "@/components/TestimonialCard";

const processSteps = [
  {
    step: 1,
    title: "Design",
    description: "We define what needs to be migrated and the records that need to be pulled from your CRM.",
  },
  {
    step: 2,
    title: "Pull Data",
    description: "We'll get everything out of your old CRM — faster and more accurately than doing it manually.",
  },
  {
    step: 3,
    title: "Automate Migration",
    description: "We process your migration using fully automated tools for speed and accuracy.",
  },
  {
    step: 4,
    title: "Review & Launch",
    description: "You get a summary of everything moved and a chance to review before it goes live.",
  },
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
    description: "Your data is handled with care and never shared.",
  },
  {
    title: "Proven Record",
    description: "Over 250,000 records migrated with 0 data loss issues.",
  },
];

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

const faqs = [
  {
    question: "How is pricing determined?",
    answer: "Pricing is based on the number of job records you're migrating to your new CRM. Click the 'Get Instant Quote' button to get an instant price quote.",
  },
  {
    question: "Is my data secure during the migration?",
    answer: "Yes — we follow secure data management procedures to ensure your information is kept safe and confidential throughout the process.",
  },
  {
    question: "Can you complete the migration before my go-live date?",
    answer: "Most CRM migrations can be completed before your go-live date. We'll discuss your timeline during the free strategy call and align the project accordingly.",
  },
  {
    question: "Will everything be moved?",
    answer: "We move exactly what you need. Whether it's all your historical data or just specific fields, we tailor each migration to your requirements and provide an exception report for anything skipped.",
  },
];

const testimonials = [
  {
    quote: "We have used Josh No Code for multiple, complex data migration projects. Josh's team showed amazing creativity and proficiency at their jobs, while also staying in communication with me, as needed. Not only do they do their jobs well, they have also created a solid internal process to manage projects and expectations every step of the way.",
    author: "Matthew Morrisson",
    company: "7 months ago",
  },
  {
    quote: "JoshNoCode delivered exceptional automation consulting for our DocuSign/Zapier project. Their work quality was outstanding, with thorough QA testing that caught every edge case before deployment. The automation solution exceeded expectations and continues running flawlessly.",
    author: "Robert Wallace",
    company: "3 months ago",
  },
];

export default function DataMigration() {
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
              <Database className="w-4 h-4" />
              Data Migration
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6"
            >
              Fast, Reliable CRM Migrations —{" "}
              <span className="text-gradient">Done for You</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8"
            >
              Switching CRMs? We'll move your jobs, contacts, photos, documents, and notes into your new system in days — no spreadsheets, no stress, and no lost data.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link to="/contact">
                <Button variant="hero" size="xl">
                  Start Your Data Migration
                </Button>
              </Link>
              <Link to="/instant-quote">
                <Button variant="outline-glow" size="xl">
                  Get Instant Quote
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <SectionHeading
            label="Process"
            title="How It Works"
            description="Switching systems doesn't have to be complicated. Here's how we make your CRM migration smooth and stress-free."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative p-6 rounded-2xl border border-border/50 bg-card/30 hover:border-primary/20 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center mb-4 shadow-[0_0_20px_hsl(120_97%_36%/0.3)]">
                  <span className="text-primary-foreground font-display font-bold">{step.step}</span>
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Trust Us */}
      <section className="py-24 bg-card/30">
        <div className="container mx-auto px-6">
          <SectionHeading
            label="Why Us"
            title="Why Trust Us With Your Migration"
            description="We move your data with care, precision, and zero stress — so you can hit the ground running."
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

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-muted-foreground mt-12 max-w-2xl mx-auto"
          >
            We've migrated just about everything you can imagine — and if there's something unique to your system, we'll work with you to make sure it's handled.
          </motion.p>
        </div>
      </section>

      {/* Data We Move */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <SectionHeading
            label="What We Move"
            title="Data We'll Move for You"
            description="Don't worry about sorting, exporting, or scrubbing data — we'll handle the heavy lifting so everything shows up where it belongs in your new CRM."
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
        </div>
      </section>

      {/* CTA Mid */}
      <section className="py-24 bg-card/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Your New CRM Is Waiting. Let's Get You There.
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              We'll show you exactly what to move, how we'll move it, and how fast you can be up and running.
            </p>
            <Link to="/contact">
              <Button variant="hero" size="xl">
                Start My Data Migration
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <SectionHeading
            label="FAQ"
            title="Data Migration FAQs"
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

      {/* Testimonials */}
      <section className="py-24 bg-card/30">
        <div className="container mx-auto px-6">
          <SectionHeading
            label="Reviews"
            title="What Our Clients Are Saying"
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
        title="Let's Talk About Your Data Migration"
        description="In 30 minutes, we'll map out exactly what needs to move, spot any challenges, and give you a clear migration plan — no spreadsheets, no headaches."
        primaryCTA={{ text: "Schedule a Call", href: "/contact" }}
        secondaryCTA={{ text: "Get Instant Quote", href: "/instant-quote" }}
      />
    </Layout>
  );
}
