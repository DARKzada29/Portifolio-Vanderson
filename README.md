# 🚀 Portfólio Vanderson "Cangaty"

Um portfólio moderno e futurista desenvolvido com as mais recentes tecnologias web, apresentando um design dark mode com cores neon e funcionalidades avançadas como IA conversacional e painel administrativo.

## ✨ Características Principais

- **Design Futurista**: Tema Amoled Dark com cores neon (azul, verde, roxo)
- **Animações Fluidas**: Implementadas com Framer Motion
- **IA DARK**: Assistente virtual conversacional
- **Painel Admin**: Sistema completo de gerenciamento
- **Responsivo**: Otimizado para desktop e mobile
- **Performance**: SSR/SSG com Next.js 14

## 🛠️ Stack Tecnológica

### Frontend
- **Next.js 14** (App Router)
- **TypeScript** - Tipagem estática
- **Tailwind CSS 3** - Estilização com theming
- **Framer Motion** - Animações fluidas
- **Shadcn/UI** - Componentes acessíveis
- **Lucide Icons** - Ícones modernos

### Backend
- **Prisma ORM** - Gerenciamento de banco de dados
- **PostgreSQL** - Banco de dados principal
- **NextAuth.js** - Autenticação segura
- **API Routes** - Endpoints RESTful
- **Server Actions** - Ações do servidor

### Funcionalidades Extras
- **IA DARK** - Assistente virtual inteligente
- **QR Code** - Para download do currículo
- **Painel Admin** - Gerenciamento de conteúdo
- **Dark Mode** - Tema automático
- **Otimização de Imagens** - next/image

## 🎨 Design e UX

### Visual
- **Tema Amoled Dark** com fundo preto profundo
- **Cores Neon**: Azul (#00D4FF), Verde (#00FF88), Roxo (#8B5CF6)
- **Tipografia**: JetBrains Mono para código, Inter para texto
- **Animações**: Entrada suave, hover effects, transições fluidas

### Layout
- **Grid System** - Layout responsivo
- **Seções Definidas** - Organização clara
- **Navegação Intuitiva** - Menu fixo com indicadores
- **Call-to-Actions** - Botões estratégicos

## 📱 Estrutura das Páginas

### 🏠 Home (`/`)
- Hero section com animação de entrada
- Estatísticas animadas (projetos, experiência, dedicação)
- Barras de habilidades interativas
- Call-to-action para projetos e contato

### 👤 Sobre (`/sobre`)
- Biografia pessoal e profissional
- Timeline animada de experiências
- Skills com gráficos interativos
- Avatar flutuante com animações

### 💼 Projetos (`/projetos`)
- Cards animados com hover effects
- Sistema de filtros por categoria
- Busca em tempo real
- Modal com detalhes dos projetos

### 📧 Contato (`/contato`)
- Formulário com validação (Zod + React Hook Form)
- Informações de contato animadas
- Links para redes sociais
- Status de disponibilidade

### 🤖 IA DARK (`/ia-dark`)
- Interface de chat interativa
- Respostas inteligentes sobre o portfólio
- Perguntas sugeridas
- Indicador de digitação animado

### 🔐 Admin (`/admin`)
- Dashboard com métricas
- Gerenciamento de projetos (CRUD)
- Sistema de autenticação
- Interface administrativa moderna

## 🚀 Instalação e Execução

### Pré-requisitos
- Node.js 18+ 
- npm ou yarn
- PostgreSQL (opcional - pode usar SQLite)

### Instalação
```bash
# Clone o repositório
git clone https://github.com/vandersoncangaty/portfolio-cangaty.git

# Entre no diretório
cd portfolio-cangaty

# Instale as dependências
npm install

# Configure as variáveis de ambiente
cp .env.example .env

# Configure o banco de dados
npx prisma generate
npx prisma db push

# Execute o projeto
npm run dev
```

### Variáveis de Ambiente
```env
# Database
DATABASE_URL="postgresql://user:password@localhost:5432/portfolio"

# NextAuth
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-secret-key"

# OAuth Providers
GITHUB_ID="your-github-id"
GITHUB_SECRET="your-github-secret"
GOOGLE_ID="your-google-id"
GOOGLE_SECRET="your-google-secret"

# Email (opcional)
SMTP_HOST="smtp.gmail.com"
SMTP_PORT="587"
SMTP_USER="your-email@gmail.com"
SMTP_PASS="your-app-password"
```

## 📦 Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev          # Inicia servidor de desenvolvimento

# Build
npm run build        # Gera build de produção
npm run start        # Inicia servidor de produção

# Banco de dados
npx prisma studio    # Interface visual do banco
npx prisma generate  # Gera cliente Prisma
npx prisma db push   # Aplica mudanças no schema

# Linting
npm run lint         # Executa ESLint
npm run type-check   # Verifica tipos TypeScript
```

## 🌟 Funcionalidades Detalhadas

### IA DARK
- **Respostas Contextuais**: Conhece projetos, habilidades e experiência
- **Interface Moderna**: Chat com animações e indicadores
- **Perguntas Sugeridas**: Facilita interação do usuário
- **Processamento Inteligente**: Analisa perguntas e responde adequadamente

### Painel Administrativo
- **Dashboard**: Métricas e estatísticas em tempo real
- **CRUD Projetos**: Criar, editar, excluir e gerenciar projetos
- **Autenticação**: Login seguro via GitHub/Google
- **Controles**: Destacar projetos, publicar/despublicar

### Sistema de Autenticação
- **NextAuth.js**: Implementação robusta e segura
- **Múltiplos Provedores**: GitHub, Google
- **Sessões Persistentes**: Login mantido entre sessões
- **Proteção de Rotas**: Acesso restrito ao admin

## 🎯 Otimizações

### Performance
- **SSR/SSG**: Renderização otimizada
- **Image Optimization**: next/image para imagens
- **Code Splitting**: Carregamento sob demanda
- **Lazy Loading**: Componentes carregados quando necessário

### SEO
- **Meta Tags**: Otimizadas para cada página
- **Schema.org**: Dados estruturados
- **Sitemap**: Geração automática
- **Open Graph**: Compartilhamento social

### Acessibilidade
- **ARIA Labels**: Navegação assistiva
- **Contraste**: Cores com contraste adequado
- **Keyboard Navigation**: Navegação por teclado
- **Screen Readers**: Compatibilidade total

## 🚀 Deploy

### Vercel (Recomendado)
```bash
# Instale a CLI da Vercel
npm i -g vercel

# Faça deploy
vercel

# Configure as variáveis de ambiente no dashboard
```

### Outras Plataformas
- **Netlify**: Suporte completo ao Next.js
- **Railway**: Deploy com banco PostgreSQL
- **DigitalOcean**: App Platform

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👨‍💻 Autor

**Vanderson "Cangaty"**
- Website: [vandersoncangaty.dev](https://vandersoncangaty.dev)
- GitHub: [@vandersoncangaty](https://github.com/vandersoncangaty)
- LinkedIn: [vandersoncangaty](https://linkedin.com/in/vandersoncangaty)
- Email: contato@vandersoncangaty.dev

---

⭐ **Gostou do projeto?** Deixe uma estrela no repositório!

🚀 **Quer um portfólio assim?** Entre em contato para desenvolvermos o seu!

