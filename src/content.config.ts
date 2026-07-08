import { defineCollection, z } from 'astro:content';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';

export const collections = {
        docs: defineCollection({
                loader: docsLoader(),
                schema: docsSchema({
                        extend: z.object({
                                icon: z.string().optional(),
                                eyebrow: z.string().optional(),
                                metrolines: z.array(z.string()).optional(),
                                stations: z.array(z.string()).optional(),
                                category: z.string().optional(),
                                canvasId: z.string().optional(),
                                // Add a default value to the built-in `banner` field.
                                banner: z.object({ content: z.string() }).default({
                                  content: 'Try the new beta with capability, integration and automation cycles and more! <a href="https://beta.apiopscycles.com/">https://beta.apiopscycles.com/</a>.',
                                }),
                        }),
                }),
        }),
};
