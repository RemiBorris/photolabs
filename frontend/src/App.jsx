import React, { useState } from 'react';

import useApplicationData from 'hooks/useApplicationData';
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
    getPhotosByTopic,
  } = useApplicationData();

  return (
    <div className="App">
      {state.modal && <PhotoDetailsModal
      onClosePhotoDetailsModal={onClosePhotoDetailsModal}
      state={state}
      updateToFavPhotoIds={updateToFavPhotoIds}
      />}
      <HomeRoute
      updateToFavPhotoIds={updateToFavPhotoIds}
      state={state}
      setPhotoSelected={setPhotoSelected}
      getPhotosByTopic={getPhotosByTopic}
      />
    </div>
  );
};

export default App;
