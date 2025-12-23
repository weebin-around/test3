import { users, animeLists, messages } from "../data/mockData";

export const fetchFriends = () =>
  new Promise(res => setTimeout(() => res(users), 300));

export const fetchAnimeList = (userId) =>
  new Promise(res =>
    setTimeout(() => res(animeLists[userId]), 300)
  );

export const fetchMessages = (friendId) =>
  new Promise(res =>
    setTimeout(() => res(messages[friendId] || []), 300)
  );

export const sendMessage = (friendId, message) =>
  new Promise(res => {
    messages[friendId].push(message);
    setTimeout(() => res(true), 200);
  });
