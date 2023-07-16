export type IBook = {
  _id?: string;
  title: string;
  author: string;
  genre: string;
  publicationYear: string;
  image: string;
  addedBy?: {
    _id?: string;
    userName: string;
    email: string;
    role: string;
    createdAt?: string;
    updatedAt?: string;
    __v?: number;
    id?: string;
  };
  description?: string;
  createdAt?: string;
  updatedAt?: string;
  __v?: number;
  id?: string;
};
