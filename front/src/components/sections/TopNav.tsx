import { FaRedditAlien } from "react-icons/fa";

const TopNav = () => {
  return (
    <header className="fixed bottom-0 left-0 w-full p-1 lg:p-2">
      <nav className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <FaRedditAlien className="text-orange-400 h-10 w-10" />
          <h1 className="text-2xl lg:text-3xl font-bold">Reddit Clone</h1>
        </div>
        <div>
          <button
            className="px-4 py-2 bg-orange-400 text-white rounded-xl
          hover:bg-orange-400/80 active:bg-orange-500 hover:cursor-pointer hover:scale-105
           transition-all duration-300 ease-in-out"
          >
            Reset
          </button>
        </div>
      </nav>
    </header>
  );
};

export default TopNav;
