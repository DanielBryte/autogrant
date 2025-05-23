"use client";

import { Search, Bell } from "lucide-react";

import { cn } from "@/lib/utils";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { AvatarImage } from "@radix-ui/react-avatar";
import { Avatar, AvatarFallback } from "../ui/avatar";

interface TopBarProps {
  className?: string;
  showSearch?: boolean;
}

export default function TopBar({ className, showSearch = true }: TopBarProps) {
  return (
    <header className={cn("flex h-14 items-center gap-4 border-b bg-background px-6", className)}>
      {/* Search Bar - Only show if showSearch is true */}
      {showSearch && (
        <div className="w-full max-w-md">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search grants, opportunities..."
              className="w-full appearance-none bg-background pl-8 shadow-none"
            />
          </div>
        </div>
      )}
      
      {/* Right side actions */}
      <div className={cn("flex items-center gap-2", showSearch ? "ml-auto" : "ml-auto")}>
        {/* Notifications */}
        <Button variant="ghost" size="icon" className="h-8 w-8 relative">
          <Bell className="h-5 w-5" />
          <span className="sr-only">Notifications</span>
          {/* Notification badge */}
          <span className="absolute -top-1 -right-1 h-3 w-3 bg-red-500 rounded-full flex items-center justify-center">
            <span className="text-[10px] text-white font-medium">3</span>
          </span>
        </Button>
        
        {/* User Avatar */}
        <div className="flex items-center gap-2">
          <Avatar className="h-8 w-8 cursor-pointer hover:ring-2 hover:ring-green-500 transition-all">
            <AvatarImage src="/placeholder-user.jpg" alt="User" />
            <AvatarFallback className="bg-green-100 text-green-700 font-medium">JD</AvatarFallback>
          </Avatar>
          
          {/* User info - hidden on small screens */}
          <div className="hidden lg:block">
            <div className="text-sm font-medium">John Doe</div>
            <div className="text-xs text-muted-foreground">john@acabeta.com</div>
          </div>
        </div>
      </div>
    </header>
  );
}