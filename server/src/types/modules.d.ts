export type SeedType = {
  id: number;
  label: string;
  description: string;
  image?: string;
  category_id?: number;
  user_id?: number;
};

export type UserType = {
  id: number;
  username: string;
  email: string;
  password: string;
  role_id: number;
};
