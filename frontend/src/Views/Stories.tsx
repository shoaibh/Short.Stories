import React from "react";
import CreateTweet from "../components/CreateTweet";
import Tweet from "../components/Tweet";

export default function Stories() {
  return (
    <div className="px-5 py-3">
      <div className="pb-5 border-gray-50 border-b-4">
        <CreateTweet />
      </div>
      <div className="tweets_list my-3">
        {["1"].map((item, i) => (
          <Tweet key={i} />
        ))}
      </div>
    </div>
  );
}
