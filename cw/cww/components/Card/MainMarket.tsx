import React from 'react';
import { View, ScrollView,} from 'react-native';
import SectionTitle from './SectionTitle';
import ProductList from './ProductList';
import MainBar from './MainBar';
import Search from './Search';

const Card = () => {
  return (
    <ScrollView>
      <Market />
    </ScrollView>
  );
};

const Market = () => {
  return (
    <View>
      <MainBar title='Market'></MainBar>
      <Search></Search>
      <SectionTitle title='Hot Deals'></SectionTitle>
      <ProductList></ProductList>
      <SectionTitle title='Trending'></SectionTitle>
      <ProductList></ProductList>
      <SectionTitle title='Deals'></SectionTitle>
      <ProductList></ProductList>
    </View>
    
  );
};
export default Card;
