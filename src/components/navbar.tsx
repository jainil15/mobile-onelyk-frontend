import Link from "next/link";
import {
  Accessibility,
  AccessibilityIcon,
  CircleUserRound,
  HelpCircleIcon,
  LogOut,
  MessageSquare,
  Settings,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Input } from "@/components/ui/input";
import { useTheme } from "next-themes";
import { ThemeChanger } from "@/components/theme-changer";
import Image from "next/image";

const Navbar = () => {
  return (
    <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6 w-full z-50">
      <div className="flex w-full items-center gap-4 justify-between md:ml-auto md:gap-2 lg:gap-4">
        <div className="flex items-center gap-2 justify-center">
          <Image src="/RedRoof.png" alt="Logo" width={100} height={100} />
          <span className="text-sm  text-nowrap overflow-clip">
            Welcome {`Guest Name`}
          </span>
        </div>
        <div className="flex  items-center gap-4">
          <MessageSquare />

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="secondary" size="icon" className="rounded-full">
                <CircleUserRound />
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <ThemeChanger />
              </DropdownMenuItem>
              <DropdownMenuItem className="flex gap-2">
                <Settings />
                Settings
              </DropdownMenuItem>

              <DropdownMenuItem className="flex gap-2">
                <HelpCircleIcon /> Support
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="flex gap-2">
                <LogOut /> Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
