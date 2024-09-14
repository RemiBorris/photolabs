import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from 'components/PhotoList';

const PhotoDetailsModal = (props) => {

  const modalDetail = (props.modalPhotoDetails);

  return (
    <div className="photo-details-modal">
      <button onClick={() => {props.modalToggle(); console.log(props)}} className="photo-details-modal__close-button">
        <img src={closeSymbol} alt="close symbol" />
      </button>
      <div className='photo-div'>
        <img className="photo-details-modal__image" src={modalDetail.urls.full}></img>
        <div className='photo-details-modal__photographer-details'>
          <img className='photo-details-modal__photographer-profile' src={modalDetail.user.profile}></img>
          <div className='photo-details-modal__photographer-info'>
            <span>{modalDetail.user.username}</span>
            <div className='photo-details-modal__photographer-location'>{modalDetail.location.city}, {modalDetail.location.country}</div>
          </div>
        </div>
      </div>
      <header className='photo-details-modal__header'>Similar Photos</header>
      <div className='photo-details-modal__images'>
        <PhotoList 
        photosData={Object.values(props.modalPhotoDetails.similar_photos)}
        toggleFavorites={props.toggleFavorites}
        photoFavorites={props.photoFavorites}
        modalToggle={props.modalToggle}
        />
      </div>
    </div>
  )
};

export default PhotoDetailsModal;
