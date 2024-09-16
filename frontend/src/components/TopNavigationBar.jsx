import React from 'react';

import '../styles/TopNavigationBar.scss'
import TopicList from './TopicList';
import FavBadge from './FavBadge';

const TopNavigation = ({topics, state, getPhotosByTopic, resetPhotosTopic, fetchFavPhotos}) => {
  return (
    <div className="top-nav-bar">
      <span onClick={() => resetPhotosTopic()} className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList topics={topics} getPhotosByTopic={getPhotosByTopic}/>
      <FavBadge isFavPhotoExist={state.photoFavorites.length > 0} fetchFavPhotos={fetchFavPhotos}/>
    </div>
  )
}

export default TopNavigation;