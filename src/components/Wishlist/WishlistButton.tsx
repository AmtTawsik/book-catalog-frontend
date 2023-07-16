/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-floating-promises */
import { useEffect } from 'react';
import toast from 'react-hot-toast';
import {
  useAddWishlistMutation,
  useGetWishlistQuery,
} from '../../redux/features/wishlist/wishlistApi';
import { IWishlistItem } from '../../types/wishitemType';

function WishlistButton({ id }: { id: string }) {
  const { data: wishlist, isLoading: getWishLoading } =
    useGetWishlistQuery(undefined);

  const itemExist = (wishlist?.data as IWishlistItem[])?.filter(
    (item) => item.book.id === id
  );

  const [addWishlist, { isLoading, isError, isSuccess }] =
    useAddWishlistMutation();

  useEffect(() => {
    if (isSuccess) toast.success('Book added to your wish list');
    if (isError)
      toast.error('There was an error add this book to your wishlist');
  }, [isSuccess, isError]);

  function handleSubmit() {
    addWishlist({ book: id });
  }

  return (
    <>
      {itemExist?.length > 0 ? (
        <span className="rounded-full bg-green-200 px-2">Wishlisted</span>
      ) : (
        <button
          disabled={isLoading || getWishLoading}
          onClick={handleSubmit}
          className="text-md text-blue-500 hover:text-blue-600 hover:underline"
        >
          {isLoading || getWishLoading ? 'wait a moment...' : 'Add to wishlist'}
        </button>
      )}
    </>
  );
}

export default WishlistButton;
