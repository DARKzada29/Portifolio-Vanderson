'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

const contactSchema = z.object({
  name: z.string().min(2, 'Nome deve ter pelo menos 2 caracteres'),
  email: z.string().email('Email inválido'),
  subject: z.string().min(5, 'Assunto deve ter pelo menos 5 caracteres'),
  message: z.string().min(10, 'Mensagem deve ter pelo menos 10 caracteres'),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Simular envio por enquanto
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      console.log('Form data:', data);
      setSubmitStatus('success');
      reset();
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-card/30 backdrop-blur-sm rounded-2xl border border-border/50 p-8">
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-4">
          Envie uma <span className="neon-text-purple">Mensagem</span>
        </h2>
        <p className="text-muted-foreground">
          Preencha o formulário abaixo e entrarei em contato o mais breve possível.
        </p>
      </div>

      {submitStatus === 'success' && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 p-4 bg-neon-green/10 border border-neon-green/20 rounded-lg flex items-center space-x-3"
        >
          <CheckCircle size={20} className="text-neon-green" />
          <div>
            <p className="text-neon-green font-semibold">Mensagem enviada com sucesso!</p>
            <p className="text-sm text-muted-foreground">
              Obrigado pelo contato. Responderei em breve.
            </p>
          </div>
        </motion.div>
      )}

      {submitStatus === 'error' && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-lg flex items-center space-x-3"
        >
          <AlertCircle size={20} className="text-red-500" />
          <div>
            <p className="text-red-500 font-semibold">Erro ao enviar mensagem</p>
            <p className="text-sm text-muted-foreground">
              Tente novamente ou entre em contato diretamente por email.
            </p>
          </div>
        </motion.div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-sm font-medium">
              Nome *
            </Label>
            <Input
              id="name"
              {...register('name')}
              placeholder="Seu nome completo"
              className="bg-input/50 border-border/50 focus:border-neon-blue/50 focus:ring-neon-blue/20"
              disabled={isSubmitting}
            />
            {errors.name && (
              <p className="text-sm text-red-500">{errors.name.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-sm font-medium">
              Email *
            </Label>
            <Input
              id="email"
              type="email"
              {...register('email')}
              placeholder="seu@email.com"
              className="bg-input/50 border-border/50 focus:border-neon-blue/50 focus:ring-neon-blue/20"
              disabled={isSubmitting}
            />
            {errors.email && (
              <p className="text-sm text-red-500">{errors.email.message}</p>
            )}
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="subject" className="text-sm font-medium">
            Assunto *
          </Label>
          <Input
            id="subject"
            {...register('subject')}
            placeholder="Sobre o que você gostaria de conversar?"
            className="bg-input/50 border-border/50 focus:border-neon-blue/50 focus:ring-neon-blue/20"
            disabled={isSubmitting}
          />
          {errors.subject && (
            <p className="text-sm text-red-500">{errors.subject.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="message" className="text-sm font-medium">
            Mensagem *
          </Label>
          <Textarea
            id="message"
            {...register('message')}
            placeholder="Conte-me mais sobre seu projeto ou ideia..."
            rows={6}
            className="bg-input/50 border-border/50 focus:border-neon-blue/50 focus:ring-neon-blue/20 resize-none"
            disabled={isSubmitting}
          />
          {errors.message && (
            <p className="text-sm text-red-500">{errors.message.message}</p>
          )}
        </div>

        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-neon-purple hover:bg-neon-purple/90 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 neon-glow-purple disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <div className="flex items-center space-x-2">
                <Loader2 size={20} className="animate-spin" />
                <span>Enviando...</span>
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <Send size={20} />
                <span>Enviar Mensagem</span>
              </div>
            )}
          </Button>
        </motion.div>

        <p className="text-xs text-muted-foreground text-center">
          * Campos obrigatórios. Seus dados serão tratados com total privacidade.
        </p>
      </form>
    </div>
  );
}

