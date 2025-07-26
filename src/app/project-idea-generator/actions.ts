'use server';

import { projectIdeaGenerator, type ProjectIdeaGeneratorInput, type ProjectIdeaGeneratorOutput } from '@/ai/flows/project-idea-generator';

export async function getProjectIdeas(
  data: ProjectIdeaGeneratorInput
): Promise<{ success: true; data: ProjectIdeaGeneratorOutput } | { success: false; error: string }> {
  try {
    const result = await projectIdeaGenerator(data);
    return { success: true, data: result };
  } catch (error) {
    console.error('Error in project idea generator flow:', error);
    // Return a user-friendly error message
    return { success: false, error: 'Failed to generate project ideas. Please try again later.' };
  }
}
