import { motion } from "framer-motion";
import { Calendar, Clock, ArrowLeft, User } from "lucide-react";
import { Link, useParams, Navigate } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";

const blogPosts = [
  {
    id: 1,
    title: "Why Airtable is the Ultimate Database for Growing Businesses",
    excerpt: "Discover how Airtable combines the simplicity of spreadsheets with the power of databases, making it the perfect choice for businesses looking to scale their operations without the complexity of traditional database systems.",
    content: `In today's fast-paced business environment, companies need tools that can adapt as quickly as they do. Traditional databases, while powerful, often require significant technical expertise to set up and maintain. Enter Airtable – a revolutionary platform that bridges the gap between spreadsheets and databases.

## The Problem with Traditional Solutions

Many growing businesses start with spreadsheets like Excel or Google Sheets. While these tools are accessible, they quickly become unwieldy as data grows. Rows multiply, formulas break, and collaboration becomes a nightmare. On the other hand, traditional databases like MySQL or PostgreSQL require developers to set up and maintain, creating a significant barrier for non-technical teams.

## How Airtable Solves This

Airtable offers the best of both worlds. It provides a familiar spreadsheet-like interface that anyone can use, combined with the relational database capabilities that power enterprise applications. Teams can link records across tables, create complex views, and build automations – all without writing a single line of code.

## Real-World Applications

We've helped clients across various industries leverage Airtable for:

- **Project Management:** Track tasks, deadlines, and team assignments with custom views for each department
- **Inventory Management:** Monitor stock levels, automate reorder alerts, and track supplier relationships
- **CRM Systems:** Manage customer relationships, track sales pipelines, and automate follow-ups
- **Content Calendars:** Plan, schedule, and track content across multiple platforms

## Getting Started

The beauty of Airtable is that you can start small and scale as needed. Begin with a simple base for one process, learn the ropes, and gradually expand. With interfaces, automations, and integrations, there's virtually no limit to what you can build.

If you're ready to transform how your business manages data, we're here to help you design and implement an Airtable solution tailored to your specific needs.`,
    category: "Airtable",
    author: "Josh",
    date: "Jan 2, 2026",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop"
  },
  {
    id: 2,
    title: "5 Business Processes You Should Automate Today",
    excerpt: "Stop wasting hours on repetitive tasks. Learn about the five most impactful business processes that can be automated using tools like Make.com and Zapier, freeing your team to focus on what really matters.",
    content: `Time is your most valuable resource, yet most businesses waste countless hours on repetitive, manual tasks that could easily be automated. In our experience helping companies streamline their operations, we've identified five key areas where automation delivers the highest ROI.

## 1. Lead Capture and Distribution

When a potential customer fills out a form on your website, what happens next? If someone has to manually check for new submissions, copy information into your CRM, and assign leads to sales reps, you're losing precious response time.

**The Automation:** Connect your web forms directly to your CRM. New leads are automatically captured, enriched with additional data, scored based on your criteria, and assigned to the appropriate sales rep – all within seconds of submission.

## 2. Invoice Processing and Follow-ups

Chasing payments is nobody's favorite task. Late payments hurt cash flow, and manual follow-ups are time-consuming and easy to forget.

**The Automation:** Set up automated invoice reminders that trigger at specific intervals. Overdue invoices can automatically escalate through a sequence of increasingly urgent communications, and payment receipts can be auto-generated and sent upon completion.

## 3. Employee Onboarding

New hires need accounts created, documents signed, training scheduled, and equipment provisioned. Managing this manually for each new employee is a recipe for dropped balls.

**The Automation:** Create an onboarding workflow that automatically provisions accounts, sends welcome emails with key documents, schedules training sessions, and notifies relevant team members – all triggered when a new employee is added to your HR system.

## 4. Social Media Cross-Posting

Maintaining a presence across multiple social platforms is important, but manually posting the same content to each one is tedious.

**The Automation:** Post once, distribute everywhere. Content published to your primary platform automatically adapts and posts to secondary platforms, with appropriate formatting and hashtags for each.

## 5. Report Generation

Weekly reports, monthly summaries, quarterly reviews – the data exists, but compiling it into readable formats takes hours.

**The Automation:** Connect your data sources and let reports generate themselves. Scheduled automations pull data, format it according to your templates, and deliver polished reports to stakeholders' inboxes right on schedule.

## Getting Started with Automation

The key to successful automation is starting with processes that are high-frequency, rule-based, and time-consuming. Not sure where to begin? We offer free consultations to identify your highest-impact automation opportunities.`,
    category: "Automation",
    author: "Josh",
    date: "Dec 28, 2025",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=400&fit=crop"
  },
  {
    id: 3,
    title: "The Complete Guide to CRM Data Migration: Avoiding Common Pitfalls",
    excerpt: "Switching CRMs doesn't have to be painful. This comprehensive guide walks you through the essential steps for a successful data migration, including how to clean your data, map fields correctly, and ensure nothing gets lost in translation.",
    content: `Migrating from one CRM to another is one of the most critical projects a business can undertake. Your customer data is the lifeblood of your sales and marketing efforts, and a botched migration can have lasting consequences. Here's how to get it right.

## Before You Begin: The Audit Phase

The biggest mistake companies make is jumping straight into migration without understanding what they have. Take time to audit your current data:

- How many records do you have across all objects (contacts, companies, deals, etc.)?
- What custom fields have been created, and which are actually in use?
- Are there duplicate records that should be merged?
- What data quality issues exist (incomplete records, outdated information)?

## Data Cleaning: The Non-Negotiable Step

Garbage in, garbage out. There's no point migrating bad data to a new system. Before migration:

- **Deduplicate:** Identify and merge duplicate records based on email, phone, or company name
- **Standardize:** Ensure consistent formatting for phone numbers, addresses, and other fields
- **Validate:** Verify email addresses, check for bounces, and remove clearly outdated contacts
- **Complete:** Fill in missing critical fields where possible

## Field Mapping: Getting It Right

Every CRM organizes data differently. Creating a comprehensive field mapping document is essential:

- List every field in your source system
- Identify the corresponding field in your target system
- Note any transformations needed (date formats, picklist values, etc.)
- Identify fields that don't have a direct equivalent and decide how to handle them

## The Migration Process

A proper migration follows a structured approach:

1. **Test Migration:** Run a migration with a subset of data to identify issues
2. **Validation:** Check that records migrated correctly, relationships are intact, and data displays properly
3. **Iteration:** Fix issues and run additional test migrations until everything works
4. **Full Migration:** Execute the complete migration during a planned maintenance window
5. **Post-Migration Audit:** Verify record counts, spot-check data quality, and test critical workflows

## Handling Relationships and History

Don't forget about the connections between records:

- Contact-to-company relationships
- Deal associations
- Activity history (emails, calls, meetings)
- Notes and attachments

## Post-Migration Success

Migration doesn't end when the data lands in your new system. Plan for:

- User training on the new system
- A parallel running period where both systems are accessible
- A clear cutoff date after which the old system is retired
- Documentation of any data that couldn't be migrated

CRM migrations are complex, but with proper planning and execution, they don't have to be stressful. If you're planning a migration and want expert guidance, reach out – we've helped dozens of companies make the switch smoothly.`,
    category: "Data Migration",
    author: "Josh",
    date: "Dec 20, 2025",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop"
  },
];

