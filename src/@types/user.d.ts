export type UserIdData = number;

export interface NewUserData {
  username: string;
  email: string;
  password: string;
  avatar: string;
}

export interface UserData {
  id: UserIdData;
  username: string;
  email: string;
  password: string;
  avatar: string;
  createdAt: Date;
  updatedAt: Date;
}
