import React, { useReducer, useEffect } from 'react';

const initialState = {
  modal: false,
  photoFavorites: [],
  modalPhotoDetails:{},
  photosData: [],
  topicsData: []
}

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
    case 'GET_PHOTOS_BY_TOPICS':
      return {
        ...state,
        photosData: action.payload,
      }
    default:
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
      );
    }
  }

const useApplicationData = () => {
  
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

  const getPhotosByTopic = (topic_id) => {
    fetch(`/api/topics/photos/${topic_id}`)
    .then(res => res.json())
    .then(data => dispatch({type:'GET_PHOTOS_BY_TOPICS', payload: data}))
  }

  return {
    state,
    setPhotoSelected,
    updateToFavPhotoIds,
    onClosePhotoDetailsModal,
    getPhotosByTopic,
  };
};

export default useApplicationData;