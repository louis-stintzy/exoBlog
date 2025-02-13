export type PostIdData = number;

// todo : rajouter category
export interface NewPostData {
  title: string;
  content: string;
  image: string;
}

export interface PostData {
  id: PostIdData;
  title: string;
  content: string;
  image: string;
  createdAt: Date;
  updatedAt: Date;
}
