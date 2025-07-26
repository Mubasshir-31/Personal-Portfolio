'use client';

import { Github, Linkedin, Mail, Twitter, User, MessageSquare } from 'lucide-react';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

export default function Contact() {
  return (
    <div className="container mx-auto px-4 py-16 animate-fade-in">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-headline font-bold text-primary">Get In Touch</h1>
        <p className="text-lg text-muted-foreground mt-2">I'm always open to discussing new projects, creative ideas, or opportunities.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        <Card>
          <CardHeader>
            <CardTitle>Send a Message</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <div className="relative flex items-center">
                  <User className="absolute left-3 w-5 h-5 text-muted-foreground" />
                  <Input id="name" placeholder="Your Name" className="pl-10" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <div className="relative flex items-center">
                  <Mail className="absolute left-3 w-5 h-5 text-muted-foreground" />
                  <Input id="email" type="email" placeholder="Your Email" className="pl-10" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <div className="relative">
                  <MessageSquare className="absolute top-3 left-3 w-5 h-5 text-muted-foreground" />
                  <Textarea id="message" placeholder="Your Message" className="pl-10" rows={5} />
                </div>
              </div>
              <Button type="submit" className="w-full">Send Message</Button>
            </form>
          </CardContent>
        </Card>

        <div className="space-y-6">
           <Card>
             <CardHeader>
                <CardTitle>Contact Information</CardTitle>
             </CardHeader>
             <CardContent className="space-y-4">
                 <Link href="mailto:hello@example.com" className="flex items-center gap-4 group">
                    <Mail className="w-6 h-6 text-accent"/>
                    <span className="text-lg text-foreground group-hover:text-primary transition-colors">hello@example.com</span>
                </Link>
             </CardContent>
           </Card>
           
           <Card>
             <CardHeader>
                <CardTitle>Follow Me</CardTitle>
             </CardHeader>
             <CardContent className="flex justify-around">
                 <Link href="#" className="flex items-center gap-4 group flex-col text-muted-foreground hover:text-primary">
                    <Github className="w-8 h-8"/>
                    <span>GitHub</span>
                </Link>
                 <Link href="#" className="flex items-center gap-4 group flex-col text-muted-foreground hover:text-primary">
                    <Linkedin className="w-8 h-8"/>
                    <span>LinkedIn</span>
                </Link>
                 <Link href="#" className="flex items-center gap-4 group flex-col text-muted-foreground hover:text-primary">
                    <Twitter className="w-8 h-8"/>
                    <span>Twitter</span>
                </Link>
             </CardContent>
           </Card>
        </div>
      </div>
    </div>
  )
}
