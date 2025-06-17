import { defineCollection, defineContentConfig, z } from "@nuxt/content";

const commonSchema = z.object({
  cta: z.object({}).optional(),
  eventid: z.string().optional(),
  layout: z.string().optional(),
  moment: z.string().optional(),
  author: z.array(z.string()).optional(),
  hideInRecent: z.boolean().optional(),
  webcast: z.boolean().optional(),
});

const authorSchema = z.object({
  name: z.string(),
  otherLanguages: z.record(z.string()).optional(),
  description: z.string(),
});

const authorDataSchema = z.record(
  z.object({
    display_name: z.string(),
    avatar: z.string(),
    permalink: z.string(),
    twitter: z.string().optional(),
    linkedin: z.string().optional(),
    imageOffsetLeft: z.string().optional(),
    imageOffsetTop: z.string().optional(),
    socials: z
      .array(
        z.object({
          text: z.string(),
          href: z.string(),
        })
      )
      .optional(),
  })
);

export default defineContentConfig({
  collections: {
    authors: defineCollection({
      type: "data",
      source: {
        include: "authors/**",
        prefix: "",
      },
      schema: authorSchema,
    }),
    authors_data: defineCollection({
      type: "data",
      source: {
        include: "authors.json",
        prefix: "",
      },
      schema: authorDataSchema,
    }),
    content_de: defineCollection({
      type: "page",
      source: {
        include: "de/**",
        prefix: "",
      },
      schema: commonSchema,
    }),
    content_en: defineCollection({
      type: "page",
      source: {
        include: "en/**",
        prefix: "",
      },
      schema: commonSchema,
    }),
    content_es: defineCollection({
      type: "page",
      source: {
        include: "es/**",
        prefix: "",
      },
      schema: commonSchema,
    }),
  },
  content: {
    markdown: {
      anchorLinks: false,
    },
    locales: ["de", "en", "es"],
    defaultLocale: "de",
  },
});
