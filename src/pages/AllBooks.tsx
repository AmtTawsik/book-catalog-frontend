/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import BookLIst from '../components/Books/BookLIst';
import Filter from '../components/Filters/Filter';
import SearchBook from '../components/Filters/SearchBook';
import Error from '../components/ui/Error';
import Loader from '../components/ui/Loader';
import { useGetBooksQuery } from '../redux/features/book/bookApi';
import { useAppSelector } from '../redux/hooks';
import { IBook } from '../types/bookType';

function AllBooks() {
  const { genre, publicationYear, searchTerm } = useAppSelector(
    (state) => state.book
  );
  const {
    data: books,
    isLoading,
    isError,
  } = useGetBooksQuery({
    page: 1,
    limit: 100,
    genre,
    publicationYear,
    searchTerm,
  });

  let content = null;

  if (isLoading) content = <Loader />;
  if (!isLoading && isError)
    content = (
      <p className="mt-4 rounded-md bg-green-100 p-2 text-lg text-green-700">
        No book found with your query
      </p>
    );
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
