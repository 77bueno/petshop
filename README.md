# PetShop: projeto Next.js

## Branch 21-transformando-o-app-next-em-pwa

**PWA** significa **Progressive Web Application** (Aplicativo Web Progressivo). Trata-se de uma abordagem para desenvolvimento de aplicativos web que visa combinar características de sites e aplicativos móveis. As PWAs são construídas com tecnologias web tradicionais (HTML5, CSS e JavaScript) e oferecem uma experiência semelhante à de aplicativos nativos, podendo até mesmo serem instaladas no dispositivo móvel.

### Requisitos para uma PWA

1. Arquivo de manifesto

Arquivo chamado `manifest.json` com informações gerais sobre o aplicativo: nome, descrição, ícones, cores etc.

No caso do Next.js, este arquivo deve ser colocado na pasta `public` e adicionado via `meta tag` na página `_document.js`.

2. Criar/Configurar um Service Worker (JavaScript)

`Service Worker` é um script que o navegador executa em segundo plano, de forma independente da interface ou de interações do usuário. Ele permite usar recursos que transformam a aplicação em PWA, como instalação/desinstalação, cache offline, notificações etc. No caso do Next.js, o Service Worker será criado/configurado automaticamente com o auxílio da lib `next-pwa` e com ajustes no `next.config.js`.

3. Publicação em servidor com suporte à HTTPS


## Branch 19-migração-api-fake-para-firebase-json

### Firebase: https://firebase.google.com/

Firebase é uma plataforma de serviços web (Web Services) com uma série de funcionalidades de Back-End úteis para aplicações (web, apps, jogos).

No caso do PetShop, criamos um projeto Firebase e nele adicionamos um banco de dados chamado **Firebase RealTime Database** para utilização como API JSON.

O RealTime Database é um banco de dados `NoSQL`, ou seja, um banco de dados **não-relacional**. Ele é baseado em documentos no formato JSON contendo objetos de dados.

### Lembrete sobre uso de APIs

Como se trata de uma API JSON, podemos utilizar qualquer um dos 
verbos HTTP para consumo de APIs no padrão REST: 

- GET: ler, obter dados
- POST: criar, inserir
- PUT: atualizar tudo
- PATCH: atualizar parcialmente
- DELETE: excluir


## Branch 14-usando-rotas-dinâmicas-para-abrir-post

### Recursos necessários

- Pages/Rotas **dinâmicas** utilizando subpasta (posts) e arquivo nomeado com **colchetes** indicando o nome(s) do(s) parâmetros. No caso, foi criado o `[id].jsx`.

- `getStaticProps`: necessário para carregar os dados da API de acordo com o parâmetro (usando a prop `{params}`) e gerar o HTML via SSR.

- `getStaticPaths`: necessário para gerar os caminhos dinâmicos no momento do acesso à página.

## Branch 13-consumindo-dados-usando-modo-Next

### Documentação oficial sobre SSR:

https://nextjs.org/docs/pages/building-your-application/data-fetching

### Resumo sobre as funções

`getStaticProps`: executada no lado do servidor (SSR - Server Side Rendering), portanto logs, erros, lógicas, ações/comandos NÃO aparecem para o usuário (mas aparecem no terminal para o programador(a)).

Na maioria dos casos usaremos `getStaticProps` para este tipo de processamento em que os dados são consumidos (Data Fetching) através da uma API, já que esta função tem uma perfomance melhor por fazer o processamento apenas no momento da requisição.

Também há a função `getServerSideProps` que pode ser útil para páginas cujos dados mudam frequentemente ou são diferentes para cada usuário (como no caso de uso de dados de geolocalização).

## Branch 11-usando-json-server-como-fake-api

### Etapas (Faça tudo usando o Node.js Command Prompt)

1. Instalação global do `json-server`: `npm install -g json-server`
2. Colocação do arquivo `db.json` na raiz do projeto (este arquivo funcionará como um banco de dados para a API)
3. Pegar o IP da máquina usando `ipconfig`
4. Criar um script npm no `package.json` com a seguinte configuração:

`"api": "json-server --host IP.DA.SUA.MAQUINA db.json --port NÚMERO"`

5. Executar a API usando `npm run api`

## Branch 05

### IMPORTANTE!

Após instalar o `styled-components`, ative o suporte à compilação dele pelo Next.js modificando o arquivo `next.config.js`:

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    // adicione estas linhas
    styledComponents: true, // adicione estas linhas
  }, // adicione estas linhas
};

module.exports = nextConfig;
```

## Recursos utilizados

- Next.js
- API Fake/Local
- API via Firebase Realtime Database
- Componentes
- Rotas
- Map, Filter
- Manipulação de formulário
- Publicação na Vercel e na Netlify