import TrackBookItem from './TrackBookItem';

function TrackBookList() {
  return (
    <ul className="mt-6 grid grid-cols-1 gap-4 px-2 md:grid-cols-2">
      <TrackBookItem />
      <TrackBookItem />
      <TrackBookItem />
      <TrackBookItem />
      <TrackBookItem />
      <TrackBookItem />
      <TrackBookItem />
      <TrackBookItem />
    </ul>
  );
}

export default TrackBookList;
