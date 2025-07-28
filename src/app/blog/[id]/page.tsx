'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Calendar, Clock, User, ArrowLeft, Share2, Heart, Bookmark } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publishedAt: Date;
  readTime: number;
  tags: string[];
  featured: boolean;
  image?: string;
}

// Mock data - em produção viria do banco de dados
const mockPost: BlogPost = {
  id: '1',
  title: 'Como criar interfaces modernas com React e TypeScript',
  excerpt: 'Aprenda as melhores práticas para desenvolver interfaces de usuário modernas, escaláveis e type-safe usando React com TypeScript.',
  content: `
# Introdução

O desenvolvimento de interfaces modernas requer uma combinação de tecnologias robustas e práticas bem estabelecidas. React e TypeScript formam uma dupla poderosa que permite criar aplicações escaláveis, maintíveis e type-safe.

## Por que React + TypeScript?

### Benefícios do TypeScript

TypeScript adiciona tipagem estática ao JavaScript, oferecendo:

- **Detecção de erros em tempo de compilação**
- **Melhor experiência de desenvolvimento com IntelliSense**
- **Refatoração mais segura**
- **Documentação viva do código**

### Vantagens do React

React continua sendo uma das bibliotecas mais populares para desenvolvimento frontend devido a:

- **Componentes reutilizáveis**
- **Virtual DOM para performance otimizada**
- **Ecossistema rico e ativo**
- **Curva de aprendizado gradual**

## Configuração do Ambiente

Para começar um projeto React com TypeScript, você pode usar o Create React App:

\`\`\`bash
npx create-react-app meu-projeto --template typescript
cd meu-projeto
npm start
\`\`\`

Ou, para projetos mais modernos, recomendo o Vite:

\`\`\`bash
npm create vite@latest meu-projeto -- --template react-ts
cd meu-projeto
npm install
npm run dev
\`\`\`

## Estrutura de Componentes

### Componente Funcional Básico

\`\`\`tsx
import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  variant?: 'primary' | 'secondary';
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  onClick, 
  variant = 'primary',
  disabled = false 
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={\`btn btn-\${variant}\`}
    >
      {children}
    </button>
  );
};

export default Button;
\`\`\`

### Hooks Personalizados

\`\`\`tsx
import { useState, useEffect } from 'react';

interface User {
  id: number;
  name: string;
  email: string;
}

const useUser = (userId: number) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        setLoading(true);
        const response = await fetch(\`/api/users/\${userId}\`);
        const userData = await response.json();
        setUser(userData);
      } catch (err) {
        setError('Erro ao carregar usuário');
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [userId]);

  return { user, loading, error };
};
\`\`\`

## Gerenciamento de Estado

### Context API com TypeScript

\`\`\`tsx
import React, { createContext, useContext, useReducer } from 'react';

interface AppState {
  user: User | null;
  theme: 'light' | 'dark';
}

type AppAction = 
  | { type: 'SET_USER'; payload: User }
  | { type: 'SET_THEME'; payload: 'light' | 'dark' };

const AppContext = createContext<{
  state: AppState;
  dispatch: React.Dispatch<AppAction>;
} | null>(null);

const appReducer = (state: AppState, action: AppAction): AppState => {
  switch (action.type) {
    case 'SET_USER':
      return { ...state, user: action.payload };
    case 'SET_THEME':
      return { ...state, theme: action.payload };
    default:
      return state;
  }
};

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, {
    user: null,
    theme: 'light'
  });

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp deve ser usado dentro de AppProvider');
  }
  return context;
};
\`\`\`

## Boas Práticas

### 1. Tipagem Consistente

Sempre defina interfaces para props, estado e dados da API:

\`\`\`tsx
interface ApiResponse<T> {
  data: T;
  message: string;
  success: boolean;
}

interface ProductProps {
  product: Product;
  onAddToCart: (productId: number) => void;
}
\`\`\`

### 2. Componentes Pequenos e Focados

Mantenha componentes com responsabilidade única:

\`\`\`tsx
// ❌ Componente muito grande
const UserDashboard = () => {
  // 200+ linhas de código
};

// ✅ Componentes menores e focados
const UserProfile = () => { /* ... */ };
const UserStats = () => { /* ... */ };
const UserActions = () => { /* ... */ };

const UserDashboard = () => (
  <div>
    <UserProfile />
    <UserStats />
    <UserActions />
  </div>
);
\`\`\`

### 3. Tratamento de Erros

Implemente tratamento de erros robusto:

\`\`\`tsx
const ErrorBoundary: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const handleError = (error: ErrorEvent) => {
      console.error('Erro capturado:', error);
      setHasError(true);
    };

    window.addEventListener('error', handleError);
    return () => window.removeEventListener('error', handleError);
  }, []);

  if (hasError) {
    return <div>Algo deu errado. Tente recarregar a página.</div>;
  }

  return <>{children}</>;
};
\`\`\`

## Conclusão

React com TypeScript oferece uma base sólida para desenvolvimento de aplicações modernas. A combinação de componentes reutilizáveis, tipagem estática e um ecossistema rico permite criar interfaces robustas e escaláveis.

### Próximos Passos

1. **Explore bibliotecas complementares**: React Query, Zustand, React Hook Form
2. **Aprenda sobre testes**: Jest, React Testing Library
3. **Estude performance**: React.memo, useMemo, useCallback
4. **Pratique com projetos reais**: Clone aplicações populares

Lembre-se: a prática constante é fundamental para dominar essas tecnologias. Comece com projetos pequenos e vá aumentando a complexidade gradualmente.
  `,
  author: 'Vanderson Cangaty',
  publishedAt: new Date('2024-01-15'),
  readTime: 8,
  tags: ['React', 'TypeScript', 'Frontend'],
  featured: true,
  image: '/images/blog/react-typescript.jpg',
};

