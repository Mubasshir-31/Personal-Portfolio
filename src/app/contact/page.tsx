'use client';

import { Github, Linkedin, Mail } from 'lucide-react';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function Contact() {
  return (
    <div className="container mx-auto px-4 py-16 animate-fade-in">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-headline font-bold text-primary">Get In Touch</h1>
        <p className="text-lg text-muted-foreground mt-2">I'm always open to discussing new projects, creative ideas, or opportunities.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle>Contact Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Link href="mailto:mubasshirkhan9336@gmail.com" className="flex items-center gap-4 group">
              <Mail className="w-6 h-6 text-accent" />
              <span className="text-lg text-foreground group-hover:text-primary transition-colors">mubasshirkhan9336@gmail.com</span>
            </Link>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Follow Me</CardTitle>
          </CardHeader>
          <CardContent className="flex justify-around items-center pt-2">
            <Link href="https://github.com/Mubasshir-31" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group flex-col text-muted-foreground hover:text-primary transition-colors">
              <Github className="w-8 h-8" />
              <span>GitHub</span>
            </Link>
            <Link href="https://www.linkedin.com/in/mohd-mubasshir-khan-0553121bb/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group flex-col text-muted-foreground hover:text-primary transition-colors">
              <Linkedin className="w-8 h-8" />
              <span>LinkedIn</span>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
