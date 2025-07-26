'use client'

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';
import Link from 'next/link';

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { submitContactForm } from "./actions"


const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }).max(500, {
    message: "Message cannot exceed 500 characters."
  }),
})

export default function Contact() {
  const { toast } = useToast()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const result = await submitContactForm(values);

    if (result.success) {
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      })
      form.reset();
    } else {
        toast({
            title: "Uh oh! Something went wrong.",
            description: result.error || "There was a problem with your request.",
            variant: "destructive",
        })
    }
  }

  return (
    <div className="container mx-auto px-4 py-16 animate-fade-in">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-headline font-bold text-primary">Get In Touch</h1>
        <p className="text-lg text-muted-foreground mt-2">I'm always open to discussing new projects, creative ideas, or opportunities.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl">Send me a message</CardTitle>
            <CardDescription>Fill out the form and I'll get back to you as soon as possible.</CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Your Name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="your.email@example.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Tell me what you're thinking about..." className="resize-none" rows={5} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" disabled={form.formState.isSubmitting}>
                    {form.formState.isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
        <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-primary">Contact Information</h2>
            <p className="text-muted-foreground">
                Alternatively, you can reach me through my email or social media channels. I look forward to hearing from you!
            </p>
            <div className="space-y-4">
                <Link href="mailto:hello@example.com" className="flex items-center gap-4 group">
                    <Mail className="w-6 h-6 text-accent"/>
                    <span className="text-lg text-foreground group-hover:text-primary transition-colors">hello@example.com</span>
                </Link>
                 <Link href="#" className="flex items-center gap-4 group">
                    <Github className="w-6 h-6 text-accent"/>
                    <span className="text-lg text-foreground group-hover:text-primary transition-colors">GitHub Profile</span>
                </Link>
                 <Link href="#" className="flex items-center gap-4 group">
                    <Linkedin className="w-6 h-6 text-accent"/>
                    <span className="text-lg text-foreground group-hover:text-primary transition-colors">LinkedIn Profile</span>
                </Link>
                 <Link href="#" className="flex items-center gap-4 group">
                    <Twitter className="w-6 h-6 text-accent"/>
                    <span className="text-lg text-foreground group-hover:text-primary transition-colors">Twitter Profile</span>
                </Link>
            </div>
        </div>
      </div>
    </div>
  )
}
