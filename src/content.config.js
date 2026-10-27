import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders'; // Added for Astro v6 conformity

const complianceCollection = defineCollection({
  // Tells Astro v6 to scan the folder for Markdown files programmatically
  loader: glob({ pattern: '**/[^_]*.md', base: "./src/content/compliance" }),
  schema: z.object({
    title: z.string(),
    metaTitle: z.string(),
    metaDescription: z.string(),
    regulation: z.string(),
    articleNumber: z.string(),
    targetAudience: z.string(),
    riskLevel: z.string(),
    kitPrice: z.string(),
  }),
});

export const collections = {
  'compliance': complianceCollection,
};
