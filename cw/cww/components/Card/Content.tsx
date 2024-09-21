import React from 'react';
import { View, ScrollView } from 'react-native';
import Search from './Search';
import BigPost from './BigPost';
import MainBar from './MainBar';

const Card = () => {
  return (
    <ScrollView>
      <View>
      <MainBar title='Content'></MainBar>
      <Search></Search>
      <BigPost></BigPost>
      <BigPost></BigPost>
      <BigPost></BigPost>
    </View >
    </ScrollView>
  );
};


export default Card;
