import React from 'react';
import TabMenu from './TabMenu';
import ObjectListView from './ObjectListView';

const Home = () => {
  return (
    <>
      <h2
        style={{
          marginBottom: 20,
          fontWeight: 700,
          fontSize: 18,
        }}
      >
        웹 드라이브
      </h2>
      <TabMenu />
      <ObjectListView />
    </>
  );
};

export default Home;
