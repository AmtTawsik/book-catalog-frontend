/* eslint-disable @typescript-eslint/no-floating-promises */

import { FormEvent, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useAddReviewMutation } from '../../redux/features/comment/commentApi';
import Button from '../ui/Button';
import Error from '../ui/Error';

function ReviewAdd({ bookId }: { bookId: string }) {
  const [addReview, { isLoading, isError, isSuccess }] = useAddReviewMutation();

  useEffect(() => {
    if (isSuccess) toast.success('Review added successfully');
    if (isError) toast.error('There was an error in adding review');
  }, [isSuccess, isError]);

  const [review, setReview] = useState('');

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    addReview({ review: review, book: bookId });

    setReview('');
  }

  return (
    <form className="flex gap-2 py-2" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add Review"
        className="w-full basis-3/4 rounded-full bg-yellow-100 px-4 py-3 text-sm transition-all duration-300 placeholder:text-stone-400 focus:outline-none focus:ring focus:ring-yellow-500 focus:ring-opacity-50"
        value={review}
        onChange={(e) => setReview(e.target.value)}
      />
      <Button disabled={isLoading} type="primary">
        {isLoading ? 'Adding Review...' : 'Add Review'}
      </Button>
      {isError && <Error message="Adding review failed" />}
    </form>
  );
}

export default ReviewAdd;
