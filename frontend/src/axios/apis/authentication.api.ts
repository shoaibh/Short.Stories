import api from "../main";

export async function getLoggedUser() {
  const token = localStorage.getItem("token");
  api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  const res = await api.get("/auth");
  return res.data;
}

export async function loginApi(data: any) {
  const res: any = await api.post("/auth/signin", data);
  localStorage.setItem("token", res.data.jwttoken);
  return res.data;
}
export async function registerApi(data: any) {
  const res = await api.post("/auth/register", data);
  localStorage.setItem("token", res.data.jwttoken);
  return res.data;
}

