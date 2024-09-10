import React from "react";

import "../styles/PhotoListItem.scss";




const PhotoListItem = (props) => {
  return(
    <div className="photo-list__item" key={props.photo.id}>
      <img className="photo-list__image" src={props.photo.imageSource}></img><br />
      <img className="photo-list__user-profile"src={props.photo.profile}></img>
      <div className="photo-list__user-details">
        <h2 className="photo-list__user-info">{props.photo.username}</h2>
        <h2 className="photo-list__location">{props.photo.location.city}, {props.photo.location.country}</h2>
      </div>
    </div>
  );
};

export default PhotoListItem;
