import React from "react";
import { Card, CardContent, CardFooter } from "../ui/card";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import { motion } from "framer-motion";
import { GradientBorder } from "../ui/gradient-border";
import { Eye, ShoppingCart } from "lucide-react";

interface ProductCardProps {
  title?: string;
  description?: string;
  price?: number;
  image?: string;
  category?: string;
  onPreview?: () => void;
  onPurchase?: () => void;
}

const ProductCard = ({
  title = "Video Editing Suite Pro",
  description = "Professional video editing tools for content creators",
  price = 99.99,
  image = "https://images.unsplash.com/photo-1626544827763-d516dce335e2?w=800&auto=format&fit=crop&q=60",
  category = "Video Editing",
  onPreview = () => console.log("Preview clicked"),
  onPurchase = () => console.log("Purchase clicked"),
}: ProductCardProps) => {
  return (
    <TooltipProvider>
      <motion.div
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.2 }}
        className="w-[280px]"
      >
        <GradientBorder>
          <Card className="overflow-hidden border-0 bg-card/95 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-200">
            <div className="relative h-[180px] overflow-hidden">
              <img
                src={image}
                alt={title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-2 right-2">
                <Badge variant="secondary" className="bg-white/90">
                  {category}
                </Badge>
              </div>
            </div>

            <CardContent className="p-4">
              <h3 className="text-lg font-semibold mb-2">{title}</h3>
              <p className="text-sm text-gray-600 mb-4">{description}</p>
              <p className="text-xl font-bold text-primary">${price}</p>
            </CardContent>

            <CardFooter className="p-4 pt-0 flex justify-between gap-2">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="outline"
                    size="icon"
                    className="w-full"
                    onClick={onPreview}
                  >
                    <Eye className="h-4 w-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Preview Product</p>
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="default"
                    size="icon"
                    className="w-full"
                    onClick={onPurchase}
                  >
                    <ShoppingCart className="h-4 w-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Add to Cart</p>
                </TooltipContent>
              </Tooltip>
            </CardFooter>
          </Card>
        </GradientBorder>
      </motion.div>
    </TooltipProvider>
  );
};

export default ProductCard;
