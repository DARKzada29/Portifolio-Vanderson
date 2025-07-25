'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Bot, User, Sparkles, MessageCircle, X } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';

interface Message {
  id: string;
  content: string;
  sender: 'user' | 'ai';
  timestamp: Date;
}

// Respostas pré-definidas da IA DARK
const aiResponses = {
  greeting: [
    "Olá! Sou a IA DARK, assistente virtual do Vanderson. Como posso ajudá-lo hoje?",
    "Oi! Eu sou a IA DARK. Estou aqui para responder suas perguntas sobre o Vanderson e seus projetos!",
    "Bem-vindo! Sou a IA DARK, criada para falar sobre o trabalho do Vanderson. O que gostaria de saber?"
  ],
  about: [
    "O Vanderson é um desenvolvedor Full Stack especializado em React, Next.js, Node.js e PostgreSQL. Ele tem mais de 3 anos de experiência criando soluções digitais inovadoras.",
    "Vanderson 'Cangaty' é apaixonado por tecnologia e desenvolvimento. Ele trabalha principalmente com JavaScript/TypeScript, criando desde interfaces elegantes até APIs robustas.",
    "O Vanderson é um desenvolvedor que ama transformar ideias em realidade digital. Especialista em tecnologias modernas como Next.js, React e Node.js."
  ],
  projects: [
    "O Vanderson tem vários projetos interessantes! Alguns destaques incluem uma plataforma de e-commerce completa, um app de gerenciamento de tarefas e este próprio portfólio futurista.",
    "Entre os projetos do Vanderson estão: E-commerce Platform (Next.js + Node.js), Task Management App (React + Socket.io) e diversos sites responsivos. Todos com código limpo e design moderno!",
    "Os projetos do Vanderson mostram sua versatilidade: desde frontends elegantes até backends robustos. Ele gosta de usar as tecnologias mais recentes para criar soluções eficientes."
  ],
  skills: [
    "As principais habilidades do Vanderson incluem: React (95%), Next.js (90%), TypeScript (88%), Node.js (85%), PostgreSQL (80%) e muito mais!",
    "Vanderson domina o stack moderno de desenvolvimento: Frontend (React, Next.js, Tailwind), Backend (Node.js, Express, Prisma) e Banco de dados (PostgreSQL, MongoDB).",
    "Ele é especialista em JavaScript/TypeScript, frameworks modernos como React e Next.js, e tem experiência sólida com bancos de dados e APIs RESTful."
  ],
  contact: [
    "Você pode entrar em contato com o Vanderson através do email contato@vandersoncangaty.dev, LinkedIn ou pelo formulário de contato do site!",
    "Para falar com o Vanderson, use o formulário de contato aqui no site ou envie um email para contato@vandersoncangaty.dev. Ele responde rapidamente!",
    "O Vanderson está sempre aberto para novas oportunidades! Entre em contato via email, LinkedIn ou WhatsApp. Todas as informações estão na página de contato."
  ],
  default: [
    "Interessante pergunta! Embora eu seja focada em falar sobre o Vanderson e seus projetos, posso tentar ajudar. O que especificamente você gostaria de saber?",
    "Hmm, não tenho certeza sobre isso. Mas posso falar sobre as habilidades do Vanderson, seus projetos ou como entrar em contato com ele. O que te interessa mais?",
    "Essa é uma pergunta que vai além do meu conhecimento sobre o Vanderson. Que tal conversarmos sobre seus projetos ou experiência profissional?"
  ]
};

const getAIResponse = (message: string): string => {
  const lowerMessage = message.toLowerCase();
  
  if (lowerMessage.includes('olá') || lowerMessage.includes('oi') || lowerMessage.includes('hello')) {
    return aiResponses.greeting[Math.floor(Math.random() * aiResponses.greeting.length)];
  }
  
  if (lowerMessage.includes('sobre') || lowerMessage.includes('quem') || lowerMessage.includes('vanderson')) {
    return aiResponses.about[Math.floor(Math.random() * aiResponses.about.length)];
  }
  
  if (lowerMessage.includes('projeto') || lowerMessage.includes('trabalho') || lowerMessage.includes('portfolio')) {
    return aiResponses.projects[Math.floor(Math.random() * aiResponses.projects.length)];
  }
  
  if (lowerMessage.includes('skill') || lowerMessage.includes('habilidade') || lowerMessage.includes('tecnologia')) {
    return aiResponses.skills[Math.floor(Math.random() * aiResponses.skills.length)];
  }
  
  if (lowerMessage.includes('contato') || lowerMessage.includes('email') || lowerMessage.includes('falar')) {
    return aiResponses.contact[Math.floor(Math.random() * aiResponses.contact.length)];
  }
  
  return aiResponses.default[Math.floor(Math.random() * aiResponses.default.length)];
};

