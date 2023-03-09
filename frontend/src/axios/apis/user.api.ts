import api from "../main";

export async function getUser(id: string) {
  const res:any = await api.get(`/user/${id}`);
  return res.data;
}

export async function getAllUsers() {
  const res:any = await api.get('/user');
  return res.data;
}
