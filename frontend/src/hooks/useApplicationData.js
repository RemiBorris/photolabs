import React, { useReducer, useEffect } from 'react';

const initialState = {
  modal: false,
  photoFavorites: [],
  modalPhotoDetails:{},
  photosData: [],
  topicsData: []
}

const useApplicationData = () => {


  const reducer = function(state, action) {
    switch (action.type) {
      case 'FAV_PHOTO_ADDED':
        return { 
          ...state,
          photoFavorites: [...state.photoFavorites, action.id],
        }
      case 'FAV_PHOTO_REMOVED':
        return {
          ...state, 
          photoFavorites: state.photoFavorites.filter(photoID => photoID !== action.id),
        }
      case 'SELECT_PHOTO':
        return {
          ...state,
          modal: true,
          modalPhotoDetails: action.photoDetails,
        }
      case 'CLOSE_MODAL':
        return {
          ...state,
          modalPhotoDetails: {},
          modal: false,
        }
      case 'SET_PHOTO_DATA':
        return {
          ...state,
          photosData: action.payload,
        }
      case 'SET_TOPIC_DATA':
        return {
          ...state,
          topicsData: action.payload,
        }
      default:
        throw new Error(
          `Tried to reduce with unsupported action type: ${action.type}`
        );
      }
    }

  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    fetch('/api/photos')
    .then(res => res.json())
    .then(data => dispatch({type:'SET_PHOTO_DATA', payload: data}));
  }, [])

  useEffect(() => {
    fetch('/api/topics')
    .then(res => res.json())
    .then(data => dispatch({type:'SET_TOPIC_DATA', payload: data}))
  }, [])

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
      type: 'SELECT_PHOTO',
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