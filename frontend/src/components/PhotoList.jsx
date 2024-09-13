import React from "react";

import photosData from "mocks/photos";
import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";
import photos from "mocks/photos";

const PhotoList = () => {

  const photos = photosData.map((photo) => {
    return(
      <li key={photo.id}>
        <PhotoListItem
        imageSource={photo.urls.full}
        profile={photo.user.profile}
        username={photo.user.username}
        location={photo.location}
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
