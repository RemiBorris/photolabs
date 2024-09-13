import React from 'react';

import mockPhotos from 'mocks/photos';
import topics from 'mocks/topics';
import './App.scss';
import HomeRoute from 'routes/HomeRoute';

// Note: Rendering a single component to build components in isolation
const App = () => {
  return (
    <div className="App">
      <HomeRoute photosData={mockPhotos} topics={topics}/>
    </div>
  );
};

export default App;
