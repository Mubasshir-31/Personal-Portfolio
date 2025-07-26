'use server';

import { skillsOptimizer, type SkillsOptimizerInput, type SkillsOptimizerOutput } from '@/ai/flows/skills-optimizer';

export async function getOptimizedSkills(
  data: SkillsOptimizerInput
): Promise<{ success: true; data: SkillsOptimizerOutput } | { success: false; error: string }> {
  try {
    const result = await skillsOptimizer(data);
    return { success: true, data: result };
  } catch (error) {
    console.error('Error in skills optimizer flow:', error);
    // Return a user-friendly error message
    return { success: false, error: 'Failed to generate skill suggestions. Please try again later.' };
  }
}
