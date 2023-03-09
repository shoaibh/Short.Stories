import { Avatar } from "antd";
import React from "react";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { getAllUsers } from "../axios/apis/user.api";
import { Loading } from "../components/Loader";
import Styles from "../styles";

export default function Dashboard() {
  const { data, isLoading } = useQuery({
    queryKey: "users",
    queryFn: getAllUsers,
  });
  console.log(data);
  if (isLoading)
    return (
      <div className="flex  flex-col justify-center items-center h-full w-screen">
        <Loading />
      </div>
    );
  return (
    <div className="text-base px-5 py-2">
      <p className={`${Styles.container} text-center text-xl`}>users</p>
      <div className="mb-8">
        {data.map((user: any) =>
          user.role === "admin" ? null : <UserCard data={user} />
        )}
      </div>
    </div>
  );
}

function UserCard({ data }: any) {
  const nav = useNavigate();
  const onClick = () => nav(`/profile/${data.id}`);
  return (
    <div
      className={`${Styles.container} flex space-x-10 items-center cursor-pointer shadow-black hover:shadow-xl `}
      onClick={onClick}
    >
      <div className="ml-14">
        <Avatar className=" h-16 w-16 flex justify-center items-center">
          {data.userName[0]}
        </Avatar>
      </div>
      <div>
        {Object.keys(data).map((field) =>
          !["profile_pic", "stories", "bio"].includes(field) ? (
            <p key={field} className="capitalize text-lg font-semibold">
              {field}:{" "}
              <span className="ml-2">{data[field] ? data[field] : "..."}</span>
            </p>
          ) : null
        )}
      </div>
    </div>
  );
}
