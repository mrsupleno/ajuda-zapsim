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
            { label: 'O que é o ZapSim', link: '/introducao/o-que-e' },
            { label: 'Primeiro Acesso', link: '/introducao/primeiro-acesso' },
          ],
        },
        {
          label: 'API',
          items: [
            { label: 'Autenticação', link: '/api/autenticacao' },
            { label: 'Enviar Mensagens', link: '/api/mensagens' },
            { label: 'Gerenciar Tickets', link: '/api/tickets' },
            { label: 'Contatos', link: '/api/contatos' },
            { label: 'Referência Completa', link: '/api/referencia' },
          ],
        },
        {
          label: 'Suporte',
          items: [
            { label: 'Contato', link: '/suporte/contato' },
            { label: 'FAQ', link: '/suporte/faq' },
          ],
        },
      ],
      defaultLocale: 'pt-BR',
    }),
  ],
});
