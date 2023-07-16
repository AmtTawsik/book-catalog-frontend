import Button from '../components/ui/Button';

function AddBook() {
  return (
    <div className="flex h-full w-full items-center justify-center px-4 py-6">
      <div className="w-full rounded-md bg-yellow-50 p-6">
        <h2 className="mb-8 text-2xl font-semibold">Want to add a new book?</h2>

        <form>
          <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
            <label className="text-lg sm:basis-40">Title</label>
            <div className="grow">
              <input type="text" name="title" className="input" required />
              {/* <p className="mt-2 rounded-md bg-red-100 p-2 text-xs text-red-700">
           error
          </p> */}
            </div>
          </div>

          <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
            <label className="text-lg sm:basis-40">Author</label>
            <div className="grow">
              <input type="text" name="author" className="input" required />
              {/* <p className="mt-2 rounded-md bg-red-100 p-2 text-xs text-red-700">
           error
          </p> */}
            </div>
          </div>

          <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
            <label className="text-lg sm:basis-40">Genre</label>
            <div className="grow">
              <input type="text" name="genre" className="input" required />
              {/* <p className="mt-2 rounded-md bg-red-100 p-2 text-xs text-red-700">
           error
          </p> */}
            </div>
          </div>

          <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
            <label className="text-lg sm:basis-40">Publication Year</label>
            <div className="grow">
              <input
                type="text"
                name="publicationYear"
                className="input"
                required
              />
              {/* <p className="mt-2 rounded-md bg-red-100 p-2 text-xs text-red-700">
           error
          </p> */}
            </div>
          </div>

          <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
            <label className="text-lg sm:basis-40">Image</label>
            <div className="grow">
              <input type="text" name="image" className="input" required />
              {/* <p className="mt-2 rounded-md bg-red-100 p-2 text-xs text-red-700">
           error
          </p> */}
            </div>
          </div>

          <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
            <label className="text-lg sm:basis-40">Summary</label>
            <div className="grow">
              <input
                type="text"
                name="description"
                className="input"
                required
              />
              {/* <p className="mt-2 rounded-md bg-red-100 p-2 text-xs text-red-700">
           error
          </p> */}
            </div>
          </div>

          <div>
            <Button type="primary">Add Book</Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddBook;
