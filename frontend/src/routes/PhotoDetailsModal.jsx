import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from 'components/PhotoList';
import PhotoFavButton from 'components/PhotoFavButton';

const PhotoDetailsModal = ({onClosePhotoDetailsModal, state, updateToFavPhotoIds}) => {

  const modalDetail = (state.modalPhotoDetails);
  const modalRestrictor = true;

  return (
    <div className="photo-details-modal">
      <button onClick={() => {onClosePhotoDetailsModal()}} className="photo-details-modal__close-button">
        <img src={closeSymbol} alt="close symbol" />
      </button>
      <PhotoFavButton
      photoID={modalDetail.id}
      updateToFavPhotoIds={updateToFavPhotoIds}
      state={state}
      />
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
      <h2 className='photo-details-modal__header'>Similar Photos</h2>
      <div className='photo-details-modal__images'>
        <PhotoList 
        photosData={Object.values(state.modalPhotoDetails.similar_photos)}
        updateToFavPhotoIds={updateToFavPhotoIds}
        state={state}
        modalRestrictor={modalRestrictor}
        />
      </div>
    </div>
  )
};

export default PhotoDetailsModal;
