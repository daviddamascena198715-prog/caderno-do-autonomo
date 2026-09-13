# Caderno do Autônomo — estrutura base do site

Site estático em Astro, pronto pra virar um blog de finanças pessoais para autônomos/freelancers,
com SEO técnico e as páginas legais que o Google AdSense exige.

## O que já está pronto

- Estrutura de páginas: home, categorias, artigo individual, sobre, contato, política de
  privacidade, aviso legal (disclaimer)
- Sistema de conteúdo em Markdown (`src/content/artigos/`) — cada artigo novo é só criar um
  arquivo `.md` novo nessa pasta, seguindo o modelo dos dois exemplos já incluídos
- Dados estruturados (JSON-LD) em cada artigo, pra ajudar o Google a entender o conteúdo
- `sitemap-index.xml` gerado automaticamente no build
- `robots.txt` e `ads.txt` (placeholder) já no lugar certo
- Design próprio (paleta, tipografia Fraunces + IBM Plex Sans), não é um template genérico

## O que você precisa fazer manualmente (não dá pra automatizar)

1. **Comprar um domínio próprio** (ex: cadernodoautonomo.com.br) — o Google não aprova
   AdSense em subdomínio gratuito
2. **Criar um repositório no GitHub** e subir esta pasta:
   ```bash
   git init
   git add .
   git commit -m "estrutura inicial do site"
   git remote add origin <URL_DO_SEU_REPO>
   git push -u origin main
   ```
3. **Conectar o repositório à Vercel** (ou Netlify/GitHub Pages) e apontar seu domínio pra lá
4. **Editar os textos marcados com `[EDITAR]`** em `/sobre`, `/contato` e
   `politica-de-privacidade.astro` com dados reais (nome, e-mail de contato)
5. Trocar `SEU-DOMINIO-AQUI.com.br` em `astro.config.mjs` e em `public/robots.txt` pela URL
   final do site
6. **Criar a conta no Google AdSense** (google.com/adsense/start) — precisa dos seus dados
   pessoais/bancários, então isso é sempre manual
7. Depois de aprovado, trocar o `pub-0000000000000000` em `public/ads.txt` pelo seu Publisher
   ID real
8. Registrar o site no **Google Search Console** e enviar o `sitemap-index.xml`
9. Adicionar o **Google Analytics (GA4)** — código de acompanhamento no `BaseLayout.astro`
10. Adicionar um **banner de consentimento de cookies** (LGPD) antes de ativar os anúncios

## Como adicionar um artigo novo

Crie um arquivo em `src/content/artigos/nome-do-artigo.md` seguindo este cabeçalho:

```yaml
---
titulo: "Título do artigo"
resumo: "Resumo de 1-2 frases pro card e pro SEO."
categoria: "mei-autonomo" # ou cartao-de-credito | emprestimo-financiamento | investimentos-iniciantes
dataPublicacao: 2026-03-01
autor: "Equipe Editorial"
fontes:
  - "Nome da fonte oficial"
---
```

E escreva o conteúdo em Markdown normal abaixo do cabeçalho. O site gera a página
automaticamente no próximo build.

## Comandos

```bash
npm install       # instalar dependências
npm run dev        # rodar localmente em localhost:4321
npm run build       # gerar a versão de produção em /dist
npm run preview     # testar a versão de produção localmente
```
