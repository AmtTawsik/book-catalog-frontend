/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useParams } from 'react-router-dom';
import Review from '../components/Review';
import Error from '../components/ui/Error';
import LinkButton from '../components/ui/LinkButton';
import Loader from '../components/ui/Loader';
import { useGetBookQuery } from '../redux/features/book/bookApi';
import { IBook } from '../types/bookType';

function Book() {
  const { bookId } = useParams();

  const { data: book, isLoading, isError } = useGetBookQuery(bookId!);

  let content = null;

  if (isLoading) content = <Loader />;
  if (!isLoading && isError) content = <Error message="There was an error" />;

  if (!isLoading && !isError && (book?.data as IBook)?.id) {
    content = (
      <div>
        {' '}
        <div className="space-y-8 px-4 py-6">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <h2 className="text-xl font-semibold">Book Details</h2>

            <div className="space-x-2">
              <span className="rounded-full bg-green-500 px-3 py-1 text-sm font-semibold uppercase tracking-wide text-green-50">
                Edit
              </span>
              <span className="rounded-full bg-red-500 px-3 py-1 text-sm font-semibold uppercase tracking-wide text-red-50">
                Delete
              </span>
            </div>
          </div>

          <div className="flex items-start gap-4 rounded-md bg-yellow-50 p-2 py-2">
            <img
              src={book?.data?.image}
              alt="book"
              className="h-36 object-cover"
            />
            <div className="flex h-36 flex-col gap-0.5">
              <p className="text-lg font-medium">{book?.data?.title}</p>
              <p className="text-sm capitalize italic text-stone-500">
                Author: {book?.data?.author}
              </p>
              <p>
                Genre:{' '}
                <span className="rounded-full bg-yellow-200 px-2 text-sm tracking-wide">
                  {book?.data?.genre}
                </span>
              </p>
              <p>Publication Year: {book?.data?.publicationYear}</p>
              <span className="mt-auto space-x-2">
                <LinkButton to="">Add to wishlist</LinkButton>
                <LinkButton to="">Add to track list</LinkButton>
              </span>
            </div>
          </div>

          <div className="border-b border-t py-4">
            <h2 className="text-md font-medium text-stone-950">
              Books Summary:
            </h2>
            <p className="text-stone-800">
              {book?.data?.description
                ? book?.data?.description
                : 'Will added soon'}
            </p>
          </div>

          <div className="">
            <h2 className="text-md font-medium text-stone-950">
              Books Reviews:
            </h2>
            <ul className="divide-y divide-stone-200 py-2">
              <Review />
              <Review />
              <Review />
              <Review />
              <Review />
              <Review />
            </ul>
          </div>
        </div>
      </div>
    );
  }

  return <>{content}</>;
}

export default Book;
