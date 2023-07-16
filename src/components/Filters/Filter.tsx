/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useGetBooksQuery } from '../../redux/features/book/bookApi';
import { addGenre, addYear } from '../../redux/features/book/bookSlice';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { IBook } from '../../types/bookType';

function Filter() {
  const { genre, publicationYear } = useAppSelector((state) => state.book);
  const { data: books } = useGetBooksQuery({});

  const dispatch = useAppDispatch();

  const allGenres = [
    ...new Set((books?.data as IBook[])?.map((book) => book?.genre)),
  ];

  const allYears = [
    ...new Set(
      (books?.data as IBook[])?.map((book) =>
        book?.publicationYear.substring(0, 4)
      )
    ),
  ];

  return (
    <div className="flex items-center gap-3 text-stone-700">
      <div className="flex items-center gap-1">
        <label className="">Genre:</label>
        <select
          className="placeholder-text-stone-400 w-17 rounded-full bg-yellow-50 px-4 py-2 text-sm transition-all duration-300 focus:outline-none focus:ring focus:ring-yellow-500 focus:ring-opacity-50"
          value={genre}
          onChange={(e) => dispatch(addGenre(e.target.value))}
        >
          {/* <option value="select">Select Genre</option> */}
          <option value="all">All</option>
          {allGenres &&
            allGenres?.map((genre) => (
              <option key={genre} value={genre}>
                {genre}
              </option>
            ))}
          {/* Add more options as needed */}
        </select>
      </div>
      <div className="flex items-center gap-1">
        <label className="">Year:</label>
        <select
          className="placeholder-text-stone-400 w-17 rounded-full bg-yellow-50 px-4 py-2 text-sm transition-all duration-300 focus:outline-none focus:ring focus:ring-yellow-500 focus:ring-opacity-50"
          value={publicationYear}
          onChange={(e) => dispatch(addYear(e.target.value))}
        >
          <option value="all">All</option>

          {allYears &&
            allYears?.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          {/* Add more options as needed */}
        </select>
      </div>
    </div>
  );
}

export default Filter;
