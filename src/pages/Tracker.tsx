import TrackBookList from '../components/Tracks/TrackBookList';
import { useAppSelector } from '../redux/hooks';

function Tracker() {
  const { reading, finished } = useAppSelector((state) => state.track);
  return (
    <div className="px-2 py-4">
      <div className="rounded-md bg-yellow-50 p-8">
        <blockquote className="text-2xl font-bold text-stone-600">
          Your personal reading compass: Let your book tracker lead the way as
          you embark on a quest for knowledge, entertainment, and
          self-discovery.
        </blockquote>
      </div>
      <div className="my-8 flex items-center justify-between rounded-md bg-stone-100 p-8">
        <p className="tex-lg font-bold text-stone-950">Status:</p>
        <p className="space-x-4">
          <span>Finished Books:</span>
          <span className="py=3 rounded-full bg-orange-300 px-3">
            {finished}
          </span>
        </p>
        <p className="space-x-4">
          <span> Currrently Reading:</span>
          <span className="py=3 rounded-full bg-green-300 px-3">{reading}</span>
        </p>
      </div>
      <TrackBookList />
    </div>
  );
}

export default Tracker;
