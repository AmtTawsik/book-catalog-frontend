/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { ITrackItem } from '../../types/trackType';
import LinkButton from '../ui/LinkButton';
import TrackBookitemButtons from './TrackBookitemButtons';

function TrackBookItem({ item }: { item: ITrackItem }) {
  const { image, id, title, author, genre, publicationYear } = item.book;

  const date = new Date(publicationYear);
  const formattedDate = date.toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  let statusClass = null;

  if (item?.status === 'reading')
    statusClass = 'rounded-full bg-green-300 px-2 py-0.5 text-sm';
  if (item?.status === 'soon')
    statusClass = 'rounded-full bg-yellow-300 px-2 py-0.5 text-sm';
  if (item?.status === 'finished')
    statusClass = 'rounded-full bg-orange-300 px-2 py-0.5 text-sm';
  if (item?.status === 'Not started')
    statusClass = 'rounded-full bg-blue-300 px-2 py-0.5 text-sm';

  return (
    <li className="flex items-start gap-4 rounded-md bg-yellow-50 p-2 py-2">
      <img src={image} alt={title} className="h-36 w-[103px] object-cover" />
      <div className="flex h-36 grow flex-col gap-0.5">
        <p className="text-md flex items-center justify-between">
          <span>{title}</span>
          <span>
            <span className={`${statusClass}`}>{item.status}</span>
          </span>
        </p>
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
          <div className="space-x-2">
            <TrackBookitemButtons id={item.id} />
          </div>
        </span>
      </div>
    </li>
  );
}

export default TrackBookItem;
