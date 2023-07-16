import MyBookItem from './MyBookItem';

function MyBookList() {
  return (
    <ul className="mt-6 grid grid-cols-1 gap-4 px-2 md:grid-cols-2">
      <MyBookItem />
      <MyBookItem />
      <MyBookItem />
      <MyBookItem />
      <MyBookItem />
      <MyBookItem />
      <MyBookItem />
    </ul>
  );
}

export default MyBookList;
