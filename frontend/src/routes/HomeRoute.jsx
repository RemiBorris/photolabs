import React from 'react';

import '../styles/HomeRoute.scss';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';

const HomeRoute = (props) => {
  return (
    <div className="home-route">
      <TopNavigation
      topics={props.topics}
      photoFavorites={props.photoFavorites}/>
      <PhotoList
      photosData={props.photosData}
      toggleFavorites={props.toggleFavorites}
      photoFavorites={props.photoFavorites}
      modalToggle={props.modalToggle}
      setModalPhotoDetails={props.setModalPhotoDetails}
      />
    </div>
  );
};

export default HomeRoute;
