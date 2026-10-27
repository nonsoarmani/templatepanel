import { defineCollection, z } from 'astro:content';

const complianceCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    metaTitle: z.string(),
    metaDescription: z.string(),
    regulation: z.string(), // e.g., "EU AI Act" or "NIST AI RMF"
    articleNumber: z.string(),
    targetAudience: z.string(),
    riskLevel: z.string(),
    kitPrice: z.string(),
  }),
});

export const collections = {
  'compliance': complianceCollection,
};
