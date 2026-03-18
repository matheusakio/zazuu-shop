export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl?: string | null;
  category: string;
  stock: number;
  ownerId: string;
  createdAt: string;
  updatedAt: string;
  owner: {
    id: string;
    username: string;
    email?: string;
  };
};

export type AuthResponse = {
  user: {
    id: string;
    username: string;
    email: string;
  };
  token: string;
};
