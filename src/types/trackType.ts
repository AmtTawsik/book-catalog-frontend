export type ITrackItem = {
  _id: string;
  book: {
    description: string;
    _id: string;
    title: string;
    author: string;
    genre: string;
    publicationYear: string;
    image: string;
    addedBy: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
    id: string;
  };
  user: {
    _id: string;
    userName: string;
    email: string;
    role: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
    id: string;
  };
  status: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
  id: string;
};
