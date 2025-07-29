'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Calendar, Clock, ArrowRight, Tag, Eye, Heart, TrendingUp } from 'lucide-react';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
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
}

interface BlogCardProps {
  post: BlogPost;
  index?: number;
  variant?: 'default' | 'featured' | 'compact';
}

export default function BlogCard({ post, index = 0, variant = 'default' }: BlogCardProps) {
  const formatDate = (date: Date) => {
    return date.toLocaleDateString('pt-BR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (variant === 'featured') {
    return (
      <motion.article
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
            <div className="h-48 bg-gradient-to-br from-neon-purple/20 to-neon-blue/20 flex items-center justify-center relative">
              <div className="text-4xl">📝</div>
              {post.featured && (
                <div className="absolute top-4 left-4">
                  <span className="flex items-center space-x-1 px-2 py-1 bg-neon-purple/90 text-white text-xs font-medium rounded-full">
                    <TrendingUp size={12} />
                    <span>Destaque</span>
                  </span>
                </div>
              )}
            </div>

            {/* Content */}
            <div className="p-6">
              {/* Meta */}
              <div className="flex items-center justify-between mb-3">
                <span className="px-3 py-1 bg-neon-purple/10 text-neon-purple text-xs font-medium rounded-full border border-neon-purple/20">
                  {post.category}
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

              {/* Stats and Read more */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                  {post.views && (
                    <div className="flex items-center space-x-1">
                      <Eye size={12} />
                      <span>{post.views.toLocaleString()}</span>
                    </div>
                  )}
                  {post.likes && (
                    <div className="flex items-center space-x-1">
                      <Heart size={12} />
                      <span>{post.likes}</span>
                    </div>
                  )}
                </div>
                <div className="flex items-center space-x-2 text-neon-purple group-hover:text-neon-purple/80 transition-colors">
                  <span className="text-sm font-medium">Ler artigo</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          </div>
        </Link>
      </motion.article>
    );
  }

  if (variant === 'compact') {
    return (
      <motion.article
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        viewport={{ once: true }}
        className="group"
      >
        <Link href={`/blog/${post.id}`}>
          <div className="flex items-center space-x-4 p-4 bg-card/20 backdrop-blur-sm rounded-lg border border-border/30 hover:border-neon-blue/30 transition-all duration-300">
            {/* Image */}
            <div className="w-16 h-16 bg-gradient-to-br from-neon-blue/20 to-neon-green/20 rounded-lg flex items-center justify-center flex-shrink-0">
              <div className="text-xl">📄</div>
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center space-x-2 mb-1">
                <span className="px-2 py-1 bg-neon-blue/10 text-neon-blue text-xs font-medium rounded-full">
                  {post.category}
                </span>
                <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                  <Clock size={10} />
                  <span>{post.readTime} min</span>
                </div>
              </div>
              <h3 className="font-semibold group-hover:text-neon-blue transition-colors line-clamp-1 mb-1">
                {post.title}
              </h3>
              <p className="text-sm text-muted-foreground line-clamp-2 mb-2">
                {post.excerpt}
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                  <Calendar size={10} />
                  <span>{formatDate(post.publishedAt)}</span>
                </div>
                <ArrowRight size={14} className="text-neon-blue group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>
        </Link>
      </motion.article>
    );
  }

  // Default variant
  return (
    <motion.article
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
          <div className="h-48 bg-gradient-to-br from-neon-blue/20 to-neon-green/20 flex items-center justify-center relative">
            <div className="text-4xl">📄</div>
            {post.featured && (
              <div className="absolute top-4 right-4">
                <span className="flex items-center space-x-1 px-2 py-1 bg-neon-purple/90 text-white text-xs font-medium rounded-full">
                  <TrendingUp size={12} />
                  <span>Destaque</span>
                </span>
              </div>
            )}
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

              {/* Date, stats and read more */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                    <Calendar size={12} />
                    <span>{formatDate(post.publishedAt)}</span>
                  </div>
                  {post.views && (
                    <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                      <Eye size={12} />
                      <span>{post.views.toLocaleString()}</span>
                    </div>
                  )}
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
  );
}

