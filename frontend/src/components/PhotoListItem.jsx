import React from "react";

import "../styles/PhotoListItem.scss";




const PhotoListItem = (props) => {
  return(
    <div className="photo-list__item" key={props.photo.id}>
      <img className="photo-list__image" src={props.photo.imageSource}></img>
      <div className="photo-list__user-details">
        <img className="photo-list__user-profile"src={props.photo.profile}></img>
        <div className="photo-list__user-info">
          <span>{props.photo.username}</span>
          <div className="photo-list__user-location">{props.photo.location.city}, {props.photo.location.country}</div>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;
