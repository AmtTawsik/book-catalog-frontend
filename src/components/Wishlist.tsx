import BookItem from './BookItem';

function WishBooks() {
  return (
    <ul className="mt-6 grid grid-cols-1 gap-4 px-2 md:grid-cols-2">
      <BookItem wishlist={true} />
      <BookItem wishlist={true} />
      <BookItem wishlist={true} />
      <BookItem wishlist={true} />
      <BookItem wishlist={true} />
      <BookItem wishlist={true} />
      <BookItem wishlist={true} />
    </ul>
  );
}

export default WishBooks;
