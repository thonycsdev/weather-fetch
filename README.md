This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# Weather Fetch

É um pequeno software desenvolvido pensando em praticidade e minimalismo. O aplicativo ao ser visitado em sua página web, irá solicitar a sua permissão para autorizar a busca da sua localização atual. Caso não apareça é possível pesquisar manualmente.

## Diferenciais do Projeto

O projeto dês da sua concepção foi criado utilizando TDD. São utilizadas 2 API's que juntas trazer todas as informações necessárias sobre a localização pesquisada.
Foi utilizado docker-compose para criar um ambiente de desenvolvimento estável para aplicação.

## Executando o Projeto

Primeiramente o projeto foi feito utilizando node na versão **19.8.1**. Após alterar ou instalar a verão do node. execute qualquer dos comandos abaixo para baixar as dependências.

```bash

npm install

# ou

yarn install

# ou

pnpm install
# ou

bun install

```

Abra o servidor utilizando qualquer um dos comandos acima, porém utilizando de **run dev**.

Abra: [http://localhost:3000](http://localhost:3000)
