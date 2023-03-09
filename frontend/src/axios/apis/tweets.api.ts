import api from "../main";

export async function getAllTweets() {
  const res = await api.get("/story");
  return res;
}

export async function createNewTweet(data: { title: string; content: string }) {
  const res = await api.post("/story", data);
  return res;
}
