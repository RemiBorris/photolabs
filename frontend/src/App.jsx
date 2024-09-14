import React, { useState } from 'react';

import useApplicationData from 'hooks/useApplicationData';
import mockPhotos from 'mocks/photos';
import topics from 'mocks/topics';
import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';

// Note: Rendering a single component to build components in isolation

const App = () => {

  const {
    state,
    setPhotoSelected,
    updateToFavPhotoIds,
    onClosePhotoDetailsModal,
  } = useApplicationData();

  return (
    <div className="App">
      {state.modal && <PhotoDetailsModal
      onClosePhotoDetailsModal={onClosePhotoDetailsModal}
      state={state}
      updateToFavPhotoIds={updateToFavPhotoIds}
      />}
      <HomeRoute
      photosData={mockPhotos}
      topics={topics}
      updateToFavPhotoIds={updateToFavPhotoIds}
      state={state}
      setPhotoSelected={setPhotoSelected}
      />
    </div>
  );
};

export default App;
