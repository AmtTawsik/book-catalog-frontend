export type IUser = {
  _id: string;
  userName: string;
  email: string;
  role: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
  id: string;
};

export type IReview = {
  _id: string;
  review: string;
  book: string;
  userId: IUser;
  createdAt: string;
  updatedAt: string;
  __v: number;
  id: string;
};
