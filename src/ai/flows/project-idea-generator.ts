'use server';

/**
 * @fileOverview An AI-powered tool that generates project ideas based on specified technologies.
 *
 * - projectIdeaGenerator - A function that handles the project idea generation process.
 * - ProjectIdeaGeneratorInput - The input type for the projectIdeaGenerator function.
 * - ProjectIdeaGeneratorOutput - The return type for the projectIdeaGenerator function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ProjectIdeaGeneratorInputSchema = z.object({
  technologies: z
    .string()
    .describe('A comma-separated list of technologies the user is interested in.'),
});
export type ProjectIdeaGeneratorInput = z.infer<typeof ProjectIdeaGeneratorInputSchema>;

const ProjectIdeaGeneratorOutputSchema = z.object({
  projectIdeas: z
    .array(
      z.object({
        title: z.string().describe('The title of the project idea.'),
        description: z.string().describe('A brief description of the project idea.'),
      })
    )
    .describe('A list of generated project ideas.'),
});
export type ProjectIdeaGeneratorOutput = z.infer<typeof ProjectIdeaGeneratorOutputSchema>;

export async function projectIdeaGenerator(input: ProjectIdeaGeneratorInput): Promise<ProjectIdeaGeneratorOutput> {
  return projectIdeaGeneratorFlow(input);
}

const prompt = ai.definePrompt({
  name: 'projectIdeaGeneratorPrompt',
  input: {schema: ProjectIdeaGeneratorInputSchema},
  output: {schema: ProjectIdeaGeneratorOutputSchema},
  prompt: `You are an AI assistant that helps developers come up with new project ideas.

Based on the following technologies, generate 3 unique project ideas. For each idea, provide a catchy title and a short description.

Technologies: {{{technologies}}}
`,
});

const projectIdeaGeneratorFlow = ai.defineFlow(
  {
    name: 'projectIdeaGeneratorFlow',
    inputSchema: ProjectIdeaGeneratorInputSchema,
    outputSchema: ProjectIdeaGeneratorOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
