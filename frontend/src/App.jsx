import React, { useState } from 'react';

import mockPhotos from 'mocks/photos';
import topics from 'mocks/topics';
import './App.scss';
import HomeRoute from 'routes/HomeRoute';

// Note: Rendering a single component to build components in isolation

const App = () => {

  const [photoFavorites, setPhotoFavorites] = useState({});

  const toggleFavorites = (photo) => {
    setPhotoFavorites(current => {
      const updatedFavorites = { ...current };
      if (updatedFavorites[photo.id]) {
        delete updatedFavorites[photo.id]
      } else {
        updatedFavorites[photo.id] = photo;
      } 
      return updatedFavorites
    })
  }

  return (
    <div className="App">
      <HomeRoute
      photosData={mockPhotos}
      topics={topics}
      toggleFavorites={toggleFavorites}
      photoFavorites={photoFavorites}
      />
    </div>
  );
};

export default App;
