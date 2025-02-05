import React from "react";
import PricingCard from "./PricingCard";
import { motion } from "framer-motion";

interface PricingTier {
  name: string;
  price: string;
  description: string;
  features: { name: string; included: boolean }[];
  buttonText: string;
  popular?: boolean;
}

interface PricingSectionProps {
  tiers?: PricingTier[];
  title?: string;
  subtitle?: string;
}

const defaultTiers: PricingTier[] = [
  {
    name: "Basic",
    price: "$9.99",
    description: "Perfect for getting started with our platform",
    features: [
      { name: "Basic features included", included: true },
      { name: "Up to 5 projects", included: true },
      { name: "Community support", included: true },
      { name: "Advanced analytics", included: false },
      { name: "Priority support", included: false },
    ],
    buttonText: "Get Started",
  },
  {
    name: "Pro",
    price: "$29.99",
    description: "Ideal for professionals and growing businesses",
    features: [
      { name: "All Basic features", included: true },
      { name: "Unlimited projects", included: true },
      { name: "Advanced analytics", included: true },
      { name: "Priority support", included: true },
      { name: "Custom integrations", included: false },
    ],
    buttonText: "Go Pro",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "$99.99",
    description: "Complete solution for large organizations",
    features: [
      { name: "All Pro features", included: true },
      { name: "Custom integrations", included: true },
      { name: "Dedicated support", included: true },
      { name: "Custom branding", included: true },
      { name: "SLA guarantee", included: true },
    ],
    buttonText: "Contact Sales",
  },
];

const PricingSection = ({
  tiers = defaultTiers,
  title = "Simple, transparent pricing",
  subtitle = "Choose the perfect plan for your needs",
}: PricingSectionProps) => {
  return (
    <section className="w-full py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold tracking-tight mb-4"
          >
            {title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-muted-foreground"
          >
            {subtitle}
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-8"
        >
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
            >
              <PricingCard tier={tier} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;
