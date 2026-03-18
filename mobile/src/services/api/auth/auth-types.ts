export type AuthUser = {
  id: string;
  username: string;
  email: string;
};

export type SignInParams = {
  email: string;
  password: string;
};

export type SignUpParams = {
  username: string;
  email: string;
  password: string;
};

export type AuthResponse = {
  user: AuthUser;
  token: string;
};

export type UserMe = {
  id: string;
  username: string;
  email: string;
  createdAt: string;
};
