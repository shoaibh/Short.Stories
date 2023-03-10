import { Pagination } from "antd";
import React, { useContext } from "react";
import { useQuery } from "react-query";
import { useNavigate, useSearchParams } from "react-router-dom";
import { getAllTweets } from "../axios/apis/tweets.api";
import CreateTweet from "../components/CreateTweet";
import { Loading } from "../components/Loader";
import Tweet from "../components/Tweet";
import { RootContext } from "../context/RootContext";
import notify from "../utils/Notify";

export default function Stories() {
  const { User }: any = useContext(RootContext);
  const nav = useNavigate();
  const searchParams = useSearchParams()[0];
  const page = parseInt(searchParams.get("page") ?? "1");
  const LIMIT = 5;
  const { isLoading, data, isError } = useQuery({
    queryKey: ["Stories", page],
    queryFn: () => getAllTweets(page, LIMIT),
    onError(error) {
      notify.error((error as Error).message);
    },
    enabled: User ? true : false,

    retry: false,
  });
  const response = data?.data;
  const onPageChange = (page: number, pageSize: number) => {
    nav(`/?page=${page}`);
  };
  return (
    <div className="px-5 py-3 ">
      <div className="pb-5 border-gray-50 border-b-4 flex flex-col items-center">
        <CreateTweet />
      </div>
      <div>
        {isLoading ? (
          <Loading />
        ) : (
          <div className="tweets_list my-3 space-y-4 flex flex-col  items-center">
            {response?.items.map((item: any) => (
              <Tweet key={item.id} data={item} />
            ))}
            <Pagination
              defaultCurrent={1}
              current={response?.meta.currentPage}
              pageSize={LIMIT}
              total={response?.meta.totalItems}
              onChange={onPageChange}
              disabled={page > response?.meta.totalPages}
            />
          </div>
        )}
      </div>
    </div>
  );
}
