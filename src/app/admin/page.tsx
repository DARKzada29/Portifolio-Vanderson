'use client';

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  BarChart3, 
  Users, 
  FolderOpen, 
  MessageSquare, 
  Settings,
  TrendingUp,
  Eye,
  Mail,
  Calendar
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const stats = [
  {
    title: 'Total de Projetos',
    value: '12',
    change: '+2 este mês',
    icon: FolderOpen,
    color: 'text-neon-blue',
    bgColor: 'bg-neon-blue/10',
  },
  {
    title: 'Mensagens Recebidas',
    value: '28',
    change: '+5 esta semana',
    icon: MessageSquare,
    color: 'text-neon-green',
    bgColor: 'bg-neon-green/10',
  },
  {
    title: 'Visualizações',
    value: '1,234',
    change: '+12% este mês',
    icon: Eye,
    color: 'text-neon-purple',
    bgColor: 'bg-neon-purple/10',
  },
  {
    title: 'Taxa de Conversão',
    value: '3.2%',
    change: '+0.5% esta semana',
    icon: TrendingUp,
    color: 'text-neon-blue',
    bgColor: 'bg-neon-blue/10',
  },
];

const quickActions = [
  {
    title: 'Adicionar Projeto',
    description: 'Criar um novo projeto para o portfólio',
    icon: FolderOpen,
    href: '/admin/projetos/novo',
    color: 'text-neon-blue',
  },
  {
    title: 'Ver Mensagens',
    description: 'Verificar mensagens de contato recebidas',
    icon: Mail,
    href: '/admin/contatos',
    color: 'text-neon-green',
  },
  {
    title: 'Analytics',
    description: 'Visualizar estatísticas e métricas',
    icon: BarChart3,
    href: '/admin/analytics',
    color: 'text-neon-purple',
  },
  {
    title: 'Configurações',
    description: 'Gerenciar configurações do sistema',
    icon: Settings,
    href: '/admin/configuracoes',
    color: 'text-neon-blue',
  },
];

export default function AdminDashboard() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'loading') return;
    
    if (!session) {
      router.push('/admin/login');
      return;
    }

    // Verificar se o usuário é admin
    if (session.user?.role !== 'ADMIN') {
      router.push('/');
      return;
    }
  }, [session, status, router]);

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
            className="mb-8"
          >
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold">
                  Painel <span className="neon-text-blue">Administrativo</span>
                </h1>
                <p className="text-muted-foreground mt-2">
                  Bem-vindo de volta, {session.user?.name}
                </p>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Calendar size={16} />
                <span>{new Date().toLocaleDateString('pt-BR', { 
                  weekday: 'long', 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}</span>
              </div>
            </div>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <Card key={stat.title} className="bg-card/50 backdrop-blur-sm border-border/50">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium text-muted-foreground">
                      {stat.title}
                    </CardTitle>
                    <div className={`p-2 rounded-lg ${stat.bgColor}`}>
                      <Icon size={16} className={stat.color} />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{stat.value}</div>
                    <p className="text-xs text-muted-foreground">
                      {stat.change}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </motion.div>

          {/* Quick Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8"
          >
            <h2 className="text-2xl font-bold mb-6">
              <span className="neon-text-green">Ações Rápidas</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {quickActions.map((action, index) => {
                const Icon = action.icon;
                return (
                  <motion.a
                    key={action.title}
                    href={action.href}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.02, y: -5 }}
                    whileTap={{ scale: 0.98 }}
                    className="block"
                  >
                    <Card className="bg-card/30 backdrop-blur-sm border-border/50 hover:border-neon-blue/30 transition-all duration-300 h-full">
                      <CardHeader>
                        <div className="flex items-center space-x-3">
                          <div className={`p-3 rounded-lg bg-current/10 ${action.color}`}>
                            <Icon size={24} />
                          </div>
                          <div>
                            <CardTitle className="text-lg">{action.title}</CardTitle>
                            <CardDescription className="text-sm">
                              {action.description}
                            </CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                    </Card>
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Recent Activity */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-8"
          >
            <Card className="bg-card/30 backdrop-blur-sm border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <BarChart3 size={20} className="text-neon-purple" />
                  <span>Atividade Recente</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 p-3 bg-secondary/30 rounded-lg">
                    <div className="w-2 h-2 bg-neon-green rounded-full"></div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">Novo projeto adicionado</p>
                      <p className="text-xs text-muted-foreground">E-commerce Platform - há 2 horas</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-secondary/30 rounded-lg">
                    <div className="w-2 h-2 bg-neon-blue rounded-full"></div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">Mensagem de contato recebida</p>
                      <p className="text-xs text-muted-foreground">João Silva - há 4 horas</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-secondary/30 rounded-lg">
                    <div className="w-2 h-2 bg-neon-purple rounded-full"></div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">Projeto atualizado</p>
                      <p className="text-xs text-muted-foreground">Task Management App - há 1 dia</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

