"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X, User } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { ModeToggle } from "@/components/mode-toggle";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Memberships", href: "/memberships" },
  {
    name: "Classes",
    href: "/classes",
    submenu: [
      { name: "Group Fitness", href: "/classes/group-fitness" },
      { name: "Personal Training", href: "/classes/personal-training" },
      { name: "Pilates", href: "/classes/pilates" },
    ]
  },
  {
    name: "Training",
    href: "/training",
    submenu: [
      { name: "Programs", href: "/training/programs" },
      { name: "Workouts", href: "/training/workouts" },
      { name: "Personal Trainers", href: "/training/trainers" },
    ]
  },
  { name: "Locations", href: "/locations" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5 text-xl font-bold">
            FitnessHub
          </Link>
        </div>
        <div className="flex lg:hidden">
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex items-center justify-between pb-4 border-b">
                <Link href="/" className="text-xl font-bold" onClick={() => setIsMenuOpen(false)}>
                  FitnessHub
                </Link>
                <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(false)}>
                  <X className="h-5 w-5" />
                </Button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-muted">
                  <div className="space-y-2 py-6">
                    {navigation.map((item) => (
                      <div key={item.name}>
                        <Link
                          href={item.href}
                          onClick={() => setIsMenuOpen(false)}
                          className={cn(
                            "block py-2 text-base font-semibold leading-7",
                            pathname === item.href ? "text-primary" : "text-foreground"
                          )}
                        >
                          {item.name}
                        </Link>
                        {item.submenu && (
                          <div className="ml-4 space-y-2 mt-2">
                            {item.submenu.map((subitem) => (
                              <Link
                                key={subitem.name}
                                href={subitem.href}
                                onClick={() => setIsMenuOpen(false)}
                                className={cn(
                                  "block py-1.5 text-sm font-medium",
                                  pathname === subitem.href ? "text-primary" : "text-muted-foreground"
                                )}
                              >
                                {subitem.name}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                  <div className="py-6">
                    <Link
                      href="/signin"
                      onClick={() => setIsMenuOpen(false)}
                      className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7"
                    >
                      Sign in
                    </Link>
                    <Link
                      href="/signup"
                      onClick={() => setIsMenuOpen(false)}
                      className="mt-2"
                    >
                      <Button className="w-full" size="lg">Join Now</Button>
                    </Link>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
        <div className="hidden lg:flex lg:gap-x-6">
          {navigation.map((item) => (
            <div key={item.name} className="relative group">
              {item.submenu ? (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      className={cn(
                        "px-2 py-1 text-sm font-semibold leading-6",
                        pathname.startsWith(item.href) ? "text-primary" : "text-foreground"
                      )}
                    >
                      {item.name}
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="center" className="w-48">
                    {item.submenu.map((subitem) => (
                      <DropdownMenuItem key={subitem.name} asChild>
                        <Link
                          href={subitem.href}
                          className={cn(
                            "w-full",
                            pathname === subitem.href ? "text-primary" : ""
                          )}
                        >
                          {subitem.name}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link
                  href={item.href}
                  className={cn(
                    "px-2 py-1 text-sm font-semibold leading-6",
                    pathname === item.href ? "text-primary" : "text-foreground"
                  )}
                >
                  {item.name}
                </Link>
              )}
            </div>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-4">
          <ModeToggle />
          <Link href="/signin">
            <Button variant="ghost" size="sm">
              Sign in
            </Button>
          </Link>
          <Link href="/signup">
            <Button size="sm">Join Now</Button>
          </Link>
        </div>
      </nav>
    </header>
  );
}
