import React from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
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
  return (
    <header className="w-full h-20 border-b border-border/10 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto h-full px-4 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <a href="/" className="text-2xl font-bold text-primary">
            MarketPlace
          </a>

          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Categories</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4">
                    {categories.map((category) => (
                      <li key={category}>
                        <NavigationMenuLink asChild>
                          <a
                            href={`#${category.toLowerCase().replace(/ /g, "-")}`}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            {category}
                          </a>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="flex items-center gap-4">
          <div className="relative w-64">
            <Input
              type="search"
              placeholder="Search products..."
              className="pr-8"
              onChange={(e) => onSearch(e.target.value)}
            />
            <Search className="absolute right-2 top-2.5 h-5 w-5 text-muted-foreground" />
          </div>

          <Button variant="outline" size="icon" className="relative">
            <ShoppingCart className="h-5 w-5" />
            {cartItemCount > 0 && (
              <span className="absolute -top-2 -right-2 h-5 w-5 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center">
                {cartItemCount}
              </span>
            )}
          </Button>

          <Button>Sign In</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
