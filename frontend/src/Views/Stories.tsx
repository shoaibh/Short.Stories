import React, { useContext } from "react";
import { useQuery } from "react-query";
import { getAllTweets } from "../axios/apis/tweets.api";
import CreateTweet from "../components/CreateTweet";
import { Loading } from "../components/Loader";
import Tweet from "../components/Tweet";
import { RootContext } from "../context/RootContext";

export default function Stories() {
  const { User }: any = useContext(RootContext);
  const { isLoading, isError, data }: any = useQuery({
    queryKey: "Stories",
    queryFn: getAllTweets,
    onError(error) {
      console.log(error);
    },
    enabled: User ? true : false,
    retry: false,
  });
  console.log(data);
  return (
    <div className="px-5 py-3">
      <div className="pb-5 border-gray-50 border-b-4">
        <CreateTweet />
      </div>
      <div className="tweets_list my-3 space-y-2 ">
        {isLoading ? (
          <Loading />
        ) : (
          data?.data.map((item: any) => <Tweet key={item.id} data={item} />)
        )}
      </div>
    </div>
  );
}
