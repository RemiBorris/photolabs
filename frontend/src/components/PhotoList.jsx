import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

const PhotoList = (props) => {

  const photos = props.photosData.map((photo) => {
    return(
      <li key={photo.id}>
        <PhotoListItem
        imageSource={photo.urls.full}
        profile={photo.user.profile}
        username={photo.user.username}
        location={photo.location}
        photo={photo}
        toggleFavorites={props.toggleFavorites}
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
