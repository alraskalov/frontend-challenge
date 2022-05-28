import React from 'react';
import CatsCard from '../CatsCard/CatsCard';
import CatsCardList from '../CatsCardList/CatsCardList';

const SavedCats = () => {
  return (
    <section className="saved-cats page__saved-cats">
      <CatsCardList>
        <CatsCard />
        <CatsCard />
        <CatsCard />
        <CatsCard />
        <CatsCard />
        <CatsCard />
        <CatsCard />
        <CatsCard />
        <CatsCard />
        <CatsCard />
        <CatsCard />
        <CatsCard />
        <CatsCard />
        <CatsCard />
        <CatsCard />
      </CatsCardList>
    </section>
  );
};

export default SavedCats;