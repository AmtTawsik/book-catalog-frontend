/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import BookLIst from '../components/BookLIst';
import Error from '../components/ui/Error';
import Loader from '../components/ui/Loader';
import { useGetBooksQuery } from '../redux/features/book/bookApi';
import { IBook } from '../types/bookType';

function Home() {
  const {
    data: books,
    isLoading,
    isError,
  } = useGetBooksQuery({ page: 1, limit: 10 });

  let content = null;

  if (isLoading) content = <Loader />;
  if (!isLoading && isError) content = <Error message="There was an error" />;
  if (!isLoading && !isError && (books?.data as IBook[]).length === 0) {
    <Error message="No books found" />;
  }
  if (!isLoading && !isError && (books?.data as IBook[]).length > 0) {
    content = <BookLIst books={books?.data} />;
  }

  return (
    <div className="px-2 py-4">
      <section className="bg-white dark:bg-gray-900">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Books make students intelligent.</h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">The importance of books in our life cannot be undermined for they not only help in broadening our horizons but also act as doorways to connecting us with the world around us.</p>
            <a href="#" className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
              Get started
              <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </a>
            <a href="#" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
              Read Some Books
            </a>
          </div>
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img src="https://ceoworld.biz/wp-content/uploads/2022/10/Top-7-Most-Expensive-Books-In-The-World-e1680118425168.jpg" alt="mockup" />
          </div>
        </div>
      </section>
      {content}
    </div>
  );
}

export default Home;
