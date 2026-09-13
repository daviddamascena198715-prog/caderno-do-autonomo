import { defineCollection, z } from 'astro:content';

const artigos = defineCollection({
  type: 'content',
  schema: z.object({
    titulo: z.string(),
    resumo: z.string(),
    categoria: z.enum([
      'cartao-de-credito',
      'emprestimo-financiamento',
      'mei-autonomo',
      'investimentos-iniciantes',
    ]),
    dataPublicacao: z.date(),
    dataAtualizacao: z.date().optional(),
    autor: z.string().default('Equipe Editorial'),
    fontes: z.array(z.string()).default([]),
    destaque: z.boolean().default(false),
  }),
});

export const collections = { artigos };
