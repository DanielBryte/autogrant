"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { 
  LayoutDashboard, 
  Lightbulb, 
  FileText, 
  Milestone, 
  Wallet, 
  Building2, 
  Settings, 
  HelpCircle,
  ChevronDown,
  Plus,
  X,
  Menu
} from "lucide-react";
import { useState } from "react";
import { Button } from "../ui/button";

interface SidebarProps {
  className?: string;
}

export default function Sidebar({ className }: SidebarProps) {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    {
      name: "Dashboard",
      href: "/dashboard",
      icon: LayoutDashboard,
    },
    {
      name: "Opportunities",
      href: "/dashboard/opportunities",
      icon: Lightbulb,
    },
    {
      name: "My Grants",
      href: "/dashboard/my-grants",
      icon: FileText,
    },
    {
      name: "Milestones",
      href: "/dashboard/milestones",
      icon: Milestone,
    },
    {
      name: "Wallet",
      href: "/dashboard/wallet",
      icon: Wallet,
    },
  ];

  const bottomNavItems = [
    {
      name: "Settings",
      href: "/dashboard/settings",
      icon: Settings,
    },
    {
      name: "Support",
      href: "/dashboard/support",
      icon: HelpCircle,
    },
  ];

  const SidebarContent = () => (
    <div className="flex h-full flex-col bg-background">
      {/* Logo */}
      <div className="flex h-14 items-center border-b px-4">
        <Link href="/dashboard" className="flex items-center gap-2 font-semibold">
          <span className="text-green-500 h-6 w-6">✓</span>
          <span className="text-lg">AutoGrant</span>
        </Link>
        <div className="ml-auto flex items-center gap-1">
          {/* Desktop layout button */}

          {/* Mobile close button */}
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 md:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex-1 overflow-auto py-2">
        <nav className="grid gap-1 px-2">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className={cn(
                "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors",
                pathname === item.href 
                  ? "bg-accent text-green-600 font-semibold" 
                  : "text-muted-foreground"
              )}
            >
              <item.icon className="h-5 w-5" />
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Business Profile Section */}
        <div className="mt-6 px-4">
          <div className="text-xs font-semibold text-muted-foreground tracking-wider mb-2">
            BUSINESS PROFILE
          </div>
          <div className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors cursor-pointer">
            <Building2 className="h-5 w-5" />
            <span>Acabeta LLC</span>
            <ChevronDown className="h-4 w-4 ml-auto" />
          </div>
          <div className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors cursor-pointer">
            <Plus className="h-5 w-5" />
            <span>Add new profile</span>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="mt-auto p-2">
        <nav className="grid gap-1">
          {bottomNavItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className={cn(
                "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors",
                pathname === item.href 
                  ? "bg-accent text-green-600 font-semibold" 
                  : "text-muted-foreground"
              )}
            >
              <item.icon className="h-5 w-5" />
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );

  return (
    <>
      {/* Mobile Menu Button - Only visible on mobile */}
      <Button
        variant="ghost"
        size="icon"
        className="md:hidden fixed top-3 left-4 z-50 h-8 w-8"
        onClick={() => setIsMobileMenuOpen(true)}
      >
        <Menu className="h-5 w-5" />
      </Button>

      {/* Desktop Sidebar */}
      <aside className={cn("hidden md:flex w-60 flex-col border-r border-border", className)}>
        <SidebarContent />
      </aside>

      {/* Mobile Sidebar Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40 flex">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/50"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          {/* Sidebar */}
          <aside className="relative flex w-64 flex-col border-r border-border bg-background shadow-xl">
            <SidebarContent />
          </aside>
        </div>
      )}
    </>
  );
}