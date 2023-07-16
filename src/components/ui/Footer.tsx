/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { useGetTracklistQuery } from '../../redux/features/track/trackApi';
import { useGetWishlistQuery } from '../../redux/features/wishlist/wishlistApi';

function Footer() {
  const user = useAuth();
  const { data: wishlist } = useGetWishlistQuery(undefined);
  const { data: trackList } = useGetTracklistQuery(undefined);
  return (
    <>
      {user ? (
        <div className="flex items-center justify-between bg-cyan-300 px-4 py-3 text-sm uppercase text-black sm:px-6 md:text-base">
          <p className="space-x-4 font-semibold text-black sm:space-x-6">
            <span>
              Wish-listed books -{' '}
              {wishlist ? (
                <span className="font-bold text-yellow-400">
                  {wishlist?.data?.length}
                </span>
              ) : (
                '0'
              )}{' '}
            </span>
            <span>
              Track-listed Books -{' '}
              {trackList ? (
                <span className="font-bold text-yellow-400">
                  {trackList?.data?.length}
                </span>
              ) : (
                '0'
              )}
            </span>
          </p>
          <div className="space-x-4">
            <Link className="hover:text-yellow-400" to="/wishlist">
              Your wishlist &rarr;
            </Link>
            <Link className="hover:text-yellow-400" to="/tracker">
              Your Tracking List &rarr;
            </Link>
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center bg-stone-800 px-4 py-2 text-xs text-stone-400 sm:px-6">
          All rights reserved by Book Tracker - 2023
        </div>
      )}
    </>
  );
}

export default Footer;
