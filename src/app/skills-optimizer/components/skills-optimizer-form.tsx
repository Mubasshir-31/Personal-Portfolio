'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Loader2, Sparkles, Wand2 } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { getOptimizedSkills } from '../actions';
import type { SkillsOptimizerOutput } from '@/ai/flows/skills-optimizer';
import { Badge } from '@/components/ui/badge';

const formSchema = z.object({
  profileDescription: z.string().min(50, 'Please provide a more detailed profile description (at least 50 characters).'),
  industryTrends: z.string().min(20, 'Please describe some industry trends (at least 20 characters).'),
});

export function SkillsOptimizerForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<SkillsOptimizerOutput | null>(null);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      profileDescription: '',
      industryTrends: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setResult(null);

    const response = await getOptimizedSkills(values);

    if (response.success) {
      setResult(response.data);
    } else {
      toast({
        title: 'Error',
        description: response.error,
        variant: 'destructive',
      });
    }

    setIsLoading(false);
  }

  return (
    <div className="grid md:grid-cols-2 gap-8">
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2"><Wand2 className="text-accent" /> Provide Your Details</CardTitle>
          <CardDescription>The more detail you provide, the better the suggestions will be.</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="profileDescription"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Your Profile Description</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="e.g., A frontend developer with 3 years of experience in React, specializing in e-commerce applications..."
                        className="resize-y"
                        rows={8}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="industryTrends"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Current Industry Trends</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="e.g., Growing demand for AI integration, serverless architectures, and cross-platform mobile development..."
                        className="resize-y"
                        rows={5}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" disabled={isLoading} className="w-full">
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Analyzing...
                  </>
                ) : (
                  'Optimize My Skills'
                )}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>

      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2"><Sparkles className="text-accent" /> AI-Powered Suggestions</CardTitle>
          <CardDescription>Here are the skills our AI recommends you highlight.</CardDescription>
        </CardHeader>
        <CardContent>
          {isLoading && (
            <div className="flex flex-col items-center justify-center h-full text-muted-foreground">
              <Loader2 className="w-12 h-12 animate-spin mb-4" />
              <p className="text-lg">Generating personalized recommendations...</p>
            </div>
          )}
          {!isLoading && !result && (
            <div className="flex flex-col items-center justify-center h-full text-center text-muted-foreground">
              <p className="text-lg">Your results will appear here once you submit the form.</p>
            </div>
          )}
          {result && (
            <div className="space-y-6 animate-fade-in">
              <div>
                <h3 className="font-semibold text-lg text-primary mb-3">Suggested Skills to Highlight</h3>
                <div className="flex flex-wrap gap-2">
                  {result.suggestedSkills.map((skill) => (
                    <Badge key={skill} variant="default" className="text-base px-3 py-1 bg-primary/10 text-primary border-primary/20 hover:bg-primary/20">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-lg text-primary mb-3">Reasoning</h3>
                <p className="text-foreground/90 whitespace-pre-wrap">{result.reasoning}</p>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
