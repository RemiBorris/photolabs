import React from "react";

import "../styles/TopicListItem.scss";

const TopicListItem = ({topic, getPhotosByTopic}) => {
  return (
    <div className="topic-list__item">
      <span onClick={() => getPhotosByTopic(topic.id)}>{topic.title}</span>
    </div>
  );
};

export default TopicListItem;
