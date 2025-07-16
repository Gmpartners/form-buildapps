# 🚀 BuildApps - Formulário de Contato

Um formulário moderno e elegante para captura de leads, desenvolvido com Next.js 14, Tailwind CSS e Supabase.

![BuildApps Preview](https://via.placeholder.com/800x400/000000/FFFFFF?text=BuildApps+Form)

## ✨ Características

- **Design Moderno**: Interface dark com animações suaves
- **Responsivo**: Otimizado para mobile e desktop
- **Multi-step Form**: Formulário em etapas para melhor UX
- **Validação**: Validação de formulário com Zod e React Hook Form
- **Backend**: Integração com Supabase para armazenamento
- **TypeScript**: Totalmente tipado

## 🛠️ Tecnologias

- [Next.js 14](https://nextjs.org/)
- [React 18](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Supabase](https://supabase.com/)
- [React Hook Form](https://react-hook-form.com/)
- [Zod](https://zod.dev/)
- [Lucide React](https://lucide.dev/)

## 🚀 Deploy Rápido

### Vercel (Recomendado)

1. **Fork este repositório**
2. **Vá para [Vercel](https://vercel.com)**
3. **Importe o projeto do GitHub**
4. **Configure as variáveis de ambiente** (veja abaixo)
5. **Deploy automático!**

### Variáveis de Ambiente

Copie `.env.example` para `.env.local` e preencha:

\`\`\`bash
NEXT_PUBLIC_SUPABASE_URL=sua_url_do_supabase
NEXT_PUBLIC_SUPABASE_ANON_KEY=sua_chave_anonima
SUPABASE_SERVICE_ROLE_KEY=sua_service_role_key
\`\`\`

## 📊 Configuração do Supabase

### 1. Criar Tabela

Execute no SQL Editor do Supabase:

\`\`\`sql
CREATE TABLE contatos (
  id BIGSERIAL PRIMARY KEY,
  nome TEXT NOT NULL,
  email TEXT,
  telefone TEXT NOT NULL,
  empresa TEXT,
  mensagem TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Habilitar RLS
ALTER TABLE contatos ENABLE ROW LEVEL SECURITY;

-- Política para inserção (permite inserir)
CREATE POLICY "Permite inserir contatos" ON contatos
  FOR INSERT WITH CHECK (true);

-- Política para leitura (apenas admin)
CREATE POLICY "Admin pode ler contatos" ON contatos
  FOR SELECT USING (auth.role() = 'authenticated');
\`\`\`

### 2. Configurar Realtime (Opcional)

Para atualizações em tempo real:

\`\`\`sql
ALTER PUBLICATION supabase_realtime ADD TABLE contatos;
\`\`\`

## 🏃‍♂️ Desenvolvimento Local

\`\`\`bash
# Clone o repositório
git clone https://github.com/Gmpartners/form-buildapps.git
cd form-buildapps

# Instale as dependências
npm install

# Configure as variáveis de ambiente
cp .env.example .env.local
# Edite .env.local com suas credenciais

# Execute em desenvolvimento
npm run dev
\`\`\`

Abra [http://localhost:3000](http://localhost:3000) no navegador.

## 📱 Recursos

### Mobile
- Layout otimizado para dispositivos móveis
- 4 áreas de especialidade: Dev, Design, Infra, Performance
- Formulário em 2 etapas
- Validação em tempo real

### Desktop
- Layout em duas colunas
- Animações suaves
- Efeitos hover nos elementos
- Design elegante e profissional

## 🎨 Personalização

### Cores
Edite `src/app/globals.css` para personalizar as cores:

\`\`\`css
:root {
  --primary: 221.2 83.2% 53.3%;
  --background: 0 0% 100%;
  /* ... */
}
\`\`\`

### Conteúdo
Edite `src/app/page.tsx` para alterar textos e conteúdo.

### Validação
Modifique `src/lib/validations.ts` para ajustar regras de validação.

## 🔧 Scripts Disponíveis

\`\`\`bash
npm run dev      # Desenvolvimento
npm run build    # Build para produção
npm run start    # Iniciar versão de produção
npm run lint     # Executar linting
\`\`\`

## 📈 Analytics

Para adicionar analytics, configure:

1. **Google Analytics**: Adicione o GA4 tracking ID
2. **Vercel Analytics**: Automático no deploy
3. **Supabase Analytics**: Disponível no dashboard

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch para sua feature (\`git checkout -b feature/AmazingFeature\`)
3. Commit suas mudanças (\`git commit -m 'Add some AmazingFeature'\`)
4. Push para a branch (\`git push origin feature/AmazingFeature\`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo \`LICENSE\` para mais detalhes.

## 🆘 Suporte

Para suporte, entre em contato através do formulário do próprio site ou abra uma issue no GitHub.

---

**Desenvolvido com ❤️ pela BuildApps**
