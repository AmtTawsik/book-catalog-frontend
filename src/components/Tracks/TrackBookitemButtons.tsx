/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { useEffect } from 'react';
import toast from 'react-hot-toast';
import {
  useDeleteTracklistMutation,
  useEditTracklistMutation,
} from '../../redux/features/track/trackApi';

function TrackBookitemButtons({ id }: { id: string }) {
  const [
    deleteTracklist,
    {
      isSuccess: deleteSuccess,
      isLoading: deleteLoading,
      isError: deleteError,
    },
  ] = useDeleteTracklistMutation();

  const [editTracklist, { isLoading, isError, isSuccess }] =
    useEditTracklistMutation();

  useEffect(() => {
    if (isSuccess) toast.success('Book status updated successfully');

    if (isError) toast.error('There was an error on update status');
  }, [isSuccess, isError]);

  useEffect(() => {
    if (deleteSuccess)
      toast.success('Book deleted from your tracklist successfully');
    if (deleteError) toast.error('Book deleted from your tracklist failed');
  }, [deleteSuccess, deleteError]);

  function handeleDeleteFunction() {
    if (id) deleteTracklist(id);
  }

  function handleReadingSubmit() {
    editTracklist({
      id,
      data: {
        status: 'reading',
      },
    });
  }

  function handleSoonSubmit() {
    editTracklist({
      id,
      data: {
        status: 'soon',
      },
    });
  }

  function handleFinishedSubmit() {
    editTracklist({
      id,
      data: {
        status: 'finished',
      },
    });
  }

  return (
    <>
      <button
        onClick={handleReadingSubmit}
        disabled={isLoading}
        className="text-xs font-semibold text-blue-700 hover:text-blue-800 hover:underline"
      >
        Reading
      </button>
      <button
        disabled={isLoading}
        onClick={handleSoonSubmit}
        className="text-xs font-semibold text-blue-700 hover:text-blue-800 hover:underline"
      >
        Soon
      </button>
      <button
        disabled={isLoading}
        onClick={handleFinishedSubmit}
        className="text-xs font-semibold text-blue-700 hover:text-blue-800 hover:underline"
      >
        Finished
      </button>
      <button
        disabled={deleteLoading}
        onClick={handeleDeleteFunction}
        className="text-xs font-semibold text-blue-700 hover:text-blue-800 hover:underline"
      >
        {deleteLoading ? 'Removing...' : 'Remove'}
      </button>
    </>
  );
}

export default TrackBookitemButtons;
