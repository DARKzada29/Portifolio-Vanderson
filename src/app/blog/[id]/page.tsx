'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, Calendar, Clock, Tag, Share2, BookOpen, User, Eye, Heart, MessageCircle, Twitter, Facebook, Linkedin, Copy, Check } from 'lucide-react';
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

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
  views?: number;
  likes?: number;
  comments?: number;
}

// Mock data - mesmo conteúdo da página de listagem
const getBlogPostById = (id: string): BlogPost | null => {
  const blogPosts: Record<string, BlogPost> = {
    '1': {
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
      },
      views: 1250,
      likes: 89,
      comments: 23
    },
    '2': {
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
      },
      views: 980,
      likes: 67,
      comments: 15
    },
    '3': {
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
- Mova arquivos de \`pages/\` para \`app/\`
- Renomeie \`_app.tsx\` para \`layout.tsx\`
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
      },
      views: 756,
      likes: 45,
      comments: 12
    },
    '4': {
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
      },
      views: 634,
      likes: 38,
      comments: 9
    },
    '5': {
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
      },
      views: 892,
      likes: 56,
      comments: 18
    },
    '6': {
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
      },
      views: 1456,
      likes: 124,
      comments: 34
    }
  };

  return blogPosts[id] || null;
};

export default function BlogPost({ params }: { params: { id: string } }) {
  const post = getBlogPostById(params.id);
  const [isLiked, setIsLiked] = useState(false);
  const [shareUrl, setShareUrl] = useState('');
  const [copied, setCopied] = useState(false);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Artigo não encontrado</h1>
          <Link href="/blog" className="text-neon-blue hover:underline">
            Voltar ao blog
          </Link>
        </div>
      </div>
    );
  }

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('pt-BR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const handleShare = async (platform: string) => {
    const url = window.location.href;
    const text = `${post.title} - ${post.excerpt}`;
    
    switch (platform) {
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`);
        break;
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`);
        break;
      case 'linkedin':
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`);
        break;
      case 'copy':
        await navigator.clipboard.writeText(url);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
        break;
    }
  };

  // Renderizar conteúdo markdown como HTML simples
  const renderContent = (content: string) => {
    return content.split('\n').map((line, index) => {
      // Headers
      if (line.startsWith('### ')) {
        return <h3 key={index} className="text-xl font-bold mt-8 mb-4 text-neon-green">{line.replace('### ', '')}</h3>;
      }
      if (line.startsWith('## ')) {
        return <h2 key={index} className="text-2xl font-bold mt-10 mb-6 text-neon-blue">{line.replace('## ', '')}</h2>;
      }
      if (line.startsWith('# ')) {
        return <h1 key={index} className="text-3xl font-bold mt-12 mb-8">{line.replace('# ', '')}</h1>;
      }
      
      // Code blocks
      if (line.startsWith('```')) {
        return <div key={index} className="bg-secondary/50 rounded-lg p-4 my-4 font-mono text-sm overflow-x-auto border border-border/50"></div>;
      }
      
      // Lists
      if (line.startsWith('- ')) {
        return <li key={index} className="ml-6 mb-2 text-muted-foreground">{line.replace('- ', '')}</li>;
      }
      
      // Bold text
      if (line.includes('**')) {
        const parts = line.split('**');
        return (
          <p key={index} className="mb-4 text-muted-foreground leading-relaxed">
            {parts.map((part, i) => i % 2 === 1 ? <strong key={i} className="text-foreground font-semibold">{part}</strong> : part)}
          </p>
        );
      }
      
      // Regular paragraphs
      if (line.trim() && !line.startsWith('```')) {
        return <p key={index} className="mb-4 text-muted-foreground leading-relaxed">{line}</p>;
      }
      
      return <br key={index} />;
    });
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <article className="pt-20 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <Link 
              href="/blog"
              className="inline-flex items-center space-x-2 text-muted-foreground hover:text-neon-blue transition-colors"
            >
              <ArrowLeft size={20} />
              <span>Voltar ao Blog</span>
            </Link>
          </motion.div>

          {/* Article Header */}
          <motion.header
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-12"
          >
            {/* Category and Featured Badge */}
            <div className="flex items-center space-x-3 mb-6">
              <span className="px-3 py-1 bg-neon-blue/10 text-neon-blue text-sm font-medium rounded-full border border-neon-blue/20">
                {post.category}
              </span>
              {post.featured && (
                <span className="px-3 py-1 bg-neon-purple/10 text-neon-purple text-sm font-medium rounded-full border border-neon-purple/20">
                  Destaque
                </span>
              )}
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              {post.title}
            </h1>

            {/* Excerpt */}
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              {post.excerpt}
            </p>

            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-6 mb-8 pb-8 border-b border-border/50">
              {/* Author */}
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-neon-blue to-neon-purple rounded-full flex items-center justify-center">
                  <User size={20} className="text-white" />
                </div>
                <div>
                  <p className="font-semibold">{post.author.name}</p>
                  <p className="text-sm text-muted-foreground">Autor</p>
                </div>
              </div>

              {/* Date */}
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Calendar size={16} />
                <span>{formatDate(post.publishedAt)}</span>
              </div>

              {/* Read Time */}
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Clock size={16} />
                <span>{post.readTime} min de leitura</span>
              </div>

              {/* Stats */}
              {post.views && (
                <div className="flex items-center space-x-2 text-muted-foreground">
                  <Eye size={16} />
                  <span>{post.views.toLocaleString()} visualizações</span>
                </div>
              )}
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="flex items-center space-x-1 px-3 py-1 bg-secondary/50 text-secondary-foreground text-sm rounded-full"
                >
                  <Tag size={12} />
                  <span>{tag}</span>
                </span>
              ))}
            </div>
          </motion.header>

          {/* Article Image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12"
          >
            <div className="h-64 md:h-96 bg-gradient-to-br from-neon-blue/20 to-neon-purple/20 rounded-xl flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">📝</div>
                <p className="text-muted-foreground">Imagem do artigo</p>
              </div>
            </div>
          </motion.div>

          {/* Article Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="prose prose-lg max-w-none mb-12"
          >
            <div className="text-lg leading-relaxed">
              {renderContent(post.content)}
            </div>
          </motion.div>

          {/* Article Footer */}
          <motion.footer
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="border-t border-border/50 pt-8"
          >
            {/* Engagement */}
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center space-x-6">
                <button
                  onClick={() => setIsLiked(!isLiked)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                    isLiked 
                      ? 'bg-red-500/10 text-red-500 border border-red-500/20' 
                      : 'bg-secondary/50 text-muted-foreground hover:bg-secondary/70'
                  }`}
                >
                  <Heart size={18} className={isLiked ? 'fill-current' : ''} />
                  <span>{(post.likes || 0) + (isLiked ? 1 : 0)}</span>
                </button>

                <div className="flex items-center space-x-2 text-muted-foreground">
                  <MessageCircle size={18} />
                  <span>{post.comments || 0} comentários</span>
                </div>
              </div>

              {/* Share */}
              <div className="flex items-center space-x-2">
                <span className="text-sm text-muted-foreground mr-2">Compartilhar:</span>
                <button
                  onClick={() => handleShare('twitter')}
                  className="p-2 bg-secondary/50 text-muted-foreground hover:bg-blue-500/10 hover:text-blue-500 rounded-lg transition-colors"
                  title="Compartilhar no Twitter"
                >
                  <Twitter size={16} />
                </button>
                <button
                  onClick={() => handleShare('facebook')}
                  className="p-2 bg-secondary/50 text-muted-foreground hover:bg-blue-600/10 hover:text-blue-600 rounded-lg transition-colors"
                  title="Compartilhar no Facebook"
                >
                  <Facebook size={16} />
                </button>
                <button
                  onClick={() => handleShare('linkedin')}
                  className="p-2 bg-secondary/50 text-muted-foreground hover:bg-blue-700/10 hover:text-blue-700 rounded-lg transition-colors"
                  title="Compartilhar no LinkedIn"
                >
                  <Linkedin size={16} />
                </button>
                <button
                  onClick={() => handleShare('copy')}
                  className="p-2 bg-secondary/50 text-muted-foreground hover:bg-neon-green/10 hover:text-neon-green rounded-lg transition-colors"
                  title="Copiar link"
                >
                  {copied ? <Check size={16} /> : <Copy size={16} />}
                </button>
              </div>
            </div>

            {/* Author Bio */}
            <div className="bg-card/30 backdrop-blur-sm rounded-xl border border-border/50 p-6">
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-gradient-to-br from-neon-blue to-neon-purple rounded-full flex items-center justify-center flex-shrink-0">
                  <User size={24} className="text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">{post.author.name}</h3>
                  <p className="text-muted-foreground mb-4">
                    Desenvolvedor Front End especializado em React, TypeScript e tecnologias modernas. 
                    Apaixonado por criar experiências digitais excepcionais e compartilhar conhecimento 
                    com a comunidade de desenvolvimento.
                  </p>
                  <div className="flex items-center space-x-4">
                    <Link 
                      href="/sobre"
                      className="text-neon-blue hover:text-neon-blue/80 transition-colors text-sm font-medium"
                    >
                      Ver perfil completo
                    </Link>
                    <Link 
                      href="/contato"
                      className="text-neon-green hover:text-neon-green/80 transition-colors text-sm font-medium"
                    >
                      Entrar em contato
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </motion.footer>
        </div>
      </article>

      <Footer />
    </div>
  );
}

