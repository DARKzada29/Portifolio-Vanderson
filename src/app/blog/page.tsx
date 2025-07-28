'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Calendar, Clock, User, Search, Tag, ArrowRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Input } from '@/components/ui/input';

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
const mockPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Como criar interfaces modernas com React e TypeScript',
    excerpt: 'Aprenda as melhores práticas para desenvolver interfaces de usuário modernas, escaláveis e type-safe usando React com TypeScript.',
    content: 'Conteúdo completo do artigo...',
    author: 'Vanderson Cangaty',
    publishedAt: new Date('2024-01-15'),
    readTime: 8,
    tags: ['React', 'TypeScript', 'Frontend'],
    featured: true,
    image: '/images/blog/react-typescript.jpg',
  },
  {
    id: '2',
    title: 'Tailwind CSS: Guia completo para iniciantes',
    excerpt: 'Descubra como o Tailwind CSS pode acelerar seu desenvolvimento e criar designs consistentes e responsivos.',
    content: 'Conteúdo completo do artigo...',
    author: 'Vanderson Cangaty',
    publishedAt: new Date('2024-01-10'),
    readTime: 6,
    tags: ['CSS', 'Tailwind', 'Design'],
    featured: false,
    image: '/images/blog/tailwind-guide.jpg',
  },
  {
    id: '3',
    title: 'Next.js 14: Novidades e como migrar',
    excerpt: 'Explore as principais novidades do Next.js 14 e aprenda como migrar seus projetos para a versão mais recente.',
    content: 'Conteúdo completo do artigo...',
    author: 'Vanderson Cangaty',
    publishedAt: new Date('2024-01-05'),
    readTime: 10,
    tags: ['Next.js', 'React', 'JavaScript'],
    featured: true,
    image: '/images/blog/nextjs-14.jpg',
  },
  {
    id: '4',
    title: 'Design System: Criando componentes reutilizáveis',
    excerpt: 'Como criar e manter um design system eficiente para acelerar o desenvolvimento e garantir consistência.',
    content: 'Conteúdo completo do artigo...',
    author: 'Vanderson Cangaty',
    publishedAt: new Date('2023-12-20'),
    readTime: 12,
    tags: ['Design System', 'UI/UX', 'Frontend'],
    featured: false,
    image: '/images/blog/design-system.jpg',
  },
];

