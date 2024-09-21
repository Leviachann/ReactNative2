import React from 'react';
import { Image, View, Text, ScrollView, TextInput } from 'react-native';
import { styles } from './style';
import Search from './Search';
import BigPost from './BigPost';
import MainBar from './MainBar';
const Card = () => {
  return (
    <ScrollView>
      <View> 
      <MainBar title='Feed'></MainBar>
      <Search></Search>
      <VerticalPost></VerticalPost>
      <VerticalPost></VerticalPost>
      <VerticalPost></VerticalPost>
      <VerticalPost></VerticalPost>
      <BigPost></BigPost>
    </View >
    </ScrollView>
    
  );
};
const VerticalPost= ()=>{
  return(
    <View 
    style={styles.container}
  >
      <View style={styles.imageContainer}>
          <Image />
      </View>
      <View>
        <View style={
          styles.topContainer}>
          <Text style={ styles.title}>Header</Text>
          <Text style={styles.time}>8m ago</Text>
        </View>
        <Text style={styles.content}>
          He'll want to use your yacht, and I don't 
          want this thing smelling like fish. 
        </Text>
      </View>
      
  </View>
  );
};

export default Card;
