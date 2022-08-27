import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import CategoryCard from './CategoryCard';

const Categories = () => {
  return (
    <ScrollView
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
      horizontal
      showsHorizontalScrollIndicator={false}>
      {/* CategoryCards */}
      <CategoryCard
        imgUrl="https://links.papareact.com/gn7"
        title="Testing 3"
      />
      <CategoryCard
        imgUrl="https://links.papareact.com/gn7"
        title="Testing 2"
      />
      <CategoryCard
        imgUrl="https://links.papareact.com/gn7"
        title="Testing 1"
      />
      <CategoryCard
        imgUrl="https://links.papareact.com/gn7"
        title="Testing 233"
      />
      <CategoryCard
        imgUrl="https://links.papareact.com/gn7"
        title="Testing 1"
      />
      <CategoryCard
        imgUrl="https://links.papareact.com/gn7"
        title="Testing 76"
      />
      <CategoryCard
        imgUrl="https://links.papareact.com/gn7"
        title="Testing 21"
      />
      <CategoryCard
        imgUrl="https://links.papareact.com/gn7"
        title="Testing 66"
      />
      <CategoryCard
        imgUrl="https://links.papareact.com/gn7"
        title="Testing 33"
      />
      <CategoryCard
        imgUrl="https://links.papareact.com/gn7"
        title="Testing 54"
      />
    </ScrollView>
  );
};

export default Categories;
