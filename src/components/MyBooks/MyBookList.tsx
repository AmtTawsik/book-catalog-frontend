/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useEffect, useState } from 'react';
import { useGetBooksQuery } from '../../redux/features/book/bookApi';
import { useAppSelector } from '../../redux/hooks';
import { IBook } from '../../types/bookType';
import Loader from '../ui/Loader';
import MyBookItem from './MyBookItem';

function MyBookList() {
  const user = useAppSelector((state) => state.auth.email);
  const { data: books, isLoading, isError } = useGetBooksQuery({});

  const [myBooks, setMybooks] = useState<IBook[]>([]);

  useEffect(() => {
    if (books) {
      const filteredBooks = (books?.data as IBook[]).filter(
        (book) => book.addedBy?.email === user
      );
      setMybooks(filteredBooks);
    }
  }, [books, user]);

  let content = null;

  if (isLoading) content = <Loader />;
  if (!isLoading && isError)
    content = (
      <p className="mt-4 rounded-md bg-red-100 p-2 text-lg text-red-700">
        No books found added by you!
      </p>
    );
  if (!isLoading && !isError && myBooks.length === 0) {
    content = (
      <p className="mt-4 rounded-md bg-red-100 p-2 text-lg text-red-700">
        No books found added by you!
      </p>
    );
  }
  if (!isLoading && !isError && myBooks.length > 0) {
    content = myBooks.map((book) => <MyBookItem book={book} key={book.id} />);
  }
  return (
    <ul className="mt-6 grid grid-cols-1 gap-4 px-2 md:grid-cols-2">
      {content}
    </ul>
  );
}

export default MyBookList;
