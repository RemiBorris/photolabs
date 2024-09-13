import React, { useState } from 'react';

import mockPhotos from 'mocks/photos';
import topics from 'mocks/topics';
import './App.scss';
import HomeRoute from 'routes/HomeRoute';

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
