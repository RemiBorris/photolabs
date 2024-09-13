import React from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = (props) => {
  return(
    <div className="photo-list__item">
      <PhotoFavButton
      photoID={props.photoID}
      toggleFavorites={props.toggleFavorites}
      photoFavorites={props.photoFavorites}
      />
      <img className="photo-list__image" src={props.imageSource}></img>
      <div className="photo-list__user-details">
        <img className="photo-list__user-profile"src={props.profile}></img>
        <div className="photo-list__user-info">
          <span>{props.username}</span>
          <div className="photo-list__user-location">{props.location.city}, {props.location.country}</div>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;
