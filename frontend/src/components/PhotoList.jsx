import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

const PhotoList = ({photosData, updateToFavPhotoIds, state, setPhotoSelected, modalRestrictor}) => {

  const photos = photosData.map((photo) => {
    return(
      <li key={photo.id}>
        <PhotoListItem
        imageSource={photo.urls.full}
        profile={photo.user.profile}
        username={photo.user.username}
        location={photo.location}
        photoID={photo.id}
        photoData={photo}
        updateToFavPhotoIds={updateToFavPhotoIds}
        state={state}
        setPhotoSelected={setPhotoSelected}
        modalRestrictor={modalRestrictor}
        />
      </li>
    )
  })
  

  return (
    <ul className="photo-list">
      {photos}
    </ul>
  );
};

export default PhotoList;
