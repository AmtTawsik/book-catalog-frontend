/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useEffect } from 'react';
import toast from 'react-hot-toast';
import { useDeleteWishlistMutation } from '../../redux/features/wishlist/wishlistApi';
import { IWishlistItem } from '../../types/wishitemType';
import LinkButton from '../ui/LinkButton';

function WishlistBookItem({ item }: { item: IWishlistItem }) {
  const { image, id, title, author, genre, publicationYear } = item.book;

  const [deleteWishlist, { isSuccess, isLoading, isError }] =
    useDeleteWishlistMutation();

  useEffect(() => {
    if (isSuccess) toast.success('Book deleted from your wish list');
    if (isError)
      toast.error('There was an error delete this book to your wishlist');
  }, [isSuccess, isError]);

  function handeleDeleteFunction() {
    if (item.id) deleteWishlist(item.id);
  }

  const date = new Date(publicationYear);
  const formattedDate = date.toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  return (
    <li className="flex items-start gap-4 rounded-md bg-yellow-50 p-2 py-2">
      <img src={image} alt={title} className="h-40 w-[103px]" />
      <div className="flex h-40 grow flex-col gap-0.5">
        <p className="text-lg font-medium">{title}</p>
        <p className="text-sm capitalize italic text-stone-500">
          Author: {author}
        </p>
        <p>
          Genre:{' '}
          <span className="rounded-full bg-yellow-100 px-2 text-sm capitalize tracking-wide">
            {genre}
          </span>
        </p>

        <p>
          Publication date:{' '}
          <span className="rounded-full bg-orange-100 px-2 text-xs tracking-wide">
            {formattedDate}
          </span>
        </p>

        <span className="mt-auto flex items-center justify-between space-x-2">
          <LinkButton to={`/book/${id}`}>Details</LinkButton>
          <button
            className="text-md text-blue-500 hover:text-blue-600 hover:underline"
            disabled={isLoading}
            onClick={handeleDeleteFunction}
          >
            {isLoading ? 'Removing...' : 'Remove from wishlist'}
          </button>
        </span>
      </div>
    </li>
  );
}

export default WishlistBookItem;
