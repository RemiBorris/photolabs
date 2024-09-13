import React, { useState } from 'react';

import mockPhotos from 'mocks/photos';
import topics from 'mocks/topics';
import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';

// Note: Rendering a single component to build components in isolation

const App = () => {

  const [photoFavorites, setPhotoFavorites] = useState([]);

  const toggleFavorites = (id) => {
    setPhotoFavorites(current => {
      if (current.includes(id)) {
        return current.filter(photoID => photoID !== id);
      } else {
        return [...current, id];
      }
    })
  }

  const [modal, setModal] = useState(false);

  const modalToggle = () => {
    setModal(!modal)
  }

  const [modalPhotoDetails, setModalPhotoDetails] = useState();
  

  return (
    <div className="App">
      {modal && <PhotoDetailsModal modalToggle={modalToggle} modalPhotoDetails={modalPhotoDetails}/>}
      <HomeRoute
      photosData={mockPhotos}
      topics={topics}
      toggleFavorites={toggleFavorites}
      photoFavorites={photoFavorites}
      modalToggle={modalToggle}
      setModalPhotoDetails={setModalPhotoDetails}
      />
    </div>
  );
};

export default App;
