// import BookLIst from '../components/BookLIst';
import BookLIst from '../components/BookLIst';
import Filter from '../components/Filter';
import SearchBook from '../components/SearchBook';

function AllBooks() {
  return (
    <main className="px-2 py-4">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b pb-4">
        <SearchBook />
        <Filter />
      </div>
      <BookLIst />
    </main>
  );
}

export default AllBooks;
