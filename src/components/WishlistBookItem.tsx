/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import { IWishlistItem } from '../types/wishitemType';
import LinkButton from './ui/LinkButton';

function WishlistBookItem({ item }: { item: IWishlistItem }) {
  const { image, id, title, author, genre, publicationYear } = item.book;

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
          <span className="rounded-full bg-yellow-100 px-2 text-sm tracking-wide">
            {genre}
          </span>
        </p>

        <p>Publication Year: {publicationYear}</p>

        <span className="mt-auto flex items-center justify-between space-x-2">
          <LinkButton to={`/book/${id}`}>Details</LinkButton>
          <LinkButton to="">Remove from wishlist</LinkButton>
        </span>
      </div>
    </li>
  );
}

export default WishlistBookItem;
