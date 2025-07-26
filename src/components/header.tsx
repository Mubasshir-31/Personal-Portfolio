'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Bot } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Logo } from './logo';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/contact', label: 'Contact' },
  { href: '/project-idea-generator', label: 'Project Idea Generator', icon: <Bot className="w-4 h-4 ml-2 text-accent" /> },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const NavLink = ({ href, label, icon, isMobile = false }: { href: string; label: string; icon?: React.ReactNode; isMobile?: boolean; }) => {
    const isActive = pathname === href;
    return (
      <Link
        href={href}
        onClick={() => isMobile && setIsOpen(false)}
        className={cn(
          "flex items-center text-sm font-medium transition-colors hover:text-primary",
          isActive ? "text-primary" : "text-muted-foreground",
          isMobile && "text-lg py-2"
        )}
      >
        {label}
        {icon}
      </Link>
    );
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/">
          <Logo />
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <NavLink key={link.href} {...link} />
          ))}
        </nav>
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex justify-between items-center p-4 border-b">
                 <Link href="/" onClick={() => setIsOpen(false)}>
                    <Logo />
                 </Link>
                 <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
                    <X className="h-6 w-6" />
                    <span className="sr-only">Close menu</span>
                </Button>
              </div>
              <nav className="flex flex-col items-start gap-4 p-4">
                {navLinks.map((link) => (
                  <NavLink key={link.href} {...link} isMobile />
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
