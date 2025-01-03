
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface MenuItemProps {
  item: {
    key: string;
    name: string;
    link: string;
    children?: { key: string; name: string; link: string }[];
  };
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const MobileMenuItem: React.FC<MenuItemProps> = ({ item,setOpen }) => {
  if (item.children) {
    return (
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value={item.key}>
          <AccordionTrigger className="text-sm font-medium text-[#212121]">
            {item.name}
          </AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-col space-y-2">
              {item.children.map((child) => (
                <Link
                  key={child.key}
                  href={child.link}
                  className="text-sm text-muted-foreground relative group"
                  onClick={() => setOpen(false)}
                >
                  {child.name}
                  <span
                    className={`
                      absolute bottom-0 left-0 h-[2px] w-full bg-red-600 transition-transform duration-300 transform 
                      scale-x-0 group-hover:scale-x-100
                    `}
                  />
                </Link>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    );
  }

  return (
    <Link href={item.link} className="text-sm font-medium text-[#212121] relative group" 
      onClick={() => setOpen(false)}>
      {item.name}
      <span
        className={`
          absolute bottom-0 left-0 h-[2px] w-full bg-red-600 transition-transform duration-300 transform 
          scale-x-0 group-hover:scale-x-100
        `}
      />
    </Link>
  );
};

export default MobileMenuItem;
