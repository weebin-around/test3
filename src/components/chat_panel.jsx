export default function ChatPanel({ messages, onSend }) {
  const [text, setText] = useState("");

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 overflow-y-auto">
        {messages.map((m, i) => (
          <p key={i} className="mb-2">
            <b>{m.from}:</b> {m.text}
          </p>
        ))}
      </div>
      <div className="flex gap-2">
        <input
          className="flex-1 bg-zinc-800 p-2 rounded"
          value={text}
          onChange={e => setText(e.target.value)}
        />
        <button
          className="bg-pink-500 px-4 rounded"
          onClick={() => {
            onSend(text);
            setText("");
          }}
        >
          Send
        </button>
      </div>
    </div>
  );
}
