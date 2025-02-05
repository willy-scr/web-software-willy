import React from "react";
import { motion } from "framer-motion";
import { Button } from "../ui/button";
import ProductCard from "./ProductCard";
import { Search } from "lucide-react";
import { BubbleAnimation } from "../ui/bubble-animation";

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  featuredProducts?: Array<{
    id: string;
    title: string;
    description: string;
    price: number;
    image: string;
    category: string;
  }>;
}

const HeroSection = ({
  title = "Discover Premium Software Tools",
  subtitle = "Enhance your content creation workflow with our curated collection of professional tools",
  featuredProducts = [
    {
      id: "1",
      title: "Video Editor Pro",
      description: "Professional video editing suite",
      price: 99.99,
      image:
        "https://images.unsplash.com/photo-1626544827763-d516dce335e2?w=800&auto=format&fit=crop&q=60",
      category: "Video Editing",
    },
    {
      id: "2",
      title: "Audio Master",
      description: "Advanced audio processing tools",
      price: 79.99,
      image:
        "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&auto=format&fit=crop&q=60",
      category: "Audio",
    },
    {
      id: "3",
      title: "Stream Deck",
      description: "Streaming control center",
      price: 149.99,
      image:
        "https://images.unsplash.com/photo-1631343841300-de6e3c5881bc?w=800&auto=format&fit=crop&q=60",
      category: "Streaming",
    },
  ],
}: HeroSectionProps) => {
  return (
    <section className="w-full h-[400px] bg-gradient-to-r from-primary/20 via-purple-500/20 to-pink-500/20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-white/10" />
      <BubbleAnimation
        className="z-0"
        count={12}
        minSize={30}
        maxSize={60}
        duration={6}
      />

      <div className="container mx-auto px-4 h-full">
        <div className="flex flex-col items-center justify-center text-center pt-16 pb-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold text-foreground mb-4"
          >
            {title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-muted-foreground max-w-2xl mb-8"
          >
            {subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center gap-4"
          >
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
              <input
                type="text"
                placeholder="Search software tools..."
                className="pl-10 pr-4 py-2 rounded-lg border border-input bg-background w-[300px]"
              />
            </div>
            <Button size="lg">Explore All Tools</Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex justify-center gap-6 mt-8 overflow-x-auto pb-4"
        >
          {featuredProducts.map((product) => (
            <ProductCard
              key={product.id}
              title={product.title}
              description={product.description}
              price={product.price}
              image={product.image}
              category={product.category}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
