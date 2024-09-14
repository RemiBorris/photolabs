import React from 'react';

import '../styles/HomeRoute.scss';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';

const HomeRoute = ({photosData, topics, updateToFavPhotoIds, state, setPhotoSelected}) => {
  return (
    <div className="home-route">
      <TopNavigation
      topics={topics}
      state={state}/>
      <PhotoList
      photosData={photosData}
      updateToFavPhotoIds={updateToFavPhotoIds}
      state={state}
      setPhotoSelected={setPhotoSelected}
      />
    </div>
  );
};

export default HomeRoute;
