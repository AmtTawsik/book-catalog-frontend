import { addSearchTerm } from '../../redux/features/book/bookSlice';
import { useAppDispatch } from '../../redux/hooks';

function SearchBook() {
  const dispatch = useAppDispatch();
  return (
    <form>
      <input
        type="text"
        placeholder="Search book"
        onChange={(e) => dispatch(addSearchTerm(e.target.value))}
        className="w-32 rounded-full bg-yellow-50 px-4 py-2 text-sm transition-all duration-300 placeholder:text-stone-500 focus:outline-none focus:ring focus:ring-yellow-500 focus:ring-opacity-50 sm:w-64 sm:focus:w-72"
      />
    </form>
  );
}

export default SearchBook;
