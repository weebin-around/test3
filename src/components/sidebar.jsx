export default function Sidebar({ friends, onSelect }) {
  return (
    <div className="w-64 bg-zinc-900 p-4">
      <h2 className="text-pink-400 font-bold mb-4">Friends</h2>
      {friends.map(f => (
        <button
          key={f.id}
          onClick={() => onSelect(f)}
          className="block w-full text-left p-2 hover:bg-zinc-800 rounded"
        >
          {f.name}
        </button>
      ))}
    </div>
  );
}
