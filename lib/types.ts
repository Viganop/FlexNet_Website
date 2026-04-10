export interface Plano {
  id: string;
  nome: string;
  velocidade: string;
  preco: number;
  beneficios: string[];
  destaque?: boolean;
  operadora: 'flexnet' | 'outra';
}

export interface Pilar {
  id: string;
  titulo: string;
  descricao: string;
  icone: string;
}

export interface Metrica {
  valor: string;
  label: string;
  sufixo?: string;
}

export interface Depoimento {
  id: string;
  nome: string;
  cidade: string;
  texto: string;
  avatar?: string;
  rating: number;
}

export interface FAQ {
  pergunta: string;
  resposta: string;
}

export interface Cidade {
  nome: string;
  cobertura: 'total' | 'parcial';
}
