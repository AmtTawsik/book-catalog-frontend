import TrackBookList from '../components/TrackBookList';

function Tracker() {
  return (
    <div className="px-2 py-4">
      <div className="rounded-md bg-yellow-50 p-8">
        <blockquote className="text-2xl font-bold text-stone-600">
          Your personal reading compass: Let your book tracker lead the way as
          you embark on a quest for knowledge, entertainment, and
          self-discovery.
        </blockquote>
      </div>
      <TrackBookList />
    </div>
  );
}

export default Tracker;
