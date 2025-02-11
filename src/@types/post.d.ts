export type PostIdData = number;

// todo : rajouter category
export type NewPostData = {
  title: string;
  content: string;
  image: string;
};

export type PostData = {
  id: PostIdData;
  title: string;
  content: string;
  image: string;
  createdAt: Date;
  updatedAt: Date;
};
