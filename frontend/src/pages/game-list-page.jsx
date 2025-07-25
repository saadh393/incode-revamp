import { Flame } from "lucide-react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router";
import { thunkFetchGames } from "../redux/features/game-slice";

export default function GameList() {
  const games = useSelector((state) => state.games);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(thunkFetchGames());
  }, []);

  if (!games.length) {
    return <div className="text-xs text-red-500 text-center py-8">No Game Found</div>;
  }

  return (
    <div className="flex gap-4 justify-center flex-wrap">
      {games.map((game) => {
        return (
          <div
            key={game.id}
            className="cursor-pointer group transition-all duration-500 hover:-translate-y-1 flex flex-col items-center relative group p-6 rounded-md border border-zinc-700 bg-zinc-900 hover:bg-zinc-800 w-72"
          >
            <img
              src={game.logo}
              className="w-20 h-20 mb-4 bg-white p-2 rounded-xl  object-contain border-2 border-transparent shadow-lg transition-all duration-300"
              alt={game.name}
            />

            <h2 className="text-white text-2xl font-extrabold mb-2 text-center tracking-tight  transition-colors">
              {game.name}
            </h2>
            <span className="text-xs text-zinc-400 mt-1">Lessons : {game.lessons}</span>
            <Link
              to={`/game/${game.id}`}
              className="flex-1 flex items-center justify-center gap-2 bg-zinc-800 hover:bg-amber-500 text-white font-bold py-2 rounded-lg  text-sm shadow focus:outline-none focus:ring-2 focus:ring-amber-600 hover:shadow-lg hover:shadow-amber-600/50 transition-all duration-300 mt-8 px-8"
            >
              <Flame /> Play
            </Link>
          </div>
        );
      })}
    </div>
  );
}
