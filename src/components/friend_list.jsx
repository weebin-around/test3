export default function FriendList({ friends, onSelect }) {
  return (
    <div>
      {friends.map(friend => (
        <button
          key={friend.id}
          onClick={() => onSelect(friend)}
          className="w-full text-left p-2 rounded hover:bg-zinc-800"
        >
          {friend.name}
        </button>
      ))}
    </div>
  );
}
