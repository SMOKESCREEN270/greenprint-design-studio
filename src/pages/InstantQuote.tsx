import { useState } from "react";
import { motion } from "framer-motion";
import { Calculator, ArrowRight, CheckCircle2 } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

export default function InstantQuote() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    numberOfJobs: "",
    migratingFrom: "",
    migratingTo: "",
    name: "",
    email: "",
    phone: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleContinue = () => {
    if (step === 1 && formData.numberOfJobs) {
      setStep(2);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email) {
      setIsSubmitted(true);
      toast({
        title: "Quote Request Sent!",
        description: "Check your email for your personalized quote.",
      });
    }
  };

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
          <div className="max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-12"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
                <Calculator className="w-4 h-4" />
                Instant Quote
              </span>
              <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                Data Migration Project Cost Estimator
              </h1>
              <p className="text-muted-foreground">
                Enter the number of job records that you are looking to transfer to your new CRM.
              </p>
            </motion.div>

            {!isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="p-8 rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm"
              >
                <form onSubmit={handleSubmit}>
                  {step === 1 && (
                    <div className="space-y-6">
                      <div>
                        <Label htmlFor="numberOfJobs" className="text-foreground mb-2 block">
                          Number of Jobs
                        </Label>
                        <Input
                          id="numberOfJobs"
                          type="number"
                          placeholder="Enter number of jobs"
                          value={formData.numberOfJobs}
                          onChange={(e) => handleInputChange("numberOfJobs", e.target.value)}
                          className="bg-muted/50 border-border/50 text-foreground placeholder:text-muted-foreground"
                        />
                      </div>
                      <Button
                        type="button"
                        variant="glow"
                        size="lg"
                        className="w-full"
                        onClick={handleContinue}
                        disabled={!formData.numberOfJobs}
                      >
                        Continue
                        <ArrowRight className="w-5 h-5" />
                      </Button>
                    </div>
                  )}

                  {step === 2 && (
                    <div className="space-y-6">
                      <div>
                        <Label htmlFor="migratingFrom" className="text-foreground mb-2 block">
                          What CRM are you migrating from?
                        </Label>
                        <Input
                          id="migratingFrom"
                          placeholder="e.g., Salesforce, HubSpot, etc."
                          value={formData.migratingFrom}
                          onChange={(e) => handleInputChange("migratingFrom", e.target.value)}
                          className="bg-muted/50 border-border/50 text-foreground placeholder:text-muted-foreground"
                        />
                      </div>
                      <div>
                        <Label htmlFor="migratingTo" className="text-foreground mb-2 block">
                          What CRM are you migrating to?
                        </Label>
                        <Input
                          id="migratingTo"
                          placeholder="e.g., Acculynx, JobTread, etc."
                          value={formData.migratingTo}
                          onChange={(e) => handleInputChange("migratingTo", e.target.value)}
                          className="bg-muted/50 border-border/50 text-foreground placeholder:text-muted-foreground"
                        />
                      </div>
                      <div>
                        <Label htmlFor="name" className="text-foreground mb-2 block">
                          What's your name?
                        </Label>
                        <Input
                          id="name"
                          placeholder="Your name"
                          value={formData.name}
                          onChange={(e) => handleInputChange("name", e.target.value)}
                          className="bg-muted/50 border-border/50 text-foreground placeholder:text-muted-foreground"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email" className="text-foreground mb-2 block">
                          Enter your email
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="your@email.com"
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          className="bg-muted/50 border-border/50 text-foreground placeholder:text-muted-foreground"
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone" className="text-foreground mb-2 block">
                          Enter your phone
                        </Label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="(555) 555-5555"
                          value={formData.phone}
                          onChange={(e) => handleInputChange("phone", e.target.value)}
                          className="bg-muted/50 border-border/50 text-foreground placeholder:text-muted-foreground"
                        />
                      </div>
                      <Button
                        type="submit"
                        variant="hero"
                        size="lg"
                        className="w-full"
                        disabled={!formData.name || !formData.email}
                      >
                        Send My Quote
                        <ArrowRight className="w-5 h-5" />
                      </Button>
                    </div>
                  )}
                </form>

                {/* Progress indicator */}
                <div className="flex justify-center gap-2 mt-8">
                  <div className={`w-3 h-3 rounded-full ${step >= 1 ? "bg-primary" : "bg-muted"}`} />
                  <div className={`w-3 h-3 rounded-full ${step >= 2 ? "bg-primary" : "bg-muted"}`} />
                </div>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-8 rounded-2xl border border-primary/30 bg-primary/5 text-center"
              >
                <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center mx-auto mb-6 shadow-[0_0_30px_hsl(120_97%_36%/0.4)]">
                  <CheckCircle2 className="w-8 h-8 text-primary-foreground" />
                </div>
                <h2 className="font-display text-2xl font-bold text-foreground mb-2">
                  Quote sent! Check your email.
                </h2>
                <p className="text-muted-foreground">
                  We'll get back to you with a personalized quote for migrating {formData.numberOfJobs} job records.
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
}
