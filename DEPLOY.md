# 🚀 GUIA DE DEPLOY NO VERCEL

## Passo a Passo para Deploy

### 1. Acesse o Vercel
- Vá para [vercel.com](https://vercel.com)
- Faça login com sua conta GitHub

### 2. Importe o Projeto
- Clique em **"New Project"**
- Selecione **"Import Git Repository"**
- Escolha o repositório: `Gmpartners/form-buildapps`
- Clique em **"Import"**

### 3. Configure as Variáveis de Ambiente
**IMPORTANTE:** Antes de fazer deploy, adicione estas variáveis:

#### Environment Variables:
```
NEXT_PUBLIC_SUPABASE_URL = https://rkkraspaypqyzllcnfes.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJra3Jhc3BheXBxeXpsbGNuZmVzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTI3MDEwMTAsImV4cCI6MjA2ODI3NzAxMH0.8aeZf4D2eqYdUbR57pUgB_WXe0DW9GtEQtafMXYStV4
SUPABASE_SERVICE_ROLE_KEY = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJra3Jhc3BheXBxeXpsbGNuZmVzIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc1MjcwMTAxMCwiZXhwIjoyMDY4Mjc3MDEwfQ.sKyOwhQkuC7Bmk4Nxcura_XQiciqSbI1gY0492Im2tM
```

### 4. Deploy
- Clique em **"Deploy"**
- Aguarde o build completar (2-3 minutos)
- ✅ Seu site estará live!

### 5. Configurações Opcionais

#### Custom Domain:
- Vá em **Settings > Domains**
- Adicione seu domínio personalizado

#### Analytics:
- Vercel Analytics é automático
- Ou configure Google Analytics no código

### 6. Verificar Funcionamento

Teste se está funcionando:
1. ✅ Site carrega
2. ✅ Formulário aparece
3. ✅ Consegue preencher e enviar
4. ✅ Dados salvam no Supabase

---

## 🔧 Troubleshooting

### Build Error?
- Verificar se as variáveis de ambiente estão corretas
- Verificar se o Supabase está ativo

### Formulário não funciona?
- Verificar conexão com Supabase
- Verificar se a tabela `contatos` existe
- Verificar RLS policies

### Suporte
Entre em contato se precisar de ajuda!
