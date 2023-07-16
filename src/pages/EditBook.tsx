/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-floating-promises */

import { useParams } from 'react-router-dom';
import EditForm from '../components/ui/EditForm';
import Error from '../components/ui/Error';
import Loader from '../components/ui/Loader';
import { useGetBookQuery } from '../redux/features/book/bookApi';
import { IBook } from '../types/bookType';

function EditBook() {
  const { bookId } = useParams();

  const { data: book, isLoading, isError } = useGetBookQuery(bookId!);

  let content = null;

  if (isLoading) content = <Loader />;
  if (!isLoading && isError)
    content = <Error message="Failed to load the book data" />;
  if (!isLoading && !isError && (book?.data as IBook)?.id) {
    content = (
      <div className="flex h-full w-full items-center justify-center px-4 py-6">
        <div className="w-full rounded-md bg-yellow-50 p-6">
          <h2 className="mb-8 text-2xl font-semibold">
            Want to Edit the book?
          </h2>

          <EditForm book={book?.data} />
        </div>
      </div>
    );
  }

  return <>{content}</>;
}

export default EditBook;
