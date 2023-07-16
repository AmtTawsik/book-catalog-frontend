function Filter() {
  return (
    <div className="flex items-center gap-3 text-stone-700">
      <div className="flex items-center gap-1">
        <label className="">Genre:</label>
        <select
          className="placeholder-text-stone-400 w-17 rounded-full bg-yellow-50 px-4 py-2 text-sm transition-all duration-300 focus:outline-none focus:ring focus:ring-yellow-500 focus:ring-opacity-50"
          // value={selectedGenre}
          // onChange={handleGenreChange}
        >
          <option value="">All</option>
          <option value="Fantasy">Fantasy</option>
          <option value="Mystery">Mystery</option>
          <option value="Science Fiction">Science Fiction</option>
          {/* Add more options as needed */}
        </select>
      </div>
      <div className="flex items-center gap-1">
        <label className="">Year:</label>
        <select
          className="placeholder-text-stone-400 w-17 rounded-full bg-yellow-50 px-4 py-2 text-sm transition-all duration-300 focus:outline-none focus:ring focus:ring-yellow-500 focus:ring-opacity-50"
          // value={selectedYear}
          // onChange={handleYearChange}
        >
          <option value="">All</option>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          {/* Add more options as needed */}
        </select>
      </div>
    </div>
  );
}

export default Filter;
