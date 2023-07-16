import WishBooks from '../components/Wishlist';

function Wishlist() {
  return (
    <div className="px-2 py-4">
      <div className="rounded-md bg-yellow-50 p-8">
        <blockquote className="text-2xl font-bold text-stone-600">
          "Books are the portals to new worlds, and your wishlisted treasures
          await their turn to transport you."
        </blockquote>
      </div>
      <WishBooks />
    </div>
  );
}

export default Wishlist;
