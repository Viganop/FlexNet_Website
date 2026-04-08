# FlexNet Telecom — React + Vite

## Como rodar

```bash
# 1. Instalar dependências
npm install

# 2. Iniciar em modo desenvolvimento (abre em http://localhost:5173)
npm run dev

# 3. Gerar build de produção
npm run build

# 4. Visualizar o build localmente
npm run preview
```

## Estrutura

```
flexnet-telecom/
├── public/
│   └── hero-bg.jpg        ← imagem de fundo do hero
├── src/
│   ├── main.jsx           ← entrada da aplicação
│   ├── index.css          ← reset global
│   └── App.jsx            ← componente principal (site completo)
├── index.html             ← HTML raiz (padrão Vite)
├── vite.config.js
├── package.json
└── README.md
```

## Personalizações rápidas

| O que mudar | Onde |
|---|---|
| Preços dos planos | Array `todos` dentro do componente `Planos` em `App.jsx` |
| Número do WhatsApp | Buscar `wa.me/5516996356696` em `App.jsx` |
| Cidades atendidas | Componente `Navbar`, linha do banner |
| Imagem do hero | Substituir `public/hero-bg.jpg` |
