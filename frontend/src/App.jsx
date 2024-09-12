import React from 'react';

import PhotoList from 'components/PhotoList';
import PhotoListItem from './components/PhotoListItem';
import './App.scss';
import PhotoFavButton from 'components/PhotoFavButton';
import TopicList from 'components/TopicList';
import TopNavigation from 'components/TopNavigationBar';

// const photos = new Array(3).fill(sampleDataForPhotoListItem).map((data, index) => <PhotoListItem photo={data} key={index}/>)

// Note: Rendering a single component to build components in isolation
const App = () => {
  return (
    <div className="App">
      <TopNavigation />
      {/* {photos} */}
      {/* <PhotoList /> */}
    </div>
  );
};

export default App;
