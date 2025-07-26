import { Github, Linkedin } from 'lucide-react';
import Link from 'next/link';
import { Button } from './ui/button';
import { Logo } from './logo';

export function Footer() {
  const socialLinks = [
    { name: 'GitHub', icon: <Github className="h-5 w-5" />, url: 'https://github.com/Mubasshir-31' },
    { name: 'LinkedIn', icon: <Linkedin className="h-5 w-5" />, url: 'https://www.linkedin.com/in/mohd-mubasshir-khan-0553121bb/' },
  ];
  return (
    <footer className="bg-secondary/30">
      <div className="container mx-auto px-4 py-8">
        <div className="md:flex md:justify-between items-center text-center md:text-left">
          <div className="mb-4 md:mb-0">
             <Link href="/">
                <Logo />
             </Link>
          </div>
          <div className="flex justify-center md:justify-start gap-4">
            {socialLinks.map((link) => (
              <Button key={link.name} variant="ghost" size="icon" asChild>
                <Link href={link.url} target="_blank" rel="noopener noreferrer" aria-label={link.name}>
                  {link.icon}
                </Link>
              </Button>
            ))}
          </div>
        </div>
        <div className="mt-8 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Personal Portfolio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
