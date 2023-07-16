/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useEffect } from 'react';
import toast from 'react-hot-toast';
import { Link, useNavigate, useParams } from 'react-router-dom';
import ReviewList from '../components/Reviews/ReviewList';
import AddTrackButton from '../components/Tracks/AddTrackButton';
import WishlistButton from '../components/Wishlist/WishlistButton';
import Error from '../components/ui/Error';
import Loader from '../components/ui/Loader';
import {
  useDeleteBookMutation,
  useGetBookQuery,
} from '../redux/features/book/bookApi';
import { useAppSelector } from '../redux/hooks';
import { IBook } from '../types/bookType';

function Book() {
  const { bookId } = useParams();
  const userId = useAppSelector((state) => state.auth.userId);
  const navigate = useNavigate();

  const { data: book, isLoading, isError } = useGetBookQuery(bookId!);
  const [
    deleteBook,
    { isSuccess, isLoading: deleteLoading, isError: deleteError },
  ] = useDeleteBookMutation();

  function handeleDeleteFunction() {
    if (confirm('Are you sure you want to delete this book?')) {
      deleteBook(bookId);
    }
  }

  useEffect(() => {
    if (isSuccess) {
      toast.success('Book deleted successfully');
      navigate('/all-books');
    }

    if (deleteError) {
      toast.error('Failed to delete book');
    }
  }, [isSuccess, navigate, deleteError]);

  const date = new Date(book?.data?.publicationYear);
  const formattedDate = date.toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

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

            {userId === book?.data?.addedBy?.id && (
              <div className="space-x-2">
                <Link
                  className="rounded-full bg-green-500 px-3 py-1 text-sm font-semibold uppercase tracking-wide text-green-50"
                  to={`/edit-book/${book?.data?.id}`}
                >
                  Edit
                </Link>
                <button
                  className="rounded-full bg-red-500 px-3 py-1 text-sm font-semibold uppercase tracking-wide text-red-50"
                  onClick={handeleDeleteFunction}
                  disabled={deleteLoading}
                >
                  {deleteLoading ? 'Deleteing book...' : 'Delete'}
                </button>
              </div>
            )}
          </div>

          {deleteError && (
            <Error message="There was an error deleting the book" />
          )}

          <div className="flex items-start gap-4 rounded-md bg-yellow-50 p-2 py-4">
            <img src={book?.data?.image} alt="book" className="h-40" />
            <div className="flex h-40 flex-col gap-0.5">
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
              <p>
                Publication Year:{' '}
                <span className="rounded-full bg-orange-200 px-2 text-sm tracking-wide">
                  {formattedDate}
                </span>
              </p>

              <p>
                Added by:{' '}
                <span className="rounded-full bg-green-200 px-2 text-sm tracking-wide">
                  {book?.data?.addedBy?.userName}
                </span>
              </p>
              <span className="mt-auto space-x-3">
                <WishlistButton id={book?.data?.id} />
                <AddTrackButton id={book?.data?.id} />
              </span>
            </div>
          </div>

          <div className="border-b border-t py-4">
            <h2 className="text-md font-medium text-stone-950">
              Books Summary:
            </h2>
            <p className="text-stone-800">{book?.data?.description}</p>
          </div>

          <ReviewList bookId={book?.data?.id} />
        </div>
      </div>
    );
  }

  return <>{content}</>;
}

export default Book;
