import { motion } from "framer-motion";
import { ArrowRight, Clock, TrendingUp, Zap, Database, RefreshCw, BarChart3 } from "lucide-react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { SectionHeading } from "@/components/SectionHeading";
import { CTASection } from "@/components/CTASection";

const caseStudies = [
  {
    id: 1,
    title: "Marketing Agency Saves 40+ Hours Weekly",
    client: "Creative Digital Agency",
    service: "Automation",
    icon: Zap,
    challenge: "Manual client onboarding, scattered project tracking, and time-consuming reporting processes were limiting growth.",
    solution: "Built comprehensive automation system connecting CRM, project management, and invoicing tools with automated client communication workflows.",
    results: [
      { metric: "40+", label: "Hours Saved Weekly" },
      { metric: "3x", label: "Client Capacity Increase" },
      { metric: "90%", label: "Faster Onboarding" },
    ],
    testimonial: "We went from drowning in admin work to having time to actually grow our business. The automation has been transformative.",
    color: "primary",
  },
  {
    id: 2,
    title: "E-commerce Brand Streamlines Operations with Airtable",
    client: "DTC Fashion Brand",
    service: "Airtable",
    icon: Database,
    challenge: "Inventory, orders, and vendor communications were managed across multiple disconnected spreadsheets causing errors and delays.",
    solution: "Designed a unified Airtable system with automated inventory tracking, order management, and vendor portals with real-time syncing.",
    results: [
      { metric: "95%", label: "Fewer Data Errors" },
      { metric: "60%", label: "Faster Order Processing" },
      { metric: "$50K", label: "Annual Cost Savings" },
    ],
    testimonial: "Finally, one source of truth for our entire operation. The team can focus on growth instead of firefighting data issues.",
    color: "primary",
  },
  {
    id: 3,
    title: "SaaS Startup Migrates 500K+ Records to HubSpot",
    client: "B2B SaaS Company",
    service: "Data Migration",
    icon: RefreshCw,
    challenge: "Needed to migrate from legacy CRM with complex custom fields, maintaining data integrity and historical records.",
    solution: "Executed phased migration with custom field mapping, data cleansing, duplicate detection, and comprehensive validation protocols.",
    results: [
      { metric: "500K+", label: "Records Migrated" },
      { metric: "99.9%", label: "Data Accuracy" },
      { metric: "0", label: "Business Disruption" },
    ],
    testimonial: "We were dreading this migration for years. Lab Craft Solutions made it painless and we didn't lose a single customer interaction.",
    color: "primary",
  },
  {
    id: 4,
    title: "Consulting Firm Automates Client Deliverables",
    client: "Management Consulting Firm",
    service: "Automation",
    icon: BarChart3,
    challenge: "Consultants spent hours each week manually creating reports, proposals, and client updates from various data sources.",
    solution: "Created automated report generation system pulling from multiple tools, with templated deliverables and scheduled client updates.",
    results: [
      { metric: "20+", label: "Hours Saved Per Consultant" },
      { metric: "5x", label: "Report Output Increase" },
      { metric: "100%", label: "Client Satisfaction" },
    ],
    testimonial: "Our consultants can now focus on strategy and client relationships instead of copying data between spreadsheets.",
    color: "primary",
  },
  {
    id: 5,
    title: "Non-Profit Centralizes Donor Management",
    client: "Environmental Non-Profit",
    service: "Airtable",
    icon: Database,
    challenge: "Donor information, campaigns, and volunteer coordination were siloed across teams with no visibility into relationships.",
    solution: "Built integrated Airtable workspace connecting donor database, campaign tracking, volunteer management, and impact reporting.",
    results: [
      { metric: "200%", label: "Donor Retention Increase" },
      { metric: "75%", label: "Less Admin Time" },
      { metric: "$1M+", label: "Additional Funds Raised" },
    ],
    testimonial: "We can finally see the full picture of our supporter relationships. This has transformed our fundraising strategy.",
    color: "primary",
  },
  {
    id: 6,
    title: "Real Estate Agency CRM Migration & Automation",
    client: "Regional Real Estate Brokerage",
    service: "Data Migration",
    icon: RefreshCw,
    challenge: "Migrating 10 years of property and client data from outdated system while implementing new automation workflows.",
    solution: "Complete CRM migration with property history preservation, automated lead routing, and transaction management workflows.",
    results: [
      { metric: "10 Years", label: "of Data Preserved" },
      { metric: "50%", label: "Faster Lead Response" },
      { metric: "30%", label: "More Closings" },
    ],
    testimonial: "Not only did we keep all our historical data, but now our agents close deals faster than ever with the new automated systems.",
    color: "primary",
  },
];

const serviceFilters = ["All", "Automation", "Airtable", "Data Migration"];

export default function CaseStudies() {
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
              <TrendingUp className="w-4 h-4" />
              Client Success Stories
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6"
            >
              Real Results for{" "}
              <span className="text-gradient">Real Businesses</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-muted-foreground max-w-2xl mx-auto"
            >
              See how we've helped businesses across industries transform their 
              operations through automation, Airtable, and data migration.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 border-b border-border/50">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-3">
            {serviceFilters.map((filter) => (
              <motion.button
                key={filter}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  filter === "All"
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted/50 text-muted-foreground hover:bg-primary/10 hover:text-primary"
                }`}
              >
                {filter}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="space-y-16">
            {caseStudies.map((study, index) => (
              <motion.article
                key={study.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <div className="p-8 md:p-12 rounded-3xl border border-border/50 bg-card/30 hover:border-primary/30 hover:shadow-[0_0_60px_hsl(120_97%_36%/0.08)] transition-all duration-500">
                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-8">
                    <div>
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                          <study.icon className="w-6 h-6 text-primary" />
                        </div>
                        <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                          {study.service}
                        </span>
                      </div>
                      <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-2">
                        {study.title}
                      </h3>
                      <p className="text-muted-foreground">{study.client}</p>
                    </div>
                  </div>

                  {/* Content Grid */}
                  <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <div>
                      <h4 className="font-display font-semibold text-foreground mb-3 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-destructive"></span>
                        The Challenge
                      </h4>
                      <p className="text-muted-foreground">{study.challenge}</p>
                    </div>
                    <div>
                      <h4 className="font-display font-semibold text-foreground mb-3 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-primary"></span>
                        Our Solution
                      </h4>
                      <p className="text-muted-foreground">{study.solution}</p>
                    </div>
                  </div>

                  {/* Results */}
                  <div className="grid grid-cols-3 gap-4 p-6 rounded-2xl bg-primary/5 border border-primary/20 mb-8">
                    {study.results.map((result, i) => (
                      <div key={i} className="text-center">
                        <p className="font-display text-2xl md:text-3xl font-bold text-primary mb-1">
                          {result.metric}
                        </p>
                        <p className="text-sm text-muted-foreground">{result.label}</p>
                      </div>
                    ))}
                  </div>

                  {/* Testimonial */}
                  <blockquote className="relative pl-6 border-l-2 border-primary/50">
                    <p className="text-foreground italic mb-2">"{study.testimonial}"</p>
                    <cite className="text-sm text-muted-foreground not-italic">— {study.client}</cite>
                  </blockquote>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to Be Our Next Success Story?"
        description="Let's discuss how we can transform your business operations with automation, Airtable, or seamless data migration."
        primaryCTA={{ text: "Schedule a Call", href: "/contact" }}
        secondaryCTA={{ text: "View Our Process", href: "/process" }}
      />
    </Layout>
  );
}
