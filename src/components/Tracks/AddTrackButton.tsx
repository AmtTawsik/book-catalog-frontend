/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-floating-promises */

import { useEffect } from 'react';
import toast from 'react-hot-toast';
import {
  useAddTracklistMutation,
  useGetTracklistQuery,
} from '../../redux/features/track/trackApi';
import { ITrackItem } from '../../types/trackType';

function AddTrackButton({ id }: { id: string }) {
  const { data: tracklist, isLoading: getTrackLoading } =
    useGetTracklistQuery(undefined);

  const itemExist = (tracklist?.data as ITrackItem[])?.filter(
    (item) => item.book.id === id
  );

  const [addTracklist, { isLoading, isError, isSuccess }] =
    useAddTracklistMutation();

  useEffect(() => {
    if (isSuccess) toast.success('Book added to your tracking list');
    if (isError) toast.error('There was an error add this book to tracklist');
  }, [isSuccess, isError]);

  function handleSubmit() {
    addTracklist({ book: id });
  }

  return (
    <>
      {itemExist?.length > 0 ? (
        <span className="rounded-full bg-violet-200 px-2">Track listed</span>
      ) : (
        <button
          disabled={isLoading || getTrackLoading}
          onClick={handleSubmit}
          className="text-md text-blue-500 hover:text-blue-600 hover:underline"
        >
          {isLoading || getTrackLoading
            ? 'Wait a moment...'
            : 'Add to track list'}
        </button>
      )}
    </>
  );
}

export default AddTrackButton;
