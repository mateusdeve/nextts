// types.ts

export interface User {
  login: string;
  id: number;
  avatar_url: string;
  // ... outros campos conforme a resposta da API do GitHub
}

export interface UsersProps {
  user?: any;
  userAgent?: string;
  ip?: string;
}
