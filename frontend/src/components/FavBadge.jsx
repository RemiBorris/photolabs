import React from 'react';
import FavIcon from './FavIcon';

import '../styles/FavBadge.scss';

const FavBadge = ({photoFavorites, isFavPhotoExist }) => {
  return (
    <div className='fav-badge'>
      <FavIcon selected={photoFavorites.length > 0} displayAlert={!!isFavPhotoExist}/>
    </div>
  ) 
};

export default FavBadge;