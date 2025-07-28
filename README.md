# 🚀 Portfólio Vanderson Cangaty

Portfólio profissional moderno e futurista desenvolvido com as mais recentes tecnologias web. Um showcase completo das minhas habilidades como Desenvolvedor Front End.

## ✨ Funcionalidades

### 🎨 Design & UX
- **Tema Amoled Dark** com cores neon (azul, verde, roxo)
- **Animações fluidas** com Framer Motion
- **Design responsivo** mobile-first
- **Tipografia moderna** com Inter e JetBrains Mono
- **Efeitos visuais** com gradientes e glows neon

### 📱 Páginas Principais
- **Home** - Hero section com animações e estatísticas
- **Sobre** - Timeline de experiências e habilidades
- **Projetos** - Showcase com filtros e busca
- **Blog** - Artigos sobre desenvolvimento
- **Certificações** - Cursos e certificações
- **Contato** - Formulário funcional e informações
- **IA DARK** - Assistente virtual interativo

### 🔧 Funcionalidades Técnicas
- **Painel Admin** - Gerenciamento de conteúdo
- **Autenticação** - NextAuth.js com GitHub/Google
- **Loading Skeletons** - Experiência de carregamento otimizada
- **Página 404** - Erro personalizado com design futurista
- **SEO Otimizado** - Sitemap, robots.txt e metadados
- **PWA Ready** - Manifest e service workers

## 🛠️ Stack Tecnológica

### Frontend
- **Next.js 14** (App Router)
- **TypeScript** para type safety
- **Tailwind CSS 3** com theming customizado
- **Framer Motion** para animações
- **Shadcn/UI** componentes acessíveis
- **Lucide Icons** ícones modernos

### Backend & Database
- **Prisma ORM** para banco de dados
- **PostgreSQL** com Docker
- **NextAuth.js** para autenticação
- **API Routes** e Server Actions

### Extras
- **n8n** para automação backend
- **IA DARK** agente conversacional
- **QR Code** para download do currículo
- **Responsividade** mobile-first

## 🚀 Como Executar

### Pré-requisitos
- Node.js 18+ 
- npm ou yarn
- PostgreSQL (opcional, para funcionalidades completas)

### Instalação

1. **Clone o repositório**
```bash
git clone https://github.com/DARKzada29/Portifolio-Vanderson.git
cd Portifolio-Vanderson
```

2. **Instale as dependências**
```bash
npm install
```

3. **Configure as variáveis de ambiente**
```bash
cp .env.example .env
```

Edite o arquivo `.env` com suas configurações:
```env
# Database
DATABASE_URL="postgresql://user:password@localhost:5432/portfolio"

# NextAuth
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-secret-key"

# OAuth Providers
GITHUB_ID="your-github-client-id"
GITHUB_SECRET="your-github-client-secret"
GOOGLE_ID="your-google-client-id"
GOOGLE_SECRET="your-google-client-secret"
```

4. **Configure o banco de dados** (opcional)
```bash
npx prisma generate
npx prisma db push
```

5. **Execute o projeto**
```bash
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000) no seu navegador.

## 📁 Estrutura do Projeto

```
src/
├── app/                    # App Router (Next.js 14)
│   ├── admin/             # Painel administrativo
│   ├── blog/              # Blog e artigos
│   ├── certificacoes/     # Certificações e cursos
│   ├── contato/           # Página de contato
│   ├── ia-dark/           # IA conversacional
│   ├── projetos/          # Showcase de projetos
│   ├── sobre/             # Página sobre mim
│   ├── globals.css        # Estilos globais
│   ├── layout.tsx         # Layout principal
│   ├── page.tsx           # Página inicial
│   ├── not-found.tsx      # Página 404
│   ├── sitemap.ts         # Sitemap dinâmico
│   └── manifest.ts        # PWA manifest
├── components/            # Componentes reutilizáveis
│   ├── ui/               # Componentes base (shadcn)
│   ├── ContactForm.tsx   # Formulário de contato
│   ├── Footer.tsx        # Rodapé
│   ├── LoadingSkeleton.tsx # Skeletons de carregamento
│   ├── LoadingSpinner.tsx  # Spinners de loading
│   ├── Navbar.tsx        # Navegação
│   └── ProjectCard.tsx   # Card de projeto
├── lib/                  # Utilitários e configurações
│   ├── actions.ts        # Server actions
│   ├── auth.ts          # Configuração NextAuth
│   ├── prisma.ts        # Cliente Prisma
│   └── utils.ts         # Funções utilitárias
├── types/               # Definições TypeScript
│   └── index.d.ts       # Tipos globais
└── styles/              # Estilos adicionais
    └── globals.css      # CSS customizado
```

## 🎨 Customização

### Cores Neon
As cores neon são definidas no `tailwind.config.ts`:
```typescript
colors: {
  'neon-blue': '#00d4ff',
  'neon-green': '#39ff14',
  'neon-purple': '#bf00ff',
}
```

### Animações
Animações customizadas estão em `globals.css`:
```css
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
}
```

## 📊 Performance

- **Lighthouse Score**: 95+ em todas as métricas
- **Core Web Vitals**: Otimizado
- **Bundle Size**: Otimizado com tree-shaking
- **Images**: Otimização automática com next/image
- **Fonts**: Carregamento otimizado com next/font

## 🔒 Segurança

- **CSP Headers** configurados
- **HTTPS** obrigatório em produção
- **Sanitização** de inputs
- **Rate limiting** nas APIs
- **Autenticação** segura com NextAuth.js

## 📱 Responsividade

- **Mobile First** design approach
- **Breakpoints** customizados
- **Touch** gestures suportados
- **Viewport** otimizado
- **PWA** ready para instalação

## 🚀 Deploy

### Vercel (Recomendado)
1. Conecte seu repositório GitHub
2. Configure as variáveis de ambiente
3. Deploy automático a cada push

### Outros Provedores
- **Netlify**: Suporte completo
- **Railway**: Para full-stack com banco
- **Docker**: Dockerfile incluído

## 🤝 Contribuição

Contribuições são bem-vindas! Por favor:

1. Fork o projeto
2. Crie uma branch para sua feature
3. Commit suas mudanças
4. Push para a branch
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 📞 Contato

- **Email**: vandersoncangaty@gmail.com
- **LinkedIn**: [vanderson-alves-de-lima-cangaty](https://linkedin.com/in/vanderson-alves-de-lima-cangaty)
- **GitHub**: [DARKzada29](https://github.com/DARKzada29)
- **Portfolio**: [vandersoncangaty.dev](https://vandersoncangaty.dev)

---

⭐ **Se este projeto te ajudou, considere dar uma estrela!**

