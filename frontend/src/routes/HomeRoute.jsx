import React from 'react';

import '../styles/HomeRoute.scss';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';

const HomeRoute = ({ updateToFavPhotoIds, state, setPhotoSelected, getPhotosByTopic}) => {
  return (
    <div className="home-route">
      <TopNavigation
      topics={state.topicsData}
      state={state}
      getPhotosByTopic={getPhotosByTopic}
      />
      <PhotoList
      photosData={state.photosData}
      updateToFavPhotoIds={updateToFavPhotoIds}
      state={state}
      setPhotoSelected={setPhotoSelected}
      />
    </div>
  );
};

export default HomeRoute;
