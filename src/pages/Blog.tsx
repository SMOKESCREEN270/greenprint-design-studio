import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { SectionHeading } from "@/components/SectionHeading";

const blogPosts = [
  {
    id: 1,
    title: "5 Signs Your Business Needs Workflow Automation",
    excerpt: "Discover the key indicators that suggest your business is ready for automation and how it can transform your operations.",
    category: "Automation",
    date: "Jan 2, 2026",
    readTime: "5 min read",
    featured: true,
  },
  {
    id: 2,
    title: "The Complete Guide to Airtable for Business Operations",
    excerpt: "Learn how to leverage Airtable's powerful features to build custom databases and streamline your team's workflow.",
    category: "Airtable",
    date: "Dec 28, 2025",
    readTime: "8 min read",
    featured: true,
  },
  {
    id: 3,
    title: "CRM Data Migration: Avoiding Common Pitfalls",
    excerpt: "A comprehensive look at the mistakes businesses make during CRM migrations and how to ensure a smooth transition.",
    category: "Data Migration",
    date: "Dec 20, 2025",
    readTime: "6 min read",
    featured: false,
  },
  {
    id: 4,
    title: "How Automation Saved This Agency 40 Hours Per Week",
    excerpt: "A deep dive into how we helped a marketing agency reclaim their time through strategic automation.",
    category: "Case Study",
    date: "Dec 15, 2025",
    readTime: "4 min read",
    featured: false,
  },
  {
    id: 5,
    title: "Integrating Airtable with Your Existing Tech Stack",
    excerpt: "Step-by-step strategies for connecting Airtable to your CRM, email, and project management tools.",
    category: "Airtable",
    date: "Dec 10, 2025",
    readTime: "7 min read",
    featured: false,
  },
  {
    id: 6,
    title: "The True Cost of Manual Data Entry",
    excerpt: "Breaking down the hidden costs of manual processes and the ROI of automation investments.",
    category: "Automation",
    date: "Dec 5, 2025",
    readTime: "5 min read",
    featured: false,
  },
];

const categories = ["All", "Automation", "Airtable", "Data Migration", "Case Study"];

export default function Blog() {
  const featuredPosts = blogPosts.filter(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

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
              <BookOpen className="w-4 h-4" />
              Insights & Resources
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6"
            >
              The <span className="text-gradient">Automation</span> Blog
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-muted-foreground max-w-2xl mx-auto"
            >
              Expert insights on automation, Airtable, and data migration to help 
              you transform your business operations.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 border-b border-border/50">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  category === "All"
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted/50 text-muted-foreground hover:bg-primary/10 hover:text-primary"
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <SectionHeading
            label="Featured"
            title="Latest Articles"
            description="Our most recent insights and guides on automation and efficiency."
          />

          <div className="grid md:grid-cols-2 gap-8 mt-16">
            {featuredPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative"
              >
                <Link to={`/blog/${post.id}`}>
                  <div className="h-full p-8 rounded-2xl border border-border/50 bg-card/30 hover:border-primary/30 hover:shadow-[0_0_40px_hsl(120_97%_36%/0.1)] transition-all duration-500">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                        {post.category}
                      </span>
                      <span className="text-muted-foreground text-sm flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {post.date}
                      </span>
                    </div>

                    <h3 className="font-display text-2xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>

                    <p className="text-muted-foreground mb-6">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </span>
                      <span className="text-primary font-medium flex items-center gap-2 group-hover:gap-3 transition-all">
                        Read More
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* All Posts */}
      <section className="py-24 bg-card/30">
        <div className="container mx-auto px-6">
          <SectionHeading
            label="Archive"
            title="All Articles"
            description="Browse our complete collection of articles and resources."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
            {regularPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <Link to={`/blog/${post.id}`}>
                  <div className="h-full p-6 rounded-xl border border-border/50 bg-background/50 hover:border-primary/30 transition-all duration-300">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-2 py-0.5 rounded-full bg-primary/10 text-primary text-xs font-medium">
                        {post.category}
                      </span>
                    </div>

                    <h3 className="font-display text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>

                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
