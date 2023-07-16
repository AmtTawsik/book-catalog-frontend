/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import { useGetWishlistQuery } from '../redux/features/wishlist/wishlistApi';
import { IWishlistItem } from '../types/wishitemType';
import WishlistBookItem from './WishlistBookItem';
import Error from './ui/Error';
import Loader from './ui/Loader';

function WishBooks() {
  const { data: wishlist, isLoading, isError } = useGetWishlistQuery(undefined);

  let content = null;

  if (isLoading) content = <Loader />;
  if (!isLoading && isError)
    content = (
      <Error message="There is no wishlisted books in your bag yet! Please add them first" />
    );
  if (
    !isLoading &&
    !isError &&
    (wishlist?.data as IWishlistItem[]).length === 0
  ) {
    <Error message="No books found" />;
  }
  if (
    !isLoading &&
    !isError &&
    (wishlist?.data as IWishlistItem[]).length > 0
  ) {
    content = (
      <ul className="mt-6 grid grid-cols-1 gap-4 px-2 md:grid-cols-2">
        {(wishlist?.data as IWishlistItem[]).map((item: IWishlistItem) => (
          <WishlistBookItem item={item} key={item.id} />
        ))}
      </ul>
    );
  }

  return <>{content}</>;
}

export default WishBooks;
