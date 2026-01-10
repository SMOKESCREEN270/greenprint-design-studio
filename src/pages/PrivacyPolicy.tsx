import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";

const PrivacyPolicy = () => {
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
              Privacy Policy
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
                  1. Introduction
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  At Systemify Solutions, we take your privacy seriously. This Privacy Policy explains how we collect, 
                  use, disclose, and safeguard your information when you visit our website or use our services. 
                  Please read this privacy policy carefully. By using our services, you consent to the practices 
                  described in this policy.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                  2. Information We Collect
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We may collect information about you in various ways, including:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li><strong>Personal Data:</strong> Name, email address, phone number, and company information when you contact us or request our services.</li>
                  <li><strong>Usage Data:</strong> Information about how you use our website, including IP address, browser type, pages visited, and time spent on pages.</li>
                  <li><strong>Communication Data:</strong> Records of correspondence when you contact us via email, phone, or our contact forms.</li>
                  <li><strong>Technical Data:</strong> Device information, operating system, and browser information collected through cookies and similar technologies.</li>
                </ul>
              </section>

              <section>
                <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                  3. How We Use Your Information
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We use the information we collect to:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Provide, operate, and maintain our services</li>
                  <li>Respond to your inquiries and fulfill your requests</li>
                  <li>Send you marketing and promotional communications (with your consent)</li>
                  <li>Improve our website and services</li>
                  <li>Analyze usage patterns and trends</li>
                  <li>Protect against fraudulent or illegal activity</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </section>

              <section>
                <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                  4. Information Sharing and Disclosure
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We do not sell your personal information. We may share your information in the following situations:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li><strong>Service Providers:</strong> With third-party vendors who assist us in providing our services (e.g., hosting, analytics).</li>
                  <li><strong>Legal Requirements:</strong> When required by law or to respond to legal process.</li>
                  <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets.</li>
                  <li><strong>With Your Consent:</strong> When you have given us permission to share your information.</li>
                </ul>
              </section>

              <section>
                <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                  5. Data Security
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  We implement appropriate technical and organizational security measures to protect your personal 
                  information against unauthorized access, alteration, disclosure, or destruction. However, no method 
                  of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee 
                  absolute security.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                  6. Cookies and Tracking Technologies
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  We use cookies and similar tracking technologies to collect and store information about your 
                  preferences and activity on our website. You can set your browser to refuse all or some cookies, 
                  but this may affect your ability to use certain features of our website.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                  7. Your Rights
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Depending on your location, you may have the following rights regarding your personal data:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Right to access your personal data</li>
                  <li>Right to correct inaccurate data</li>
                  <li>Right to delete your data</li>
                  <li>Right to restrict processing</li>
                  <li>Right to data portability</li>
                  <li>Right to object to processing</li>
                  <li>Right to withdraw consent</li>
                </ul>
              </section>

              <section>
                <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                  8. Data Retention
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  We retain your personal information only for as long as necessary to fulfill the purposes for which 
                  it was collected, including to satisfy any legal, accounting, or reporting requirements. When we no 
                  longer need your information, we will securely delete or anonymize it.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                  9. Third-Party Links
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Our website may contain links to third-party websites. We are not responsible for the privacy 
                  practices or content of these external sites. We encourage you to review the privacy policies 
                  of any third-party sites you visit.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                  10. Changes to This Policy
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  We may update this Privacy Policy from time to time. We will notify you of any changes by posting 
                  the new policy on this page and updating the "Last updated" date. Your continued use of our services 
                  after any modifications indicates your acceptance of the updated policy.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                  11. Contact Us
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you have any questions about this Privacy Policy or our data practices, please contact us at:
                </p>
                <div className="mt-4 p-6 rounded-2xl border border-border/50 bg-card/30">
                  <p className="text-foreground font-semibold">Systemify Solutions</p>
                  <p className="text-muted-foreground">Email: privacy@systemifysolutions.com</p>
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

export default PrivacyPolicy;
