import React from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";


const PhotoListItem = ({
  imageSource,
  profile,
  username,
  location,
  photoID,
  photoData,
  updateToFavPhotoIds,
  state,
  setPhotoSelected,
  modalRestrictor
}) => {

  const onClickHanlder = () => {
    if (!modalRestrictor) {
      setPhotoSelected(photoData)
    }
  }
  
  return(
    <div className="photo-list__item">
      <PhotoFavButton
      photoID={photoID}
      updateToFavPhotoIds={updateToFavPhotoIds}
      state={state}
      />
      <img className="photo-list__image"
      src={imageSource}
      onClick={() => onClickHanlder()}></img>
      <div className="photo-list__user-details">
        <img className="photo-list__user-profile"src={profile}></img>
        <div className="photo-list__user-info">
          <span>{username}</span>
          <div className="photo-list__user-location">{location.city}, {location.country}</div>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;
