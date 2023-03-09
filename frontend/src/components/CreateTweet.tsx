import React, { useContext } from "react";
import { Avatar } from "antd";
import Styles from "../styles";
import { useForm } from "react-hook-form";
import { RootContext } from "../context/RootContext";
import { useMutation } from "react-query";
import { createNewTweet } from "../axios/apis/tweets.api";
import notify from "../utils/Notify";
import { Loading } from "./Loader";
export default function CreateTweet() {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();
  const { User }: any = useContext(RootContext);
  const createTweet = useMutation(createNewTweet, {
    onSuccess: () => {
      notify.success("new tweet created successfully");
    },
  });

  const onSubmit = (data: any) => {
    createTweet.mutate(data);
    reset();
  };
  // if(errors) notify.error("errors")
  return (
    <div className="bg-gray-200 rounded-lg flex items-stretch space-x-4 p-4 pb-8">
      <div>
        <Avatar>{User?.userName[0]}</Avatar>
      </div>
      {createTweet.isLoading ? (
        <Loading />
      ) : (
        <form
          className="space-y-3 flex flex-col w-full text-base"
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            type="text"
            placeholder="title"
            className={"bg-gray-100" + Styles.input_type_1}
            {...register("title", { required: true })}
          />
          <textarea
            placeholder="Write your story"
            className={
              "bg-gray-100 w-full resize-y h-20 max-h-28 " + Styles.input_type_1
            }
            {...register("content", { required: true })}
          />
          <button className="self-end bg-twitter rounded-xl px-3 py-1 text-white text-sm mr-4">
            submit
          </button>
        </form>
      )}
    </div>
  );
}
