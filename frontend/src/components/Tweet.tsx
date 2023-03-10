import { Avatar } from "antd";
import { useNavigate } from "react-router-dom";

export default function Tweet({ data }: any) {
  const { title, user, content, created_at } = data;
  const date = new Date(created_at).toDateString();
  const nav = useNavigate();
  const onClick = () => nav(`/profile/${user.id}`);

  return (
    <div className="bg-sky-300 rounded-xl flex items-stretch space-x-4 p-4 md:w-5/6">
      {user && (
        <div>
          <Avatar className="cursor-pointer" onClick={onClick}>
            {user.userName[0]}
          </Avatar>
        </div>
      )}
      <div className="flex flex-col w-full text-base">
        <p
          className={" capitalize bg-transparent text-white  font-medium mb-1"}
        >
          {user ? user.userName : "You"}
        </p>
        <div className={"bg-gray-50 py-1 px-3 rounded-xl w-full font-medium pb-8 "}>
          <p>{title}</p>
          <p>{content}</p>
        </div>
        <p className="font-semibold text-white mt-4 self-end">{date}</p>
      </div>
    </div>
  );
}
