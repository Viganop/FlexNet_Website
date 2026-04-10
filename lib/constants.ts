import { Plano, Pilar, Metrica, Depoimento, FAQ, Cidade } from './types';

export const WHATSAPP_NUMBER = '5516999999999';
export const EMAIL = 'contato@flexnet.com.br';

export const NAV_LINKS = [
  { label: 'Início', href: '#inicio' },
  { label: 'Planos', href: '#planos' },
  { label: 'Vantagens', href: '#vantagens' },
  { label: 'Cobertura', href: '#cobertura' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contato', href: '#contato' },
];

export const METRICAS: Metrica[] = [
  { valor: '2.000', label: 'Clientes satisfeitos', sufixo: '+' },
  { valor: '99.9', label: 'Uptime garantido', sufixo: '%' },
  { valor: '24', label: 'Suporte disponível', sufixo: '/7' },
  { valor: '3', label: 'Cidades atendidas', sufixo: '' },
];

export const PILARES: Pilar[] = [
  {
    id: '1',
    titulo: 'Velocidade Real',
    descricao: 'Entregamos a velocidade contratada. Sem surpresas, sem limites escondidos.',
    icone: 'zap',
  },
  {
    id: '2',
    titulo: 'Estabilidade Total',
    descricao: 'Fibra óptica 100% dedicada para sua conexão. Sem oscilações.',
    icone: 'shield',
  },
  {
    id: '3',
    titulo: 'Suporte Humanizado',
    descricao: 'Atendimento real, 24 horas por dia, 7 dias por semana. Sem robôs.',
    icone: 'headphones',
  },
  {
    id: '4',
    titulo: 'Sem Fidelidade',
    descricao: 'Você fica porque quer, não porque precisa. Sem multas, sem amarras.',
    icone: 'unlock',
  },
];

export const PLANOS: Plano[] = [
  {
    id: '1',
    nome: 'Start',
    velocidade: '200',
    preco: 79.90,
    beneficios: [
      'Download 200 Mbps',
      'Upload 100 Mbps',
      'Wi-Fi 5 incluso',
      'Instalação grátis',
    ],
    operadora: 'flexnet',
  },
  {
    id: '2',
    nome: 'Turbo',
    velocidade: '400',
    preco: 99.90,
    beneficios: [
      'Download 400 Mbps',
      'Upload 200 Mbps',
      'Wi-Fi 6 incluso',
      'Instalação grátis',
      'IP Fixo opcional',
    ],
    destaque: true,
    operadora: 'flexnet',
  },
  {
    id: '3',
    nome: 'Ultra',
    velocidade: '600',
    preco: 129.90,
    beneficios: [
      'Download 600 Mbps',
      'Upload 300 Mbps',
      'Wi-Fi 6 incluso',
      'Instalação grátis',
      'IP Fixo incluso',
    ],
    operadora: 'flexnet',
  },
  {
    id: '4',
    nome: 'Giga',
    velocidade: '1000',
    preco: 179.90,
    beneficios: [
      'Download 1 Gbps',
      'Upload 500 Mbps',
      'Wi-Fi 6E incluso',
      'Instalação prioritária',
      'IP Fixo incluso',
      'Suporte VIP',
    ],
    operadora: 'flexnet',
  },
];

export const PASSOS = [
  {
    numero: '01',
    titulo: 'Escolha seu plano',
    descricao: 'Selecione o plano ideal para sua necessidade de velocidade.',
  },
  {
    numero: '02',
    titulo: 'Agende a instalação',
    descricao: 'Nossa equipe entra em contato para agendar o melhor horário.',
  },
  {
    numero: '03',
    titulo: 'Navegue sem limites',
    descricao: 'Instalação rápida e você já sai conectado no mesmo dia.',
  },
];

export const DEPOIMENTOS: Depoimento[] = [
  {
    id: '1',
    nome: 'Carlos Silva',
    cidade: 'São Carlos',
    texto: 'Melhor internet que já tive! Trabalho de home office e nunca mais tive problemas com reuniões. Suporte sempre atencioso.',
    rating: 5,
  },
  {
    id: '2',
    nome: 'Marina Santos',
    cidade: 'Araraquara',
    texto: 'Finalmente uma internet que entrega o que promete. Meus filhos jogam online enquanto trabalho e ninguém reclama.',
    rating: 5,
  },
  {
    id: '3',
    nome: 'Roberto Oliveira',
    cidade: 'Ibaté',
    texto: 'Troquei de operadora e não me arrependo. A estabilidade da conexão é impressionante, mesmo em horários de pico.',
    rating: 5,
  },
  {
    id: '4',
    nome: 'Ana Paula Costa',
    cidade: 'São Carlos',
    texto: 'O atendimento é diferenciado. Tive um problema e resolveram em menos de 2 horas. Isso sim é compromisso com o cliente.',
    rating: 5,
  },
];

export const FAQS: FAQ[] = [
  {
    pergunta: 'Qual a diferença entre download e upload?',
    resposta: 'Download é a velocidade para receber dados (assistir vídeos, baixar arquivos), enquanto upload é a velocidade para enviar dados (videoconferências, enviar arquivos para nuvem). Ambos são importantes dependendo do seu uso.',
  },
  {
    pergunta: 'A instalação é realmente gratuita?',
    resposta: 'Sim! A instalação padrão é 100% gratuita, incluindo até 30 metros de cabo. Casos especiais que exijam mais infraestrutura são avaliados individualmente.',
  },
  {
    pergunta: 'Posso usar meu próprio roteador?',
    resposta: 'Sim, você pode usar seu próprio equipamento. Porém, recomendamos nossos roteadores Wi-Fi 6 que já vêm configurados e otimizados para melhor desempenho.',
  },
  {
    pergunta: 'Existe limite de consumo de dados?',
    resposta: 'Não! Todos os nossos planos são ilimitados. Use o quanto quiser, sem surpresas na fatura ou redução de velocidade.',
  },
  {
    pergunta: 'Como funciona o suporte 24h?',
    resposta: 'Nosso suporte está disponível por WhatsApp, telefone e chat 24 horas por dia, 7 dias por semana, incluindo feriados. Atendimento humano, sem robôs.',
  },
  {
    pergunta: 'Tem multa por cancelamento?',
    resposta: 'Não! Não trabalhamos com fidelidade. Você pode cancelar quando quiser, sem multas ou taxas adicionais.',
  },
];

export const CIDADES: Cidade[] = [
  { nome: 'São Carlos', cobertura: 'total' },
  { nome: 'Ibaté', cobertura: 'total' },
  { nome: 'Araraquara', cobertura: 'parcial' },
];
