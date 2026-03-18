# Mobile - Zazuu Shop

Aplicativo mobile desenvolvido em React Native com Expo para gerenciamento de catálogo pet.

O app consome a API do projeto e oferece uma experiência visual moderna para cadastro, listagem, edição e exclusão de produtos.

---

## Objetivo do app

O aplicativo foi construído para permitir que usuários autenticados consigam:

- criar conta
- fazer login
- manter a sessão salva
- visualizar produtos
- filtrar produtos por busca e categoria
- cadastrar produtos
- editar produtos
- excluir produtos
- selecionar imagem do produto pela galeria do celular

---

## Tecnologias utilizadas

- **React Native**
- **Expo**
- **TypeScript**
- **React Navigation**
- **React Query**
- **Styled Components**
- **Axios**
- **Zustand**
- **Expo Image Picker**
- **React Native Toast Message**
- **Expo Linear Gradient**
- **React Native Gesture Handler**

---

## Estrutura do projeto

```text
src/
├── components/
│   ├── brand/
│   │   └── brand-mark.tsx
│   ├── page/
│   │   ├── index.tsx
│   │   ├── page-header.tsx
│   │   └── page-header-with-title.tsx
│   ├── product/
│   │   ├── product-card/
│   │   └── swipeable-product-card/
│   └── ui/
│       ├── button/
│       ├── chip/
│       ├── empty-state/
│       ├── fab/
│       ├── image-picker-field/
│       ├── input/
│       ├── loading/
│       └── select/
├── hooks/
│   ├── auth/
│   └── products/
├── navigation/
│   ├── app-stack.tsx
│   ├── app-tabs.tsx
│   ├── auth-stack.tsx
│   └── index.tsx
├── screens/
│   ├── app/
│   │   ├── create-product/
│   │   ├── edit-product/
│   │   ├── home/
│   │   ├── product-details/
│   │   └── profile/
│   ├── auth/
│   │   ├── login/
│   │   └── register/
│   └── splash/
├── services/
│   ├── api.ts
│   └── api/
│       ├── auth/
│       └── products/
├── store/
│   └── auth-store.ts
├── theme/
│   ├── colors.ts
│   └── index.ts
├── types/
├── utils/
│   ├── formatters.ts
│   └── toast.ts
└── App.tsx
```
