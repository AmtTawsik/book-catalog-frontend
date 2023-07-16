import Review from '../components/Review';
import LinkButton from '../components/ui/LinkButton';

function Book() {
  return (
    <div>
      {' '}
      <div className="space-y-8 px-4 py-6">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h2 className="text-xl font-semibold">Book Details</h2>

          <div className="space-x-2">
            <span className="rounded-full bg-green-500 px-3 py-1 text-sm font-semibold uppercase tracking-wide text-green-50">
              Edit
            </span>
            <span className="rounded-full bg-red-500 px-3 py-1 text-sm font-semibold uppercase tracking-wide text-red-50">
              Delete
            </span>
          </div>
        </div>

        <div className="flex items-start gap-4 rounded-md bg-yellow-50 p-2 py-2">
          <img
            src="https://marketplace.canva.com/EAFPHUaBrFc/1/0/1003w/canva-black-and-white-modern-alone-story-book-cover-QHBKwQnsgzs.jpg"
            alt="book"
            className="h-36 object-cover"
          />
          <div className="flex h-36 flex-col gap-0.5">
            <p className="text-lg font-medium">Book Name</p>
            <p className="text-sm capitalize italic text-stone-500">
              Author: Tanvir Chowodhury
            </p>
            <p>
              Genre:{' '}
              <span className="rounded-full bg-yellow-200 px-2 text-sm tracking-wide">
                Ficton
              </span>
            </p>
            <p>Publication Year: 2020</p>
            <span className="mt-auto space-x-2">
              <LinkButton to="">Add to wishlist</LinkButton>
              <LinkButton to="">Add to track list</LinkButton>
            </span>
          </div>
        </div>

        <div className="border-b border-t py-4">
          <h2 className="text-md font-medium text-stone-950">Books Summary:</h2>
          <p className="text-stone-800">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis
            dolore aliquid voluptatibus eveniet soluta reiciendis voluptate
            architecto blanditiis dignissimos, eos quibusdam, nihil
            exercitationem perferendis temporibus, provident saepe laudantium
            illo commodi. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Porro, odio vero! Dolor hic, exercitationem nam eligendi
            doloribus architecto! Tenetur, nihil laudantium. Odio officia
            voluptatum dolor veritatis praesentium eius commodi impedit
          </p>
        </div>

        <div className="">
          <h2 className="text-md font-medium text-stone-950">Books Reviews:</h2>
          <ul className="divide-y divide-stone-200 py-2">
            <Review />
            <Review />
            <Review />
            <Review />
            <Review />
            <Review />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Book;
