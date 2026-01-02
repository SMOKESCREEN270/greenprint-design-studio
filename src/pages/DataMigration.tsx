import { motion } from "framer-motion";
import { Database, CheckCircle2, ArrowRight, Shield, Clock, FileCheck, Layers } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { SectionHeading } from "@/components/SectionHeading";
import { CTASection } from "@/components/CTASection";
import { ProcessStep } from "@/components/ProcessStep";

const benefits = [
  {
    icon: Shield,
    title: "Zero Data Loss",
    description: "Every record, attachment, and relationship preserved with complete accuracy.",
  },
  {
    icon: Clock,
    title: "Minimal Downtime",
    description: "Migrations planned and executed to minimize disruption to your operations.",
  },
  {
    icon: FileCheck,
    title: "Full Validation",
    description: "Comprehensive testing and verification before, during, and after migration.",
  },
  {
    icon: Layers,
    title: "Custom Mapping",
    description: "Intelligent field mapping that preserves your data structure and relationships.",
  },
];

const migrationTypes = [
  {
    title: "CRM Migrations",
    description: "Transfer contacts, deals, activities, and custom fields between CRM platforms.",
    platforms: ["HubSpot", "Salesforce", "Pipedrive", "Zoho", "Acculynx"],
  },
  {
    title: "Document Migrations",
    description: "Move files, attachments, and documents while maintaining folder structures.",
    platforms: ["Google Drive", "Dropbox", "OneDrive", "Box", "SharePoint"],
  },
  {
    title: "Financial Data",
    description: "Migrate invoices, transactions, and financial records with precision.",
    platforms: ["QuickBooks", "Xero", "FreshBooks", "Wave", "Sage"],
  },
];

const processSteps = [
  {
    icon: Database,
    title: "Data Assessment",
    description: "We analyze your current data structure, volume, and quality to plan the optimal migration strategy.",
  },
  {
    icon: Layers,
    title: "Mapping & Transformation",
    description: "Custom field mapping and data transformation rules to ensure compatibility with your new platform.",
  },
  {
    icon: Shield,
    title: "Validation & Testing",
    description: "Rigorous testing with sample data sets to catch and resolve any issues before the full migration.",
  },
  {
    icon: FileCheck,
    title: "Migration & Verification",
    description: "Automated migration with real-time monitoring, followed by comprehensive data verification.",
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
              Migrate Your Data{" "}
              <span className="text-gradient">Without the Headaches</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-muted-foreground max-w-2xl mx-auto"
            >
              We handle complex data transfers between platforms — job records, photos, documents, 
              and more. Fully automated, zero cleanup required.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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

      {/* Migration Types */}
      <section id="crm" className="py-24 bg-card/30">
        <div className="container mx-auto px-6">
          <SectionHeading
            label="What We Migrate"
            title="Seamless Platform Transfers"
            description="From CRMs to financial systems, we've migrated millions of records without losing a single one."
          />

          <div className="grid md:grid-cols-3 gap-6 mt-16">
            {migrationTypes.map((type, index) => (
              <motion.div
                key={type.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 rounded-2xl border border-border/50 bg-background/50 hover:border-primary/20 transition-all duration-300"
              >
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  {type.title}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {type.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {type.platforms.map((platform) => (
                    <span
                      key={platform}
                      className="px-3 py-1 rounded-full bg-muted/50 text-xs text-foreground/70"
                    >
                      {platform}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="platform" className="py-24">
        <div className="container mx-auto px-6">
          <SectionHeading
            label="Our Process"
            title="How We Handle Your Migration"
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

      {/* CTA */}
      <CTASection
        title="Planning a Platform Migration?"
        description="Let's discuss your migration needs and create a plan that minimizes risk and downtime."
        primaryCTA={{ text: "Start Planning", href: "/contact" }}
        secondaryCTA={{ text: "View Process", href: "/process" }}
      />
    </Layout>
  );
}
