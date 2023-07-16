/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { useGetReviewsQuery } from '../../redux/features/comment/commentApi';
import { IReview } from '../../types/reviewType';
import Review from './Review';
import ReviewAdd from './ReviewAdd';

function ReviewList({ bookId }: { bookId: string }) {
  const { data: reviews, isLoading, isError } = useGetReviewsQuery(bookId);

  let content = null;

  if (isLoading)
    content = (
      <p className="mt-4 rounded-md bg-green-100 p-2 text-lg text-green-700">
        Please Wait a moment...
      </p>
    );
  if (!isLoading && isError)
    content = (
      <p className="mt-4 rounded-md bg-green-100 p-2 text-lg text-green-700">
        No review found, please give this book a review if you read it
      </p>
    );
  if (!isLoading && !isError && (reviews?.data as IReview[]).length === 0) {
    <p className="mt-4 rounded-md bg-green-100 p-2 text-lg text-green-700">
      No review found, please give this book a review if you read it
    </p>;
  }
  if (!isLoading && !isError && (reviews?.data as IReview[]).length > 0) {
    content = (reviews?.data as IReview[]).map((review: IReview) => (
      <Review review={review} key={review.id} />
    ));
  }

  return (
    <div className="">
      <h2 className="text-md font-medium text-stone-950">Books Reviews:</h2>
      <ReviewAdd bookId={bookId} />
      <ul className="divide-y divide-stone-200 py-2">{content}</ul>
    </div>
  );
}

export default ReviewList;
