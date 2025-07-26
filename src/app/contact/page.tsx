'use client'

import { Github, Linkedin, Mail, Twitter } from 'lucide-react';
import Link from 'next/link';

export default function Contact() {
  return (
    <div className="container mx-auto px-4 py-16 animate-fade-in">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-headline font-bold text-primary">Get In Touch</h1>
        <p className="text-lg text-muted-foreground mt-2">I'm always open to discussing new projects, creative ideas, or opportunities.</p>
      </div>

      <div className="flex justify-center">
        <div className="space-y-6 max-w-md text-center">
            <h2 className="text-2xl font-semibold text-primary">Contact Information</h2>
            <p className="text-muted-foreground">
                Alternatively, you can reach me through my email or social media channels. I look forward to hearing from you!
            </p>
            <div className="space-y-4">
                <Link href="mailto:hello@example.com" className="flex items-center gap-4 group justify-center">
                    <Mail className="w-6 h-6 text-accent"/>
                    <span className="text-lg text-foreground group-hover:text-primary transition-colors">hello@example.com</span>
                </Link>
                 <Link href="#" className="flex items-center gap-4 group justify-center">
                    <Github className="w-6 h-6 text-accent"/>
                    <span className="text-lg text-foreground group-hover:text-primary transition-colors">GitHub Profile</span>
                </Link>
                 <Link href="#" className="flex items-center gap-4 group justify-center">
                    <Linkedin className="w-6 h-6 text-accent"/>
                    <span className="text-lg text-foreground group-hover:text-primary transition-colors">LinkedIn Profile</span>
                </Link>
                 <Link href="#" className="flex items-center gap-4 group justify-center">
                    <Twitter className="w-6 h-6 text-accent"/>
                    <span className="text-lg text-foreground group-hover:text-primary transition-colors">Twitter Profile</span>
                </Link>
            </div>
        </div>
      </div>
    </div>
  )
}
