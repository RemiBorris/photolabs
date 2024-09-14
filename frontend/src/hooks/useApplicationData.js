import React, { useState } from 'react';

const useApplicationData = () => {

  //State to store fav photos by ID

  const [photoFavorites, setPhotoFavorites] = useState([]);

  const updateToFavPhotoIds = (id) => {
    setPhotoFavorites(current => {
      if (current.includes(id)) {
        return current.filter(photoID => photoID !== id);
      } else {
        return [...current, id];
      }
    })
  }

  //State to check if the modal needs to be rendered or not

  const [modal, setModal] = useState(false);

  const onClosePhotoDetailsModal = () => {
    setModal(false)
  }

  //State to set the photo details when modal is called of what to display

  const [modalPhotoDetails, setModalPhotoDetails] = useState();

  const setPhotoSelected = (photoDetails) => {
    setModal(true);
    setModalPhotoDetails(photoDetails)
  }

  const state = {
    photoFavorites,
    modal,
    modalPhotoDetails
  }


  return {
    state,
    setPhotoSelected,
    updateToFavPhotoIds,
    onClosePhotoDetailsModal,
  };
};

export default useApplicationData;