# Marielly • 15 Anos

Landing page do convite para os 15 anos da Marielly (08/08, Cerimonial do Porto — Piúma/ES).

Baseado no design do Figma Make em [`project/`](project/).

## Requisitos

- Node.js 18+
- npm, pnpm ou yarn

## Instalação

```bash
npm install
```

## Google Maps

A seção de localização usa o Google Maps JavaScript API com estilo roxo customizado. Para habilitá-la:

1. Crie uma chave em <https://console.cloud.google.com/>.
2. Habilite **Maps JavaScript API** e **Geocoding API**.
3. Copie `.env.example` para `.env.local` e cole a chave:

   ```bash
   cp .env.example .env.local
   ```

   ```
   VITE_GOOGLE_MAPS_API_KEY=sua_chave_aqui
   ```

Sem a chave, o mapa é substituído por um placeholder estilizado.

## Rodando

```bash
npm run dev       # dev server
npm run build     # build de produção
npm run preview   # servir o build
```

## RSVP

Confirmações pelo WhatsApp **+55 27 99847-7850**.
