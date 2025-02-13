export type PostIdData = number;

// todo : rajouter category
export interface NewPostData {
  title: string;
  content: string;
  image: string | null;
}

export interface PostData {
  id: PostIdData;
  title: string;
  content: string;
  image: string | null;
  createdAt: Date;
  updatedAt: Date;
}
