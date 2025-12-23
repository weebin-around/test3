export default function AnimeList({ list }) {
  return (
    <div>
      <h3 className="text-lg font-semibold text-pink-300 mb-2">
        Anime List
      </h3>
      {list.map(a => (
        <div
          key={a.title}
          className="p-2 bg-zinc-800 rounded mb-2"
        >
          {a.title}
          <span className="ml-2 text-xs text-zinc-400">
            ({a.status})
          </span>
        </div>
      ))}
    </div>
  );
}
