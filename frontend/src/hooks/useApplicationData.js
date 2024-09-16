import React, { useReducer, useEffect } from 'react';

// Create initial state for APP
const initialState = {
  modal: false,
  photoFavorites: [],
  modalPhotoDetails:{},
  photosData: [],
  topicsData: []
}


// Reducer functions to call with useReducer for all actions
const reducer = function(state, action) {
  switch (action.type) {
    // Dispatch to add photo to Favorites
    case 'FAV_PHOTO_ADDED':
      return { 
        ...state,
        photoFavorites: [...state.photoFavorites, action.id],
      }
    // Dispatch to remove photo from Favorites
    case 'FAV_PHOTO_REMOVED':
      return {
        ...state, 
        photoFavorites: state.photoFavorites.filter(photoID => photoID !== action.id),
      }
    // Dispatch to select photo to enlarge and show in modal with similar photos
    case 'SELECT_PHOTO':
      return {
        ...state,
        modal: true,
        modalPhotoDetails: action.photoDetails,
      }
    // Dispatch to close modal
    case 'CLOSE_MODAL':
      return {
        ...state,
        modalPhotoDetails: {},
        modal: false,
      }
    // Dispatch call to set photo data for the home page
    case 'SET_PHOTO_DATA':
      return {
        ...state,
        photosData: action.payload,
      }
    //Dispatch call to set Topic data for the home page
    case 'SET_TOPIC_DATA':
      return {
        ...state,
        topicsData: action.payload,
      }
    //Dispatch call to get photos data by Topic
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

  // Get Topics and Photos to load the page

  useEffect(() => { 
    const fetchPhotos = fetch('/api/photos');
    const fecthTopics = fetch('/api/topics');

    const promises = [fecthTopics, fetchPhotos]
    //Once both fetches complete, set data
    Promise.all(promises)
    .then((responses) => Promise.all(responses.map((response) => response.json())))
    .then((data) => {
      dispatch({ type: 'SET_TOPIC_DATA', payload: data[0] });
      dispatch({ type: 'SET_PHOTO_DATA', payload: data[1] });
    })
  }, [])


  // Function to check if photo is favorited or not already then calls the proper dispatch to update the inverse
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

  //Function to handle the closeout from the modal
  const onClosePhotoDetailsModal = () => {
    dispatch({type: 'CLOSE_MODAL'})
  }

  //Function to acvite the Modal 
  const setPhotoSelected = (photoDetails) => {
    dispatch({
      type: 'SELECT_PHOTO',
      photoDetails: photoDetails
    })
  }
  //Function which gets called when topic is pressed to show photos by Topic
  const getPhotosByTopic = (topic_id) => {
    fetch(`/api/topics/photos/${topic_id}`)
    .then(res => res.json())
    .then(data => dispatch({type:'GET_PHOTOS_BY_TOPICS', payload: data}))
  }

  //Function to reset homepage
  const resetPhotosTopic = () => {
    fetch('/api/photos')
    .then(res => res.json())
    .then(data => dispatch({type:'SET_PHOTO_DATA', payload: data}))
  }

  const fetchFavPhotos = () => {
    fetch('/api/photos')
    .then(res => res.json())
    .then(data => data.filter(photo => state.photoFavorites.includes(photo.id)))
    .then(data => dispatch({type:'SET_PHOTO_DATA', payload: data}))
  }

  return {
    state,
    setPhotoSelected,
    updateToFavPhotoIds,
    onClosePhotoDetailsModal,
    getPhotosByTopic,
    resetPhotosTopic,
    fetchFavPhotos,
  };
};

export default useApplicationData;