const allTags = Array.from(new Set(mockPosts.flatMap(post => post.tags)));

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const filteredPosts = mockPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesTag = !selectedTag || post.tags.includes(selectedTag);
    
    return matchesSearch && matchesTag;
  });

  const featuredPosts = filteredPosts.filter(post => post.featured);
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
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <span className="inline-block px-4 py-2 bg-neon-purple/10 text-neon-purple rounded-full text-sm font-medium border border-neon-purple/20">
              📝 Blog & Artigos
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Compartilhando <span className="neon-text-blue">Conhecimento</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto"
          >
            Artigos sobre desenvolvimento web, tecnologias modernas, dicas práticas 
            e insights da minha jornada como desenvolvedor.
          </motion.p>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="pb-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between mb-8">
            <div className="relative w-full lg:w-96">
              <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Buscar artigos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-input/50 border-border/50 focus:border-neon-blue/50"
              />
            </div>

            <div className="flex items-center space-x-2 flex-wrap">
              <button
                onClick={() => setSelectedTag(null)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  !selectedTag
                    ? 'text-neon-blue bg-neon-blue/10 border border-neon-blue/20'
                    : 'text-muted-foreground hover:text-foreground bg-secondary/50 hover:bg-secondary'
                }`}
              >
                Todos
              </button>
              {allTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setSelectedTag(tag)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    selectedTag === tag
                      ? 'text-neon-green bg-neon-green/10 border border-neon-green/20'
                      : 'text-muted-foreground hover:text-foreground bg-secondary/50 hover:bg-secondary'
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          <div className="mb-8">
            <p className="text-muted-foreground">
              Mostrando {filteredPosts.length} artigo{filteredPosts.length !== 1 ? 's' : ''}
            </p>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section className="pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-2">
                <span className="neon-text-purple">Artigos em Destaque</span>
              </h2>
              <p className="text-muted-foreground">Os artigos mais importantes e recentes</p>
            </div>

            <div className="grid gap-8 grid-cols-1 lg:grid-cols-2">
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
                    <div className="bg-card/30 backdrop-blur-sm rounded-xl border border-border/50 hover:border-neon-purple/30 transition-all duration-300 overflow-hidden">
                      {/* Image placeholder */}
                      <div className="h-48 bg-gradient-to-br from-neon-purple/20 to-neon-blue/20 flex items-center justify-center">
                        <div className="text-4xl">📝</div>
                      </div>
                      
                      <div className="p-6">
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-3">
                          <div className="flex items-center space-x-1">
                            <Calendar size={14} />
                            <span>{formatDate(post.publishedAt)}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Clock size={14} />
                            <span>{post.readTime} min</span>
                          </div>
                        </div>

                        <h3 className="text-xl font-bold mb-3 group-hover:text-neon-purple transition-colors">
                          {post.title}
                        </h3>

                        <p className="text-muted-foreground mb-4 line-clamp-3">
                          {post.excerpt}
                        </p>

                        <div className="flex items-center justify-between">
                          <div className="flex flex-wrap gap-2">
                            {post.tags.slice(0, 2).map((tag) => (
                              <span
                                key={tag}
                                className="px-2 py-1 bg-secondary/50 text-secondary-foreground text-xs rounded-full"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                          
                          <div className="flex items-center space-x-1 text-neon-purple group-hover:text-neon-blue transition-colors">
                            <span className="text-sm font-medium">Ler mais</span>
                            <ArrowRight size={16} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Regular Posts */}
      {regularPosts.length > 0 && (
        <section className="pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-2">
                <span className="neon-text-green">Outros Artigos</span>
              </h2>
              <p className="text-muted-foreground">Mais conteúdo do blog</p>
            </div>

            <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {regularPosts.map((post, index) => (
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
                    <div className="bg-card/30 backdrop-blur-sm rounded-xl border border-border/50 hover:border-neon-green/30 transition-all duration-300 overflow-hidden">
                      {/* Image placeholder */}
                      <div className="h-32 bg-gradient-to-br from-neon-green/20 to-neon-blue/20 flex items-center justify-center">
                        <div className="text-2xl">📄</div>
                      </div>
                      
                      <div className="p-4">
                        <div className="flex items-center space-x-3 text-xs text-muted-foreground mb-2">
                          <div className="flex items-center space-x-1">
                            <Calendar size={12} />
                            <span>{formatDate(post.publishedAt)}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Clock size={12} />
                            <span>{post.readTime} min</span>
                          </div>
                        </div>

                        <h3 className="text-lg font-bold mb-2 group-hover:text-neon-green transition-colors line-clamp-2">
                          {post.title}
                        </h3>

                        <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
                          {post.excerpt}
                        </p>

                        <div className="flex flex-wrap gap-1 mb-3">
                          {post.tags.slice(0, 2).map((tag) => (
                            <span
                              key={tag}
                              className="px-2 py-1 bg-secondary/50 text-secondary-foreground text-xs rounded-full"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        
                        <div className="flex items-center space-x-1 text-neon-green group-hover:text-neon-blue transition-colors">
                          <span className="text-sm font-medium">Ler mais</span>
                          <ArrowRight size={14} />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* No Results */}
      {filteredPosts.length === 0 && (
        <section className="pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto text-center">
            <div className="py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold mb-2">Nenhum artigo encontrado</h3>
              <p className="text-muted-foreground mb-6">
                Tente ajustar os filtros ou termo de busca
              </p>
              <button
                onClick={() => {
                  setSelectedTag(null);
                  setSearchTerm('');
                }}
                className="px-6 py-3 bg-neon-blue text-black font-medium rounded-lg hover:bg-neon-blue/90 transition-all duration-300"
              >
                Limpar Filtros
              </button>
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
}

