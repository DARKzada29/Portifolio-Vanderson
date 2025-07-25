'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'contato@vandersoncangaty.dev',
    href: 'mailto:contato@vandersoncangaty.dev',
    color: 'text-neon-blue',
  },
  {
    icon: Phone,
    label: 'Telefone',
    value: '+55 (11) 99999-9999',
    href: 'tel:+5511999999999',
    color: 'text-neon-green',
  },
  {
    icon: MapPin,
    label: 'Localização',
    value: 'São Paulo, Brasil',
    href: 'https://maps.google.com/?q=São+Paulo,+Brasil',
    color: 'text-neon-purple',
  },
];

const socialLinks = [
  {
    name: 'GitHub',
    href: 'https://github.com/vandersoncangaty',
    icon: Github,
    color: 'hover:text-neon-blue',
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/in/vandersoncangaty',
    icon: Linkedin,
    color: 'hover:text-neon-green',
  },
  {
    name: 'Twitter',
    href: 'https://twitter.com/vandersoncangaty',
    icon: Twitter,
    color: 'hover:text-neon-purple',
  },
];

export default function Contato() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <span className="inline-block px-4 py-2 bg-neon-purple/10 text-neon-purple rounded-full text-sm font-medium border border-neon-purple/20">
              📧 Entre em Contato
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Vamos <span className="neon-text-blue">Conversar</span>?
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto"
          >
            Tem um projeto em mente? Quer discutir uma oportunidade? 
            Ou apenas quer trocar uma ideia sobre tecnologia? 
            Estou sempre aberto para novas conversas!
          </motion.p>
        </div>
      </section>

      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-8">
                <span className="neon-text-green">Informações</span> de Contato
              </h2>

              <div className="space-y-6 mb-8">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <motion.a
                      key={info.label}
                      href={info.href}
                      target={info.href.startsWith('http') ? '_blank' : undefined}
                      rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.02, x: 10 }}
                      className="flex items-center space-x-4 p-4 bg-card/30 backdrop-blur-sm rounded-xl border border-border/50 hover:border-neon-blue/30 transition-all duration-300 group"
                    >
                      <div className={`p-3 rounded-lg bg-current/10 ${info.color}`}>
                        <Icon size={24} />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{info.label}</p>
                        <p className="font-semibold text-foreground group-hover:text-neon-blue transition-colors">
                          {info.value}
                        </p>
                      </div>
                    </motion.a>
                  );
                })}
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4 neon-text-purple">
                  Redes Sociais
                </h3>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <motion.a
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.1, y: -3 }}
                        whileTap={{ scale: 0.95 }}
                        className={`p-4 rounded-xl bg-secondary/50 text-muted-foreground transition-all duration-300 ${social.color} hover:bg-secondary`}
                      >
                        <Icon size={24} />
                        <span className="sr-only">{social.name}</span>
                      </motion.a>
                    );
                  })}
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="mt-8 p-6 bg-neon-green/10 border border-neon-green/20 rounded-xl"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-neon-green rounded-full animate-pulse" />
                  <span className="text-neon-green font-semibold">Disponível para projetos</span>
                </div>
                <p className="text-muted-foreground mt-2">
                  Atualmente aceitando novos projetos e oportunidades de colaboração.
                </p>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-neon-blue/5 via-neon-purple/5 to-neon-green/5">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Pronto para começar seu <span className="neon-text-blue">próximo projeto</span>?
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Seja um site, aplicativo ou sistema completo, vamos transformar sua ideia em realidade 
            usando as melhores tecnologias do mercado.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="mailto:contato@vandersoncangaty.dev"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2 px-8 py-4 bg-neon-blue text-black font-semibold rounded-lg hover:bg-neon-blue/90 transition-all duration-300 neon-glow-blue"
            >
              <Send size={20} />
              <span>Enviar Email Direto</span>
            </motion.a>
            <motion.a
              href="https://calendly.com/vandersoncangaty"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2 px-8 py-4 border border-neon-green text-neon-green rounded-lg hover:bg-neon-green/10 transition-all duration-300"
            >
              <span>Agendar Reunião</span>
            </motion.a>
          </div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}

