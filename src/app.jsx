import { useEffect, useState } from "react";
import Sidebar from "./components/Sidebar";
import FriendList from "./components/FriendList";
import AnimeList from "./components/AnimeList";
import ChatPanel from "./components/ChatPanel";
import {
  fetchFriends,
  fetchAnimeList,
  fetchMessages,
  sendMessage
} from "./api/mockApi";

export default function App() {
  const [friends, setFriends] = useState([]);
  const [selectedFriend, setSelectedFriend] = useState(null);
  const [animeList, setAnimeList] = useState([]);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    fetchFriends().then(setFriends);
  }, []);

  useEffect(() => {
    if (!selectedFriend) return;

    fetchAnimeList(selectedFriend.id).then(setAnimeList);
    fetchMessages(selectedFriend.id).then(setMessages);
  }, [selectedFriend]);

  const handleSend = async (text) => {
    const newMessage = { from: "Faiza", text };
    await sendMessage(selectedFriend.id, newMessage);
    setMessages(prev => [...prev, newMessage]);
  };

  return (
    <div className="h-screen flex bg-zinc-950 text-white">
      {/* Sidebar */}
      <Sidebar friends={friends} onSelect={setSelectedFriend} />

      {/* Main Content */}
      <div className="flex flex-1">
        {/* Friend Anime List */}
        <div className="w-1/3 p-4 border-r border-zinc-800">
          {selectedFriend ? (
            <>
              <h2 className="text-xl font-bold text-pink-400 mb-4">
                {selectedFriend.name}'s Anime
              </h2>
              <AnimeList list={animeList} />
            </>
          ) : (
            <p className="text-zinc-400">
              Select a friend to view their anime list
            </p>
          )}
        </div>

        {/* Chat Panel */}
        <div className="flex-1 p-4">
          {selectedFriend ? (
            <ChatPanel
              friend={selectedFriend}
              messages={messages}
              onSend={handleSend}
            />
          ) : (
            <p className="text-zinc-400">
              Start a conversation
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
