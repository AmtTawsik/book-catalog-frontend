/* eslint-disable @typescript-eslint/no-floating-promises */
import { FormEvent, useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { useEditBookMutation } from '../../redux/features/book/bookApi';
import { IBook } from '../../types/bookType';
import Button from './Button';

function EditForm({ book }: { book: IBook }) {
  const [editBook, { isLoading, isError, isSuccess }] = useEditBookMutation();

  useEffect(() => {
    if (isSuccess) toast.success('Book edited successfully');
    if (isError) toast.error('There was an error editing book');
  }, [isSuccess, isError]);

  const {
    id,
    title: initialTitle,
    author: initialAuthor,
    genre: initialGenre,
    publicationYear: initialPublicationYear,
    image: initialImage,
    description: initialDescription,
  } = book;

  const [title, setTitle] = useState(initialTitle);
  const [author, setAuthor] = useState(initialAuthor);
  const [genre, setGenre] = useState(initialGenre);
  const [publicationYear, setPublicationYear] = useState(
    initialPublicationYear
  );
  const [image, setImage] = useState(initialImage);
  const [description, setDescription] = useState(initialDescription);

  const formattedGenre = genre.toLowerCase();

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    editBook({
      id,
      data: {
        title,
        author,
        genre: formattedGenre,
        publicationYear,
        image,
        description,
      },
    });
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
        <label className="text-lg sm:basis-40">Title</label>
        <div className="grow">
          <input
            type="text"
            name="title"
            className="input"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
      </div>

      <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
        <label className="text-lg sm:basis-40">Author</label>
        <div className="grow">
          <input
            type="text"
            name="author"
            className="input"
            required
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>
      </div>

      <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
        <label className="text-lg sm:basis-40">Genre</label>
        <div className="grow">
          <input
            type="text"
            name="genre"
            className="input"
            required
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
          />
        </div>
      </div>

      <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
        <label className="text-lg sm:basis-40">Publication Year</label>
        <div className="grow">
          <input
            type="date"
            name="publicationYear"
            className="input"
            required
            value={publicationYear}
            onChange={(e) => setPublicationYear(e.target.value)}
          />
        </div>
      </div>

      <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
        <label className="text-lg sm:basis-40">Image Url</label>
        <div className="grow">
          <input
            type="text"
            name="image"
            className="input"
            required
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
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
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
      </div>

      <div>
        <Button disabled={isLoading} type="primary">
          {isLoading ? 'Editing book...' : 'Edit book'}
        </Button>
      </div>

      {isError && (
        <p className="mt-4 rounded-md bg-red-100 p-2 text-lg text-red-700">
          There was an error adding book
        </p>
      )}

      {isSuccess && (
        <p className="mt-4 rounded-md bg-green-100 p-2 text-lg text-green-700">
          Book Edited successfully
        </p>
      )}
    </form>
  );
}

export default EditForm;
