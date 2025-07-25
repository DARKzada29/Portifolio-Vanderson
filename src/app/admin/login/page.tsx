'use client';

import { useState } from 'react';
import { signIn, getSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { Github, Mail, Shield, ArrowRight, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function AdminLogin() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSignIn = async (provider: string) => {
    setIsLoading(true);
    setError('');

    try {
      const result = await signIn(provider, { 
        redirect: false,
        callbackUrl: '/admin'
      });

      if (result?.error) {
        setError('Erro ao fazer login. Tente novamente.');
        setIsLoading(false);
        return;
      }

      // Verificar se o usuário é admin após o login
      const session = await getSession();
      if (session?.user?.role === 'ADMIN') {
        router.push('/admin');
      } else {
        setError('Acesso negado. Você não tem permissões de administrador.');
        setIsLoading(false);
      }
    } catch (error) {
      console.error('Login error:', error);
      setError('Erro inesperado. Tente novamente.');
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-background via-background to-neon-blue/5">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md"
      >
        <Card className="bg-card/50 backdrop-blur-sm border-border/50 shadow-2xl">
          <CardHeader className="text-center space-y-4">
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mx-auto w-16 h-16 bg-neon-blue/10 rounded-full flex items-center justify-center"
            >
              <Shield size={32} className="text-neon-blue" />
            </motion.div>
            
            <div>
              <CardTitle className="text-2xl font-bold">
                Painel <span className="neon-text-blue">Admin</span>
              </CardTitle>
              <CardDescription className="text-muted-foreground">
                Acesso restrito para administradores
              </CardDescription>
            </div>
          </CardHeader>

          <CardContent className="space-y-6">
            {error && (
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-500 text-sm text-center"
              >
                {error}
              </motion.div>
            )}

            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <Button
                  onClick={() => handleSignIn('github')}
                  disabled={isLoading}
                  className="w-full bg-gray-900 hover:bg-gray-800 text-white border border-gray-700 transition-all duration-300"
                >
                  {isLoading ? (
                    <Loader2 size={20} className="animate-spin mr-2" />
                  ) : (
                    <Github size={20} className="mr-2" />
                  )}
                  Entrar com GitHub
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Button
                  onClick={() => handleSignIn('google')}
                  disabled={isLoading}
                  className="w-full bg-white hover:bg-gray-50 text-gray-900 border border-gray-300 transition-all duration-300"
                >
                  {isLoading ? (
                    <Loader2 size={20} className="animate-spin mr-2" />
                  ) : (
                    <Mail size={20} className="mr-2" />
                  )}
                  Entrar com Google
                </Button>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-center"
            >
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-border/50"></div>
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-card px-2 text-muted-foreground">
                    Acesso Seguro
                  </span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="text-center space-y-2"
            >
              <p className="text-xs text-muted-foreground">
                Apenas usuários autorizados podem acessar esta área
              </p>
              <motion.a
                href="/"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center text-sm text-neon-blue hover:text-neon-blue/80 transition-colors"
              >
                Voltar ao site
                <ArrowRight size={14} className="ml-1" />
              </motion.a>
            </motion.div>
          </CardContent>
        </Card>

        {/* Security Notice */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="mt-6 p-4 bg-neon-green/5 border border-neon-green/20 rounded-lg text-center"
        >
          <div className="flex items-center justify-center space-x-2 text-neon-green text-sm">
            <Shield size={16} />
            <span>Conexão segura e criptografada</span>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

