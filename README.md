# Zazuu Shop

Projeto full stack desenvolvido para gerenciamento de catálogo pet.

A aplicação foi dividida em duas partes:

- **backend**: API REST responsável por autenticação, produtos e categorias
- **mobile**: aplicativo React Native com Expo para consumo da API

---

## Visão geral do projeto

O objetivo do projeto é permitir que usuários autenticados consigam:

- criar conta
- fazer login
- manter sessão autenticada
- visualizar produtos
- filtrar produtos por nome, descrição e categoria
- cadastrar produtos
- editar produtos
- excluir produtos
- selecionar imagem do produto pela galeria do celular

---

## Estrutura do repositório

```text
zazuu-shop/
├── backend/
│   └── README.md
├── mobile/
│   └── README.md
└── README.md
```

## Tecnologias utilizadas

## Backend

Node.js

Express

TypeScript

Prisma ORM

PostgreSQL

Zod

JWT

BcryptJS

## ##Mobile

React Native

Expo

TypeScript

React Navigation

React Query

Axios

Zustand

Styled Components

Expo Image Picker

Expo Linear Gradient

React Native Toast Message

## O projeto é dividido em duas partes e o ideal é rodar primeiro o backend e depois o mobile.

## Rodando o backend

Entre na pasta do backend:

cd backend

instale as dependencias

pnpm install
ou se tiver usando npm

npm install

Crie o arquivo .env na pasta backend com este conteúdo:

DATABASE_URL="postgresql://zazuu:zazuu@localhost:5432/zazuu_shop"
JWT_SECRET="supersecret"
PORT=3333

gere o cliente do prisma:

npx prisma generate

rode as migrations:

npx prisma migrate dev

Suba a API:

pnpm dev

## Rodando o mobile

Abra outro terminal e entre na pasta do mobile:

cd mobile

Instale as dependências:

pnpm install

ou

npm install

Suba o projeto Expo:

npx expo start
Configuração da API no mobile

O arquivo responsável pela configuração da base da API é:

mobile/src/services/api.ts

Exemplo de configuração:

const IOS_URL = "http://localhost:3333";
const ANDROID_URL = "http://10.0.2.2:3333";

Importante

no iOS Simulator, normalmente localhost funciona

no Android Emulator, deve ser usado 10.0.2.2

em dispositivo físico, será necessário usar o IP da máquina na rede

Ordem correta para rodar

## A sequência recomendada é:

## Backend

cd backend
pnpm install
npx prisma generate
npx prisma migrate dev
pnpm dev

## Mobile

cd mobile
pnpm install
npx expo start
