# 🚀 Guia de Deploy - Portfólio Vanderson Cangaty

Este guia fornece instruções detalhadas para fazer o deploy do portfólio em diferentes plataformas.

## 📋 Pré-requisitos

Antes de fazer o deploy, certifique-se de que:

- [ ] Todas as variáveis de ambiente estão configuradas
- [ ] O banco de dados está funcionando
- [ ] Os testes locais foram executados com sucesso
- [ ] O build de produção foi testado localmente

## 🌐 Opções de Deploy

### 1. Vercel (Recomendado)

A Vercel é a plataforma ideal para projetos Next.js, oferecendo deploy automático e otimizações específicas.

#### Passo a Passo:

1. **Instale a CLI da Vercel**
```bash
npm i -g vercel
```

2. **Faça login na Vercel**
```bash
vercel login
```

3. **Execute o deploy**
```bash
vercel
```

4. **Configure as variáveis de ambiente**
   - Acesse o dashboard da Vercel
   - Vá em Settings > Environment Variables
   - Adicione todas as variáveis do arquivo `.env`

#### Configuração Automática:
Crie um arquivo `vercel.json` na raiz do projeto:

```json
{
  "framework": "nextjs",
  "buildCommand": "npm run build",
  "devCommand": "npm run dev",
  "installCommand": "npm install",
  "functions": {
    "app/api/**/*.ts": {
      "maxDuration": 30
    }
  },
  "env": {
    "DATABASE_URL": "@database-url",
    "NEXTAUTH_URL": "@nextauth-url",
    "NEXTAUTH_SECRET": "@nextauth-secret"
  }
}
```

### 2. Netlify

Alternativa popular com boa integração para projetos Next.js.

#### Passo a Passo:

1. **Instale o plugin do Next.js**
```bash
npm install @netlify/plugin-nextjs
```

2. **Crie o arquivo `netlify.toml`**
```toml
[build]
  command = "npm run build"
  publish = ".next"

[[plugins]]
  package = "@netlify/plugin-nextjs"

[build.environment]
  NODE_VERSION = "18"
```

3. **Configure as variáveis de ambiente**
   - Acesse Site Settings > Environment Variables
   - Adicione todas as variáveis necessárias

### 3. Railway

Plataforma que oferece banco de dados PostgreSQL integrado.

#### Passo a Passo:

1. **Instale a CLI do Railway**
```bash
npm install -g @railway/cli
```

2. **Faça login**
```bash
railway login
```

3. **Inicialize o projeto**
```bash
railway init
```

4. **Configure o banco PostgreSQL**
```bash
railway add postgresql
```

5. **Deploy**
```bash
railway up
```

### 4. DigitalOcean App Platform

Solução robusta para aplicações em produção.

#### Passo a Passo:

1. **Crie um arquivo `.do/app.yaml`**
```yaml
name: portfolio-cangaty
services:
- name: web
  source_dir: /
  github:
    repo: seu-usuario/portfolio-cangaty
    branch: main
  run_command: npm start
  build_command: npm run build
  environment_slug: node-js
  instance_count: 1
  instance_size_slug: basic-xxs
  envs:
  - key: NODE_ENV
    value: production
  - key: DATABASE_URL
    value: ${db.DATABASE_URL}
databases:
- name: db
  engine: PG
  version: "13"
```

## 🗄️ Configuração do Banco de Dados

### PostgreSQL (Produção)

1. **Crie um banco PostgreSQL**
   - Supabase (gratuito): https://supabase.com
   - PlanetScale: https://planetscale.com
   - Railway: https://railway.app

2. **Configure a URL de conexão**
```env
DATABASE_URL="postgresql://user:password@host:port/database"
```

3. **Execute as migrações**
```bash
npx prisma db push
```

### SQLite (Desenvolvimento)

Para desenvolvimento local, você pode usar SQLite:

```env
DATABASE_URL="file:./dev.db"
```

## 🔐 Configuração de Autenticação

### GitHub OAuth

1. **Crie uma OAuth App no GitHub**
   - Vá em Settings > Developer settings > OAuth Apps
   - Clique em "New OAuth App"
   - Configure as URLs de callback

2. **Configure as variáveis**
```env
GITHUB_ID="seu_github_client_id"
GITHUB_SECRET="seu_github_client_secret"
```

### Google OAuth

1. **Crie um projeto no Google Cloud Console**
   - Ative a Google+ API
   - Configure as credenciais OAuth 2.0

2. **Configure as variáveis**
```env
GOOGLE_ID="seu_google_client_id"
GOOGLE_SECRET="seu_google_client_secret"
```

## 📧 Configuração de Email

Para o formulário de contato funcionar:

```env
SMTP_HOST="smtp.gmail.com"
SMTP_PORT="587"
SMTP_USER="seu-email@gmail.com"
SMTP_PASS="sua-senha-de-app"
```

## 🔧 Variáveis de Ambiente Completas

Crie um arquivo `.env.production` com:

```env
# Database
DATABASE_URL="sua_url_do_banco"

# NextAuth
NEXTAUTH_URL="https://seu-dominio.com"
NEXTAUTH_SECRET="uma_chave_secreta_muito_segura"

# OAuth Providers
GITHUB_ID="seu_github_id"
GITHUB_SECRET="seu_github_secret"
GOOGLE_ID="seu_google_id"
GOOGLE_SECRET="seu_google_secret"

# Email (opcional)
SMTP_HOST="smtp.gmail.com"
SMTP_PORT="587"
SMTP_USER="seu-email@gmail.com"
SMTP_PASS="sua-senha-de-app"

# Analytics (opcional)
GOOGLE_ANALYTICS_ID="GA_MEASUREMENT_ID"
```

## ✅ Checklist de Deploy

Antes de fazer o deploy final:

- [ ] Teste o build local: `npm run build && npm start`
- [ ] Verifique se todas as páginas carregam corretamente
- [ ] Teste a autenticação em ambiente de produção
- [ ] Verifique se o formulário de contato funciona
- [ ] Teste a IA DARK
- [ ] Confirme que o painel admin está protegido
- [ ] Verifique a responsividade em diferentes dispositivos
- [ ] Teste a performance com Lighthouse
- [ ] Configure monitoramento de erros (Sentry)

## 🚨 Troubleshooting

### Problemas Comuns:

1. **Erro de build do Prisma**
```bash
npx prisma generate
```

2. **Problemas de autenticação**
   - Verifique se as URLs de callback estão corretas
   - Confirme se as variáveis de ambiente estão definidas

3. **Erro de conexão com banco**
   - Verifique a string de conexão
   - Confirme se o banco está acessível

4. **Problemas de CSS/Tailwind**
```bash
npm run build
```

## 📊 Monitoramento

### Analytics
- Google Analytics 4
- Vercel Analytics
- Plausible (alternativa privacy-first)

### Error Tracking
- Sentry
- LogRocket
- Bugsnag

### Performance
- Vercel Speed Insights
- Core Web Vitals
- Lighthouse CI

## 🔄 CI/CD

Configure deploy automático com GitHub Actions:

```yaml
# .github/workflows/deploy.yml
name: Deploy to Production

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run build
      - run: npm run test
      - uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.ORG_ID }}
          vercel-project-id: ${{ secrets.PROJECT_ID }}
```

## 🎯 Otimizações Pós-Deploy

1. **Configure CDN** para assets estáticos
2. **Ative compressão** gzip/brotli
3. **Configure cache headers** apropriados
4. **Implemente Service Worker** para cache offline
5. **Configure domínio customizado** e SSL

---

🚀 **Pronto!** Seu portfólio está no ar e funcionando perfeitamente!

