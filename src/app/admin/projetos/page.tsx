'use client';

import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { 
  Plus, 
  Search, 
  Filter, 
  Edit, 
  Trash2, 
  Eye, 
  Star,
  Calendar,
  Tag,
  ExternalLink
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

// Mock data - em produção viria do banco
const mockProjects = [
  {
    id: '1',
    title: 'E-commerce Platform',
    description: 'Plataforma completa de e-commerce com painel administrativo',
    image: '/images/projects/ecommerce.jpg',
    technologies: ['Next.js', 'TypeScript', 'Node.js', 'PostgreSQL'],
    category: 'FULLSTACK',
    featured: true,
    published: true,
    createdAt: new Date('2024-01-15'),
    githubUrl: 'https://github.com/vandersoncangaty/ecommerce',
    liveUrl: 'https://ecommerce-demo.vandersoncangaty.dev',
  },
  {
    id: '2',
    title: 'Task Management App',
    description: 'Aplicativo de gerenciamento de tarefas com colaboração em tempo real',
    image: '/images/projects/taskapp.jpg',
    technologies: ['React', 'Socket.io', 'Express', 'MongoDB'],
    category: 'FULLSTACK',
    featured: true,
    published: true,
    createdAt: new Date('2023-11-20'),
    githubUrl: 'https://github.com/vandersoncangaty/taskapp',
    liveUrl: 'https://taskapp.vandersoncangaty.dev',
  },
  {
    id: '3',
    title: 'Portfolio Website',
    description: 'Site de portfólio responsivo com animações suaves',
    image: '/images/projects/portfolio.jpg',
    technologies: ['Next.js', 'Framer Motion', 'Tailwind CSS'],
    category: 'FRONTEND',
    featured: false,
    published: true,
    createdAt: new Date('2023-09-10'),
    githubUrl: 'https://github.com/vandersoncangaty/portfolio',
    liveUrl: 'https://vandersoncangaty.dev',
  },
];

const categories = [
  { value: 'all', label: 'Todos' },
  { value: 'FRONTEND', label: 'Frontend' },
  { value: 'BACKEND', label: 'Backend' },
  { value: 'FULLSTACK', label: 'Full Stack' },
  { value: 'MOBILE', label: 'Mobile' },
];

export default function AdminProjetos() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [projects, setProjects] = useState(mockProjects);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (status === 'loading') return;
    
    if (!session || session.user?.role !== 'ADMIN') {
      router.push('/admin/login');
      return;
    }
  }, [session, status, router]);

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || project.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const handleDeleteProject = async (id: string) => {
    if (!confirm('Tem certeza que deseja excluir este projeto?')) return;
    
    setIsLoading(true);
    try {
      // Simular exclusão
      setProjects(projects.filter(p => p.id !== id));
    } catch (error) {
      console.error('Error deleting project:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const toggleFeatured = async (id: string) => {
    setProjects(projects.map(p => 
      p.id === id ? { ...p, featured: !p.featured } : p
    ));
  };

  const togglePublished = async (id: string) => {
    setProjects(projects.map(p => 
      p.id === id ? { ...p, published: !p.published } : p
    ));
  };

  if (status === 'loading') {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-neon-blue"></div>
      </div>
    );
  }

  if (!session || session.user?.role !== 'ADMIN') {
    return null;
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-between mb-8"
          >
            <div>
              <h1 className="text-3xl font-bold">
                Gerenciar <span className="neon-text-blue">Projetos</span>
              </h1>
              <p className="text-muted-foreground mt-2">
                {filteredProjects.length} projeto{filteredProjects.length !== 1 ? 's' : ''} encontrado{filteredProjects.length !== 1 ? 's' : ''}
              </p>
            </div>
            <Button
              onClick={() => router.push('/admin/projetos/novo')}
              className="bg-neon-green hover:bg-neon-green/90 text-black font-semibold"
            >
              <Plus size={20} className="mr-2" />
              Novo Projeto
            </Button>
          </motion.div>

          {/* Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col lg:flex-row gap-4 items-center justify-between mb-8"
          >
            <div className="relative w-full lg:w-96">
              <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Buscar projetos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-input/50 border-border/50 focus:border-neon-blue/50"
              />
            </div>

            <div className="flex items-center space-x-2">
              <Filter size={16} className="text-muted-foreground" />
              {categories.map((category) => (
                <Button
                  key={category.value}
                  variant={selectedCategory === category.value ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setSelectedCategory(category.value)}
                  className={selectedCategory === category.value 
                    ? 'bg-neon-blue text-black' 
                    : 'border-border/50 hover:border-neon-blue/50'
                  }
                >
                  {category.label}
                </Button>
              ))}
            </div>
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="bg-card/30 backdrop-blur-sm border-border/50 hover:border-neon-blue/30 transition-all duration-300 group">
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <CardTitle className="text-lg line-clamp-1">
                            {project.title}
                          </CardTitle>
                          {project.featured && (
                            <Star size={16} className="text-yellow-500 fill-current" />
                          )}
                        </div>
                        <div className="flex items-center space-x-2 mb-2">
                          <Badge 
                            variant="outline" 
                            className={`text-xs ${
                              project.category === 'FRONTEND' ? 'border-neon-blue/50 text-neon-blue' :
                              project.category === 'BACKEND' ? 'border-neon-green/50 text-neon-green' :
                              'border-neon-purple/50 text-neon-purple'
                            }`}
                          >
                            {project.category}
                          </Badge>
                          <Badge 
                            variant={project.published ? 'default' : 'secondary'}
                            className="text-xs"
                          >
                            {project.published ? 'Publicado' : 'Rascunho'}
                          </Badge>
                        </div>
                      </div>
                    </div>
                    <CardDescription className="line-clamp-2">
                      {project.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="pt-0">
                    <div className="space-y-4">
                      {/* Technologies */}
                      <div className="flex flex-wrap gap-1">
                        {project.technologies.slice(0, 3).map((tech) => (
                          <Badge key={tech} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                        {project.technologies.length > 3 && (
                          <Badge variant="secondary" className="text-xs">
                            +{project.technologies.length - 3}
                          </Badge>
                        )}
                      </div>

                      {/* Date */}
                      <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                        <Calendar size={12} />
                        <span>
                          {project.createdAt.toLocaleDateString('pt-BR')}
                        </span>
                      </div>

                      {/* Actions */}
                      <div className="flex items-center justify-between pt-2">
                        <div className="flex items-center space-x-1">
                          {project.liveUrl && (
                            <Button
                              size="sm"
                              variant="ghost"
                              onClick={() => window.open(project.liveUrl, '_blank')}
                              className="h-8 w-8 p-0 hover:bg-neon-blue/10 hover:text-neon-blue"
                            >
                              <ExternalLink size={14} />
                            </Button>
                          )}
                          <Button
                            size="sm"
                            variant="ghost"
                            onClick={() => router.push(`/projetos`)}
                            className="h-8 w-8 p-0 hover:bg-neon-green/10 hover:text-neon-green"
                          >
                            <Eye size={14} />
                          </Button>
                        </div>

                        <div className="flex items-center space-x-1">
                          <Button
                            size="sm"
                            variant="ghost"
                            onClick={() => toggleFeatured(project.id)}
                            className={`h-8 w-8 p-0 ${
                              project.featured 
                                ? 'text-yellow-500 hover:bg-yellow-500/10' 
                                : 'hover:bg-yellow-500/10 hover:text-yellow-500'
                            }`}
                          >
                            <Star size={14} className={project.featured ? 'fill-current' : ''} />
                          </Button>
                          <Button
                            size="sm"
                            variant="ghost"
                            onClick={() => router.push(`/admin/projetos/${project.id}/editar`)}
                            className="h-8 w-8 p-0 hover:bg-neon-blue/10 hover:text-neon-blue"
                          >
                            <Edit size={14} />
                          </Button>
                          <Button
                            size="sm"
                            variant="ghost"
                            onClick={() => handleDeleteProject(project.id)}
                            className="h-8 w-8 p-0 hover:bg-red-500/10 hover:text-red-500"
                            disabled={isLoading}
                          >
                            <Trash2 size={14} />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center py-16"
            >
              <div className="text-6xl mb-4">📁</div>
              <h3 className="text-2xl font-bold mb-2">Nenhum projeto encontrado</h3>
              <p className="text-muted-foreground mb-6">
                {searchTerm || selectedCategory !== 'all' 
                  ? 'Tente ajustar os filtros ou termo de busca'
                  : 'Comece criando seu primeiro projeto'
                }
              </p>
              <Button
                onClick={() => router.push('/admin/projetos/novo')}
                className="bg-neon-blue hover:bg-neon-blue/90 text-black font-semibold"
              >
                <Plus size={20} className="mr-2" />
                Criar Primeiro Projeto
              </Button>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}

