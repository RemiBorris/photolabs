import React from "react";

import "../styles/PhotoListItem.scss";




const PhotoListItem = (props) => {
  return(
    <div key={props.id}>
      <img src={props.imageSource}></img><br />
      <img src={props.profile}></img>
      <h2>{props.username}</h2>
      <h2>{props.city}{props.country}</h2>
    </div>
  );
};

export default PhotoListItem;
