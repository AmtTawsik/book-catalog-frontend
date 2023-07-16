import { Link } from 'react-router-dom';

function Footer() {
  return (
    <>
      <div className="flex items-center justify-between bg-cyan-300 px-4 py-3 text-sm uppercase text-black sm:px-6 md:text-base">
        <p className="space-x-4 font-semibold text-black sm:space-x-6">
          {/* <span>X Wishlisted books</span>
          <span>X reading</span> */}
        </p>
        <div className="space-x-4">
          <Link to="/wishlist">Your wishlist &rarr;</Link>
          <Link to="/tracker">Your Tracking List &rarr;</Link>
        </div>
      </div>
      {/* <div className="flex items-center justify-center bg-yellow-800 px-4 py-2 text-xs text-yellow-400 sm:px-6">
        All rights reserved by Book Tracker - 2023
      </div> */}
    </>
  );
}

export default Footer;
