/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import BookLIst from '../components/BookLIst';
import Error from '../components/ui/Error';
import Loader from '../components/ui/Loader';
import { useGetBooksQuery } from '../redux/features/book/bookApi';
import { IBook } from '../types/bookType';

function Home() {
  const {
    data: books,
    isLoading,
    isError,
  } = useGetBooksQuery({ page: 1, limit: 10 });

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
    <div className="px-2 py-4">
      <div className="rounded-md bg-yellow-50 p-8">
        <blockquote className="text-2xl font-bold text-stone-600">
          "Reality doesn’t always give us the life that we desire, but we can
          always find what we desire between the pages of books."
        </blockquote>
        <span className="mt-2 block text-base font-medium italic text-stone-700">
          -- Adelise M. Cullens
        </span>
      </div>
      {content}
    </div>
  );
}

export default Home;
