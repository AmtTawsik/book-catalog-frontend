import { Link } from 'react-router-dom';
import { userLoggedOut } from '../redux/features/auth/authSlice';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import LinkButton from './ui/LinkButton';

function Header() {
  const auth = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  const logout = () => {
    dispatch(userLoggedOut());
    localStorage.clear();
  };

  return (
    <header className="flex items-center justify-between border-b border-stone-200 bg-yellow-300 px-4 py-3 uppercase sm:px-6">
      <Link to="/" className="font-medium tracking-widest">
        Book Tracker
      </Link>

      <div className="flex items-center gap-4 text-stone-700">
        <LinkButton type="yellow" to="/all-books">
          All Books
        </LinkButton>

        {auth?.accessToken && auth?.userId ? (
          <>
            <LinkButton type="yellow" to="/add-book">
              Add Book
            </LinkButton>

            <LinkButton type="yellow" to="/my-books">
              My Books
            </LinkButton>
            <span
              role="button"
              className="text-md font-medium text-stone-800 hover:text-stone-900 hover:underline"
              onClick={logout}
            >
              Logout
            </span>
          </>
        ) : (
          <>
            <LinkButton type="yellow" to="/signin">
              Signin
            </LinkButton>
            <LinkButton type="yellow" to="/signup">
              Signup
            </LinkButton>
          </>
        )}
      </div>
    </header>
  );
}
export default Header;
