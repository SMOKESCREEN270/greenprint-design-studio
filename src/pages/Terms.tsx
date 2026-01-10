import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";

const Terms = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-secondary/50 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              Terms of Service
            </h1>
            <p className="text-muted-foreground text-lg">
              Last updated: January 10, 2026
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-4xl mx-auto prose prose-lg dark:prose-invert"
          >
            <div className="space-y-12">
              <section>
                <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                  1. Agreement to Terms
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  By accessing or using the services provided by Systemify Solutions ("Company," "we," "us," or "our"), 
                  you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, 
                  please do not use our services. These Terms apply to all visitors, users, and clients who access 
                  or use our services.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                  2. Services Description
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Systemify Solutions provides business automation, Airtable consulting, and data migration services, including but not limited to:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Workflow automation design and implementation</li>
                  <li>Airtable database development and optimization</li>
                  <li>CRM and data migration services</li>
                  <li>Integration between business applications</li>
                  <li>Consulting and training services</li>
                </ul>
              </section>

              <section>
                <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                  3. Client Responsibilities
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  When engaging our services, you agree to:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Provide accurate and complete information necessary for us to perform our services</li>
                  <li>Grant appropriate access to systems and data as required for the project</li>
                  <li>Respond to requests for information or feedback in a timely manner</li>
                  <li>Maintain backups of your data before any migration or modification work</li>
                  <li>Review and test deliverables within the agreed timeframe</li>
                  <li>Make payments according to the agreed payment schedule</li>
                </ul>
              </section>

              <section>
                <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                  4. Project Scope and Changes
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  The scope of each project will be defined in a separate proposal or statement of work. Any changes 
                  to the agreed scope may result in adjustments to timelines and costs. We will communicate any 
                  necessary changes and obtain your approval before proceeding. Additional work outside the original 
                  scope will be billed separately.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                  5. Payment Terms
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Payment terms will be outlined in individual project proposals. General payment policies include:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>A deposit may be required before work begins</li>
                  <li>Invoices are due within 14 days of issuance unless otherwise specified</li>
                  <li>Late payments may incur interest charges</li>
                  <li>We reserve the right to pause work on projects with outstanding balances</li>
                  <li>All fees are non-refundable once work has commenced</li>
                </ul>
              </section>

              <section>
                <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                  6. Intellectual Property
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Upon full payment, you will own the deliverables created specifically for your project. However, 
                  we retain ownership of any pre-existing tools, templates, methodologies, or frameworks used in 
                  the project. We may use general knowledge gained during the project for other clients, provided 
                  no confidential information is disclosed.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                  7. Confidentiality
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Both parties agree to maintain the confidentiality of any proprietary or sensitive information 
                  shared during the project. This includes business processes, data, trade secrets, and other 
                  information not publicly available. Confidentiality obligations survive the termination of any 
                  engagement.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                  8. Warranties and Disclaimers
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We warrant that our services will be performed in a professional manner consistent with industry 
                  standards. However:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Services are provided "as is" without warranties of merchantability or fitness for a particular purpose</li>
                  <li>We do not guarantee specific results or outcomes</li>
                  <li>We are not responsible for issues arising from third-party tools or services</li>
                  <li>Data migration success depends on the quality and completeness of source data</li>
                </ul>
              </section>

              <section>
                <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                  9. Limitation of Liability
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  To the maximum extent permitted by law, Systemify Solutions shall not be liable for any indirect, 
                  incidental, special, consequential, or punitive damages, including loss of profits, data, or 
                  business opportunities. Our total liability for any claims arising from our services shall not 
                  exceed the fees paid for the specific service giving rise to the claim.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                  10. Indemnification
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  You agree to indemnify and hold harmless Systemify Solutions, its officers, employees, and agents 
                  from any claims, damages, losses, or expenses arising from your use of our services, your violation 
                  of these Terms, or your violation of any rights of a third party.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                  11. Termination
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Either party may terminate a project with written notice. Upon termination, you will be responsible 
                  for payment for all work completed up to the termination date. We will provide all completed work 
                  and assist with a reasonable transition. Termination does not affect any rights or obligations that 
                  accrued before termination.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                  12. Force Majeure
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Neither party shall be liable for any failure or delay in performance due to circumstances beyond 
                  their reasonable control, including natural disasters, acts of government, pandemics, or other 
                  force majeure events.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                  13. Governing Law
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  These Terms shall be governed by and construed in accordance with the laws of the jurisdiction 
                  in which Systemify Solutions is registered, without regard to conflict of law principles. Any 
                  disputes arising from these Terms shall be resolved through binding arbitration.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                  14. Changes to Terms
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  We reserve the right to modify these Terms at any time. Changes will be effective immediately 
                  upon posting on our website. Your continued use of our services after changes are posted 
                  constitutes your acceptance of the modified Terms.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                  15. Contact Information
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you have any questions about these Terms, please contact us:
                </p>
                <div className="mt-4 p-6 rounded-2xl border border-border/50 bg-card/30">
                  <p className="text-foreground font-semibold">Systemify Solutions</p>
                  <p className="text-muted-foreground">Email: legal@systemifysolutions.com</p>
                  <p className="text-muted-foreground">Phone: +1 (555) 123-4567</p>
                </div>
              </section>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Terms;
