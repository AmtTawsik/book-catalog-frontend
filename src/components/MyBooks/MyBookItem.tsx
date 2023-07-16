import { IBook } from '../../types/bookType';
import LinkButton from '../ui/LinkButton';

function MyBookItem({ book }: { book: IBook }) {
  const { image, title, author, genre, publicationYear, id } = book;
  return (
    <li className="flex items-start gap-4 rounded-md bg-yellow-50 p-2 py-2">
      <img src={image} alt={title} className="h-36 object-cover" />
      <div className="flex h-36 grow flex-col gap-0.5">
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

        <p>Publication Date: {publicationYear}</p>

        <span className="mt-auto flex items-center justify-between space-x-2">
          <LinkButton to={`/book/${id!}`}>Details</LinkButton>
          <LinkButton to={`/edit-book/${id!}`}>Edit</LinkButton>
        </span>
      </div>
    </li>
  );
}

export default MyBookItem;
