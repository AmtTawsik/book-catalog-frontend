/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import BookLIst from '../components/BookLIst';
import Filter from '../components/Filter';
import SearchBook from '../components/SearchBook';
import Error from '../components/ui/Error';
import Loader from '../components/ui/Loader';
import { useGetBooksQuery } from '../redux/features/book/bookApi';
import { IBook } from '../types/bookType';

function AllBooks() {
  const {
    data: books,
    isLoading,
    isError,
  } = useGetBooksQuery({ page: 1, limit: 40 });

  let content = null;

  if (isLoading) content = <Loader />;
  if (!isLoading && isError) content = <Error message="There was an error" />;
  if (!isLoading && !isError && (books?.data as IBook[]).length === 0) {
    <Error message="No books found" />;
  }
  if (!isLoading && !isError && (books?.data as IBook[]).length > 0) {
    content = <BookLIst books={books?.data} />;
  }

  return (
    <main className="px-2 py-4">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b pb-4">
        <SearchBook />
        <Filter />
      </div>
      {content}
    </main>
  );
}

export default AllBooks;
