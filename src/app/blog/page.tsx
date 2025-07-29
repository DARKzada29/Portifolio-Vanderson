'use client';

import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Search, Calendar, Clock, ArrowRight, Tag, TrendingUp, BookOpen, Filter } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { BlogPostSkeleton } from '@/components/LoadingSkeleton';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  tags: string[];
  publishedAt: Date;
  readTime: number;
  featured: boolean;
  image: string;
  author: {
    name: string;
    avatar: string;
  };
}

// Mock data - artigos completos e profissionais
const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'React 18: Novidades e Como Migrar Seu Projeto',
    excerpt: 'Descubra as principais funcionalidades do React 18, incluindo Concurrent Features, Suspense e como fazer a migração do seu projeto de forma segura.',
    content: `# React 18: Novidades e Como Migrar Seu Projeto

O React 18 trouxe mudanças significativas que revolucionam a forma como desenvolvemos aplicações. Neste artigo, vou abordar as principais novidades e como você pode migrar seu projeto de forma segura.

## Principais Novidades

### 1. Concurrent Features
O React 18 introduziu recursos concorrentes que permitem que o React prepare múltiplas versões da UI ao mesmo tempo. Isso significa melhor performance e experiência do usuário.

### 2. Automatic Batching
Agora o React agrupa automaticamente múltiplas atualizações de estado em uma única re-renderização, mesmo em promises, timeouts e event handlers nativos.

### 3. Suspense Melhorado
O Suspense agora funciona melhor com Server-Side Rendering e oferece melhor controle sobre estados de carregamento.

## Como Migrar

### Passo 1: Atualizar Dependências
\`\`\`bash
npm install react@18 react-dom@18
\`\`\`

### Passo 2: Usar createRoot
\`\`\`javascript
// Antes
import ReactDOM from 'react-dom';
ReactDOM.render(<App />, document.getElementById('root'));

// Depois
import { createRoot } from 'react-dom/client';
const root = createRoot(document.getElementById('root'));
root.render(<App />);
\`\`\`

### Passo 3: Testar Concurrent Features
\`\`\`javascript
import { startTransition } from 'react';

function handleClick() {
  startTransition(() => {
    setTab('posts');
  });
}
\`\`\`

## Conclusão

O React 18 representa um grande avanço na biblioteca. A migração é relativamente simples e os benefícios de performance são significativos. Recomendo fortemente a atualização para aproveitar essas melhorias.`,
    category: 'Frontend',
    tags: ['React', 'JavaScript', 'Performance', 'Migração'],
    publishedAt: new Date('2024-01-15'),
    readTime: 8,
    featured: true,
    image: '/images/blog/react-18.jpg',
    author: {
      name: 'Vanderson Cangaty',
      avatar: '/images/avatar.jpg'
    }
  },
  {
    id: '2',
    title: 'TypeScript: Por Que Todo Desenvolvedor Deveria Usar',
    excerpt: 'Entenda os benefícios do TypeScript no desenvolvimento moderno e como ele pode tornar seu código mais robusto e maintível.',
    content: `# TypeScript: Por Que Todo Desenvolvedor Deveria Usar

TypeScript se tornou essencial no desenvolvimento moderno. Neste artigo, explico por que você deveria adotá-lo em seus projetos.

## O Que é TypeScript?

TypeScript é um superset do JavaScript que adiciona tipagem estática opcional. Isso significa que você pode escrever JavaScript normal, mas com a segurança adicional dos tipos.

## Principais Benefícios

### 1. Detecção de Erros em Tempo de Desenvolvimento
\`\`\`typescript
// JavaScript - erro só aparece em runtime
function greet(name) {
  return "Hello " + name.toUpperCase();
}
greet(null); // TypeError em runtime

// TypeScript - erro detectado antes
function greet(name: string): string {
  return "Hello " + name.toUpperCase();
}
greet(null); // Erro detectado pelo compilador
\`\`\`

### 2. Melhor IntelliSense e Autocomplete
Com TypeScript, seu editor pode fornecer sugestões mais precisas e detectar erros antes mesmo de você executar o código.

### 3. Refatoração Mais Segura
Quando você renomeia uma função ou propriedade, o TypeScript garante que todas as referências sejam atualizadas.

### 4. Documentação Viva
Os tipos servem como documentação que nunca fica desatualizada:

\`\`\`typescript
interface User {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
}

function updateUser(user: User): Promise<User> {
  // A interface documenta exatamente o que é esperado
}
\`\`\`

## Como Começar

### 1. Instalação
\`\`\`bash
npm install -g typescript
npm install --save-dev @types/node
\`\`\`

### 2. Configuração Básica (tsconfig.json)
\`\`\`json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "commonjs",
    "strict": true,
    "esModuleInterop": true
  }
}
\`\`\`

### 3. Migração Gradual
Você pode migrar gradualmente renomeando arquivos .js para .ts e adicionando tipos progressivamente.

## Conclusão

TypeScript não é apenas uma tendência - é uma ferramenta que melhora significativamente a qualidade do código e a produtividade do desenvolvedor. Se você ainda não usa, este é o momento ideal para começar.`,
    category: 'Frontend',
    tags: ['TypeScript', 'JavaScript', 'Desenvolvimento', 'Qualidade'],
    publishedAt: new Date('2024-01-10'),
    readTime: 6,
    featured: true,
    image: '/images/blog/typescript.jpg',
    author: {
      name: 'Vanderson Cangaty',
      avatar: '/images/avatar.jpg'
    }
  },
  {
    id: '3',
    title: 'Next.js 14: App Router e Server Components',
    excerpt: 'Explore as funcionalidades mais recentes do Next.js 14, incluindo o App Router e Server Components para aplicações mais performáticas.',
    content: `# Next.js 14: App Router e Server Components

O Next.js 14 trouxe mudanças revolucionárias com o App Router e Server Components. Vamos explorar essas funcionalidades e como elas podem melhorar suas aplicações.

## App Router: A Nova Era

O App Router representa uma mudança fundamental na estrutura de roteamento do Next.js, oferecendo mais flexibilidade e performance.

### Estrutura de Pastas
\`\`\`
app/
├── layout.tsx          # Layout raiz
├── page.tsx           # Página inicial
├── loading.tsx        # UI de carregamento
├── error.tsx          # UI de erro
└── blog/
    ├── layout.tsx     # Layout do blog
    ├── page.tsx       # Lista de posts
    └── [slug]/
        └── page.tsx   # Post individual
\`\`\`

### Layouts Aninhados
\`\`\`typescript
// app/layout.tsx
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
\`\`\`

## Server Components

Server Components executam no servidor, reduzindo o bundle JavaScript enviado ao cliente.

### Benefícios dos Server Components

1. **Bundle Menor**: Componentes não são enviados ao cliente
2. **Acesso Direto ao Backend**: Consultas diretas ao banco de dados
3. **Melhor SEO**: Renderização no servidor
4. **Performance**: Menos JavaScript para processar

### Exemplo Prático
\`\`\`typescript
// Server Component (padrão no App Router)
async function BlogPosts() {
  const posts = await fetch('https://api.example.com/posts');
  
  return (
    <div>
      {posts.map(post => (
        <article key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.excerpt}</p>
        </article>
      ))}
    </div>
  );
}
\`\`\`

### Client Components
Quando você precisa de interatividade:

\`\`\`typescript
'use client';

import { useState } from 'react';

function InteractiveButton() {
  const [count, setCount] = useState(0);
  
  return (
    <button onClick={() => setCount(count + 1)}>
      Cliques: {count}
    </button>
  );
}
\`\`\`

## Streaming e Suspense

O App Router suporta streaming nativo com Suspense:

\`\`\`typescript
import { Suspense } from 'react';

function BlogPage() {
  return (
    <div>
      <h1>Meu Blog</h1>
      <Suspense fallback={<div>Carregando posts...</div>}>
        <BlogPosts />
      </Suspense>
    </div>
  );
}
\`\`\`

## Migração do Pages Router

### 1. Estrutura de Arquivos
- Mova arquivos de `pages/` para `app/`
- Renomeie `_app.tsx` para `layout.tsx`
- Adapte rotas dinâmicas

### 2. Componentes
- Server Components por padrão
- Adicione 'use client' quando necessário
- Adapte getServerSideProps para fetch direto

## Conclusão

O Next.js 14 com App Router e Server Components representa o futuro do desenvolvimento React. A migração pode parecer complexa, mas os benefícios de performance e developer experience valem o esforço.`,
    category: 'Frontend',
    tags: ['Next.js', 'React', 'Server Components', 'Performance'],
    publishedAt: new Date('2024-01-05'),
    readTime: 10,
    featured: false,
    image: '/images/blog/nextjs-14.jpg',
    author: {
      name: 'Vanderson Cangaty',
      avatar: '/images/avatar.jpg'
    }
  },
  {
    id: '4',
    title: 'CSS Grid vs Flexbox: Quando Usar Cada Um',
    excerpt: 'Guia completo sobre as diferenças entre CSS Grid e Flexbox, com exemplos práticos de quando usar cada tecnologia de layout.',
    content: `# CSS Grid vs Flexbox: Quando Usar Cada Um

CSS Grid e Flexbox são duas tecnologias poderosas para layout, mas cada uma tem seus pontos fortes. Neste guia, vou explicar quando usar cada uma.

## Flexbox: Layout Unidimensional

Flexbox é ideal para layouts em uma dimensão - seja horizontal ou vertical.

### Quando Usar Flexbox

1. **Navegação horizontal**
2. **Centralização de elementos**
3. **Distribuição de espaço entre itens**
4. **Layouts de componentes pequenos**

### Exemplos Práticos

#### Centralização Perfeita
\`\`\`css
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
\`\`\`

#### Navegação Responsiva
\`\`\`css
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-links {
  display: flex;
  gap: 1rem;
}
\`\`\`

#### Cards com Altura Igual
\`\`\`css
.card-container {
  display: flex;
  gap: 1rem;
}

.card {
  flex: 1; /* Todos os cards terão a mesma largura */
}
\`\`\`

## CSS Grid: Layout Bidimensional

Grid é perfeito para layouts complexos que envolvem linhas e colunas.

### Quando Usar Grid

1. **Layouts de página completa**
2. **Galerias de imagens**
3. **Dashboards complexos**
4. **Qualquer layout bidimensional**

### Exemplos Práticos

#### Layout de Página Básico
\`\`\`css
.page-layout {
  display: grid;
  grid-template-areas:
    "header header header"
    "sidebar main aside"
    "footer footer footer";
  grid-template-rows: auto 1fr auto;
  grid-template-columns: 200px 1fr 200px;
  min-height: 100vh;
}

.header { grid-area: header; }
.sidebar { grid-area: sidebar; }
.main { grid-area: main; }
.aside { grid-area: aside; }
.footer { grid-area: footer; }
\`\`\`

#### Galeria Responsiva
\`\`\`css
.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
}
\`\`\`

#### Dashboard Complexo
\`\`\`css
.dashboard {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 1rem;
}

.widget-large {
  grid-column: span 8;
}

.widget-small {
  grid-column: span 4;
}
\`\`\`

## Combinando Grid e Flexbox

Muitas vezes, a melhor solução é usar ambos:

\`\`\`css
/* Grid para o layout geral */
.page {
  display: grid;
  grid-template-areas:
    "header"
    "main"
    "footer";
}

/* Flexbox para componentes internos */
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.card {
  display: flex;
  flex-direction: column;
}

.card-footer {
  margin-top: auto; /* Empurra para o final */
}
\`\`\`

## Guia de Decisão Rápida

### Use Flexbox quando:
- ✅ Layout em uma dimensão
- ✅ Centralização de elementos
- ✅ Distribuição de espaço
- ✅ Componentes pequenos
- ✅ Navegação

### Use Grid quando:
- ✅ Layout bidimensional
- ✅ Estrutura de página completa
- ✅ Galerias
- ✅ Dashboards
- ✅ Layouts complexos

## Suporte dos Navegadores

Ambas as tecnologias têm excelente suporte:
- **Flexbox**: 98%+ dos navegadores
- **Grid**: 96%+ dos navegadores

## Conclusão

Não é uma questão de Grid vs Flexbox - é sobre usar a ferramenta certa para cada situação. Grid para layouts bidimensionais complexos, Flexbox para componentes e layouts unidimensionais. Muitas vezes, você usará ambos no mesmo projeto.`,
    category: 'CSS',
    tags: ['CSS', 'Layout', 'Grid', 'Flexbox', 'Design'],
    publishedAt: new Date('2023-12-20'),
    readTime: 7,
    featured: false,
    image: '/images/blog/css-grid-flexbox.jpg',
    author: {
      name: 'Vanderson Cangaty',
      avatar: '/images/avatar.jpg'
    }
  },
  {
    id: '5',
    title: 'Performance Web: Otimizações Essenciais para 2024',
    excerpt: 'Técnicas modernas de otimização de performance web, incluindo Core Web Vitals, lazy loading e estratégias de cache.',
    content: `# Performance Web: Otimizações Essenciais para 2024

Performance web é crucial para o sucesso de qualquer aplicação. Neste artigo, abordo as técnicas mais importantes para otimizar suas aplicações em 2024.

## Core Web Vitals

O Google usa Core Web Vitals como fator de ranking. São três métricas principais:

### 1. Largest Contentful Paint (LCP)
Mede quando o maior elemento da página é renderizado.

**Meta**: < 2.5 segundos

**Como otimizar**:
\`\`\`html
<!-- Preload de recursos críticos -->
<link rel="preload" href="/hero-image.jpg" as="image">

<!-- Otimização de imagens -->
<img 
  src="/hero-image.webp" 
  alt="Hero" 
  loading="eager"
  fetchpriority="high"
>
\`\`\`

### 2. First Input Delay (FID)
Mede o tempo entre a primeira interação e a resposta.

**Meta**: < 100ms

**Como otimizar**:
\`\`\`javascript
// Code splitting para reduzir JavaScript inicial
const LazyComponent = lazy(() => import('./LazyComponent'));

// Web Workers para processamento pesado
const worker = new Worker('/heavy-calculation.js');
\`\`\`

### 3. Cumulative Layout Shift (CLS)
Mede mudanças inesperadas no layout.

**Meta**: < 0.1

**Como otimizar**:
\`\`\`css
/* Reservar espaço para imagens */
.image-container {
  aspect-ratio: 16 / 9;
}

/* Evitar mudanças de layout */
.skeleton {
  width: 100%;
  height: 200px;
  background: #f0f0f0;
}
\`\`\`

## Otimização de Imagens

### Formatos Modernos
\`\`\`html
<picture>
  <source srcset="/image.avif" type="image/avif">
  <source srcset="/image.webp" type="image/webp">
  <img src="/image.jpg" alt="Descrição">
</picture>
\`\`\`

### Lazy Loading
\`\`\`html
<img 
  src="/placeholder.jpg" 
  data-src="/real-image.jpg"
  loading="lazy"
  alt="Descrição"
>
\`\`\`

### Responsive Images
\`\`\`html
<img 
  srcset="
    /image-320.jpg 320w,
    /image-640.jpg 640w,
    /image-1280.jpg 1280w
  "
  sizes="(max-width: 320px) 280px, (max-width: 640px) 600px, 1200px"
  src="/image-640.jpg"
  alt="Descrição"
>
\`\`\`

## Otimização de JavaScript

### Code Splitting
\`\`\`javascript
// Divisão por rotas
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));

// Divisão por funcionalidade
const Chart = lazy(() => import('./components/Chart'));
\`\`\`

### Tree Shaking
\`\`\`javascript
// ❌ Importa toda a biblioteca
import _ from 'lodash';

// ✅ Importa apenas o necessário
import { debounce } from 'lodash';
\`\`\`

### Minificação e Compressão
\`\`\`javascript
// webpack.config.js
module.exports = {
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
  plugins: [
    new CompressionPlugin({
      algorithm: 'gzip',
    }),
  ],
};
\`\`\`

## Estratégias de Cache

### Service Workers
\`\`\`javascript
// Cache de recursos estáticos
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('v1').then((cache) => {
      return cache.addAll([
        '/',
        '/styles.css',
        '/script.js',
        '/offline.html'
      ]);
    })
  );
});
\`\`\`

### HTTP Headers
\`\`\`
# .htaccess
<IfModule mod_expires.c>
  ExpiresActive on
  ExpiresByType text/css "access plus 1 year"
  ExpiresByType application/javascript "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
</IfModule>
\`\`\`

## Otimização de CSS

### Critical CSS
\`\`\`html
<style>
  /* CSS crítico inline */
  .header { display: flex; }
  .hero { height: 100vh; }
</style>

<link rel="preload" href="/styles.css" as="style" onload="this.onload=null;this.rel='stylesheet'">
\`\`\`

### CSS Moderno
\`\`\`css
/* Container queries */
@container (min-width: 400px) {
  .card { display: grid; }
}

/* CSS Grid para layouts eficientes */
.layout {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
}
\`\`\`

## Ferramentas de Monitoramento

### Lighthouse
\`\`\`bash
# CLI
npm install -g lighthouse
lighthouse https://example.com --output html

# Programático
const lighthouse = require('lighthouse');
const result = await lighthouse(url, opts);
\`\`\`

### Web Vitals
\`\`\`javascript
import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';

getCLS(console.log);
getFID(console.log);
getFCP(console.log);
getLCP(console.log);
getTTFB(console.log);
\`\`\`

## Checklist de Performance

### Carregamento
- [ ] Otimizar imagens (WebP/AVIF)
- [ ] Implementar lazy loading
- [ ] Usar CDN
- [ ] Minificar recursos
- [ ] Implementar cache

### Renderização
- [ ] Eliminar render-blocking resources
- [ ] Otimizar Critical Rendering Path
- [ ] Usar CSS Grid/Flexbox eficientemente
- [ ] Evitar layout shifts

### Interatividade
- [ ] Code splitting
- [ ] Reduzir JavaScript não utilizado
- [ ] Otimizar event handlers
- [ ] Usar Web Workers para tarefas pesadas

## Conclusão

Performance web é um processo contínuo. Use ferramentas de monitoramento, implemente as otimizações gradualmente e sempre meça o impacto das mudanças. Lembre-se: cada milissegundo conta para a experiência do usuário.`,
    category: 'Performance',
    tags: ['Performance', 'Web Vitals', 'Otimização', 'UX'],
    publishedAt: new Date('2023-12-15'),
    readTime: 12,
    featured: false,
    image: '/images/blog/web-performance.jpg',
    author: {
      name: 'Vanderson Cangaty',
      avatar: '/images/avatar.jpg'
    }
  },
  {
    id: '6',
    title: 'Carreira em Desenvolvimento: Dicas para Iniciantes',
    excerpt: 'Guia completo para quem está começando na carreira de desenvolvimento, com dicas práticas e roadmap de estudos.',
    content: `# Carreira em Desenvolvimento: Dicas para Iniciantes

Começar uma carreira em desenvolvimento pode parecer intimidador. Neste artigo, compartilho dicas práticas baseadas na minha experiência para ajudar iniciantes a trilhar esse caminho.

## Definindo Seu Foco

### Frontend, Backend ou Full Stack?

**Frontend**: Interface do usuário
- HTML, CSS, JavaScript
- React, Vue, Angular
- Design responsivo, UX/UI

**Backend**: Servidor e banco de dados
- Node.js, Python, Java
- APIs, bancos de dados
- Arquitetura de sistemas

**Full Stack**: Ambos
- Visão completa do produto
- Mais oportunidades
- Curva de aprendizado maior

### Minha Recomendação
Comece com **Frontend**. É mais visual, você vê resultados rapidamente, e a curva de aprendizado é mais suave.

## Roadmap de Estudos Frontend

### 1. Fundamentos (2-3 meses)
\`\`\`
HTML5
├── Semântica
├── Acessibilidade
└── SEO básico

CSS3
├── Flexbox
├── Grid
├── Responsividade
└── Animações

JavaScript
├── ES6+
├── DOM
├── Eventos
└── Async/Await
\`\`\`

### 2. Ferramentas (1-2 meses)
- **Git/GitHub**: Controle de versão
- **VS Code**: Editor de código
- **Chrome DevTools**: Debug
- **NPM**: Gerenciador de pacotes

### 3. Framework (2-3 meses)
Recomendo **React**:
- Maior mercado de trabalho
- Comunidade ativa
- Boa documentação
- Conceitos transferíveis

### 4. Ecossistema (2-3 meses)
- **Next.js**: Framework React
- **TypeScript**: Tipagem estática
- **Tailwind CSS**: Framework CSS
- **Testing**: Jest, React Testing Library

## Projetos Práticos

### Projeto 1: Landing Page
**Tecnologias**: HTML, CSS, JavaScript
**Funcionalidades**:
- Design responsivo
- Formulário de contato
- Animações CSS
- SEO otimizado

### Projeto 2: Todo App
**Tecnologias**: React, Local Storage
**Funcionalidades**:
- CRUD completo
- Filtros
- Persistência local
- Testes unitários

### Projeto 3: E-commerce
**Tecnologias**: React, Context API, API externa
**Funcionalidades**:
- Catálogo de produtos
- Carrinho de compras
- Integração com API
- Autenticação

### Projeto 4: Dashboard
**Tecnologias**: React, Charts, API
**Funcionalidades**:
- Gráficos interativos
- Filtros avançados
- Responsividade
- Performance otimizada

## Construindo Seu Portfólio

### Estrutura Essencial
1. **Sobre você**: Quem é, o que faz
2. **Projetos**: 3-5 projetos principais
3. **Habilidades**: Tecnologias que domina
4. **Contato**: Como te encontrar

### Dicas para Projetos
- **Código limpo**: Comentários, organização
- **README detalhado**: Como rodar, tecnologias
- **Deploy**: Vercel, Netlify, GitHub Pages
- **Responsividade**: Funcione em mobile

### Exemplo de README
\`\`\`markdown
# Todo App

Aplicação de gerenciamento de tarefas construída com React.

## 🚀 Tecnologias
- React 18
- TypeScript
- Tailwind CSS
- Local Storage

## 📱 Funcionalidades
- ✅ Adicionar tarefas
- ✅ Marcar como concluída
- ✅ Filtrar por status
- ✅ Persistência local

## 🔧 Como rodar
\`\`\`bash
npm install
npm start
\`\`\`

## 🌐 Demo
[Ver aplicação](https://meu-todo-app.vercel.app)
\`\`\`

## Networking e Comunidade

### Onde Participar
- **Discord**: Comunidades de dev
- **LinkedIn**: Networking profissional
- **GitHub**: Contribuições open source
- **Meetups**: Eventos locais
- **Twitter**: Acompanhar devs influentes

### Como Contribuir
1. **Open Source**: Contribua para projetos
2. **Artigos**: Escreva sobre o que aprende
3. **Mentoria**: Ajude outros iniciantes
4. **Palestras**: Compartilhe conhecimento

## Preparação para Entrevistas

### Conhecimentos Técnicos
- **Algoritmos básicos**: Ordenação, busca
- **Estruturas de dados**: Arrays, objetos
- **Conceitos web**: HTTP, REST, CORS
- **Boas práticas**: Clean code, SOLID

### Soft Skills
- **Comunicação**: Explique seu código
- **Resolução de problemas**: Pensamento lógico
- **Trabalho em equipe**: Colaboração
- **Aprendizado contínuo**: Curiosidade

### Perguntas Comuns
1. "Fale sobre você"
2. "Por que programação?"
3. "Qual seu projeto favorito?"
4. "Como você aprende coisas novas?"
5. "Onde se vê em 5 anos?"

## Primeiros Empregos

### Tipos de Oportunidade
- **Estágio**: Aprendizado, mentoria
- **Júnior**: Primeira experiência
- **Freelance**: Flexibilidade, variedade
- **Trainee**: Programa estruturado

### Onde Procurar
- **LinkedIn**: Vagas e networking
- **GitHub Jobs**: Vagas tech
- **AngelList**: Startups
- **Glassdoor**: Avaliações de empresas
- **Indicações**: Networking

## Erros Comuns

### 1. Tutorial Hell
**Problema**: Só assistir tutoriais
**Solução**: Construa projetos próprios

### 2. Síndrome do Impostor
**Problema**: "Não sei o suficiente"
**Solução**: Todo mundo começou do zero

### 3. Querer Aprender Tudo
**Problema**: Dispersão de foco
**Solução**: Domine o básico primeiro

### 4. Não Praticar
**Problema**: Só teoria
**Solução**: Code every day

## Recursos Recomendados

### Cursos Gratuitos
- **freeCodeCamp**: Currículo completo
- **MDN**: Documentação web
- **JavaScript.info**: JavaScript profundo
- **React Docs**: Documentação oficial

### Ferramentas
- **VS Code**: Editor
- **Git**: Controle de versão
- **Figma**: Design
- **Postman**: APIs

### Comunidades
- **Dev.to**: Artigos e discussões
- **Stack Overflow**: Dúvidas técnicas
- **Reddit r/webdev**: Comunidade ativa
- **Discord servers**: Networking

## Conclusão

A carreira em desenvolvimento é uma jornada de aprendizado contínuo. Seja paciente consigo mesmo, pratique consistentemente e não tenha medo de errar. Cada linha de código te aproxima do seu objetivo.

Lembre-se: todo desenvolvedor sênior já foi iniciante. O que importa é começar e não parar de aprender.

**Dica final**: Documente sua jornada. Escreva sobre o que aprende, compartilhe seus projetos e ajude outros iniciantes. A comunidade de desenvolvimento é acolhedora e sempre disposta a ajudar.`,
    category: 'Carreira',
    tags: ['Carreira', 'Iniciantes', 'Desenvolvimento', 'Dicas'],
    publishedAt: new Date('2023-12-10'),
    readTime: 15,
    featured: true,
    image: '/images/blog/carreira-dev.jpg',
    author: {
      name: 'Vanderson Cangaty',
      avatar: '/images/avatar.jpg'
    }
  }
];

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [isLoading, setIsLoading] = useState(false);

  const categories = ['Todos', 'Frontend', 'CSS', 'Performance', 'Carreira'];

  const filteredPosts = useMemo(() => {
    return blogPosts.filter(post => {
      const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesCategory = selectedCategory === 'Todos' || post.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  const featuredPosts = blogPosts.filter(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('pt-BR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-20 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-neon-green/10 text-neon-green rounded-full text-sm font-medium mb-6">
              <BookOpen size={16} />
              <span>Meu Blog</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Artigos sobre <span className="neon-text-blue">Desenvolvimento</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Compartilho conhecimentos, experiências e insights sobre desenvolvimento web, 
              tecnologias modernas e carreira em tech.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-8 mb-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-neon-blue mb-1">{blogPosts.length}</div>
                <div className="text-sm text-muted-foreground">Artigos</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-neon-green mb-1">{categories.length - 1}</div>
                <div className="text-sm text-muted-foreground">Categorias</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-neon-purple mb-1">
                  {Math.round(blogPosts.reduce((acc, post) => acc + post.readTime, 0) / blogPosts.length)}
                </div>
                <div className="text-sm text-muted-foreground">Min. de leitura</div>
              </div>
            </div>
          </motion.div>

          {/* Search and Filters */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-12"
          >
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Buscar artigos..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-card/30 backdrop-blur-sm border border-border/50 rounded-lg focus:outline-none focus:border-neon-blue/50 transition-colors"
                />
              </div>

              {/* Category Filters */}
              <div className="flex items-center space-x-2">
                <Filter size={16} className="text-muted-foreground" />
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                        selectedCategory === category
                          ? 'bg-neon-blue text-black'
                          : 'bg-card/30 backdrop-blur-sm border border-border/50 text-muted-foreground hover:border-neon-blue/30'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Results count */}
            <div className="mt-4 text-sm text-muted-foreground">
              Mostrando {filteredPosts.length} de {blogPosts.length} artigos
            </div>
          </motion.div>

          {/* Featured Posts */}
          {featuredPosts.length > 0 && selectedCategory === 'Todos' && !searchTerm && (
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-16"
            >
              <div className="flex items-center space-x-2 mb-8">
                <TrendingUp size={24} className="text-neon-purple" />
                <h2 className="text-2xl font-bold">Artigos em Destaque</h2>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {featuredPosts.map((post, index) => (
                  <motion.article
                    key={post.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                    className="group"
                  >
                    <Link href={`/blog/${post.id}`}>
                      <div className="bg-card/30 backdrop-blur-sm rounded-xl border border-border/50 hover:border-neon-purple/30 transition-all duration-300 overflow-hidden h-full">
                        {/* Image */}
                        <div className="h-48 bg-gradient-to-br from-neon-purple/20 to-neon-blue/20 flex items-center justify-center">
                          <div className="text-4xl">📝</div>
                        </div>

                        {/* Content */}
                        <div className="p-6">
                          {/* Meta */}
                          <div className="flex items-center justify-between mb-3">
                            <span className="px-3 py-1 bg-neon-purple/10 text-neon-purple text-xs font-medium rounded-full border border-neon-purple/20">
                              Destaque
                            </span>
                            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                              <div className="flex items-center space-x-1">
                                <Calendar size={14} />
                                <span>{formatDate(post.publishedAt)}</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <Clock size={14} />
                                <span>{post.readTime} min</span>
                              </div>
                            </div>
                          </div>

                          {/* Title */}
                          <h3 className="text-xl font-bold mb-3 group-hover:text-neon-purple transition-colors line-clamp-2">
                            {post.title}
                          </h3>

                          {/* Excerpt */}
                          <p className="text-muted-foreground mb-4 line-clamp-3">
                            {post.excerpt}
                          </p>

                          {/* Tags */}
                          <div className="flex flex-wrap gap-2 mb-4">
                            {post.tags.slice(0, 3).map((tag) => (
                              <span
                                key={tag}
                                className="flex items-center space-x-1 px-2 py-1 bg-secondary/50 text-secondary-foreground text-xs rounded-full"
                              >
                                <Tag size={10} />
                                <span>{tag}</span>
                              </span>
                            ))}
                          </div>

                          {/* Read more */}
                          <div className="flex items-center space-x-2 text-neon-purple group-hover:text-neon-purple/80 transition-colors">
                            <span className="text-sm font-medium">Ler artigo</span>
                            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.article>
                ))}
              </div>
            </motion.section>
          )}

          {/* Regular Posts */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h2 className="text-2xl font-bold mb-8">
              {selectedCategory === 'Todos' && !searchTerm ? 'Todos os Artigos' : 'Resultados da Busca'}
            </h2>

            {isLoading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {Array.from({ length: 6 }).map((_, index) => (
                  <BlogPostSkeleton key={index} />
                ))}
              </div>
            ) : filteredPosts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.map((post, index) => (
                  <motion.article
                    key={post.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                    className="group"
                  >
                    <Link href={`/blog/${post.id}`}>
                      <div className="bg-card/30 backdrop-blur-sm rounded-xl border border-border/50 hover:border-neon-blue/30 transition-all duration-300 overflow-hidden h-full flex flex-col">
                        {/* Image */}
                        <div className="h-48 bg-gradient-to-br from-neon-blue/20 to-neon-green/20 flex items-center justify-center">
                          <div className="text-4xl">📄</div>
                        </div>

                        {/* Content */}
                        <div className="p-6 flex-1 flex flex-col">
                          {/* Meta */}
                          <div className="flex items-center justify-between mb-3">
                            <span className="px-3 py-1 bg-neon-blue/10 text-neon-blue text-xs font-medium rounded-full border border-neon-blue/20">
                              {post.category}
                            </span>
                            <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                              <Clock size={12} />
                              <span>{post.readTime} min</span>
                            </div>
                          </div>

                          {/* Title */}
                          <h3 className="text-lg font-bold mb-3 group-hover:text-neon-blue transition-colors line-clamp-2">
                            {post.title}
                          </h3>

                          {/* Excerpt */}
                          <p className="text-muted-foreground mb-4 line-clamp-3 flex-1">
                            {post.excerpt}
                          </p>

                          {/* Footer */}
                          <div className="mt-auto">
                            {/* Tags */}
                            <div className="flex flex-wrap gap-1 mb-4">
                              {post.tags.slice(0, 2).map((tag) => (
                                <span
                                  key={tag}
                                  className="px-2 py-1 bg-secondary/50 text-secondary-foreground text-xs rounded-full"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>

                            {/* Date and read more */}
                            <div className="flex items-center justify-between">
                              <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                                <Calendar size={12} />
                                <span>{formatDate(post.publishedAt)}</span>
                              </div>
                              <div className="flex items-center space-x-1 text-neon-blue group-hover:text-neon-blue/80 transition-colors">
                                <span className="text-xs font-medium">Ler</span>
                                <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.article>
                ))}
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-16"
              >
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-xl font-semibold mb-2">Nenhum artigo encontrado</h3>
                <p className="text-muted-foreground mb-6">
                  Tente ajustar os filtros ou termos de busca.
                </p>
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('Todos');
                  }}
                  className="px-6 py-3 bg-neon-blue text-black font-medium rounded-lg hover:bg-neon-blue/90 transition-colors"
                >
                  Limpar Filtros
                </button>
              </motion.div>
            )}
          </motion.section>
        </div>
      </main>

      <Footer />
    </div>
  );
}

