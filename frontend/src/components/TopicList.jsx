import React from "react";

import topics from "mocks/topics";
import TopicListItem from "./TopicListItem";
import "../styles/TopicList.scss";

const TopicList = () => {

  const titles = topics.map(data => {
    return(
      <TopicListItem key={data.id} data={data}/>
    )
  })

  return (
    <div className="top-nav-bar__topic-list">
      {titles}
    </div>
  );
};

export default TopicList;
