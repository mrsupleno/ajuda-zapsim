// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: 'Ajuda ZapSim',
      description: 'Documentação completa da plataforma ZapSim — atendimento multicanal WhatsApp',
      logo: {
        src: './src/assets/zapsim-logo.png',
        replacesTitle: true,
      },
      favicon: '/favicon.svg',
      customCss: ['./src/styles/custom.css'],
      social: [
        { icon: 'github', label: 'GitHub', href: 'https://github.com/mrsupleno/ajuda-zapsim' },
        { icon: 'envelope', label: 'Suporte', href: 'mailto:suporte@zapsim.com' },
        { icon: 'external', label: 'Site', href: 'https://zapsim.app' },
      ],
      sidebar: [
        {
          label: 'Comece Aqui',
          items: [
            { label: 'Introdução', slug: 'introducao' },
            { label: 'Primeiro Acesso', slug: 'primeiro-acesso' },
          ],
        },
        {
          label: 'API REST',
          items: [
            { label: 'Autenticação', slug: 'api/autenticacao' },
            { label: 'Mensagens', slug: 'api/mensagens' },
            { label: 'Mensagens em Grupo', slug: 'api/mensagens-grupo' },
            { label: 'Templates WABA', slug: 'api/templates-waba' },
            { label: 'WABA Interativo', slug: 'api/waba-interativo' },
            { label: 'Tickets', slug: 'api/tickets' },
            { label: 'Contatos', slug: 'api/contatos' },
            { label: 'Usuários', slug: 'api/usuarios' },
            { label: 'Oportunidades', slug: 'api/oportunidades' },
            { label: 'Listagens', slug: 'api/listagens' },
            { label: 'Canais e Sessões', slug: 'api/canais-sessoes' },
            { label: 'API SuperAdmin', slug: 'api/superadmin' },
          ],
        },
        {
          label: 'Canais',
          items: [
            { label: 'Conexão WhatsApp', slug: 'canais/conexao-whatsapp' },
          ],
        },
        {
          label: 'Automações',
          items: [
            { label: 'Chatbot Nativo', slug: 'automacoes/chatbot' },
            { label: 'Integração N8N', slug: 'automacoes/n8n' },
            { label: 'Integração IA', slug: 'automacoes/ia' },
            { label: 'Webhooks', slug: 'automacoes/webhooks' },
          ],
        },
        {
          label: 'Operações',
          items: [
            { label: 'Campanhas', slug: 'operacoes/campanhas' },
            { label: 'Filas e Organização', slug: 'operacoes/filas' },
          ],
        },
        {
          label: 'Referência',
          items: [
            { label: 'Dicas e Erros Comuns', slug: 'referencia/dicas-erros' },
            { label: 'Referência Rápida', slug: 'referencia/referencia-rapida' },
          ],
        },
      ],
      footer: {
        links: [
          { title: 'Site', links: [{ label: 'zapsim.app', href: 'https://zapsim.app' }] },
          { title: 'Suporte', links: [{ label: 'suporte@zapsim.com', href: 'mailto:suporte@zapsim.com' }] },
        ],
        copyright: `© ${new Date().getFullYear()} ZapSim. Todos os direitos reservados.`,
      },
    }),
  ],
});
