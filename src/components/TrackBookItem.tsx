import LinkButton from './ui/LinkButton';

function TrackBookItem() {
  return (
    <li className="flex items-start gap-4 rounded-md bg-yellow-50 p-2 py-2">
      <img
        src="https://marketplace.canva.com/EAFPHUaBrFc/1/0/1003w/canva-black-and-white-modern-alone-story-book-cover-QHBKwQnsgzs.jpg"
        alt="book"
        className="h-36 object-cover"
      />
      <div className="flex h-36 grow flex-col gap-0.5">
        <p className="font-meBoodium flex items-center justify-between text-lg">
          <span>Book Name</span>
          <span>
            <span className="rounded-full bg-green-300 px-2 py-0.5 text-sm">
              reading
            </span>
          </span>
        </p>
        <p className="text-sm capitalize italic text-stone-500">
          Author: Tanvir Chowodhury
        </p>
        <p>
          Genre:{' '}
          <span className="rounded-full bg-yellow-100 px-2 text-sm tracking-wide">
            Ficton
          </span>
        </p>
        <p>Publication Year: 2020</p>
        <span className="mt-auto flex items-center justify-between space-x-2">
          <LinkButton to="/book/id">Details</LinkButton>
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
