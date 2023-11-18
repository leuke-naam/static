import { defineCollection, z } from 'astro:content'

const board = defineCollection({
  type: 'data',
  schema: z.object({
    name: z.string(),
    role: z.enum(['Voorzitter', 'Secretaris', 'Penningmeester']),
    contact: z.string().url(),
  }),
})

export const collections = {
  board,
}
