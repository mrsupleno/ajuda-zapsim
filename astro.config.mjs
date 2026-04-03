import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://ajuda.zapsim.com',
  integrations: [
    starlight({
      title: 'ZapSim',
      description: 'Central de Ajuda - Sistema de Atendimento Multicanal',
      customCss: [
        './src/styles/custom.css',
      ],
      sidebar: [
        {
          label: 'Início',
          items: [
            { label: 'Bem-vindo', link: '/' },
            { label: 'Primeiro Acesso', link: '/primeiro-acesso' },
          ],
        },
        {
          label: 'API',
          items: [
            { label: 'Autenticação', link: '/api/autenticacao' },
            { label: 'Enviar Mensagens', link: '/api/mensagens' },
            { label: 'Gerenciar Tickets', link: '/api/tickets' },
            { label: 'Contatos', link: '/api/contatos' },
            { label: 'Canais e Sessões', link: '/api/canais-sessoes' },
            { label: 'Usuários', link: '/api/usuarios' },
            { label: 'WABA Interativo', link: '/api/waba-interativo' },
            { label: 'Templates WABA', link: '/api/templates-waba' },
          ],
        },
        {
          label: 'Automações',
          items: [
            { label: 'Chatbot', link: '/automacoes/chatbot' },
            { label: 'Integração IA', link: '/automacoes/ia' },
            { label: 'Webhooks', link: '/automacoes/webhooks' },
            { label: 'Integração n8n', link: '/automacoes/n8n' },
          ],
        },
        {
          label: 'Operações',
          items: [
            { label: 'Campanhas', link: '/operacoes/campanhas' },
            { label: 'Filas', link: '/operacoes/filas' },
          ],
        },
        {
          label: 'Canais',
          items: [
            { label: 'Conexão WhatsApp', link: '/canais/conexao-whatsapp' },
          ],
        },
        {
          label: 'Referência',
          items: [
            { label: 'Referência Rápida', link: '/referencia/referencia-rapida' },
            { label: 'Dicas e Erros', link: '/referencia/dicas-erros' },
          ],
        },
      ],
      defaultLocale: 'pt-BR',
    }),
  ],
});
