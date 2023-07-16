import { ITrackItem } from '../types/trackType';
import LinkButton from './ui/LinkButton';

function TrackBookItem({ item }: { item: ITrackItem }) {
  const { image, id, title, author, genre, publicationYear } = item.book;
  return (
    <li className="flex items-start gap-4 rounded-md bg-yellow-50 p-2 py-2">
      <img src={image} alt={title} className="h-36 object-cover" />
      <div className="flex h-36 grow flex-col gap-0.5">
        <p className="font-meBoodium flex items-center justify-between text-lg">
          <span>{title}</span>
          <span>
            <span className="rounded-full bg-green-300 px-2 py-0.5 text-sm">
              {item.status}
            </span>
          </span>
        </p>
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
          <div className="space-x-2">
            <LinkButton to="">Reading</LinkButton>
            <LinkButton to="">Soon</LinkButton>
            <LinkButton to="">Finished</LinkButton>
          </div>
        </span>
      </div>
    </li>
  );
}

export default TrackBookItem;
