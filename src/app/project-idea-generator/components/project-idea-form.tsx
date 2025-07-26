'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Loader2, Sparkles, Wand2, Lightbulb } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { getProjectIdeas } from '../actions';
import type { ProjectIdeaGeneratorOutput } from '@/ai/flows/project-idea-generator';

const formSchema = z.object({
  technologies: z.string().min(2, 'Please enter at least one technology.'),
});

export function ProjectIdeaForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<ProjectIdeaGeneratorOutput | null>(null);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      technologies: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setResult(null);

    const response = await getProjectIdeas(values);

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
      <Card className="shadow-lg flex flex-col">
        <CardHeader>
          <CardTitle className="flex items-center gap-2"><Wand2 className="text-accent" /> Enter Technologies</CardTitle>
          <CardDescription>Enter a few technologies you're interested in, separated by commas.</CardDescription>
        </CardHeader>
        <CardContent className="flex-grow flex flex-col">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 flex flex-col flex-grow">
              <FormField
                control={form.control}
                name="technologies"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Technologies</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="e.g., React, Firebase, Tailwind CSS"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex-grow" />
              <Button type="submit" disabled={isLoading} className="w-full mt-auto">
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Generating...
                  </>
                ) : (
                  'Generate Ideas'
                )}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>

      <Card className="shadow-lg flex flex-col">
        <CardHeader>
          <CardTitle className="flex items-center gap-2"><Sparkles className="text-accent" /> AI-Generated Project Ideas</CardTitle>
          <CardDescription>Here are a few project ideas to inspire you.</CardDescription>
        </CardHeader>
        <CardContent className="flex-grow">
          {isLoading && (
            <div className="flex flex-col items-center justify-center h-full text-muted-foreground">
              <Loader2 className="w-12 h-12 animate-spin mb-4" />
              <p className="text-lg">Generating creative project ideas...</p>
            </div>
          )}
          {!isLoading && !result && (
            <div className="flex flex-col items-center justify-center h-full text-center text-muted-foreground">
              <p className="text-lg">Your project ideas will appear here.</p>
            </div>
          )}
          {result && (
            <div className="space-y-6 animate-fade-in">
              {result.projectIdeas.map((idea, index) => (
                <div key={index} className="space-y-2">
                  <h3 className="font-semibold text-lg text-primary flex items-center gap-2"><Lightbulb className="w-5 h-5" /> {idea.title}</h3>
                  <p className="text-foreground/90">{idea.description}</p>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
