# Backend - Zazuu Shop

API REST responsável por autenticação de usuários, gerenciamento de produtos e fornecimento de categorias para o aplicativo mobile.

Este backend foi construído com foco em organização, clareza de código e facilidade de manutenção, seguindo uma separação simples por camadas: rotas, controllers, middlewares, constantes e acesso ao banco via Prisma.

---

## Objetivo do backend

O backend do projeto tem como responsabilidade:

- cadastrar usuários
- autenticar usuários com JWT
- retornar os dados do usuário autenticado
- listar categorias disponíveis para produtos
- criar produtos
- listar produtos
- buscar produto por id
- editar produtos
- excluir produtos
- filtrar produtos por busca e categoria

---

## Tecnologias utilizadas

- **Node.js**
- **Express**
- **TypeScript**
- **Prisma ORM**
- **PostgreSQL**
- **Zod**
- **JWT**
- **BcryptJS**

---

## Arquitetura e organização

A estrutura foi pensada para separar responsabilidades e facilitar evolução futura.

```text
src/
├── constants/
│   └── product-categories.ts
├── controllers/
│   ├── auth.controller.ts
│   └── products.controller.ts
├── generated/
│   └── prisma/
├── lib/
│   └── prisma.ts
├── middlewares/
│   └── auth.middleware.ts
├── routes/
│   ├── auth.routes.ts
│   ├── products.routes.ts
│   └── index.ts
├── types/
│   └── express.d.ts
├── app.ts
└── server.ts
```
