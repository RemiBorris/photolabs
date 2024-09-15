import React from "react";

import TopicListItem from "./TopicListItem";
import "../styles/TopicList.scss";

const TopicList = ({topics, getPhotosByTopic}) => {

  const titles = topics.map(data => {
    return(
      <TopicListItem key={data.id} topic={data} getPhotosByTopic={getPhotosByTopic}/>
    )
  })

  return (
    <div className="top-nav-bar__topic-list">
      {titles}
    </div>
  );
};

export default TopicList;
