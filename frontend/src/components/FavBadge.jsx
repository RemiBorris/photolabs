import React from 'react';
import FavIcon from './FavIcon';

import '../styles/FavBadge.scss';

const FavBadge = ({ isFavPhotoExist, fetchFavPhotos }) => {
  return (
    <div className='fav-badge'>
      <FavIcon selected={!!isFavPhotoExist} displayAlert={!!isFavPhotoExist} fetchFavPhotos={fetchFavPhotos}/>
    </div>
  ) 
};

export default FavBadge;