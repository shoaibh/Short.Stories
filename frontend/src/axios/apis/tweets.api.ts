import api from "../main";

export async function getAllTweets(page:number,limit:number) {
  const res = await api.get(`/story/?page=${page}&limit=${limit}`);
  return res;
}

export async function createNewTweet(data: { title: string; content: string }) {
  const res = await api.post("/story", data);
  return res;
}
