#!/bin/bash

cd /tmp/ajuda-zapsim

# Página index já existe, vamos sobrescrever
cat > src/content/docs/index.mdx << 'INDEXEOF'
---
title: Bem-vindo ao ZapSim
description: Central de Ajuda do Sistema de Atendimento Multicanal
template: splash
hero:
  tagline: Sistema de atendimento e automação multicanal focado em WhatsApp
  actions:
    - text: Começar agora
      link: /introducao/o-que-e/
      icon: right-arrow
      variant: primary
    - text: Ver documentação da API
      link: /api/autenticacao/
      icon: external
---

import { Card, CardGrid } from '@astrojs/starlight/components';

## Recursos Principais

<CardGrid stagger>
  <Card title="Atendimento Multicanal" icon="seti:html">
    Centralize WhatsApp, Instagram, Facebook Messenger e Telegram em uma única plataforma.
  </Card>
  <Card title="Chatbot Visual" icon="puzzle">
    Crie fluxos de automação com construtor visual intuitivo, sem código.
  </Card>
  <Card title="Integrações IA" icon="star">
    Conecte ChatGPT, Claude, Gemini e outras IAs para atendimento inteligente.
  </Card>
  <Card title="API Completa" icon="rocket">
    Integre com seus sistemas via API REST documentada.
  </Card>
</CardGrid>

## Como Usar Esta Documentação

Use a **barra de busca** no topo para encontrar rapidamente tópicos específicos, ou navegue pelas **categorias na barra lateral** organizadas por função.

**Precisa de ajuda?** [Entre em contato com o suporte](/suporte/contato/)
INDEXEOF

# Introdução
cat > src/content/docs/introducao/o-que-e.md << 'EOF'
---
title: O que é o ZapSim
description: Conheça a plataforma de atendimento multicanal
---

O **ZapSim** é uma plataforma SaaS de **atendimento multicanal** focada em WhatsApp que permite empresas centralizarem a comunicação de múltiplos canais em uma única interface.

## Principais Recursos

### Atendimento Multicanal
- **WhatsApp** (API Oficial e QR Code)
- **Instagram Direct**
- **Facebook Messenger**
- **Telegram**

### Automação Inteligente
- Chatbot visual com construtor de fluxo
- Integrações com IAs: ChatGPT, Claude, Gemini, Deepseek, Grok
- Webhooks e integrações com N8N, Typebot
- Automação de respostas e roteamento inteligente

### Gestão de Equipe
- Múltiplos atendentes
- Filas e setores departamentais
- Transferência de tickets
- Notas internas
- Perfis de acesso (Admin, Supervisor, Agente)

### CRM e Oportunidades
- Kanban de oportunidades
- Acompanhamento de pipeline de vendas
- Tags e segmentação de contatos
- Histórico completo de conversas

### API REST Completa
- Envio e recebimento de mensagens
- Gestão de tickets e contatos
- Automação de processos
- Integração com sistemas externos

## Para Quem é o ZapSim?

- **Empresas** que precisam gerenciar atendimento em escala
- **Equipes de suporte** com múltiplos atendentes
- **Times de vendas** que usam WhatsApp como canal principal
- **Desenvolvedores** que precisam integrar WhatsApp em seus sistemas

---

**Próximo passo:** [Configure seu primeiro acesso](/introducao/primeiro-acesso/)
EOF

cat > src/content/docs/introducao/primeiro-acesso.md << 'EOF'
---
title: Primeiro Acesso - Setup Rápido
description: Configure sua conta ZapSim em 5 passos
---

Este guia rápido te ajuda a configurar o ZapSim do zero.

## Passo 1: Acesso Inicial

Você receberá credenciais de acesso e URL do painel.

## Passo 2: Criar Usuário Admin (SuperAdmin)

:::note[Apenas para SuperAdmin]
Se você já recebeu credenciais de Admin, pule para o Passo 3.
:::

1. Acesse o painel com credenciais de SuperAdmin
2. Menu **Usuários** → **Adicionar**
3. Perfil: **Administrador**
4. Salvar

## Passo 3: Login como Admin

Saia do SuperAdmin e faça login com as credenciais de Admin.

## Passo 4: Adicionar e Conectar Canal WhatsApp

### Adicionar Canal

1. Menu **Canais** → **Adicionar Canal**
2. **Tipo:** WhatsApp Baileys (QR Code)
3. Salvar

### Conectar WhatsApp

1. Na lista de canais, clique em **"Novo QR Code"**
2. No celular:
   - WhatsApp → **Configurações** → **Aparelhos Conectados**
   - **Conectar Aparelho**
   - Escaneie o QR Code
3. Status mudará para **"Conexão estabelecida"** ✅

:::caution[Importante]
- Celular deve permanecer conectado à internet
- Não abra WhatsApp Web no navegador simultaneamente
- Mantenha o app aberto e celular carregando
:::

## Passo 5: Testar Atendimento

1. Menu **Atendimentos**
2. De outro celular, envie mensagem para o número conectado
3. Mensagem deve aparecer na caixa de atendimentos

---

**Próximos passos:**
- [Configure filas](/configuracao/filas/)
- [Adicione usuários](/configuracao/usuarios/)
- [Crie chatbot](/chatbot/construtor/)
EOF

# Suporte
cat > src/content/docs/suporte/contato.md << 'EOF'
---
title: Contato e Suporte
description: Entre em contato com a equipe ZapSim
---

## Canais de Suporte

### Email
📧 **suporte@zapsim.com**

Tempo de resposta: até 24 horas úteis

## Horário de Atendimento

- **Segunda a Sexta:** 9h às 18h (Brasília)
- **Sábados e Domingos:** Sem atendimento
EOF

cat > src/content/docs/suporte/faq.md << 'EOF'
---
title: Perguntas Frequentes
description: Dúvidas comuns sobre o ZapSim
---

## Conexão WhatsApp

### O QR Code não aparece

**Solução:**
- Verifique se o canal foi criado corretamente
- Recarregue a página
- Limpe o cache do navegador

### WhatsApp desconecta sozinho

**Causas comuns:**
- Celular sem internet
- Bateria do celular descarregou
- WhatsApp Web aberto em outro navegador
- App fechado no celular

**Solução:** Mantenha celular conectado, carregando, com app aberto.

## API

### Erro 401 Unauthorized

Token inválido ou expirado. Renovar no painel Admin → Configurações → API.

### Erro 404 Not Found

ApiID incorreto. Verificar no painel.

---

**Não encontrou sua dúvida?** [Entre em contato](/suporte/contato/)
EOF

echo "✅ Documentação criada com sucesso!"
