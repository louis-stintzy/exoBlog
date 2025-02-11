export type UserIdData = number;

export type NewUserData = {
  username: string;
  email: string;
  password: string;
  avatar: string;
};

export type UserData = {
  id: UserIdData;
  username: string;
  email: string;
  password: string;
  avatar: string;
  createdAt: Date;
  updatedAt: Date;
};
