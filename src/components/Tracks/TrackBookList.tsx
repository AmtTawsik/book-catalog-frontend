/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useEffect } from 'react';
import { useGetTracklistQuery } from '../../redux/features/track/trackApi';
import {
  calcFinished,
  calcReading,
} from '../../redux/features/track/trackSlice';
import { useAppDispatch } from '../../redux/hooks';
import { ITrackItem } from '../../types/trackType';
import Error from '../ui/Error';
import Loader from '../ui/Loader';
import TrackBookItem from './TrackBookItem';

function TrackBookList() {
  const {
    data: trackList,
    isLoading,
    isError,
  } = useGetTracklistQuery(undefined);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (trackList) {
      const readingData = (trackList?.data as ITrackItem[]).filter(
        (item) => item.status === 'reading'
      ).length;
      const finishedData = (trackList?.data as ITrackItem[]).filter(
        (item) => item.status === 'finished'
      ).length;

      dispatch(calcReading(readingData));
      dispatch(calcFinished(finishedData));
    }
  }, [trackList, dispatch]);

  let content = null;

  if (isLoading) content = <Loader />;
  if (!isLoading && isError)
    content = (
      <Error message="There is no tracked books in your bag yet! Please add them first" />
    );
  if (
    !isLoading &&
    !isError &&
    (trackList?.data as ITrackItem[]).length === 0
  ) {
    <Error message="No tracked books found" />;
  }
  if (!isLoading && !isError && (trackList?.data as ITrackItem[]).length > 0) {
    content = (
      <ul className="mt-6 grid grid-cols-1 gap-4 px-2 md:grid-cols-2">
        {(trackList?.data as ITrackItem[]).map((item: ITrackItem) => (
          <TrackBookItem item={item} key={item.id} />
        ))}
      </ul>
    );
  }
  return <>{content}</>;
}

export default TrackBookList;
