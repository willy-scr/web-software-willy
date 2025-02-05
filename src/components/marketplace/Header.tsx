import React from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { motion } from "framer-motion";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../ui/navigation-menu";
import { Search, ShoppingCart } from "lucide-react";

interface HeaderProps {
  onSearch?: (query: string) => void;
  categories?: string[];
  cartItemCount?: number;
}

const Header = ({
  onSearch = () => {},
  categories = [
    "Video Editing",
    "Audio Tools",
    "Streaming Software",
    "Graphics & Design",
    "Productivity",
  ],
  cartItemCount = 0,
}: HeaderProps) => {
  const containerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <motion.header
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="sticky top-0 z-50 w-full h-20 border-b border-border/10 bg-background/95 backdrop-blur-md supports-[backdrop-filter]:bg-background/60"
    >
      <div className="container mx-auto h-full px-4 flex items-center justify-between">
        <motion.div
          className="flex items-center gap-8"
          variants={containerVariants}
        >
          <motion.a
            href="/"
            className="text-2xl font-bold text-primary"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            MarketPlace
          </motion.a>

          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Categories</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <motion.ul
                    className="grid w-[400px] gap-3 p-4"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    {categories.map((category) => (
                      <motion.li key={category} variants={itemVariants}>
                        <NavigationMenuLink asChild>
                          <a
                            href={`#${category.toLowerCase().replace(/ /g, "-")}`}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            {category}
                          </a>
                        </NavigationMenuLink>
                      </motion.li>
                    ))}
                  </motion.ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </motion.div>

        <motion.div
          className="flex items-center gap-4"
          variants={containerVariants}
        >
          <motion.div className="relative w-64" variants={itemVariants}>
            <Input
              type="search"
              placeholder="Search products..."
              className="pr-8"
              onChange={(e) => onSearch(e.target.value)}
            />
            <Search className="absolute right-2 top-2.5 h-5 w-5 text-muted-foreground" />
          </motion.div>

          <motion.div variants={itemVariants}>
            <Button
              variant="outline"
              size="icon"
              className="relative"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ShoppingCart className="h-5 w-5" />
              {cartItemCount > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-2 -right-2 h-5 w-5 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center"
                >
                  {cartItemCount}
                </motion.span>
              )}
            </Button>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              Sign In
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </motion.header>
  );
};

export default Header;
