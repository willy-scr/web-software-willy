import React, { useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import ProductCard from "./ProductCard";
import { Search, Filter } from "lucide-react";
import { motion } from "framer-motion";

interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

interface ProductGridProps {
  products?: Product[];
  onSearch?: (query: string) => void;
  onFilter?: (category: string) => void;
}

const defaultProducts: Product[] = [
  {
    id: "1",
    title: "Video Editing Suite Pro",
    description: "Professional video editing tools for content creators",
    price: 99.99,
    image:
      "https://images.unsplash.com/photo-1626544827763-d516dce335e2?w=800&auto=format&fit=crop&q=60",
    category: "Video Editing",
  },
  {
    id: "2",
    title: "Audio Master Studio",
    description: "Complete audio production and mixing solution",
    price: 79.99,
    image:
      "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&auto=format&fit=crop&q=60",
    category: "Audio",
  },
  {
    id: "3",
    title: "Streaming Toolkit",
    description: "Essential tools for professional streaming",
    price: 49.99,
    image:
      "https://images.unsplash.com/photo-1603784022304-30b394d1db00?w=800&auto=format&fit=crop&q=60",
    category: "Streaming",
  },
  {
    id: "4",
    title: "Content Creator Bundle",
    description: "All-in-one solution for content creation",
    price: 149.99,
    image:
      "https://images.unsplash.com/photo-1535303311164-664fc9ec6532?w=800&auto=format&fit=crop&q=60",
    category: "Bundle",
  },
];

const categories = ["All", "Video Editing", "Audio", "Streaming", "Bundle"];

const ProductGrid = ({
  products = defaultProducts,
  onSearch = () => {},
  onFilter = () => {},
}: ProductGridProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    onSearch(e.target.value);
  };

  const handleCategoryFilter = (category: string) => {
    setSelectedCategory(category);
    onFilter(category);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <div className="w-full max-w-[1200px] mx-auto p-6 space-y-12">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col md:flex-row gap-4 mb-8"
      >
        <div className="relative flex-1">
          <Input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={handleSearch}
            className="pl-10"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
        </div>
        <motion.div
          className="flex gap-2 overflow-x-auto pb-2"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {categories.map((category, index) => (
            <motion.div key={category} variants={itemVariants} custom={index}>
              <Button
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => handleCategoryFilter(category)}
                className="whitespace-nowrap"
              >
                {category}
              </Button>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center"
      >
        {products.map((product, index) => (
          <motion.div key={product.id} variants={itemVariants} custom={index}>
            <ProductCard
              title={product.title}
              description={product.description}
              price={product.price}
              image={product.image}
              category={product.category}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default ProductGrid;
