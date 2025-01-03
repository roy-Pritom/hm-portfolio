import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { RiArrowDropDownLine } from "react-icons/ri";

interface MenuItemProps {
  item: {
    key: string;
    name: string;
    link: string;
    children?: { key: string; name: string; link: string }[];
  };
}

const DesktopMenuItem: React.FC<MenuItemProps> = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const pathname = usePathname();

  // Normalize pathname and item.link for comparison, ignoring language prefixes
  const normalizePath = (path: string) => {
    const pathWithoutLang = path.replace(/^\/(bn|en)/, "");
    return pathWithoutLang === "" ? "/" : pathWithoutLang; // Ensure root path is recognized as "/"
  };
  const isActive = normalizePath(pathname) === normalizePath(item.link);

  useEffect(() => {
    // Automatically update active state when the route changes
    if (isActive) {
      setHoveredItem(item.name);
    }
  }, [isActive, item.name]);

  if (item.children) {
    return (
      <div
        className="relative"
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={(e) => {
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          if (!e.currentTarget.contains(e.relatedTarget)) {
            setIsOpen(false);
          }
        }}
      >
        <Popover open={isOpen} onOpenChange={setIsOpen}>
          <PopoverTrigger 
            className="h-10 w-max px-4 py-2 font-medium text-[#212121] focus:outline-none"
            onMouseEnter={() => setHoveredItem(item.name)}
            onMouseLeave={() => setHoveredItem(null)}
          >
            <span
              className={`
                flex items-center text-black relative group transition-colors
                ${isActive ? "text-red-600" : ""}
              `}
            >
              {item.name}
              <RiArrowDropDownLine size={20} />
              <span
                className={`
                  absolute bottom-0 left-0 h-[2px] w-full bg-red-600 transition-transform duration-300 transform 
                  ${hoveredItem === item.name || isActive ? "scale-x-100" : "scale-x-0"}
                `}
              />
            </span>
          </PopoverTrigger>
          <PopoverContent 
      className="w-[280px] p-0 shadow-lg rounded-sm border border-gray-200"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <ul className="divide-y divide-gray-100">
        {item.children?.map((item) => (
          <li key={item.key}>
            <NavigationMenuLink asChild>
              <Link
                href={item.link}
                className={`
                  block px-4 py-2.5 text-[15px] transition-colors
              hover:bg-red-500 hover:text-white focus:bg-red-500 focus:text-white
                `}
              >
                {item.name}
              </Link>
            </NavigationMenuLink>
          </li>
        ))}
      </ul>
    </PopoverContent>
        </Popover>
      </div>
    );
  }

  return (
    <NavigationMenuItem>
      <Link href={item.link} legacyBehavior passHref>
        <NavigationMenuLink
          className={`
            h-10 w-max px-4 py-2 font-medium text-[#212121] relative group transition-colors
            ${isActive ? "text-red-600" : ""}
          `}
          onMouseEnter={() => setHoveredItem(item.name)}
          onMouseLeave={() => setHoveredItem(null)}
        >
          {item.name}
          <span
            className={`
              absolute bottom-0 left-0 h-[2px] w-full bg-red-600 transition-transform duration-300 transform 
              ${hoveredItem === item.name || isActive ? "scale-x-100" : "scale-x-0"}
            `}
          />
        </NavigationMenuLink>
      </Link>
    </NavigationMenuItem>
  );
};

export default DesktopMenuItem;
