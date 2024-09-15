import React, { useReducer } from 'react';

const useApplicationData = () => {

  const initialState = { modal: false, photoFavorites: [], modalPhotoDetails:{} }

   const ACTIONS = {
    FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
    FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
    SET_PHOTO_DATA: 'SET_PHOTO_DATA',
    CLOSE_MODAL: 'CLOSE_MODAL',
    // SET_TOPIC_DATA: 'SET_TOPIC_DATA',
    // SELECT_PHOTO: 'SELECT_PHOTO',
    // DISPLAY_PHOTO_DETAILS: 'DISPLAY_PHOTO_DETAILS'
  }

  const reducer = function(state, action) {
    switch (action.type) {
      case 'FAV_PHOTO_ADDED':
        return { 
          modal: state.modal,
          modalPhotoDetails: state.modalPhotoDetails,
          photoFavorites: [...state.photoFavorites, action.id],
        }
      case 'FAV_PHOTO_REMOVED':
        return {
          modal: state.modal,
          modalPhotoDetails: state.modalPhotoDetails,
          photoFavorites: state.photoFavorites.filter(photoID => photoID !== action.id),
        }
      case 'SET_PHOTO_DATA':
        return {
          photoFavorites: state.photoFavorites,
          modal: true,
          modalPhotoDetails: action.photoDetails,
        }
      case 'CLOSE_MODAL':
        return {
          photoFavorites: state.photoFavorites,
          modalPhotoDetails: {},
          modal: false,
        }
      default:
        throw new Error(
          `Tried to reduce with unsupported action type: ${action.type}`
        );
      }
    }

  const [state, dispatch] = useReducer(reducer, initialState)

  const updateToFavPhotoIds = (id) => {
    if (state.photoFavorites.includes(id)) {
      dispatch({
        type: 'FAV_PHOTO_REMOVED',
        id: id,
      });
    } else {
      dispatch({
        type: 'FAV_PHOTO_ADDED',
        id: id,
      });
    }
  }

  const onClosePhotoDetailsModal = () => {
    dispatch({type: 'CLOSE_MODAL'})
  }

  const setPhotoSelected = (photoDetails) => {
    dispatch({
      type: 'SET_PHOTO_DATA',
      photoDetails: photoDetails
    })
  }

  return {
    state,
    setPhotoSelected,
    updateToFavPhotoIds,
    onClosePhotoDetailsModal,
  };
};

export default useApplicationData;