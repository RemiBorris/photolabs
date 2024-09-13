import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {
  
  // const [isTrue, setIsTrue] = useState(false);
  
  const handleClick = () => {
    // setIsTrue(isTrue=> !isTrue);
    props.toggleFavorites(props.photoID)
  }

  return (
    <div onClick={handleClick} className="photo-list__fav-icon">
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={props.photoFavorites.includes(props.photoID)}/>
      </div>
    </div>
  );
}

export default PhotoFavButton;