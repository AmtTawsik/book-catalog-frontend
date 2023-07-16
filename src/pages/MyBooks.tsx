import MyBookList from '../components/MyBookList';

function MyBooks() {
  return (
    <div className="px-2 py-4">
      <div className="rounded-md bg-yellow-50 p-8">
        <blockquote className="text-2xl font-bold text-stone-600">
          Books Added by you!
        </blockquote>
      </div>
      <MyBookList />
    </div>
  );
}

export default MyBooks;
