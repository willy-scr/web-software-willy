import React from "react";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Check } from "lucide-react";

interface PricingFeature {
  name: string;
  included: boolean;
}

interface PricingTier {
  name: string;
  price: string;
  description: string;
  features: PricingFeature[];
  buttonText: string;
  popular?: boolean;
}

interface PricingCardProps {
  tier?: PricingTier;
}

const defaultTier: PricingTier = {
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
  popular: false,
};

const PricingCard = ({ tier = defaultTier }: PricingCardProps) => {
  return (
    <Card
      className={`w-[350px] h-[500px] flex flex-col justify-between bg-card backdrop-blur-sm ${tier.popular ? "border-2 border-primary" : ""}`}
    >
      <CardHeader>
        {tier.popular && (
          <div className="px-3 py-1 text-xs font-semibold text-primary-foreground bg-primary rounded-full w-fit mb-2">
            Most Popular
          </div>
        )}
        <CardTitle className="text-2xl font-bold">{tier.name}</CardTitle>
        <CardDescription className="flex items-baseline mt-2">
          <span className="text-3xl font-bold tracking-tight">
            {tier.price}
          </span>
          <span className="ml-1 text-sm font-medium text-muted-foreground">
            /month
          </span>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground mb-6">{tier.description}</p>
        <ul className="space-y-3">
          {tier.features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <Check
                className={`h-4 w-4 mr-2 ${feature.included ? "text-primary" : "text-muted-foreground"}`}
              />
              <span
                className={`text-sm ${feature.included ? "text-foreground" : "text-muted-foreground"}`}
              >
                {feature.name}
              </span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button
          className={`w-full ${tier.popular ? "bg-primary hover:bg-primary/90" : ""}`}
          variant={tier.popular ? "default" : "outline"}
        >
          {tier.buttonText}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PricingCard;
