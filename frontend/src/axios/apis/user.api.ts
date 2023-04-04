import api from "../main";

export async function getAllUsers(page: number, limit: number) {
  const gql = {
    query: `query  {allUsers(page:${page}, limit:${limit}){items{id,name,userName}meta{totalItems,itemCount,totalPages}}}`,
  };
  const response = await api({ data: gql });
  if (response?.data?.errors?.length) {
    throw new Error(response.data.errors[0].message);
  }
  const res = response.data.data.allUsers;
  return res;
}

export async function getUser(id: string) {
  const gql = {
    query: `query  getUser(
      id:${id}
    ){
      id,
      name,
      bio,
      profile_pic,
      role,
      stories{id title content}
    }`,
  };
  const response = await api({ data: gql });
  console.log(response)
  if (response?.data?.errors?.length) {
    throw new Error(response.data.errors[0].message);
  }
  const res = response.data.data.getUser;
  return res;
}
