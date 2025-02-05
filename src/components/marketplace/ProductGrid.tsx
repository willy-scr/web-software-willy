import React, { useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import ProductCard from "./ProductCard";
import { Search, Filter } from "lucide-react";

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

  return (
    <div className="w-full max-w-[1200px] mx-auto p-6">
      <div className="flex flex-col md:flex-row gap-4 mb-8">
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
        <div className="flex gap-2 overflow-x-auto pb-2">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => handleCategoryFilter(category)}
              className="whitespace-nowrap"
            >
              {category}
            </Button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            title={product.title}
            description={product.description}
            price={product.price}
            image={product.image}
            category={product.category}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
