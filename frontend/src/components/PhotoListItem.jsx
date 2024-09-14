import React from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";


const PhotoListItem = (props) => {

  const tempModalDetails = {photoData: props.photoData}
  const onClickHanlder = () => {
    if (!props.modalRestrictor) {
      props.modalToggle(); 
      props.setModalPhotoDetails(props.photoData)
    }
  }
  
  return(
    <div className="photo-list__item">
      <PhotoFavButton
      photoID={props.photoID}
      toggleFavorites={props.toggleFavorites}
      photoFavorites={props.photoFavorites}
      />
      <img className="photo-list__image"
      src={props.imageSource}
      onClick={() => onClickHanlder()}></img>
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
