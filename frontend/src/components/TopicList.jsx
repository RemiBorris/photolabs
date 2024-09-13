import React from "react";

import TopicListItem from "./TopicListItem";
import "../styles/TopicList.scss";

const TopicList = (props) => {

  const titles = props.topics.map(data => {
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