export default function BlogPost({ params }: { params: { id: string } }) {
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
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {mockPost.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-neon-blue/10 text-neon-blue text-sm rounded-full border border-neon-blue/20"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              {mockPost.title}
            </h1>

            {/* Excerpt */}
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              {mockPost.excerpt}
            </p>

            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-6 text-muted-foreground">
              <div className="flex items-center space-x-2">
                <User size={18} />
                <span>{mockPost.author}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar size={18} />
                <span>{formatDate(mockPost.publishedAt)}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock size={18} />
                <span>{mockPost.readTime} min de leitura</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center space-x-4 mt-8">
              <button className="flex items-center space-x-2 px-4 py-2 bg-secondary/50 hover:bg-secondary rounded-lg transition-colors">
                <Heart size={18} />
                <span>Curtir</span>
              </button>
              <button className="flex items-center space-x-2 px-4 py-2 bg-secondary/50 hover:bg-secondary rounded-lg transition-colors">
                <Bookmark size={18} />
                <span>Salvar</span>
              </button>
              <button className="flex items-center space-x-2 px-4 py-2 bg-secondary/50 hover:bg-secondary rounded-lg transition-colors">
                <Share2 size={18} />
                <span>Compartilhar</span>
              </button>
            </div>
          </motion.header>

          {/* Featured Image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12"
          >
            <div className="h-64 md:h-96 bg-gradient-to-br from-neon-blue/20 to-neon-purple/20 rounded-xl flex items-center justify-center">
              <div className="text-6xl">📝</div>
            </div>
          </motion.div>

          {/* Article Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="prose prose-lg prose-invert max-w-none"
          >
            <div 
              className="article-content"
              dangerouslySetInnerHTML={{ 
                __html: mockPost.content.replace(/\n/g, '<br />') 
              }} 
            />
          </motion.div>

          {/* Article Footer */}
          <motion.footer
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16 pt-8 border-t border-border/50"
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-neon-blue/20 to-neon-purple/20 rounded-full flex items-center justify-center">
                  <span className="text-xl">👨‍💻</span>
                </div>
                <div>
                  <h3 className="font-semibold">{mockPost.author}</h3>
                  <p className="text-muted-foreground text-sm">
                    Desenvolvedor Front End especializado em React e TypeScript
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <button className="flex items-center space-x-2 px-6 py-3 bg-neon-blue text-black font-medium rounded-lg hover:bg-neon-blue/90 transition-colors">
                  <Heart size={18} />
                  <span>Curtir Artigo</span>
                </button>
                <button className="flex items-center space-x-2 px-6 py-3 border border-neon-green text-neon-green rounded-lg hover:bg-neon-green/10 transition-colors">
                  <Share2 size={18} />
                  <span>Compartilhar</span>
                </button>
              </div>
            </div>
          </motion.footer>
        </div>
      </article>

      <Footer />
    </div>
  );
}