export default function IADark() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: "Olá! Sou a IA DARK, assistente virtual do Vanderson. Posso responder perguntas sobre seus projetos, habilidades e experiência. Como posso ajudá-lo?",
      sender: 'ai',
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputMessage,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Simular delay de digitação da IA
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        content: getAIResponse(inputMessage),
        sender: 'ai',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-20 pb-8 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-neon-purple/10 text-neon-purple rounded-full text-sm font-medium border border-neon-purple/20">
              🤖 IA DARK
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Converse com a <span className="neon-text-purple">IA DARK</span>
          </h1>

          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Assistente virtual inteligente que conhece tudo sobre o Vanderson, 
            seus projetos e experiência profissional. Faça suas perguntas!
          </p>
        </motion.div>
      </section>

      {/* Chat Interface */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <Card className="bg-card/30 backdrop-blur-sm border-border/50 h-[600px] flex flex-col">
            {/* Chat Header */}
            <div className="p-4 border-b border-border/50">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-neon-purple/10 rounded-full flex items-center justify-center">
                  <Bot size={20} className="text-neon-purple" />
                </div>
                <div>
                  <h3 className="font-semibold">IA DARK</h3>
                  <p className="text-sm text-muted-foreground">
                    Assistente do Vanderson • Online
                  </p>
                </div>
                <div className="ml-auto">
                  <div className="w-2 h-2 bg-neon-green rounded-full animate-pulse"></div>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              <AnimatePresence>
                {messages.map((message) => (
                  <motion.div
                    key={message.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div className={`flex items-start space-x-2 max-w-[80%] ${
                      message.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''
                    }`}>
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        message.sender === 'user' 
                          ? 'bg-neon-blue/10' 
                          : 'bg-neon-purple/10'
                      }`}>
                        {message.sender === 'user' ? (
                          <User size={16} className="text-neon-blue" />
                        ) : (
                          <Bot size={16} className="text-neon-purple" />
                        )}
                      </div>
                      <div className={`p-3 rounded-lg ${
                        message.sender === 'user'
                          ? 'bg-neon-blue text-black'
                          : 'bg-secondary/50'
                      }`}>
                        <p className="text-sm">{message.content}</p>
                        <p className="text-xs opacity-70 mt-1">
                          {message.timestamp.toLocaleTimeString('pt-BR', { 
                            hour: '2-digit', 
                            minute: '2-digit' 
                          })}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>

              {/* Typing Indicator */}
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-start"
                >
                  <div className="flex items-start space-x-2">
                    <div className="w-8 h-8 bg-neon-purple/10 rounded-full flex items-center justify-center">
                      <Bot size={16} className="text-neon-purple" />
                    </div>
                    <div className="bg-secondary/50 p-3 rounded-lg">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t border-border/50">
              <div className="flex items-center space-x-2">
                <Input
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Digite sua pergunta sobre o Vanderson..."
                  className="flex-1 bg-input/50 border-border/50 focus:border-neon-purple/50"
                  disabled={isTyping}
                />
                <Button
                  onClick={handleSendMessage}
                  disabled={!inputMessage.trim() || isTyping}
                  className="bg-neon-purple hover:bg-neon-purple/90 text-white"
                >
                  <Send size={16} />
                </Button>
              </div>
              <p className="text-xs text-muted-foreground mt-2 text-center">
                IA DARK pode cometer erros. Considere verificar informações importantes.
              </p>
            </div>
          </Card>

          {/* Suggestions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-6"
          >
            <h3 className="text-lg font-semibold mb-4 text-center">
              <Sparkles size={20} className="inline mr-2 text-neon-purple" />
              Perguntas Sugeridas
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                "Quais são os principais projetos do Vanderson?",
                "Que tecnologias ele domina?",
                "Como posso entrar em contato com ele?",
                "Qual é a experiência profissional dele?"
              ].map((suggestion, index) => (
                <motion.button
                  key={suggestion}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setInputMessage(suggestion)}
                  className="p-3 text-sm bg-secondary/30 hover:bg-secondary/50 rounded-lg border border-border/50 hover:border-neon-purple/30 transition-all duration-300 text-left"
                >
                  {suggestion}
                </motion.button>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}

