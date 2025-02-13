export type UserIdData = number;

export interface NewUserData {
  username: string;
  email: string;
  password: string;
  avatar: string | null;
}

export interface UserData {
  id: UserIdData;
  username: string;
  email: string;
  password: string;
  avatar: string | null;
  createdAt: Date;
  updatedAt: Date;
}
