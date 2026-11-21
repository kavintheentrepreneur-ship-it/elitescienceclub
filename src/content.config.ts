import { defineCollection, z } from 'astro:content';
import { glob } from 'astro:content';

const blogSchema = z.object({
  title: z.string(),
  description: z.string(),
  pubDate: z.coerce.date(),
  lang: z.enum(['en', 'ta']),
  translationSlug: z.string().optional(),
  youtubeId: z.string().optional(),
  tags: z.array(z.string()),
  category: z.string(),
});

const blogEn = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog-en' }),
  schema: blogSchema,
});

const blogTa = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog-ta' }),
  schema: blogSchema,
});

export const collections = {
  'blog-en': blogEn,
  'blog-ta': blogTa,
};
