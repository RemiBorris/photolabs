import React from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton({photoID, updateToFavPhotoIds, state}) {
  
  const handleClick = () => {
    updateToFavPhotoIds(photoID)
  }

  return (
    <div onClick={handleClick} className="photo-list__fav-icon">
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={state.photoFavorites.includes(photoID)}/>
      </div>
    </div>
  );
}

export default PhotoFavButton;