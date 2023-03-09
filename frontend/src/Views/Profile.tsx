import { Avatar } from "antd";
import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import ava from "../assets/avatar.png";
import { getUser } from "../axios/apis/user.api";
import { Loading } from "../components/Loader";
import Tweet from "../components/Tweet";
import Styles from "../styles";

export default function Profile() {
  const { id }: any = useParams();

  const { data, isLoading } = useQuery({
    queryKey: ["user", id],
    queryFn: () => getUser(id),
    retry: false,
  });

  if (isLoading)
    return (
      <div className="flex  flex-col justify-center items-center h-full w-screen">
        <Loading />
      </div>
    );
  return (
    <div className="py-9 px-5">
      <div className="flex flex-col justify-center items-center">
        <Avatar
          className="h-20 w-20  text-3xl flex justify-center items-center object-contain"
          src={ava}
        >
          t
        </Avatar>
      </div>
      <div className={Styles.container}>
        {Object.keys(data).map((field) =>
          !["profile_pic", "stories"].includes(field) ? (
            <p key={field} className="capitalize text-lg font-semibold">
              {field}:{" "}
              <span className="ml-2">{data[field] ? data[field] : "..."}</span>
            </p>
          ) : null
        )}
      </div>
      <div className={Styles.container}>
        <p className="text-center font-bold ">Stoires</p>
        <div className=" flex flex-col space-y-3 mt-2 text-black text-xl">
          {data?.stories.map((story: any) => (
            <Tweet key={story.id} data={story} />
          ))}
        </div>
      </div>
    </div>
  );
}