export default function BlogPost() {
  const { id } = useParams();
  const post = blogPosts.find(p => p.id === Number(id));

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px]">
            <div className="w-full h-full bg-primary/5 rounded-full blur-[150px]" />
          </div>
        </div>

        <div className="container mx-auto px-6 relative">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <Link 
                to="/blog" 
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Blog
              </Link>

              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
                {post.category}
              </span>

              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                {post.title}
              </h1>

              <div className="flex flex-wrap items-center gap-6 text-muted-foreground mb-8">
                <span className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  {post.author}
                </span>
                <span className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {post.date}
                </span>
                <span className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  {post.readTime}
                </span>
              </div>
            </motion.div>

            {/* Featured Image */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="rounded-2xl overflow-hidden mb-12"
            >
              <img 
                src={post.image} 
                alt={post.title}
                className="w-full h-[300px] md:h-[400px] object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="pb-24">
        <div className="container mx-auto px-6">
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-3xl mx-auto prose prose-invert prose-lg prose-headings:font-display prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground prose-li:text-muted-foreground prose-a:text-primary hover:prose-a:text-primary/80"
          >
            {post.content.split('\n\n').map((paragraph, index) => {
              if (paragraph.startsWith('## ')) {
                return (
                  <h2 key={index} className="text-2xl font-bold mt-10 mb-4 text-foreground">
                    {paragraph.replace('## ', '')}
                  </h2>
                );
              }
              if (paragraph.startsWith('- ')) {
                const items = paragraph.split('\n').filter(line => line.startsWith('- '));
                return (
                  <ul key={index} className="list-disc pl-6 space-y-2 my-6">
                    {items.map((item, i) => (
                      <li key={i} dangerouslySetInnerHTML={{ 
                        __html: item.replace('- ', '').replace(/\*\*(.*?)\*\*/g, '<strong class="text-foreground">$1</strong>') 
                      }} />
                    ))}
                  </ul>
                );
              }
              if (paragraph.match(/^\d+\. /)) {
                const items = paragraph.split('\n').filter(line => line.match(/^\d+\. /));
                return (
                  <ol key={index} className="list-decimal pl-6 space-y-2 my-6">
                    {items.map((item, i) => (
                      <li key={i} dangerouslySetInnerHTML={{ 
                        __html: item.replace(/^\d+\. /, '').replace(/\*\*(.*?)\*\*/g, '<strong class="text-foreground">$1</strong>') 
                      }} />
                    ))}
                  </ol>
                );
              }
              return (
                <p 
                  key={index} 
                  className="my-4"
                  dangerouslySetInnerHTML={{ 
                    __html: paragraph.replace(/\*\*(.*?)\*\*/g, '<strong class="text-foreground">$1</strong>') 
                  }}
                />
              );
            })}
          </motion.article>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto mt-16 p-8 rounded-2xl bg-gradient-to-br from-primary/20 via-primary/10 to-transparent border border-primary/20 text-center"
          >
            <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
            <p className="text-muted-foreground mb-6">
              Let's discuss how we can help transform your business operations.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              Schedule a Consultation
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
