import api from "../main";

export async function getUser(id: string) {
  const res:any = await api.get(`/user/${id}`);
  return res.data;
}

export async function getAllUsers(page:number,limit:number) {
  const res:any = await api.get(`/user/?page=${page}&limit=${limit}`);
  return res.data;
}
